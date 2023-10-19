"use client";

import { useState } from "react";
import axios from "axios";
import styles from "./page.module.css";
import env_config from "@/env_config";

export default function Page() {
  const [text, setText] = useState("");
  const [secretCode, setSecretCode] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSecretCodeChange = (e) => {
    setSecretCode(e.target.value);
  };

  const handleClick = async () => {
    // ", "를 기준으로 문자열을 나누어 배열에 담음
    const textArray = text.split(", ");

    // POST 요청을 보내는 본문 객체
    const body = {
      users: textArray,
      secretCode: secretCode, // 비밀 코드 추가
    };

    try {
      const response = await axios.post(`${env_config()}/users`, body);
      console.log("Response:", response);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      관리자 페이지입니다.
      <input
        className={styles.user_names_input}
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="여기에 문자열을 입력하세요."
      />
      <input type="text" value={secretCode} onChange={handleSecretCodeChange} />
      <button onClick={handleClick}>POST 요청 보내기</button>
    </div>
  );
}
