import css from "./ErrorMessage.module.css";
const ErrorMessage: React.FC = (): React.ReactNode => {
  return (
    <p className={css.errorMessage}>
      Something went wrong... Try again in a moment, please
    </p>
  );
};
export default ErrorMessage;
