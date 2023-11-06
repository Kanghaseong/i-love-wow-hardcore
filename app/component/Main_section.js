"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import env_config from "@/env_config";
import User_card from "./User_card";
import styles from "./main_section.module.css";

export default function Main_section() {
  const [data, setData] = useState([]);

  function sortData(users) {
    let sorted_data = users.sort((a, b) => b.level - a.level);
    console.log(sorted_data);
    setData(sorted_data);
  }
  useEffect(() => {
    axios
      .get(`${env_config()}/users`)
      .then((response) => {
        sortData(response.data.users);
      })
      .catch((error) => {
        console.error("There was an error fetching the data: ", error);
      });
  }, []);

  return (
    <div>
      <div className={styles.neck}>
        <span>No.</span>
        <span>Info</span>
        <span>Guild</span>
      </div>
      {data.map((user, index) => (
        <User_card key={index} user={user} index={index}></User_card>
      ))}
    </div>
  );
}
