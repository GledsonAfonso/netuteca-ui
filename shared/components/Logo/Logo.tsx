import Image from "next/image";

type LogoParams = {
  imageSourcePath: string;
  altText: string;
  imageWidth?: number;
  imageHeight?: number;
};

export default function Logo({
  imageSourcePath,
  altText,
  imageWidth = 1,
  imageHeight = 1,
}: LogoParams) {
  return (
    <div className="image-container">
      <Image src={imageSourcePath} alt={altText} width={imageWidth} height={imageHeight}></Image>
    </div>
  );
}
