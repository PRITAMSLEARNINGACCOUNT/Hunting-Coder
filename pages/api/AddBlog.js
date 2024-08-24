import * as FileSystem from "fs";
export default function handler(req, res) {
  if (req.method === "POST") {
    const { title, content, author } = req.body;
    if (title && content && author) {
      FileSystem.writeFileSync(
        `./Blogposts/${title.replaceAll(" ", "_")}.json`,
        JSON.stringify({ title, content, author })
      );
      res.status(200).json({ success: "Blog Added Successfull" });
    } else {
      res.status(400).json({ message: "Please fill all the fields" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
