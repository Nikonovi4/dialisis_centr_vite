import { useRef, useState, useEffect } from "react";
import "./DropdownCenter.scss";

const DropdownCenter = ({ setWarehouse }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handelOpenDropdown = () => {
    setDropdownOpen((state) => !state);
  };

  const container = useRef();
  const handleClickOutside = (e) => {
    if (container.current && !container.current.contains(e.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handelClick = (e) => {
    if (e.target.outerText === "Все") {
      setWarehouse("");
      setDropdownOpen(false);
    } else {
      setWarehouse(e.target.outerText);
      setDropdownOpen(false);
    }
  };

  return (
    <div className="dropdowncentr" ref={container}>
      <button
        className="dropdowncentr__button"
        type="button"
        onClick={handelOpenDropdown}
      >
        Склад
      </button>
      {isDropdownOpen && (
        <ul className="dropdowncentr__list">
          <li className="dropdowncentr__item" onClick={handelClick}>
            Все
          </li>
          <li className="dropdowncentr__item" onClick={handelClick}>
            ЦС
          </li>
          <li className="dropdowncentr__item" onClick={handelClick}>
            Солнцево
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropdownCenter;
