import './RepairList.scss'
import { userInfo } from "../../utils/constants/userInfo";

const RepairList = ({ data, setEditedRepairItem, setOpenEditForm }) => {

  const handleEditRepairItem = () => {
    setEditedRepairItem(data)
    setOpenEditForm((state)=> !state)
  };

  return (
    <li className="repair-list">
      <div className="repair-list__info">
        <div className="repair-list__title">{data.title}</div>
        <div className="repair-list__date">{data.date}</div>
        <div className="repair-list__responsible">{data.responsible}</div>
        <div className="repair-list__opertion-time">{`Наработка: ${data.operationTime} час.`}</div>
        <button
          className={
            data.owner === userInfo._id
              ? "repair-list__edit-button"
              : "repair-list__edit-button_invisible"
          }
          type="button"
          onClick={handleEditRepairItem}
        />
      </div>
      <p className="repair-list__description">{data.description}</p>
    </li>
  );
};

export default RepairList;
