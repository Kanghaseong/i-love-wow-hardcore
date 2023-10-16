"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./table.module.css";

export default function TableComponent() {
  const [data, setData] = useState([]); // 초기 상태는 빈 객체

  useEffect(() => {
    // API 호출을 통해 데이터 가져오기
    axios
      .get("https://54.180.145.80/characterInfos")
      .then((response) => {
        const sortedData = response.data.characterInfos.sort((a, b) => b.level - a.level);
        // 가져온 데이터로 상태 업데이트 전에 정렬
        console.log(sortedData);
        setData(sortedData);
      })
      .catch((error) => {
        console.error("There was an error fetching the data: ", error);
      });
  }, []);
  //const arr = Object.values(data); // 객체의 값들을 배열로 변환

  return (
    <div className={styles.tableBox}>
      <table border="1">
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
            <th>마지막 로그인</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className={row.is_fully_dead ? styles.dead : styles.undead}>
              <td>{row.level}</td>
              <td>{row.name}</td>
              <td>{row.character_class}</td>
              <td>{row.race}</td>
              <td>{row.gender}</td>
              <td>{row.faction}</td>
              <td>{row.realm}</td>
              <td>{row.guild}</td>
              <td>{new Date(row.last_login_timestamp).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
