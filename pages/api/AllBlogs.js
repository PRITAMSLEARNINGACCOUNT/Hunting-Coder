import * as FileSystem from "fs";
export default function handler(req, res) {
  let Blogs = FileSystem.readdirSync("./Blogposts");
  let BlogContents = [];
  Blogs.forEach((Blog) => {
    Blog = FileSystem.readFileSync(`./Blogposts/${Blog}`);
    Blog = JSON.parse(Blog);
    BlogContents.push(Blog);
  });

  res.status(200).json(BlogContents);
}
