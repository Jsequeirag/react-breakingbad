import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header/Header";
import Search from "../components/Search/Search";
import Characters from "../components/Character/Characters";
export default function Home() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  /* -------------------------------- get data ------------------------------- */
  useEffect(() => {
    axios
      .get("https://www.breakingbadapi.com/api/characters")
      .then((res) => {
        setData(res.data);
        setLoading(true);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className="home">
      <Header />
      <Search setSearch={setSearch} />
      <Characters data={data} isLoading={isLoading} search={search} />
    </div>
  );
}
