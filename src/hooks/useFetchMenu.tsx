import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

type MenuItem = {
  ID: number;
  title: string;
  description: string;
  image: string;
  category: string;
  price: number;
  price_discount: number;
};

const useFetchMenu = (category: string): MenuItem[] => {
  const [answer, setAnswer] = useState<MenuItem[]>([]);
  useEffect(() => {
    axios
      .get<MenuItem[]>(`http://localhost:4000/menu/get/${category}`)
      .then(({ data }) => setAnswer(data))
      .catch((error) => console.log(error));
  }, [category]);
  return answer;
};

export default useFetchMenu;
