import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

type NewsItem = {
  ID: number;
  title: string;
  body: string;
  image: string;
  date: string;
};

const useFetchNews = () => {
  const [answer, setAnswer] = useState<NewsItem[]>([]);
  useEffect(() => {
    axios
      .get<NewsItem[]>(`http://localhost:4000/news/get`)
      .then(({ data }) => setAnswer(data))
      .catch((error) => console.log(error));
  }, []);
  return answer;
};

export default useFetchNews;
