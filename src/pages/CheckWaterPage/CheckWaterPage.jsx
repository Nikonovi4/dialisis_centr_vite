/* eslint-disable react/prop-types */

import "./CheckWaterPage.scss";

import waterTableNames from "../../utils/constants/waterTableNames";
import CheckValuem from "../../components/CheckValuem/CheckValuem";
import waterPreparationList from "../../utils/constants/checkWPList";
import { useEffect, useState } from "react";
import Popup from "../../components/Popup/Popup";
import NewValuesInputs from "../../components/NewValuesInputs/NewValuesInputs";
import { SAVE_BUTON_NAME as submitButtonName } from "../../utils/constants/constants";
import { formatDate, editCheckboxValue } from "../../utils/functions";

const CheckWaterPage = ({
  handleChange,
  isValid,
  userInfo,
  values,
  setValues,
}) => {
  //Стейт загружаемыйх данных
  const [isRenderPreparationList, setWaterPreparationList] = useState(
    waterPreparationList || ""
  );
// Стейт состояния попапа
  const [isOpenPopup, setOpenPopup] = useState(false);
// Стейт открытия попапа
  const openPopup = () => setOpenPopup(true);
// Стейт новых данных
const [isNewValues, setNewValues] = useState('')

const resetCheckbox = (e) => {
  e.target.elements["leaks"].checked=false;
  e.target.elements["fiter"].checked=false;
  e.target.elements["errOsmos"].checked=false;
  e.target.elements["errHD"].checked=false;
  e.target.elements["errCDS"].checked=false;
}


const handleSubmit = (e) => {
  e.preventDefault();
  setNewValues({
    leak: editCheckboxValue(e.target.elements["leaks"].checked),
    consumption: e.target.elements["expenditure"].value,
    pressureIn: e.target.elements["pressureIn"].value,
    pressureM1: e.target.elements["pressureМ1"].value,
    pressureM2: e.target.elements["pressureМ2"].value,
    rw: e.target.elements["rw"].value,
    permeate: e.target.elements["cond"].value,
    temp: e.target.elements["temp"].value,
    rj: e.target.elements["rj"].value,
    pressureMO2: e.target.elements["pressureМ02"].value,
    pressureMO3: e.target.elements["pressureМ03"].value,
    pressureMO4: e.target.elements["pressureМ04"].value,
    pressureMO5: e.target.elements["pressureМ05"].value,
    flushingFilter: editCheckboxValue(e.target.elements["fiter"].checked),
    // dg: editCheckboxValue(e.target.elements["leaks"].value),
    //salt: editCheckboxValue(e.target.elements["leaks"].checked),
    errOsmos: editCheckboxValue(e.target.elements["errOsmos"].checked),
    errHotDisinfection: editCheckboxValue(e.target.elements["errHD"].checked),
    errCSS: editCheckboxValue(e.target.elements["errCDS"].checked),
    descripton: e.target.elements["decription"].value,
    owner: userInfo._id,
    center: 'Солнцево',
    date: formatDate,
    _id: '12345',
  });
  setOpenPopup(false);
  setValues('')
  resetCheckbox(e)
}

//юЭ для отоборажения новой записи
useEffect(() => {
  if(isNewValues){
    setWaterPreparationList([...isRenderPreparationList, isNewValues])
  }
  setNewValues('');
}, [isRenderPreparationList, isNewValues])



  return (
    <section className="water">
      <div className="table">
        <ul className="table__names">
          {waterTableNames.map((el, i) => {
            return (
              <li key={i} className="table__name">
                {el}
              </li>
            );
          })}
        </ul>
        {isRenderPreparationList.map((el, i) => {
          return <CheckValuem key={i} data={el} />;
        })}
      </div>
      <button className="table__button" type="button" onClick={openPopup}>
        Добавить данные
      </button>
      <Popup
        isOpenPopup={isOpenPopup}
        setOpenPopup={setOpenPopup}
        submitButtonName={submitButtonName}
        title="Чек-лист водоподготовки"
        setValues={setValues}
        handleSubmit={handleSubmit}  
      >
        <NewValuesInputs handleChange={handleChange} setValues={setValues} values={values} />
      </Popup>
    </section>
  );
};

export default CheckWaterPage;
