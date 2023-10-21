"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./table.module.css";
import env_config from "@/env_config";
import user_info from "./userinfo.module.css";

export default function UserInfo() {
  return (
    <div className={user_info.user_info}>
      <div className={user_info.title}>타이틀</div>
      <div className={user_info.header}>
        <img src="" alt="header" />
      </div>
      <div className={user_info.foot}></div>
    </div>
  );
}
