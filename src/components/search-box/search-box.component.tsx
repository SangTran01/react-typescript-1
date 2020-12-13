import React from "react";
import "./search-box.style.scss";

interface IProps {
  placeholder: string;
  handleChange: React.ChangeEventHandler;
}

export const SearchBox: React.FC<IProps> = ({ placeholder, handleChange }) => {
  return (
    <div className="center">
      <input
        className="search"
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};
