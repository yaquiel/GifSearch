import { useCallback, useEffect, useState } from "react";
import { useHttpClient } from "./http-hook";
export const Imageshook = () => {
  const { sendRequest } = useHttpClient();
  const [images, setImages] = useState(null);
  const [scroll, setScroll] = useState(true);
  const [search, setSearch] = useState("");
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const limit = 25;
  const loadingHandler = useCallback((val) => {
    setLoading(val);
  }, []);
  useEffect(() => {
    DataHandler();
  }, [search, offset]);

  const DataHandler = async () => {
    let responseData = await getImages();
    let imagesList = [];
    if (responseData) {
      imagesList = imagesList.concat(responseData.images);
      responseData.paginationData.total_count >
      responseData.paginationData.offset + responseData.paginationData.count
        ? setScroll(true)
        : setScroll(false);

      if (offset === 0) setImages(imagesList);
      else setImages(images.concat(imagesList));
    } else {
      setImages([]);
    }
    loadingHandler(false);
  };
  const getDataFromLocalStorage = async () => {
    let key = JSON.stringify({ search: search, limit: limit, offset: offset });
    const userData = JSON.parse(localStorage.getItem(key));
    return userData;
  };
  const getImages = useCallback(async () => {
    try {
      if (search !== "") {
        let localStorageData = await getDataFromLocalStorage();
        if (localStorageData) return localStorageData;

        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/api/gifs?search=${search}&limit=${limit}&offset=${offset}&rating=g&lang=en`,
          "GET",
          null
        );
        if (responseData) {
          if (responseData && responseData.images) {
            let key = JSON.stringify({
              search: search,
              limit: limit,
              offset: offset,
            });
            localStorage.setItem(key, JSON.stringify(responseData));
            return responseData;
          }
        }
      }
      return null;
    } catch (e) {}
  }, [search, offset]);

  const setOffsetHandler = useCallback(() => {
    loadingHandler(true);
    setOffset(offset + limit);
  }, [offset]);
  const setSearchHandler = useCallback((val) => {
    loadingHandler(true);
    setOffset(0);
    setSearch(val);
    setImages([])
    DataHandler();
  }, []);
  return {
    images,
    search,
    scroll,
    offset,
    loading,
    setSearchHandler,
    setOffsetHandler,
  };
};
