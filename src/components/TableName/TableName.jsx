/* eslint-disable react/prop-types */

const TableName = ({ el, setChartObject, listWithoutButton }) => {
  const openChart = () => {
    setChartObject(el);
  };

  return (
    <li className="table__name">
      {Object.keys(el)}
      <button
        className={
          !listWithoutButton.includes(el)
            ? "table__button"
            : "table__button_invisible"
        }
        onClick={openChart}
      >
        График
      </button>
    </li>
  );
};

export default TableName;
