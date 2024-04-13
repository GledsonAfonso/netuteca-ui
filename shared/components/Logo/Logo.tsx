import Image from "next/image";

type LogoParams = {
  imageSourcePath: string;
  altText: string;
  imageWidth: number;
  imageHeight: number;
};

export default function Logo({
  imageSourcePath,
  altText,
  imageWidth,
  imageHeight,
}: LogoParams) {
  return (
    <div>
      <Image src={imageSourcePath} alt={altText} width={imageWidth} height={imageHeight}></Image>
    </div>
  );
}
