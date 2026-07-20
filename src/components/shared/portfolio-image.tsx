import { cn } from "@/lib/utils";
import { withBasePath } from "@/lib/paths";

type PortfolioImageProps = {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
};

export function PortfolioImage({
  src,
  alt,
  className,
  width,
  height,
  fill,
  priority,
}: PortfolioImageProps) {
  const resolved = withBasePath(src);

  if (fill) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={resolved}
        alt={alt}
        className={cn("absolute inset-0 h-full w-full", className)}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
      />
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={resolved}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
    />
  );
}
