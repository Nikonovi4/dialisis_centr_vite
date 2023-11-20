/* eslint-disable react/prop-types */

const Searcher = ({ handleChange, setSearchValue, values, setValues }) => {
  const handleSearchRepair = (e) => {
    e.preventDefault();
    setSearchValue(e.target.elements["searcher"].value);
  };



  const deleteRearch = () => {
    setSearchValue("")
    setValues('')
  }

  return (
    <form className="searcher" onSubmit={handleSearchRepair}>
      <label className="searcher__lable">
        <input
          type="search"
          placeholder="Что ищем?"
          className="searcher__input"
          name="searcher"
          value={values.searcher || ''}
          onChange={handleChange}
        />
        <button type="submit" className="searcher__button">
          Найти
        </button>
        <button type="button" className="searcher__button" onClick={deleteRearch} >
          Очистить поиск
        </button>
      </label>
    </form>
  );
};

export default Searcher;
