import './NewAipInputs.scss';

const NewAipInputs = () => {
  return (
    <div className="popup__inputs">
      <label className="popup__lable">
        Внутренний номер
        <input className="popup__input" />
      </label>
      <label className="popup__lable">
        Серийный номер
        <input className="popup__input" />
      </label>
      <label className="popup__lable">
        Инвентаризационный номер
        <input className="popup__input" />
      </label>
      <label className="popup__lable">
        Модель
        <input className="popup__input" />
      </label>
      <label className="popup__lable">
        Дата ввода в эскплоутацию
        <input className="popup__input" />
      </label>
      <label className="popup__lable">
        Версия прошивки
        <input className="popup__input" />
      </label>
      <label className="popup__lable">
        Ответственный инженер
        <input className="popup__input" />
      </label>
    </div>
  );
};

export default NewAipInputs;
