const ListInfo = ({ listdata }) => {
  return (
    <div className="d-flex justify-content-around pt-3">
      <h3>All: {listdata.length}</h3>
      <h3>Active: {listdata.filter((item) => item.togglestatus).length}</h3>
      <h3>Inactive: {listdata.filter((item) => !item.togglestatus).length}</h3>
    </div>
  );
};

export default ListInfo;
