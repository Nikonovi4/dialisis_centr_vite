/* eslint-disable react/prop-types */

import './NewPartInputs.scss'
import partsList from '../../utils/constants/partsList';

import Input from '../Input/Input';
import { useEffect } from 'react';


const NewPartInputs = ({handleChange, values, setValues}) => {

//Предзаполнение инпутов, если деталь уже была
  useEffect(() => {
    if (values.partNumber) {
      partsList?.filter((i)=> {
        if (i.partNumber === values.partNumber) {
          setValues({
            partNumber: i.partNumber,
            partName: i.partName,
            propose: i.propose
          })
        }
      })
    }
  }, [setValues, values.partName, values.partNumber])

  const inputs = [{
    label: 'Артикул детали',
    name: 'partNumber',
    type: "text",
  },{
    label: 'Название детали',
    name: 'partName',
    type: "text",
  },{
    label: 'Назначение',
    name: 'propose',
    type: "text",
  },{
    label: 'Местонахождение',
    name: 'center',
    type: "text",
  }
]

  return(
<>
{inputs?.map((el, i) => {
        return <Input key={i} data={el} handleChange={handleChange} values={values} />;
      })}
      </>

  )
};

export default NewPartInputs;