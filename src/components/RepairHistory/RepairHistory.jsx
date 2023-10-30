/* eslint-disable react/prop-types */

import "./RepairHistory.scss";

import RepairList from "../RepairList/RepairList";
import ChangesRepairHistory from "../ChangesRepairHistory/ChangesRepairHistory";
import NewRepairForm from "../NewRepairForm/NewRepairForm";
import Searcher from "../Searcher/Searcher";

import {
  NEW_REPAIR_INPUTS_NAMES as new_repair_inputs_names,
  EDIT_REPAIR_INPUTS_NAMES as edit_repair_inputs_names,
} from "../../utils/constants/constants";

const RepairHistory = ({
  isAipInfo,
  setAipInfo,
  handleChange,
  isValid,
  addNewRepair,
  isRenderRepairHistory,
  values,
  setValues,
  errors,
  setEditedRepairItem,
  isOpenEditForm,
  setOpenEditForm,
  setIsValid,
  createEditedItem,
  setSearchRepairValue
}) => {
  const newRepairInputsValue = {
    title: values.title,
    description: values.description,
    operationTime: values.operationTime,
  };

  const changeRepairInputsValue = {
    title: values.edit_title,
    description: values.edit_description,
    operationTime: values.edit_operationTime,
  };

  const clearnRepairHisory = () => {
    setAipInfo("");
    setValues({
      title: "",
      operationTime: "",
      description: "",
    });
  };

  return (
    <section
      className={`${isAipInfo ? "repair-history" : "repair-history_invisible"}`}
    >
      <div className="repair-history__header">
        <h2 className="repair-history__title">{`История обслуживания аппарата ${isAipInfo.internalNumber}`}</h2>
        <Searcher handleChange={handleChange} setSearchValue={setSearchRepairValue} />
        <button
          className="repair-history__close-button"
          aria-label="кнопка закрытия всплывающего окна."
          type="button"
          onClick={clearnRepairHisory}
        ></button>
      </div>

      <ul className="repair-history__list">
        {isRenderRepairHistory?.map((el, i) => (
          <RepairList
            data={el}
            key={i}
            setEditedRepairItem={setEditedRepairItem}
            setOpenEditForm={setOpenEditForm}
          />
        ))}
      </ul>

      {isOpenEditForm ? (
        <ChangesRepairHistory
          handleChange={handleChange}
          isValid={isValid}
          errors={errors}
          changeRepairInputsValue={changeRepairInputsValue}
          edit_repair_inputs_names={edit_repair_inputs_names}
          setValues={setValues}
          createEditedItem={createEditedItem}
        />
      ) : (
        <NewRepairForm
          handleChange={handleChange}
          isValid={isValid}
          errors={errors}
          addNewRepair={addNewRepair}
          setValues={setValues}
          newRepairInputsValue={newRepairInputsValue}
          new_repair_inputs_names={new_repair_inputs_names}
          setIsValid={setIsValid}
        />
      )}
    </section>
  );
};

export default RepairHistory;
