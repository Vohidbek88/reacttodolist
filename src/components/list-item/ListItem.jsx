import { useRef, useState } from "react";
import "./list-item.css";

const ListItem = ({ title, togglestatus, onDelete, id, onTogle, editItem }) => {
  const [edit, setedit] = useState(false);
  const refInp=useRef(null)
  const [editinp, setEditinp] = useState(title);
  const editfunc = () => {
    setedit(!edit);
    refInp.current.focus()
  };
  const Save = (e) => {
    e.preventDefault()
    setedit(!edit);
    editItem(id, editinp);
  };
  return (
    <div className="listitem mt-2 d-flex justify-content-between align-items-center">
      <h4 className={`${edit ? "d-none" : "d-block"}`}>{title}</h4>
      <input
        type="text"
        ref={refInp} 
        value={editinp}
        onChange={(e) => setEditinp(e.target.value)}
        className={`${edit ? "d-block" : "d-none"} saveinp`}
      />
      <button className={`${edit ? "d-flex" : "d-none"} save`} onClick={Save}>
        Save
      </button>
      <div className="d-flex align-items-center">
        <button
          className={`trash ${edit ? "d-none" : "d-flex"}`}
          onClick={() => onDelete(id)}
        >
          <i className={`fa-solid fa-trash-can fs-5`}></i>
        </button>
        <button
          className={`edit ${edit ? "d-none" : "d-flex"}`}
          onClick={editfunc}
        >
          <i className={`fa-solid fa-pen-to-square fs-5`}></i>
        </button>
        <button
          className={`toggle ${edit ? "d-none" : "d-flex"} ${togglestatus ? 'bg-success':'bg-danger'}`}
          onClick={() => onTogle(id)}
        >
          {togglestatus ? "Active" : "Inactive"}
        </button>
      </div>
    </div>
  );
};

export default ListItem;
