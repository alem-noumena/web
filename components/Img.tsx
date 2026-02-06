import { withBasePath } from "@/lib/basePath";

interface ImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

export default function Img({ src, alt, ...props }: ImgProps) {
  const resolvedSrc = src.startsWith('/') ? withBasePath(src) : src;
  return <img src={resolvedSrc} alt={alt} {...props} />;
}
