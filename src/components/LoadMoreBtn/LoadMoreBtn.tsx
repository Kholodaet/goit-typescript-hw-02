import { ILoadMoreProps } from "types";
import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn: React.FC<ILoadMoreProps> = ({
  onClick,
}): React.ReactNode => {
  const handleClick: VoidFunction = () => {
    onClick();
  };
  return (
    <button onClick={handleClick} className={css.loadBtn}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
