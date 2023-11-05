"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import env_config from "@/env_config";
import User_card from "./User_card";

export default function Main_section() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${env_config()}/users`)
      .then((response) => {
        const sortedData = response.data.users.sort((a, b) => b.level - a.level);

        console.log(sortedData);
        setData(sortedData);
      })
      .catch((error) => {
        console.error("There was an error fetching the data: ", error);
      });
  }, []);

  return data.map((user, index) => <User_card key={index} user={user} index={index}></User_card>);
}
