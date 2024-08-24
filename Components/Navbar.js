import React from "react";
import Link from "next/link";
import styles from "@/styles/NavbarStyle.module.css";
const Navbar = () => {
  return (
    <nav>
      <ul className={styles.navbar}>
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/About">
          <li>About</li>
        </Link>
        <Link href="/Blogs">
          <li>Blogs</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
