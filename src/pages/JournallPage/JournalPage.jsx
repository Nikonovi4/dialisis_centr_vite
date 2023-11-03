/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import journalList from "../../utils/constants/journalList";
import JournalItem from "../../components/JurnalItem/JournalItem";
import JournalForm from "../../components/JournalForm/JournalForm";
import Searcher from "../../components/Searcher/Searcher";

const JournalPage = ({
  handleChange,
  isValid,
  userInfo,
  values,
  setValues,
}) => {
  //отображаемый список
  const [isRenderJournalList, setRenderJournalList] = useState([]);
  //новая запись
  const [isNewJournalItem, setNewJournalItem] = useState();
  //изменяемый элемент
  const [isEditedJournalItem, setEditedJournalItem] = useState();
  //значения поиска
  const [isSearchJournalValue, setSearchJournalValue] = useState("");

  //юЭ для отображения списка записей
  useEffect(() => {
    setRenderJournalList(
      journalList?.filter((i) => {
        return (i.center =
          "Солнцево" &&
          i.description
            .toLowerCase()
            .includes(isSearchJournalValue.toLowerCase()));
      })
    );
  }, [isSearchJournalValue]);

  // юЭ для внесения новой записи
  useEffect(() => {
    if (isNewJournalItem && !isEditedJournalItem) {
      const date = new Date();
      const formatDate = new Intl.DateTimeFormat("ru").format(date);
      const newJournalItem = {
        date: formatDate,
        owner: userInfo._id,
        responsible: userInfo.name,
        description: isNewJournalItem,
        center: "Солнцево",
      };

      setRenderJournalList([...isRenderJournalList, newJournalItem]);
      setNewJournalItem();
      setValues("");
    }
  }, [
    isNewJournalItem,
    isRenderJournalList,
    userInfo._id,
    userInfo.name,
    isEditedJournalItem,
    setValues,
  ]);

  //юЭ для редактирования записи
  useEffect(() => {
    if (isEditedJournalItem) {
      const item = isRenderJournalList.find((i) => {
        return i._id === isEditedJournalItem._id;
      });

      setValues({
        journalItem: item.description,
      });

      if (isNewJournalItem) {
        item.description = isNewJournalItem;
        setNewJournalItem("");
        setEditedJournalItem("");
        setValues("");
      }
    }
  }, [isEditedJournalItem, isRenderJournalList, setValues, isNewJournalItem]);

  return (
    <section className="journal">
      <ul className="journal__list">
        {isRenderJournalList?.map((el, i) => (
          <JournalItem
            data={el}
            key={i}
            setEditedJournalItem={setEditedJournalItem}
            userInfo={userInfo}
          />
        ))}
      </ul>
      {isEditedJournalItem ? (
        <JournalForm
          handleChange={handleChange}
          values={values}
          buttonName="Изменить"
          setJournalItem={setNewJournalItem}
        />
      ) : (
        <JournalForm
          handleChange={handleChange}
          values={values}
          buttonName="Сохранить"
          setJournalItem={setNewJournalItem}
        />
      )}
      <Searcher
        handleChange={handleChange}
        setSearchValue={setSearchJournalValue}
        values={values}
      />
    </section>
  );
};
export default JournalPage;
