"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import DarkModeToggle from "../darkmodetoggle/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Menu from "../menu/Menu";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  const session = useSession();

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        <Image
          src="/9.jpeg"
          alt="My Image"
          className={styles.ball}
          width={75}
          height={50}
          style={{
            borderRadius: "2rem",
            backgroundColor: "#00ff00",
          }}
        />
      </Link>

      <div className={styles.links}>
        <DarkModeToggle />

        <div className={styles.menuuu}>
          <Menu />
        </div>

        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        {session.status === "authenticated" && (
          <button className={styles.logout} onClick={signOut}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;

// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import styles from "./navbar.module.css";
// import DarkModeToggle from "../darkmodetoggle/DarkModeToggle";
// import { signOut, useSession } from "next-auth/react";
// import Image from "next/image";

// const links = [
//   {
//     id: 1,
//     title: "Home",
//     url: "/",
//   },
//   {
//     id: 2,
//     title: "Portfolio",
//     url: "/portfolio",
//   },
//   {
//     id: 3,
//     title: "Blog",
//     url: "/blog",
//   },
//   {
//     id: 4,
//     title: "About",
//     url: "/about",
//   },
//   {
//     id: 5,
//     title: "Contact",
//     url: "/contact",
//   },
//   {
//     id: 6,
//     title: "Dashboard",
//     url: "/dashboard",
//   },
// ];

// const Navbar = () => {
//   const session = useSession();

//   return (
//     <div className={styles.container}>
//       <Link href="/" className={styles.logo}>
//         <Image
//           src="/9.jpeg"
//           alt="My Image"
//           className={styles.ball}
//           width={75}
//           height={50}
//           style={{
//             borderRadius: "2rem",
//             backgroundColor: "#00ff00",
//           }}
//         />
//       </Link>

//       <div className={styles.links}>

//         <DarkModeToggle />

//         {links.map((link) => (
//           <Link key={link.id} href={link.url} className={styles.link}>
//             {link.title}
//           </Link>
//         ))}
//         {session.status === "authenticated" && (
//           <button className={styles.logout} onClick={signOut}>
//             Logout
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;
