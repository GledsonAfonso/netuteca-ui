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
    <a href={pagePath}>
      <button className={`${styles.button} round`}>
          <Image src={imageSourcePath} alt={altText} width={imageWidth} height={imageHeight}></Image>
      </button>
    </a>
  );
}