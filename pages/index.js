import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export async function getServerSideProps() {
  let FetchedData = await fetch("http://localhost:3000/api/AllBlogs");
  FetchedData = await FetchedData.json();
  FetchedData = FetchedData.slice(0, 3);

  return { props: { FetchedData } };
}

export default function Home(Props) {
  const [Blogs, setBlogs] = useState(Props.FetchedData);

  return (
    <>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="A Hunting Coder Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main} ${inter.className}`}>
        <div>
          <h1>Welcome To The Hunting Coder Blog</h1>
        </div>
        <div className={styles.RecentPosts}>
          <h2>Recent Posts</h2>
          <div className={styles.Posts}>
            {Blogs.map((blog) => {
              return (
                <Link
                  href={`/Blogs/${blog.title.replaceAll(" ", "_")}`}
                  key={blog.title}
                  className={styles.Post}
                >
                  <h3>{blog.title}</h3>
                  <p>{blog.content.slice(0, 200)} ...</p>
                  <p>Author: {blog.author}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
