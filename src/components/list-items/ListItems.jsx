import ListItem from "../list-item/ListItem";
import "./list-items.css";

const ListItems = ({ listdata, onDelete, onTogle,editItem }) => {
  return (
    <div className="d-flex flex-column lists">
      {listdata.length>0 ? listdata.map((item) => {
        return (
          <ListItem
            key={item.id}
            id={item.id}
            title={item.title}
            togglestatus={item.togglestatus}
            onDelete={onDelete}
            onTogle={onTogle}
            editItem={editItem}
          />
        );
      }):<h1 className="pt-2 text-center">Empty List</h1>}
    </div>
  );
};

export default ListItems;
