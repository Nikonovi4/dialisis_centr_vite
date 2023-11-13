import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import LoginPage from "../../pages/LoginPage/LoginPage";
import MainEngineerPage from "../../pages/MainEngineerPage/MainEngineerPage";
import JournalPage from "../../pages/JournallPage/JournalPage";
import CheckWaterPage from "../../pages/CheckWaterPage/CheckWaterPage";

import { userInfo } from "../../utils/constants/userInfo";

const App = () => {
  const [values, setValues] = useState('')

  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value});
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
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
            userInfo={userInfo}
            values={values}
            setValues={setValues}
            errors={errors}
            setIsValid={setIsValid}
            setErrors={setErrors}
          />
        }
      />
      <Route
        path="/journal"
        element={
          <JournalPage
            handleChange={handleChange}
            isValid={isValid}
            userInfo={userInfo}
            values={values}
            setValues={setValues}
          />
        }
      />
      <Route path="/water"
      element={<CheckWaterPage  
        handleChange={handleChange}
        isValid={isValid}
        userInfo={userInfo}
        values={values}
        setValues={setValues}
      />}
      />
    </Routes>
  );
};

export default App;
