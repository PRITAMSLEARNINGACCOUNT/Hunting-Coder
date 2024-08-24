import React from "react";
import styles from "../../styles/IndividualBlog.module.css";
import { useState } from "react";
import Head from "next/head";

export async function getServerSideProps(Context) {
  let FetchedData = await fetch(
    `http://localhost:3000/api/SingleBlog?Blog=${Context.query.slug}`
  );
  FetchedData = await FetchedData.json();

  return { props: FetchedData };
}

const Slug = (Props) => {
  const [Blog, setBlog] = useState(Props);

  return (
    <main className={styles.MainSection}>
      <div className={styles.BlogSection}>
        {Blog.hasOwnProperty("title") ? (
          <>
            <Head>
              <title>{Blog.title}</title>
            </Head>
            <div className={styles.HeadingSection}>
              <h1>{Blog.title}</h1>
              <h2>By {Blog.author}</h2>
            </div>
            <p>{Blog.content}</p>
          </>
        ) : (
          <h1>Blog Not Found</h1>
        )}
      </div>
    </main>
  );
};

export default Slug;
