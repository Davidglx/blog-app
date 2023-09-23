import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 gingerLX. All rights reserved.</div>
      <div className={styles.socials}>
      <Image src="/1.png"  height={15} width={15} className={styles.icon} alt="ginger lx Facebook Acc" />
      <Image src="/2.png"  height={15} width={15} className={styles.icon} alt="ginger lx" />
      <Image src="/3.png"  height={15} width={15} className={styles.icon} alt="ginger lx" />
      <Image src="/4.png"  height={15} width={15} className={styles.icon} alt="ginger lx" />
    </div>
    </div>
  );
};

export default Footer;
