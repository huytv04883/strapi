import axios from "axios";
import { useEffect, useMemo, useState } from "react";

export const useProducts = () => {
  const [dataProductsList, setProductsList] = useState([]);

  useEffect(() => {
    const fectData = async () => {
      try {
        const data = await axios.get(
          process.env.REACT_APP_API_BASE_URL + "/products?populate=*",
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
            },
          }
        );
        if (data) {
          setProductsList(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fectData();
  }, []);

  const dataProducts = useMemo(() => {
    return dataProductsList ? dataProductsList?.data?.data : null;
  }, [dataProductsList]);

  return { dataProducts };
};
