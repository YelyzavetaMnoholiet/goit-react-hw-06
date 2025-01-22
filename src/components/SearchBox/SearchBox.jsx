import s from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => {
  return (
    <div className={s.searchBox}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search by name"
      />
    </div>
  );
};

export default SearchBox;
