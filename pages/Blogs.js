import React from "react";
import Head from "next/head";
import styles from "../styles/BlogStyle.module.css";
import { useState } from "react";
import Link from "next/link";
export async function getServerSideProps() {
  let FetchedData = await fetch("http://localhost:3000/api/AllBlogs");
  FetchedData = await FetchedData.json();

  return { props: { FetchedData } };
}
const Blogs = (Props) => {
  const [BlogsState, setBlogsState] = useState(Props.FetchedData);
  return (
    <>
      <Head>
        <title>Blogs</title>
      </Head>
      <main className={styles.mainDiv}>
        {BlogsState.map((blog) => {
          return (
            <div className={styles.BlogCard} key={blog.title}>
              <h2>{blog.title}</h2>
              <h3>By {blog.author}</h3>
              <p>{blog.content.slice(0, 400)} ....</p>
              <Link href={`/Blogs/${blog.title.replaceAll(" ", "_")}`}>
                <button>Read More</button>
              </Link>
            </div>
          );
        })}
      </main>
    </>
  );
};

export default Blogs;
