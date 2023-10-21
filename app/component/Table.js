"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./table.module.css";
import env_config from "@/env_config";

export default function TableComponent() {
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

  return (
    <div className={styles.tableBox}>
      <div className={styles.tableContainer}>
        <table border="1" className={styles.table}>
          <thead>
            <tr>
              <th>레벨</th>
              <th>이름</th>
              <th>클래스</th>
              <th>종족</th>
              <th>성별</th>
              <th>진영</th>
              <th>렐름</th>
              <th>길드</th>
              <th>마지막 접속</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className={row.is_fully_dead ? styles.dead : styles.undead}>
                <td data-label="레벨">{row.level}</td>
                <td data-label="이름">{row.name}</td>
                <td data-label="클래스">{row.character_class}</td>
                <td data-label="종족">{row.race}</td>
                <td data-label="성별">{row.gender}</td>
                <td data-label="진영">{row.faction}</td>
                <td data-label="렐름">{row.realm}</td>
                <td data-label="길드">{row.guild}</td>
                <td data-label="마지막 접속">{new Date(row.last_login_timestamp).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
