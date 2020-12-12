import { data } from "../src/data.js";
import { blogImage } from "./component/divimage.js";
import { blogContent } from "./component/divContent.js";
import { blogRelatedLinks } from "./component/divrealted.js";
import { findBlogById } from "./helper/findblogbyid.js";

const divroot = document.getElementById("root");
const divroot1 = document.getElementById("root1");

data.then((blog) => {
  divroot.appendChild(blogImage(blog[0].imageUrl));
  divroot.appendChild(blogContent(blog[0].title, blog[0].content));
  divroot1.appendChild(blogRelatedLinks(blog[0].links));
});



