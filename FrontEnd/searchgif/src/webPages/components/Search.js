import React, { useContext, useEffect, useState } from "react";
import { ImagesContext } from "../../shared/context/images-context";
import AutoComlete from "./AutoComlete";
const Search = (props) => {
  const { setSearchHandler, search } = useContext(ImagesContext);
  const [searchVal, setSearchVal] = useState("");
  const [displayAuto, setDisplayAuto] = useState(false);
  const [listSearch, selListSearch] = useState([]);
  useEffect(() => {
    let localSearceData = JSON.parse(localStorage.getItem("serchList"));
    if ((!listSearch || listSearch.length === 0) && localSearceData) {
      selListSearch(localSearceData);
    }
  }, []);
  const changeHandler = (val) => {
    setDisplayAuto(true);
    setSearchVal(val.target.value);
    if (!listSearch.includes(val.target.value)) {
      let tempList = listSearch.concat(val.target.value);
      localStorage.setItem("serchList", JSON.stringify(tempList));
      selListSearch(tempList);
    }
    setSearchHandler(val.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setDisplayAuto(false);
    setSearchHandler(search);
  };
  const onAutoClickHandler = (val) => {
    setSearchHandler(val);
    setDisplayAuto(false);
  };

  return (
    <div className="col-12 col-lg-8 row no-gutters">
      <form
        onSubmit={onSubmitHandler}
        className="col-12 row no-gutters justify-content-around"
      >
        <div style={{ position: "relative" }} className="col-8 m-2">
          <input
            type="text"
            onChange={changeHandler}
            value={search}
            placeholder="serach gif"
            className="col-12"
          />
          <AutoComlete
            className="col-12"
            listSearch={listSearch}
            searchVal={searchVal}
            onAutoClickHandler={onAutoClickHandler}
            displayAuto={displayAuto}
          />
        </div>
        {/* <Select options={options} className="col-6" /> */}

        <input type="submit" value="Search" className="col-2" />
      </form>
    </div>
  );
};

export default Search;
