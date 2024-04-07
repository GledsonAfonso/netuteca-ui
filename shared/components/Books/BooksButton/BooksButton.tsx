import IconButton from "@/shared/components/Button/IconButton";
import bookIcon from "@/public/book.svg";

export default function BooksButton() {
  return (
    <IconButton
      imageSourcePath={bookIcon}
      pagePath="/books"
      altText="books"
      imageWidth={120}
      imageHeight={120}
    ></IconButton>
  );
}