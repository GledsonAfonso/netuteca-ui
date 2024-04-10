import IconButton from "@shared/components/Button/IconButton";
import bookIcon from "@public/book.svg";

export default function NavButton() {
  return (
    <IconButton
      imageSourcePath={bookIcon}
      pagePath="/books"
      altText="books"
      imageWidth={60}
      imageHeight={60}
    ></IconButton>
  );
}