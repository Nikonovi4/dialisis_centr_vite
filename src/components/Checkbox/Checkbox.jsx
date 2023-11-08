/* eslint-disable react/prop-types */
import "./Checkbox.scss";


const Checkbox = ({
  data,
  handleChange,
  setValues
}) => {


  return (
    <label className="popup__label">
      {data.label}
      <input
        type={data.type}
        //defaultChecked={isClickedCheckbox}
        className="popup__input"
        name={data.name}
        onChange={(e)=>{
          handleChange(e)
        
       }
     
      }
      />
    </label>
  );
};

export default Checkbox;
