import React from "react";
import { useForm } from "react-hook-form";
import styles from "../styles/FormStyle.module.css";
const Add = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    let ResultData;
    try {
      let Result = await fetch("http://localhost:3000/api/AddBlog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (Result.status === 200) {
        ResultData = await Result.json();
        alert(ResultData.success);
      } else {
        ResultData = await Result.json();
        alert(ResultData.message);
      }
    } catch (error) {
      alert("Something went wrong");
    }
  };
  return (
    <form className={styles.Form} onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="title">Enter The Title - </label>
      <input
        className={styles.Input_Title}
        {...register("title", { required: true })}
        id="title"
        name="title"
      />
      {errors.title && <span>This field is required</span>}
      <label htmlFor="content">Enter The Content - </label>
      <textarea
        className={styles.Input_Content}
        {...register("content", { required: true })}
        id="content"
        name="content"
        cols="35"
        rows="10"
        placeholder="Enter the content of the blog"
      />

      {errors.content && <span>This field is required</span>}
      <label htmlFor="author">Enter The Name Of The Author - </label>
      <input
        className={styles.Input_Title}
        {...register("author", { required: true })}
        id="author"
        name="author"
      />

      {errors.author && <span>This field is required</span>}

      <button className={styles.AddBtn} type="submit">
        Add Blog
      </button>
    </form>
  );
};

export default Add;
