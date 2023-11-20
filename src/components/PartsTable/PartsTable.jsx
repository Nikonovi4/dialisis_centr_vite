/* eslint-disable react/prop-types */

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "./PartsTable.scss";


import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const PartsTable = ({ isRenderPartsList, selectedProduct, setSelectedProduct }) => {
  

  return (
    <DataTable
      value={isRenderPartsList}
      selection={selectedProduct}
      onSelectionChange={(e) => setSelectedProduct(e.value)}
      
    >
      <Column selectionMode="multiple" header='Выбрать' />
      <Column field="partName" header="Название"></Column>
      <Column field="partNumber" header="Артикул"></Column>
      <Column field="center" header="Местонахождение"></Column>
      <Column field="balance" header="Количество"></Column>
      <Column field="propose" header="Прендназначение"></Column>
    </DataTable>
  );
};

export default PartsTable;
