import React, { useEffect, useState } from "react";

import "./AutoComlete.css";
const AutoComlete = (props) => {
  const { listSearch, searchVal,onAutoClickHandler,displayAuto } = props;
  const [listOptions, selListOptions] = useState();
  useEffect(() => {
    let tempList = [...listSearch];
    tempList = tempList.filter(
      (z) => z.toLowerCase().indexOf(searchVal.toLowerCase()) > -1
    );
    selListOptions(tempList);
  }, [searchVal]);
  return (
    <>
      {displayAuto && listOptions && listOptions.length > 0 && (
        <div className={`autoComlete_cover ${props.className}`}>
          <ul>
            {listOptions.map((z, index) => {
              return <li key={`liOption_${index}`} onClick={()=>onAutoClickHandler(z)}>{z}</li>;
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default AutoComlete;
