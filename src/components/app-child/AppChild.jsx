import { useEffect, useState } from "react";
import ListAdd from "../list-add/ListAdd";
import ListFilter from "../list-filter/ListFilter";
import ListInfo from "../list-info/ListInfo";
import ListItems from "../list-items/ListItems";
import SearchPanel from "../serach-panel/SearchPanel";
import "./app-child.css";

const AppChild = () => {
  const [copydata, seCopydata] = useState([]);
  useEffect(() => {
    seCopydata(listdata);
  }, []);

  const [listdata, setListdata] = useState([
    {
      id: 1,
      title: "Javacsrpt",
      togglestatus: true,
    },
    {
      id: 2,
      title: "Reactjs",
      togglestatus: true,
    },
    {
      id: 3,
      title: "Vue",
      togglestatus: false,
    },
  ]);

  const filterHandler = (filterterm) => {
    switch (filterterm) {
      case "All":
        seCopydata(() => listdata);
        break;
      case "Active":
        // eslint-disable-next-line no-case-declarations
        seCopydata(() => {
          let newArray = listdata.filter((item) => item.togglestatus);
          return newArray;
        });
        break;
      case "Inactive":
        // eslint-disable-next-line no-case-declarations
        seCopydata(() => {
          let newArray = listdata.filter((item) => !item.togglestatus);
          return newArray;
        });
        break;
      default:
        return listdata;
    }
  };
  const searchHandler = (val) => {
    if (val.length==0) {
      console.log('ok',val);
      seCopydata(listdata);
    }else{
console.log('no');
      seCopydata(() => {
        let newArray = listdata.filter((item) => item.title.toLowerCase().includes(val.toLowerCase()));
        return newArray;
      });
    }
  };

  const onDelete = (id) => {
    const newArray = listdata.filter((item) => item.id !== id);
    setListdata(newArray);
    seCopydata(newArray);
  };

  const addItem = (item) => {
    const newArray = [...listdata, item];
    setListdata(newArray);
    seCopydata(newArray);
  };
  const onTogle = (id) => {
    const newArray = listdata.map((item) => {
      if (item.id == id) {
        item.togglestatus = !item.togglestatus;
        return { ...item };
      }
      return item;
    });
    setListdata(newArray);
    seCopydata(newArray);
  };

  const editItem = (id, val) => {
    const newArray = listdata.map((item) => {
      if (item.id == id) {
        item.title = val;
        return { ...item };
      }
      return item;
    });
    setListdata(newArray);
    seCopydata(newArray);
  };
  return (
    <div className="container-css">
      <ListInfo listdata={listdata} />
      <SearchPanel searchHandler={searchHandler} listdata={listdata} />
      <ListFilter filterHandler={filterHandler} />
      <ListItems
        listdata={copydata}
        onDelete={onDelete}
        onTogle={onTogle}
        editItem={editItem}
      />
      <ListAdd addItem={addItem} />
    </div>
  );
};

export default AppChild;
