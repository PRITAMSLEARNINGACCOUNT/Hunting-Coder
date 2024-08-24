import "@/styles/globals.css";
import Navbar from "../Components/Navbar";
import AddBlog from "@/Components/AddBlog";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <AddBlog />
    </>
  );
}
