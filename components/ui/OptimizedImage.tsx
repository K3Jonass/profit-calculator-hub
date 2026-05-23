import Image, { type ImageProps } from "next/image";

type OptimizedImageProps = Omit<ImageProps, "loading"> & {
  priority?: boolean;
  sizes?: string;
};

export default function OptimizedImage({
  priority = false,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  alt,
  ...props
}: OptimizedImageProps) {
  return (
    <Image
      {...props}
      alt={alt}
      sizes={sizes}
      priority={priority}
      loading={priority ? undefined : "lazy"}
    />
  );
}
