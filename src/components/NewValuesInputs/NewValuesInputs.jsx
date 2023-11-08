/* eslint-disable react/prop-types */
import Input from "../Input/Input";
import {
  newValuesInputsLables,
  newValuesInputsNames,
} from "../../utils/constants/constants";
import Checkbox from "../Checkbox/Checkbox";

const NewValuesInputs = ({ handleChange, setValues, values}) => {
  const inputList = [];
  const radioList = [];
  for (let i = 0; i < newValuesInputsLables.length; i++) {
    if ([0, 13, 14, 15, 16].includes(i)) {
      radioList.push({
        label: newValuesInputsLables[i],
        name: newValuesInputsNames[i],
        type: "checkbox",
      });
    } else {
      inputList.push({
        label: newValuesInputsLables[i],
        name: newValuesInputsNames[i],
        type: "number",
      });
    }
  }
  return (
    <>
      {inputList?.map((el, i) => {
        return <Input key={i} data={el} handleChange={handleChange} values={values} />;
      })}
      {radioList?.map((el, i) => {
        return <Checkbox key={i} data={el} handleChange={handleChange} setValues={setValues}  />;
      })}
    </>
  );
};

export default NewValuesInputs;
