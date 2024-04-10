import Image from "next/image";
import styles from "./styles.module.css";

type ButtonProps = {
  imageSourcePath: string;
  pagePath: string;
  altText: string;
  imageWidth: number;
  imageHeight: number;
};

export default function IconButton(props: ButtonProps) {
  const {
    imageSourcePath,
    pagePath,
    altText,
    imageWidth,
    imageHeight,
  } = props;

  return (
    <button className={`${styles.button} round`}>
      <a href={pagePath}>
        <Image src={imageSourcePath} alt={altText} width={imageWidth} height={imageHeight}></Image>
      </a>
    </button>
  );
}