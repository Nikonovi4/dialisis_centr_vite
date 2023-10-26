import "./AipLine.scss";

const AipLine = ({ data, setAipInfo }) => {
  const openRepairHistory = () => {
    setAipInfo(data);
  };

  const numberHall = (place) => {
    if (place <= 4) {
      return `Зал 1 место ${place}`;
    } else if (place <= 6) {
      return `Зал 2 место ${place - 4}`;
    } else {
      return "В резерве";
    }
  };

  return (
    <li className="line">
      <div className="line__cell">
        <button
          className="line__open-button"
          type="button"
          onClick={openRepairHistory}
        >
          {data.internalNumber}
        </button>
      </div>
      <div className="line__cell">{numberHall(data.place)}</div>
      <div className="line__cell">{data.condition}</div>
      <div className="line__cell">{data.responsible}</div>
    </li>
  );
};

export default AipLine;
