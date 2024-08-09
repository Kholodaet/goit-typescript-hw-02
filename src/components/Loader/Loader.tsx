import { Rings } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader: React.FC = (): React.ReactNode => {
  return (
    <div className={css.loaderContainer}>
      <Rings
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="rings-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
