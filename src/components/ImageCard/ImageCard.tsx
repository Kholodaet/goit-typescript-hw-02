import { IImageCardProps } from "types";
import css from "./ImageCard.module.css";

const ImageCard: React.FC<IImageCardProps> = ({
  image,
  onClick,
}): React.ReactNode => {
  const handleClick: VoidFunction = () => {
    onClick(image);
  };

  return (
    <div>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className={css.imageContainer}
        onClick={handleClick}
      />
    </div>
  );
};

export default ImageCard;