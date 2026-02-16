// src/components/ui/Image.tsx
import { useState } from "react";

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  fallback?: string;
}

export default function Image({ src, alt, className, fallback }: ImageProps) {
  const [error, setError] = useState(false);

  return (
    <img
      src={error && fallback ? fallback : src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
      loading="lazy"
    />
  );
}
