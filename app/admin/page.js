'use client'

import { useState } from 'react';
import axios from 'axios';

export default function Page() {
  const [text, setText] = useState('');
  const [secretCode, setSecretCode] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSecretCodeChange = (e) => {
    setSecretCode(e.target.value);
  };

  const handleClick = async () => {
    // ", "를 기준으로 문자열을 나누어 배열에 담음
    const textArray = text.split(', ');

    // POST 요청을 보내는 본문 객체
    const body = {
      characters: textArray,
      secretCode: secretCode, // 비밀 코드 추가
    };

    try {
      const response = await axios.post('http://localhost:4000/characters', body);
      console.log('Response:', response);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      관리자 페이지입니다.
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="여기에 문자열을 입력하세요."
      />
      <input
        type="text"
        value={secretCode}
        onChange={handleSecretCodeChange}
      />
      <button onClick={handleClick}>
        POST 요청 보내기
      </button>
    </div>
  );
}
