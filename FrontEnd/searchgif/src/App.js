import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MainPage from "./webPages/pages/MainPage";
import { ImagesContext } from "./shared/context/images-context";
import {Imageshook} from "./shared/hooks/images-hook"

function App() {
  const { images,search,scroll,offset,loading,setSearchHandler,setOffsetHandler} = Imageshook();
  return (
    <div className="App">
      <ImagesContext.Provider
        value={{
          images: images,
          search: search,
          scroll:scroll,
          offset:offset,
          loading:loading,
          setSearchHandler: setSearchHandler,
          setOffsetHandler:setOffsetHandler
          
        }}
      >
        <MainPage />
       
      </ImagesContext.Provider>
    </div>
  );
}

export default App;
