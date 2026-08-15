import React, { useState } from "react";

/**
 * An <img> for assets that may not be committed yet: if the file 404s, the
 * whole figure removes itself rather than leaving a broken-image placeholder.
 * Drop the file at `src` and it appears on next load — no code change needed.
 *
 * Deliberately a plain <img>, not next/image: next/image throws at build time
 * on a missing static import, which is exactly the failure mode this avoids.
 */
const OptionalImage = ({ src, alt, className = "", wrapperClassName = "", caption }) => {
  const [failed, setFailed] = useState(false);
  if (failed) return null;

  return (
    <figure className={wrapperClassName}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={() => setFailed(true)}
        className={className}
      />
      {caption && (
        <figcaption className="label-muted mt-4">{caption}</figcaption>
      )}
    </figure>
  );
};

export default OptionalImage;
