import Head from "next/head";
import Link from "next/link";
import React from "react";
import TransitionEffect from "@/components/TransitionEffect";
import { Label } from "@/components/Section";

const NotFound = () => (
  <>
    <Head>
      <title>404 — Pritam Kumar Panda</title>
      <meta name="description" content="This page could not be found." />
    </Head>

    <TransitionEffect />

    <main className="relative flex min-h-[80vh] w-full items-center overflow-hidden px-12 py-32 lg:px-8 sm:px-6">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid"
        style={{
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse at 30% 50%, black 0%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 30% 50%, black 0%, transparent 70%)",
        }}
      />
      <div className="relative">
        <Label className="mb-8">Error 404</Label>
        <h1 className="font-mono text-[clamp(64px,14vw,180px)] font-light leading-none tracking-[-0.05em]">
          404
        </h1>
        <p className="mt-8 max-w-lg font-serif text-3xl italic leading-tight text-dim sm:text-2xl">
          This conformation doesn&apos;t exist.
        </p>
        <p className="mt-6 max-w-lg text-base font-light leading-relaxed text-muted">
          The page you were looking for has moved, been renamed, or never
          existed in the first place.
        </p>
        <div className="mt-12">
          <Link href="/" className="btn">
            Back to home
          </Link>
        </div>
      </div>
    </main>
  </>
);

export default NotFound;
