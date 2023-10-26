import './RepairHistory.scss'
import RepairList from "../RepairList/RepairList";
import ChangesRepairHistory from "../ChangesRepairHistory/ChangesRepairHistory";
import NewRepairForm from "../NewRepairForm/NewRepairForm";
import {
  DIGTL_REG as digtl_reg,
  NEW_REPAIR_INPUTS_NAMES as new_repair_inputs_names,
  EDIT_REPAIR_INPUTS_NAMES as edit_repair_inputs_names,
} from "../../utils/constants/constants";
import { compileString } from 'sass';

const RepairHistory = ({
  isAipInfo,
  clearnRepairHisory,
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
  setIsValid
}) => {


  const newRepairInputsValue = {
    title: values.title,
    description: values.description,
    operationTime: values.operationTime
  }

  const changeRepairInputsValue = {
    title: values.edit_title,
    description: values.edit_description,
    operationTime: values.edit_operationTime
  }


  return(
    <section className="repair-history">
    <div
      className={`${
        isAipInfo ? "repair-history__header" : "repair-hisory__header_invisible"
      }`}
    >
      <h2 className="repair-history__title">{`История обслуживания аппарата ${isAipInfo.internalNumber}`}</h2>
      <button
        className="repair-history__close-button"
        aria-label="кнопка закрытия всплывающего окна."
        type="button"
        onClick={clearnRepairHisory}
      ></button>
    </div>

    <ul className="repair-history__list">
      {isRenderRepairHistory?.map((el, i) => (
        <RepairList data={el} key ={i} setEditedRepairItem={setEditedRepairItem} setOpenEditForm={setOpenEditForm} />
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
      />
    ) : (
      <NewRepairForm
        handleChange={handleChange}
        isValid={isValid}
        errors={errors}
        addNewRepair={addNewRepair}
        setValues={setValues}
        newRepairInputsValue={newRepairInputsValue}
        // values={values}
        digtl_reg={digtl_reg}
        new_repair_inputs_names={new_repair_inputs_names}
        setIsValid={setIsValid}
    
      />
    )}
  </section>
  )
};

export default RepairHistory;