import * as FileSystem from "fs";
export default function handler(req, res) {
  console.log(req.query);
  try {
    let Blog = FileSystem.readFileSync(`./Blogposts/${req.query.Blog}.json`);
    Blog = JSON.parse(Blog);
    return res.status(200).json(Blog);
  } catch (error) {
    return res.status(500).json({ Error: "Internal Server Error" });
  }
}
