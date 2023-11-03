/* eslint-disable react/prop-types */
import "./JournalForm.scss";

const JournalForm = ({
  handleChange,
  values,
  buttonName,
  setJournalItem,
}) => {
  const handleAddjournalItem = (e) => {
    e.preventDefault();
    setJournalItem(e.target.elements["journalItem"].value);
  };
  return (
    <form className="journal-form" onSubmit={handleAddjournalItem}>
      <label className="journal-form__lable">
        <textarea
          wrap="soft"
          required
          spellCheck="true"
          placeholder="События дня"
          className="journal-form__input"
          name="journalItem"
          onChange={handleChange}
          value={values.journalItem || ""}
        />
        <button type="submit" className="journal-form__button">
          {buttonName}
        </button>
      </label>
    </form>
  );
};

export default JournalForm;
