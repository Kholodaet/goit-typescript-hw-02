import { ISearchBarProps } from "types";
import { forwardRef } from "react";
import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";

const SearchBar = forwardRef<HTMLElement, ISearchBarProps>(
  ({ onSubmit }, ref): React.ReactNode => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const form = e.target as HTMLFormElement;
      const formInput = form.elements.namedItem("search") as HTMLInputElement;
      const inputValue = formInput.value.trim();

      if (!inputValue) {
        toast.error("Search request cannot be empty");
        form.reset();
        return;
      }
      onSubmit(inputValue);
      form.reset();
    };

    return (
      <>
        <form className={css.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="search"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            className={css.input}
          />
          <button type="submit">Search</button>
        </form>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: { background: "#fff", color: "#1f1fc4" },
          }}
        />
      </>
    );
  }
);
export default SearchBar;
