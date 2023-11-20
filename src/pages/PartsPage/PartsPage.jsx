/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";

import PartsTable from "../../components/PartsTable/PartsTable";
import Searcher from "../../components/Searcher/Searcher";
import DropdownCenter from "../../components/DropdownCenter/DropdownCenter";
import Popup from "../../components/Popup/Popup";
import "./PartsPage.scss";
import partsList from "../../utils/constants/partsList";
import NewPartInputs from "../../components/NewPartInputs/NewPartInputs";
import { formatDate } from "../../utils/functions";

const PartsPage = ({ handleChange, values, setValues, userInfo }) => {
  //Функция которая считает сколько деталей одного наименования есть на складе, и отдает результат как новый объект
  const reworkData = (data) => {
    const res = [];

    const checkRepeat = (articul) => {
      return res.some((item) => item.partNumber === articul);
    };
    data.forEach((item) => {
      if (!checkRepeat(item.partNumber)) {
        res.push({ ...item, balance: 1 });
        return;
      }
      res.find((i) => i.partNumber === item.partNumber).balance += 1;
    });
    return res;
  };
  // значение поиска
  const [isSearchPartslValue, setSearchPartslValue] = useState("");
  //отображаемый список деталей
  const [isRenderPartsList, setRenderPartsList] = useState("");
  // выобор склада
  const [isWarehouse, setWarehouse] = useState("");

  useEffect(() => {
    const filteredPartList = partsList.filter((i) => {
      return (
        (i.partNumber
          .toLowerCase()
          .includes(isSearchPartslValue?.toLowerCase()) ||
          i.partName
            .toLowerCase()
            .includes(isSearchPartslValue?.toLowerCase())) &&
        i.center.includes(isWarehouse)
      );
    });
    setRenderPartsList(reworkData(filteredPartList));
  }, [isSearchPartslValue, isWarehouse]);

  //состояние попапа для новой детали
  const [isNewPartPopupOpen, setNewPartPopupOpen] = useState(false);
  //функция открытия попапа для новой детали
  const openNewPartPopup = () => {
    setNewPartPopupOpen(true);
  };

  //сабмит попапа для новой детали
  const [isNewPart, setNewPart] = useState();

  const addNewPart = (e) => {
    e.preventDefault();
    setNewPart({
      partNumber: e.target.elements["partNumber"].value,
      partName: e.target.elements["partName"].value,
      center: e.target.elements["center"].value,
      propose: e.target.elements["propose"].value,
      installedOn: "",
      _id: "0010",
      owner: userInfo._id,
      ownerName: userInfo.name,
      date: formatDate,
    });
    setValues("");
    setNewPartPopupOpen(false);
  };

  useEffect(() => {
    if (isNewPart) {
      Object.assign(isNewPart, { balance: 1 });
      setRenderPartsList([...isRenderPartsList, isNewPart]);
      setNewPart();
    }
  }, [isNewPart, isRenderPartsList]);

  //выделенные детали
  const [selectedProduct, setSelectedProduct] = useState(null);



  for ( let i = 0; i<selectedProduct.length; i++){
    console.log(selectedProduct[i]._id)
  }

//  const repalceParts =() => {

//  }

  return (
    <div className="parts-page">
      <div className="parts-page__menu">
        <Searcher
          handleChange={handleChange}
          setSearchValue={setSearchPartslValue}
          values={values}
          setValues={setValues}
        />
        <DropdownCenter setWarehouse={setWarehouse} />
        <button className="parts-page__botton" onClick={openNewPartPopup}>
          +
        </button>
        {selectedProduct?.length >= 1 && (
          <button className="parts-page__botton" onClick={openNewPartPopup}>
            Переместить
          </button>
        )}
      </div>
      <PartsTable
        isRenderPartsList={isRenderPartsList}
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
      />
      <Popup
        setValues={setValues}
        setOpenPopup={setNewPartPopupOpen}
        isOpenPopup={isNewPartPopupOpen}
        title="Внести новую запчасть"
        submitButtonName="Сохранить"
        handleSubmit={addNewPart}
      >
        <NewPartInputs
          handleChange={handleChange}
          values={values}
          setValues={setValues}
        />
      </Popup>
    </div>
  );
};

export default PartsPage;
