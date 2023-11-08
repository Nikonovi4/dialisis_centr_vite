/* eslint-disable react/prop-types */
import './CheckValuem.scss'

import { PROPS_LIST as propsList } from "../../utils/constants/constants";

const CheckValuem = ({ data }) => {


  let list = [];

  for (let i = 0; i < propsList.length; i++) {
    let t = propsList[i];
    list.push(data[t]);
  }

  return (
    <ul className="valuems-list">
      {list.map((el, i) => {
        return (
          <li className="valuems-list__item" key={i}>
            {el}
          </li>
        );
      })}
    </ul>
  );
};

export default CheckValuem;
