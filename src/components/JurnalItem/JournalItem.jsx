/* eslint-disable react/prop-types */
import './JournalItem.scss';

const JournalItem = ({ data, setEditedJournalItem, userInfo }) => {
const handelEdit =() => {
  setEditedJournalItem(data)
}
return(
  <li className='journal-item'>
    <div className='journal-item__autor'>{data.responsible}</div>
    <div className='journal-item__date'>{data.date}</div>
    <button className={
            data.owner === userInfo._id
              ? "journal-item__edit-button"
              : "journal-item__edit-button_invisible"
          } onClick={handelEdit}>Edit</button>
    <div className='journal-item__description'>{data.description}</div>
  </li>
)
};

export default JournalItem;