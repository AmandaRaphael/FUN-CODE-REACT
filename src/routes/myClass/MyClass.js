import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Numbers from "../../components/Numbers/Numbers";
import styles from "./MyClass.module.css";
const MyClass = () => {
  const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [userPin, setUserPin] = useState("");
  return (
    <main className={styles.main}>
      {" "}
      <div className={styles.container}>
        <p className={styles.para}>Enter your pin</p>
        <input type="password" value={userPin} className={styles.pwd} />
        <Numbers digits={digits} userPin={userPin} setUserPin={setUserPin} />
        <p className={styles.para}>
          New User? <Link to="/courses/apply">Register now!</Link>
        </p>
      </div>
    </main>
  );
};

export default MyClass;
