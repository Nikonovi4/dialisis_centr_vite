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
  const [isAipInfo, setAipInfo] = useState("");

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  };
 
 


  const [isRenderRepairHistory, setRenderRepairHistory] = useState([]);
  const [isRepairAip, setRepairAip] = useState({});

  useEffect(() => {
    setRepairAip(
      repairList?.find((i) => i.aipNumber === isAipInfo.serialNumber)
    );
  }, [isAipInfo.serialNumber]);

  useEffect(() => {
    const repairHistory = isRepairAip?.repair;
    setRenderRepairHistory(repairHistory);
  }, [isRepairAip?.repair]);

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
  // исправление старой записи
  const [isEditedRepairItem, setEditedRepairItem] = useState({});

  const [isOpenEditForm, setOpenEditForm] = useState(false);

  useEffect(() => {
    if (isEditedRepairItem) {
      setValues({
        edit_title: isEditedRepairItem.title || '',
        edit_operationTime: isEditedRepairItem.operationTime || '',
        edit_description: isEditedRepairItem.description || ''
      })
    }
  }, [
    isEditedRepairItem,
    isEditedRepairItem.title,
    isEditedRepairItem.operationTime,
    isEditedRepairItem.description,
  ]);



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
            />
          }
        />
      </Routes>
  );
};

export default App;
