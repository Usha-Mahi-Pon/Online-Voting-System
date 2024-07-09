import Registerform from "@/components/registerform/registerform";
import React from "react";
import styles from "./register.module.css";

const Register = () => {
  return (
    <div className={styles.container}>
      <Registerform />
    </div>
  );
};

export default Register;
