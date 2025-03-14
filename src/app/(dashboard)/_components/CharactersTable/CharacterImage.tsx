import Image from "next/image";

interface CharacterImageProps {
  src: string;
  alt: string;
}
export default function CharacterImage({ src, alt }: CharacterImageProps) {
  return (
    <div className="relative h-10 w-10 overflow-hidden rounded-full">
      <Image src={src} alt={alt} fill className="object-cover" sizes="40px" />
    </div>
  );
}
