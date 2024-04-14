import Image from "next/image";
import backgroundImage from "@public/dog-reading-3.jpg"
import "@pages/home/components/styles.css"

export default function Home() {
  return (
    <>
      <div className="image-container">
        <Image src={backgroundImage} alt="home page background" width={5957} height={3493}></Image>
        <div className="main-text">Feeling like reading something?</div>
      </div>
    </>
  );
}