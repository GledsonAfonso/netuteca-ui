import Image from "next/image";

type LogoParams = {
  imageSourcePath: string;
  altText: string;
  imageWidth?: number;
  imageHeight?: number;
  className?: string;
};

export default function Logo({
  imageSourcePath,
  altText,
  imageWidth = 1,
  imageHeight = 1,
  className = "image-container",
}: LogoParams) {
  return (
    <div className={className}>
      <Image src={imageSourcePath} alt={altText} width={imageWidth} height={imageHeight}></Image>
    </div>
  );
}
