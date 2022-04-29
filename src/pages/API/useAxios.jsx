import axios from "axios";
import { useEffect, useState } from "react";

export default function useAxios(config) {
  const [data, setData] = useState(null); // chứa data từ API

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await axios(config);
        setData(result.data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return { data };
}
