import NavButton from "@pages/main/components/NavButton";
import Logo from "@shared/components/Logo/Logo";
import logo from "@public/logo.svg";
import "@pages/main/components/styles.css"

export default function Main() {
  return (
    <>
      <div className="container">
        <Logo
          imageSourcePath={logo}
          altText="logo"
          imageWidth={300}
          imageHeight={300}
        ></Logo>
      </div>

      <div className="center container">
        <NavButton></NavButton>
        <div className="box"></div>
        <NavButton></NavButton>
        <div className="box"></div>
        <NavButton></NavButton>
      </div>
    </>
  );
}