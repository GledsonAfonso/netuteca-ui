import "@pages/home/components/styles.css";
import bookLogo from "@public/book.svg";
import Logo from "@shared/components/Logo/Logo";

export default function Home() {
  return (
    <>
      <Logo
        imageSourcePath={bookLogo}
        altText="Logo"
      />
      <div className="main-text">Feeling like reading something?</div>
    </>
  );
}