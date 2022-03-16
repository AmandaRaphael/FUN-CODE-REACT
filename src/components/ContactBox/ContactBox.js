import React from "react";
import { BsInstagram } from "react-icons/bs";
import { SiFacebook, SiTwitter } from "react-icons/si";
import style from "./contactBox.module.css";
const ContactBox = () => {
  return (
    <div className={style.contactInfo}>
      <p>Do you have any questions?</p>
      <p>
        <span> Reach out to us via our form or email us at</span>
        <a href="mailto: info@funcodeacademy.de "> info@funcodeacademy.de</a>
      </p>
      You can also reach us directly Mon - Fri , 10.00 - 17.00 under{" "}
      <a href="tel:0176-70834316">0176-70834316</a>.
      <span>For more information, visit us on our social media channels:</span>
      <div className={style.contactIcons}>
        {" "}
        <BsInstagram />
        <SiFacebook />
        <SiTwitter />
      </div>
    </div>
  );
};

export default ContactBox;
