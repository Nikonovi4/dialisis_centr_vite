/* eslint-disable react/prop-types */
import RepairForm from "../RepairForm/RepairForm";
import { EDIT_BUTTON_NAME as saveButtonTitle } from "../../utils/constants/constants";

const ChangesRepairHistory = ({
  handleChange,
  isValid,
  errors,
  changeRepairInputsValue,
  edit_repair_inputs_names,
  setValues,
  createEditedItem,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    createEditedItem();

    setValues({
      title: "",
      description: "",
      operationTime: "",
      edit_title: "",
      edit_description: "",
      edit_operationTime: "",
    });
  };

  return (
    <RepairForm
      handleChange={handleChange}
      isValid={isValid}
      error={errors}
      values={changeRepairInputsValue}
      inputs_name={edit_repair_inputs_names}
      handleSubmit={handleSubmit}
      submitButtonTitle={saveButtonTitle}
    />
  );
};

export default ChangesRepairHistory;
