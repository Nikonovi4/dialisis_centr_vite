/* eslint-disable react/prop-types */

const Input = ({ data, handleChange, values }) => {
  return (
    <label className="popup__label">
      {data.label}
      <input
        type={data.type}
        className="popup__input"
        name={data.name}
        onChange={handleChange}
       value={values[data.name] || ''}
      />
    </label>
  );
};

export default Input;
