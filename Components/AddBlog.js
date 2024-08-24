import React from "react";
import styles from "../styles/FooterStyle.module.css";
import { IoMdAddCircleOutline } from "react-icons/io";
import Link from "next/link";
const AddBlog = () => {
  return (
    <footer className={styles.MainFooter}>
      <Link href="/Add" className={styles.Add}>
        Add your own blog
      </Link>
      <Link href="/Add">
        <IoMdAddCircleOutline className={styles.Image} />
      </Link>
    </footer>
  );
};

export default AddBlog;
