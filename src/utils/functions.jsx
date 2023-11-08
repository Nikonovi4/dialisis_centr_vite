// Приводим в порядок формат даты
const date = new Date();
 export const formatDate = new Intl.DateTimeFormat("ru").format(date);
 // Переводим значение чекбокса on в Проверено
 export const editCheckboxValue = (value)=> {
  if(value===true){
    return 'Проверено'
  } else {
    return 'Не проверено'
  }
}