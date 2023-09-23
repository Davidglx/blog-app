"use client"
import React, { useState } from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import styles from "./Menu.module.css";

const Menu = () => {
    const session = useSession();
    const [man, setMan] = useState(false);

  return (
    
    <div className={styles.openers}>
    {!man ? (
      <Image
        onClick={() => setMan(true)}
        src="/open.png"
        alt=""
        width={30}
        className={styles.logs}
        height={30}
      />
    ) : (
      <Image
        onClick={() => setMan(false)}
        src="/close.png"
        alt=""
        className={styles.logs}
        width={30}
        height={30}
      />
    )}
    {man && (
      <div className={styles.ball}>
        <Link onClick={() => setMan(false)} className={styles.baller} href="/">
          HOME
        </Link>
        <Link onClick={() => setMan(false)}  className={styles.baller} href="/portfolio">
          PORTFOLIO
        </Link>
        <Link onClick={() => setMan(false)}  className={styles.baller} href="/blog">
          BLOG
        </Link>
        <Link onClick={() => setMan(false)}  className={styles.baller} href="/about">
          ABOUT
        </Link>
        <Link onClick={() => setMan(false)}  className={styles.baller} href="/contact">
          CONTACT
        </Link>
        <Link onClick={() => setMan(false)}  className={styles.baller} href="/dashboard">
          DASHBOARD
        </Link>

        {session.status === "authenticated" && (
    <button className={styles.logouut} onClick={signOut}>
      Logout
    </button>
  )}
      </div>
    )}

  </div>
  )
}

export default Menu



