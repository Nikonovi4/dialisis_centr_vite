import RepairForm from "../RepairForm/RepairForm";


const ChangesRepairHistory = ({
  handleChange,
  isValid,
  errors,
  changeRepairInputsValue,
  edit_repair_inputs_names,
  setEditedRepairFormValue,
  setValues,
}) => {

  const saveButtonTitle = 'Изменить'

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditedRepairFormValue({
      title: "",
      operationTime: "",
      description: "",
    });

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
