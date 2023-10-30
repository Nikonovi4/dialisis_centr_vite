import { Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";

import LoginPage from "../../pages/LoginPage/LoginPage";
import MainEngineerPage from "../../pages/MainEngineerPage/MainEngineerPage";

import repairList from "../../utils/constants/repairList";
import { userInfo } from "../../utils/constants/userInfo";

const App = () => {
  const [values, setValues] = useState({
    title: "",
    description: "",
    operationTime: "",
    edit_title: "",
    edit_description: "",
    edit_operationTime: "",
  });

  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  };

  //____ОТОБОРАЖЕНИЕ ИСТОРИИ ОБСЛУЖИВАНИЯ

  // данные по выбронному аип
  const [isAipInfo, setAipInfo] = useState("");
  //стейть для списка работ
  const [isRenderRepairHistory, setRenderRepairHistory] = useState([]);

  //юЭ для отображения списка работы по выбронному АИП
  useEffect(() => {
    setRenderRepairHistory(
      repairList?.filter((i) => i.aipNumber === isAipInfo.serialNumber)
    );
  }, [isAipInfo.serialNumber]);

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

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/engineer"
        element={
          <MainEngineerPage
            handleChange={handleChange}
            isValid={isValid}
            isAipInfo={isAipInfo}
            setAipInfo={setAipInfo}
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
          />
        }
      />
    </Routes>
  );
};

export default App;
