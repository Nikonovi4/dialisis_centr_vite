import RepairForm from "../RepairForm/RepairForm";
import { SAVE_BUTON_NAME as addButtonTitle } from "../../utils/constants/constants";
/* eslint-disable react/prop-types */

const NewRepairForm = ({
  handleChange,
  isValid,
  errors,
  addNewRepair,
  setValues,
  newRepairInputsValue,
  digtl_reg,
  new_repair_inputs_names,
  setIsValid,

}) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewRepair();
    setValues({
      title: "",
      description: "",
      operationTime: "",
      edit_title: "",
      edit_description: "",
      edit_operationTime: "",
    });

    setIsValid(false)
  };

  return (
    <RepairForm
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      isValid={isValid}
      errors={errors}
      values={newRepairInputsValue}
      digtl_reg={digtl_reg}
      inputs_name={new_repair_inputs_names}
      submitButtonTitle={addButtonTitle}

    />
  );
};

export default NewRepairForm;
