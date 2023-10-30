import ErrorsBlock from "../ErrorsBlock/ErrorsBlock";
import "./RepairForm.scss";

const RepairForm = ({
  handleSubmit,
  handleChange,
  isValid,
  errors,
  values,
  digtl_reg,
  inputs_name,
  submitButtonTitle,

}) => {


  return (
    <form className="repair-form" onSubmit={handleSubmit}>
      <fieldset className="repair-form__fildset">
        <input
          className="repair-form__input repair-form__title"
          type="text"
          placeholder="Название проблемы"
          name={inputs_name.title_input}
          onChange={handleChange}
          // defaultValue={values.title}
          value={values.title || ''}
          required
          minLength="6"
        />
        <input
          className="repair-form__input repair-form__operationTime"
          type="text"
          placeholder="Наработка часов"
          name={inputs_name.operationTime_input}
          onChange={handleChange}
          // defaultValue={values.operationTime}
          value={values.operationTime || ''}
          minLength="2"
          required
          pattern={digtl_reg}
        />
        <textarea
          className="repair-form__input repair-form__discription"
          type="text"
          placeholder="Описание работ"
          name={inputs_name.description_input}
          onChange={handleChange}
          required
          // defaultValue={values.description}
          value={values.description || ''}
          minLength="10"
        />
        <button
          className="repair-form__submit"
          type="submit"
          disabled={!isValid}
        >
          {submitButtonTitle}
        </button>
      </fieldset>
      <ErrorsBlock errors={errors} />
    </form>
  );
};

export default RepairForm;
