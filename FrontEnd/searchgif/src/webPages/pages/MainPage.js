import React, { useEffect, useState } from "react";
import Loading from "../../shared/components/Loading";
import GifResult from "../components/GifResult";
import Search from "../components/Search";

import "./MainPage.css"
const MainPage = (props) => {
const [headerPosition,setHeaderPosition]=useState("relative")
    useEffect(() => {
        window.addEventListener("scroll", headerHandler);
    },[])

    const headerHandler=()=>{
        let  header = document.getElementsByTagName("header");
        if (header && header.length>0 && window.pageYOffset >= header[0].offsetTop)
        {
            setHeaderPosition("fixed")
        }
        else{
            setHeaderPosition("relative")
        }
    }
  return (
    <>
      <header className={`App-header p-2 row no-gutters `} style={{position:headerPosition}}>
          <h1>GifSearch</h1>
      <Search/>
      </header>
      <main>
         
          <GifResult />
      </main>
      <Loading />
    </>
  );
};

export default MainPage;
