import "./MainEngineerPage.scss";
import { useState } from "react";

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


const MainEngineerPage = ({
  handleChange,
  isValid,
  isAipInfo,
  setAipInfo,
  addNewRepair,
  isRenderRepairHistory,
  values,
  setValues,
  errors,
  setEditedRepairItem,
  isOpenEditForm,
  setOpenEditForm,
  setIsValid,
}) => {
  
  const [isOpenPopup, setOpenPopup] = useState(false);

  const openPopup = () => {
    setOpenPopup(true);
  };

  const clearnRepairHisory = () => {
    setAipInfo("");
    setValues({
      title: "",
      operationTime: "",
      description: "",
    });
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

      {isAipInfo ? (
        <RepairHistory
          isAipInfo={isAipInfo}
          clearnRepairHisory={clearnRepairHisory}
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
        />
      ) : (
        ""
      )}



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
