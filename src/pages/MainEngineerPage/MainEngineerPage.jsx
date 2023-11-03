/* eslint-disable react/prop-types */

import "./MainEngineerPage.scss";
import { useState, useEffect } from "react";

import Header from "../../components/Header/Header";
import NewAipInputs from "../../components/NewAipInputs/NewAipInputs";
import Popup from "../../components/Popup/Popup";
import AipLine from "../../components/AipLine/AipLine";
import RepairHistory from "../../components/RepairHistory/RepairHistory";

import aipList from "../../utils/constants/aipList";
import {
  NEW_AIP_POPUP_TITLE as popupTitle,
  ADD_BUTTON_NAME as submitButtonName,
} from "../../utils/constants/constants";
import repairList from "../../utils/constants/repairList";

const MainEngineerPage = ({
  handleChange,
  isValid,
  userInfo,
  values,
  setValues,
  errors,
  setIsValid,
  setErrors,
}) => {
  const [isRepairList, setRepairList] = useState(repairList || []);
  //стейт поиска ремонта
  const [isSearchRepairValue, setSearchRepairValue] = useState("");

  // данные по выбронному аип
  const [isAipInfo, setAipInfo] = useState("");

  //____ОТОБОРАЖЕНИЕ ИСТОРИИ ОБСЛУЖИВАНИЯ
  //стейт для списка работ
  const [isRenderRepairHistory, setRenderRepairHistory] = useState([]);

  //юЭ для отображения списка работы по выбронному АИП
  useEffect(() => {
    setRenderRepairHistory(
      isRepairList?.filter(
        (i) =>
          i.aipNumber === isAipInfo.serialNumber &&
          i.description
            .toLowerCase()
            .includes(isSearchRepairValue.toLowerCase())
      )
    );
  }, [isAipInfo.serialNumber, isRepairList, isSearchRepairValue]);

  //_____НОВАЯ ЗАПИСЬ О РЕМОНТЕ

  const addNewRepair = () => {
    const date = new Date();
    const formatDate = new Intl.DateTimeFormat("ru").format(date);

    const newRepairItem = {
      description: values.description,
      operationTime: values.operationTime,
      title: values.title,
      responsible: userInfo.name,
      date: formatDate,
      owner: userInfo._id,
    };

    setRenderRepairHistory([...isRenderRepairHistory, newRepairItem]);

    repairList.push(newRepairItem);
  };

  //____ИСПРАВЛЕНИЕ СТРАНОй ЗАПИСИ

  // стейт открвтия формы редактировани
  const [isOpenEditForm, setOpenEditForm] = useState(false);

  //Находим запись, которую хотим измерить
  const [isEditedRepairItem, setEditedRepairItem] = useState({});

  //предзаполняем инпуты
  useEffect(() => {
    if (isEditedRepairItem) {
      setValues({
        edit_title: isEditedRepairItem.title || "",
        edit_operationTime: isEditedRepairItem.operationTime || "",
        edit_description: isEditedRepairItem.description || "",
      });
    }
  }, [
    isEditedRepairItem,
    isEditedRepairItem.title,
    isEditedRepairItem.operationTime,
    isEditedRepairItem.description,
    setValues,
  ]);

  //создаем измененый обхект ремонта
  const createEditedItem = () => {
    const editedItem = {
      aipNumber: isEditedRepairItem.aipNumber,
      date: isEditedRepairItem.date,
      responsible: isEditedRepairItem.responsible,
      type: isEditedRepairItem.type,
      title: values.edit_title,
      description: values.edit_description,
      operationTime: values.edit_operationTime,
      owner: isEditedRepairItem.owner,
      _id: isEditedRepairItem._id,
    };
    // Находим и сохраняем индекс элемента который мы хотим изменить
    const indexEditedItem = repairList.indexOf(isEditedRepairItem);
    // Удаляем старую запись по индексу и вставляем новую
    repairList.splice(indexEditedItem, 1, editedItem);

    // Вот тут нужно исправить, логику, работая с беком. По идее достаточно будет просто обновить список отображаемых элемнтов
    setRenderRepairHistory([...isRenderRepairHistory, editedItem]);

    //Закрываем форму
    setOpenEditForm(false);
  };

  const [isOpenPopup, setOpenPopup] = useState(false);

  const openPopup = () => {
    setOpenPopup(true);
  };

  return (
    <section className="aip-info">
      <Header>
        <button className="header__button" type="button" onClick={openPopup}>
          Создать новый АИП
        </button>
      </Header>

      <ul className="aip-info__table">
        {aipList?.map((el, i) => (
          <AipLine data={el} key={i} setAipInfo={setAipInfo} />
        ))}
      </ul>

      <RepairHistory
        isAipInfo={isAipInfo}
        setAipInfo={setAipInfo}
        handleChange={handleChange}
        isValid={isValid}
        addNewRepair={addNewRepair}
        isRenderRepairHistory={isRenderRepairHistory}
        values={values}
        setValues={setValues}
        errors={errors}
        setEditedRepairItem={setEditedRepairItem}
        isOpenEditForm={isOpenEditForm}
        setOpenEditForm={setOpenEditForm}
        setIsValid={setIsValid}
        createEditedItem={createEditedItem}
        setSearchRepairValue={setSearchRepairValue}
        setErrors={setErrors}
      />

      <Popup
        setOpenPopup={setOpenPopup}
        isOpenPopup={isOpenPopup}
        title={popupTitle}
        submitButtonName={submitButtonName}
      >
        <NewAipInputs />
      </Popup>
    </section>
  );
};

export default MainEngineerPage;
