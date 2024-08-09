import ReactModal from "react-modal";
import { IImageModalProps } from "types";
import css from "./ImageModal.module.css";

const ImageModal: React.FC<IImageModalProps> = ({
  image,
  isOpen,
  closeModal,
}): React.ReactElement => {
  ReactModal.setAppElement("#root");

  const handleContextMenu = (e: React.MouseEvent<HTMLDivElement>): void => {
    e.preventDefault();
    closeModal();
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      shouldCloseOnEsc={true}
      overlayClassName={css.Overlay}
      className={css.Modal}
      shouldCloseOnOverlayClick={true}
    >
      <div className={css.imgContainer}>
        {image && (
          <img src={image.urls.regular} alt="Selected" className={css.img} />
        )}
      </div>
    </ReactModal>
  );
};

export default ImageModal;
