import React, { useEffect, useRef, useState } from "react";

const ACCENT = "#c8ff00";
const N = 80;

/**
 * Particle field that cycles through scenes drawn from the actual work:
 * virtual screening, docking, structure prediction, free-energy convergence,
 * MD trajectories, and pipeline DAGs.
 *
 * Each scene supplies target positions for the N particles plus an `overlay`
 * that draws axes/edges/labels on top. The engine morphs scatter → targets →
 * hold → scatter on a fixed phase clock.
 */
const HeroCanvas = () => {
  const canvasRef = useRef(null);
  const [labels, setLabels] = useState({ main: "NOISE", sub: "2.5B COMPOUNDS" });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduced = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    )?.matches;

    const ctx = canvas.getContext("2d");
    let W = 0;
    let H = 0;
    let raf;

    const particles = [];
    let targets = [];

    const lerp = (a, b, t) => a + (b - a) * t;
    const ease = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);
    const rand = (i, salt) =>
      Math.sin(i * 9301 + salt * 49297) * 0.5 + 0.5;

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    }

    const scatter = () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 1.2,
      vy: (Math.random() - 0.5) * 1.2,
    });

    function initParticles() {
      particles.length = 0;
      for (let i = 0; i < N; i++) {
        const s = scatter();
        particles.push({
          x: s.x,
          y: s.y,
          vx: s.vx,
          vy: s.vy,
          sx: s.x,
          sy: s.y,
          size: Math.random() * 1.6 + 0.7,
          alpha: Math.random() * 0.35 + 0.25,
          wave: Math.random() * Math.PI * 2,
        });
      }
    }

    // helper: dashed/solid rule
    function line(x1, y1, x2, y2, alpha, dash) {
      ctx.globalAlpha = alpha;
      ctx.strokeStyle = ACCENT;
      if (dash) ctx.setLineDash(dash);
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    function tag(text, x, y, alpha, size = 6, align = "center") {
      ctx.globalAlpha = alpha;
      ctx.fillStyle = ACCENT;
      ctx.font = `${size}px 'JetBrains Mono', monospace`;
      ctx.textAlign = align;
      ctx.textBaseline = "middle";
      ctx.fillText(text, x, y);
    }

    const SCENES = [
      // 0 — Virtual screening funnel
      {
        l0: "CHEMICAL SPACE",
        s0: "2.5B SMALL MOLECULES",
        l1: "TRIAGING…",
        s1: "ACTIVE-LEARNING DOCKING",
        l2: "HITS",
        s2: "VIRTUAL SCREENING FUNNEL",
        build(W, H) {
          const t = [];
          const tiers = [
            { y: 0.16, n: 34, w: 0.88 },
            { y: 0.4, n: 24, w: 0.58 },
            { y: 0.63, n: 15, w: 0.3 },
            { y: 0.84, n: 7, w: 0.12 },
          ];
          tiers.forEach((tier, ti) => {
            for (let i = 0; i < tier.n; i++) {
              const f = tier.n === 1 ? 0.5 : i / (tier.n - 1);
              t.push({
                x: W * (0.5 - tier.w / 2 + f * tier.w),
                y: H * tier.y + (rand(i, ti) - 0.5) * H * 0.05,
                hit: ti === 3,
                sig: ti === 3,
              });
            }
          });
          while (t.length < N)
            t.push({ x: W * 0.5, y: H * 0.84, hit: true, sig: true });
          return t.slice(0, N);
        },
        overlay(blend) {
          if (blend < 0.08) return;
          ctx.lineWidth = 0.6;
          // funnel walls
          [-1, 1].forEach((s) => {
            ctx.globalAlpha = blend * 0.16;
            ctx.strokeStyle = ACCENT;
            ctx.beginPath();
            ctx.moveTo(W * (0.5 + s * 0.46), H * 0.12);
            ctx.lineTo(W * (0.5 + s * 0.07), H * 0.88);
            ctx.stroke();
          });
          if (blend > 0.45) {
            const a = (blend - 0.45) / 0.55;
            const rows = [
              ["2.5B", 0.16],
              ["1.2M", 0.4],
              ["40K", 0.63],
              ["120", 0.84],
            ];
            rows.forEach(([n, y]) =>
              tag(n, W * 0.06, H * y, a * 0.34, 6.5, "left")
            );
            tag("ADMET · QSAR · FEP", W * 0.5, H * 0.96, a * 0.2, 5.5);
          }
          ctx.globalAlpha = 1;
          ctx.lineWidth = 1;
        },
      },

      // 1 — Docking pose in a binding pocket
      {
        l0: "UNBOUND",
        s0: "LIGAND + RECEPTOR",
        l1: "DOCKING…",
        s1: "POSE SEARCH & SCORING",
        l2: "BOUND",
        s2: "PROTEIN–LIGAND COMPLEX",
        build(W, H) {
          const t = [];
          const cx = W * 0.5;
          const cy = H * 0.52;
          const R = Math.min(W, H) * 0.34;
          // pocket wall — an open arc, not a closed ring
          const wall = 54;
          for (let i = 0; i < wall; i++) {
            const a = Math.PI * 0.32 + (i / wall) * Math.PI * 1.36;
            const r = R * (1 + (rand(i, 1) - 0.5) * 0.12);
            t.push({ x: cx + Math.cos(a) * r, y: cy + Math.sin(a) * r });
          }
          // ligand — a small fused-ring blob seated in the pocket
          for (let i = 0; i < N - wall; i++) {
            const a = (i / (N - wall)) * Math.PI * 2;
            const r = Math.min(W, H) * (0.05 + rand(i, 2) * 0.05);
            t.push({
              x: cx + Math.cos(a) * r,
              y: cy + Math.sin(a) * r * 0.8,
              lig: true,
              sig: true,
            });
          }
          return t;
        },
        overlay(blend, tgts) {
          if (blend < 0.08) return;
          const cx = W * 0.5;
          const cy = H * 0.52;
          ctx.lineWidth = 0.6;
          // H-bonds from pocket wall to ligand
          for (let i = 0; i < 54; i += 9) {
            const j = 54 + (i % (N - 54));
            if (!particles[i] || !particles[j] || !tgts[i] || !tgts[j]) continue;
            const ax = lerp(particles[i].x, tgts[i].x, blend);
            const ay = lerp(particles[i].y, tgts[i].y, blend);
            const bx = lerp(particles[j].x, tgts[j].x, blend);
            const by = lerp(particles[j].y, tgts[j].y, blend);
            line(ax, ay, bx, by, blend * 0.16, [2, 3]);
          }
          if (blend > 0.5) {
            const a = (blend - 0.5) * 2;
            tag("BINDING POCKET", cx, H * 0.1, a * 0.3, 6.5);
            tag("ΔG = −9.4 kcal/mol", cx, H * 0.93, a * 0.32, 6.5);
            ctx.globalAlpha = a * 0.12;
            ctx.strokeStyle = ACCENT;
            ctx.beginPath();
            ctx.arc(cx, cy, Math.min(W, H) * 0.13, 0, Math.PI * 2);
            ctx.stroke();
          }
          ctx.globalAlpha = 1;
          ctx.lineWidth = 1;
        },
      },

      // 2 — Predicted structure + contact map
      {
        l0: "SEQUENCE",
        s0: "UNFOLDED CHAIN",
        l1: "PREDICTING…",
        s1: "ALPHAFOLD / BOLTZ INFERENCE",
        l2: "FOLDED",
        s2: "PREDICTED STRUCTURE",
        build(W, H) {
          const t = [];
          // a helix-turn-helix backbone traced left to right
          for (let i = 0; i < N; i++) {
            const f = i / (N - 1);
            const amp = H * 0.16 * Math.sin(f * Math.PI);
            t.push({
              x: W * (0.08 + f * 0.84),
              y:
                H * 0.5 +
                Math.sin(f * Math.PI * 6) * amp +
                Math.cos(f * Math.PI * 2.3) * H * 0.06,
              plddt: 0.45 + 0.55 * Math.sin(f * Math.PI),
              idx: i,
            });
          }
          return t;
        },
        overlay(blend, tgts) {
          if (blend < 0.08) return;
          ctx.lineWidth = 0.8;
          // backbone trace
          ctx.globalAlpha = blend * 0.3;
          ctx.strokeStyle = ACCENT;
          ctx.beginPath();
          tgts.forEach((tgt, i) => {
            if (!particles[i]) return;
            const x = lerp(particles[i].x, tgt.x, blend);
            const y = lerp(particles[i].y, tgt.y, blend);
            i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
          });
          ctx.stroke();
          if (blend > 0.45) {
            const a = (blend - 0.45) / 0.55;
            // pLDDT strip along the bottom
            const y = H * 0.92;
            tgts.forEach((tgt, i) => {
              const x = W * (0.08 + (i / (N - 1)) * 0.84);
              ctx.globalAlpha = a * 0.35 * tgt.plddt;
              ctx.fillStyle = ACCENT;
              ctx.fillRect(x - 1.5, y, 3, 5);
            });
            tag("pLDDT", W * 0.06, y + 2, a * 0.3, 5.5, "right");
            tag("N-term", W * 0.06, H * 0.5, a * 0.26, 5.5, "right");
            tag("C-term", W * 0.95, H * 0.5, a * 0.26, 5.5, "left");
          }
          ctx.globalAlpha = 1;
          ctx.lineWidth = 1;
        },
      },

      // 3 — Free-energy convergence
      {
        l0: "λ WINDOWS",
        s0: "UNCONVERGED SAMPLING",
        l1: "INTEGRATING…",
        s1: "ALCHEMICAL FREE ENERGY",
        l2: "CONVERGED",
        s2: "FEP / ΔΔG PREDICTION",
        build(W, H) {
          const t = [];
          for (let i = 0; i < N; i++) {
            const f = i / (N - 1);
            // decaying oscillation settling onto a plateau
            const noise = Math.sin(f * 34) * Math.exp(-f * 4.2) * H * 0.26;
            t.push({
              x: W * (0.08 + f * 0.86),
              y: H * (0.72 - 0.42 * (1 - Math.exp(-f * 3.4))) + noise,
              conv: f > 0.62,
              sig: f > 0.86,
            });
          }
          return t;
        },
        overlay(blend) {
          if (blend < 0.08) return;
          ctx.lineWidth = 0.5;
          line(W * 0.08, H * 0.86, W * 0.96, H * 0.86, blend * 0.18);
          line(W * 0.08, H * 0.06, W * 0.08, H * 0.86, blend * 0.18);
          // converged band
          ctx.globalAlpha = blend * 0.07;
          ctx.fillStyle = ACCENT;
          ctx.fillRect(W * 0.6, H * 0.24, W * 0.36, H * 0.1);
          line(W * 0.08, H * 0.29, W * 0.96, H * 0.29, blend * 0.14, [3, 4]);
          if (blend > 0.45) {
            const a = (blend - 0.45) / 0.55;
            tag("ΔΔG", W * 0.045, H * 0.45, a * 0.3, 6, "center");
            tag("λ →", W * 0.52, H * 0.95, a * 0.28, 6);
            tag("±0.4 kcal/mol", W * 0.94, H * 0.2, a * 0.3, 5.5, "right");
          }
          ctx.globalAlpha = 1;
          ctx.lineWidth = 1;
        },
      },

      // 4 — Reproducible pipeline DAG
      {
        l0: "AD-HOC SCRIPTS",
        s0: "UNVERSIONED ANALYSIS",
        l1: "CONTAINERIZING…",
        s1: "NEXTFLOW / SLURM",
        l2: "REPRODUCIBLE",
        s2: "PIPELINE ARCHITECTURE",
        steps: [
          { id: "FASTQ", x: 0.07, y: 0.5 },
          { id: "QC", x: 0.22, y: 0.5 },
          { id: "ALIGN", x: 0.38, y: 0.28 },
          { id: "DOCK", x: 0.38, y: 0.72 },
          { id: "MD", x: 0.56, y: 0.72 },
          { id: "CALL", x: 0.56, y: 0.28 },
          { id: "MERGE", x: 0.73, y: 0.5 },
          { id: "REPORT", x: 0.92, y: 0.5 },
        ],
        edges: [
          [0, 1],
          [1, 2],
          [1, 3],
          [2, 5],
          [3, 4],
          [5, 6],
          [4, 6],
          [6, 7],
        ],
        build(W, H) {
          const t = [];
          const per = Math.floor(N / this.steps.length);
          this.steps.forEach((s, si) => {
            for (let i = 0; i < per; i++) {
              const a = (i / per) * Math.PI * 2;
              const r = (rand(si * 13 + i, 7) * 0.035 + 0.006) * Math.min(W, H);
              t.push({
                x: s.x * W + Math.cos(a) * r,
                y: s.y * H + Math.sin(a) * r,
              });
            }
          });
          while (t.length < N) {
            const s = this.steps[t.length % this.steps.length];
            t.push({ x: s.x * W, y: s.y * H });
          }
          return t.slice(0, N);
        },
        overlay(blend) {
          if (blend < 0.08) return;
          const { steps, edges } = this;
          ctx.lineWidth = 0.7;
          edges.forEach(([a, b]) => {
            const sa = steps[a];
            const sb = steps[b];
            ctx.globalAlpha = blend * 0.2;
            ctx.strokeStyle = ACCENT;
            ctx.beginPath();
            ctx.moveTo(sa.x * W, sa.y * H);
            ctx.bezierCurveTo(
              ((sa.x + sb.x) / 2) * W,
              sa.y * H,
              ((sa.x + sb.x) / 2) * W,
              sb.y * H,
              sb.x * W,
              sb.y * H
            );
            ctx.stroke();
          });
          if (blend > 0.25) {
            const a = (blend - 0.25) / 0.75;
            ctx.globalAlpha = a * 0.16;
            ctx.strokeStyle = ACCENT;
            ctx.lineWidth = 0.5;
            steps.forEach((s) =>
              ctx.strokeRect(s.x * W - 16, s.y * H - 8, 32, 16)
            );
          }
          if (blend > 0.45) {
            const a = (blend - 0.45) / 0.55;
            steps.forEach((s) => tag(s.id, s.x * W, s.y * H, a * 0.4, 6));
            tag("Docker · Nextflow · SLURM", W * 0.5, H * 0.95, a * 0.2, 5.5);
          }
          ctx.globalAlpha = 1;
          ctx.lineWidth = 1;
        },
      },
    ];

    const DURATIONS = [2800, 1600, 2600, 1000];
    let phase = 0;
    let phaseMs = 0;
    let last = 0;
    let sceneIdx = 0;
    let current = { main: "", sub: "" };

    const buildTargets = () => {
      targets = SCENES[sceneIdx].build(W, H);
    };

    function applyLabels(main, sub) {
      if (current.main === main && current.sub === sub) return;
      current = { main, sub };
      setLabels({ main, sub });
    }

    function tick(now) {
      const dt = Math.min(now - last, 50);
      last = now;
      phaseMs += dt;

      if (phaseMs >= DURATIONS[phase]) {
        phaseMs = 0;
        phase = (phase + 1) % 4;
        if (phase === 0) {
          sceneIdx = (sceneIdx + 1) % SCENES.length;
          buildTargets();
          particles.forEach((p) => {
            const s = scatter();
            p.sx = s.x;
            p.sy = s.y;
            p.vx = s.vx;
            p.vy = s.vy;
          });
        }
      }

      const t = ease(Math.min(phaseMs / DURATIONS[phase], 1));
      const sc = SCENES[sceneIdx];
      const blend = phase === 1 ? t : phase === 2 ? 1 : phase === 3 ? 1 - t : 0;

      if (phase === 0 || phase === 3) applyLabels(sc.l0, sc.s0);
      else if (phase === 1) applyLabels(sc.l1, sc.s1);
      else applyLabels(sc.l2, sc.s2);

      ctx.clearRect(0, 0, W, H);

      particles.forEach((p, i) => {
        const g = targets[i] || { x: W / 2, y: H / 2 };
        let dx;
        let dy;
        let alpha;
        let size;

        if (phase === 0) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > W) p.vx *= -1;
          if (p.y < 0 || p.y > H) p.vy *= -1;
          dx = p.x;
          dy = p.y;
          alpha = p.alpha * (0.5 + 0.3 * Math.sin(now / 600 + p.wave));
          size = p.size * (0.7 + 0.4 * Math.sin(now / 400 + p.wave));
        } else if (phase === 1) {
          dx = lerp(p.x, g.x, t);
          dy = lerp(p.y, g.y, t);
          alpha = lerp(p.alpha * 0.6, 0.75, t);
          size = lerp(p.size, 2, t);
        } else if (phase === 2) {
          dx = g.x;
          dy = g.y;
          alpha = 0.75 * (0.92 + 0.08 * Math.sin(now / 900 + p.wave));
          size = 2;
        } else {
          dx = lerp(g.x, p.sx, t);
          dy = lerp(g.y, p.sy, t);
          alpha = lerp(0.75, p.alpha * 0.6, t);
          size = lerp(2, p.size, t);
          p.x = dx;
          p.y = dy;
        }

        const boost = g.sig ? 1.7 : 1;
        ctx.beginPath();
        ctx.arc(dx, dy, Math.max(size * boost, 0.5), 0, Math.PI * 2);
        ctx.fillStyle = ACCENT;
        ctx.globalAlpha = Math.min(alpha * (g.sig ? 1.4 : 1), 1);
        ctx.fill();
      });

      sc.overlay(blend, targets);
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(tick);
    }

    resize();
    initParticles();
    buildTargets();

    // Reduced motion: render the resolved first scene once, no loop.
    if (reduced) {
      targets = SCENES[0].build(W, H);
      ctx.clearRect(0, 0, W, H);
      targets.forEach((g) => {
        ctx.beginPath();
        ctx.arc(g.x, g.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = ACCENT;
        ctx.globalAlpha = 0.75;
        ctx.fill();
      });
      SCENES[0].overlay(1, targets);
      applyLabels(SCENES[0].l2, SCENES[0].s2);
      return () => {};
    }

    const onResize = () => {
      resize();
      initParticles();
      buildTargets();
    };
    window.addEventListener("resize", onResize);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="relative h-full w-full">
      <canvas ref={canvasRef} className="h-full w-full" aria-hidden />
      <div className="pointer-events-none absolute bottom-0 left-0">
        <p className="font-mono text-xs uppercase tracking-label text-accent transition-opacity duration-200">
          {labels.main}
        </p>
        <p className="mt-1 font-mono text-[10px] uppercase tracking-label text-muted transition-opacity duration-200">
          {labels.sub}
        </p>
      </div>
    </div>
  );
};

export default HeroCanvas;
