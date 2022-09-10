import * as fs from "node:fs";
import * as path from "node:path";
import showdown from "showdown";

const BUILD_DIR = path.resolve("./build");

// convert article to html
console.log(showdown.Converter)
const converter = new showdown.Converter();
const article = fs.readFileSync("./articles/1-hello-world.md", "utf-8");
const html = converter.makeHtml(article);

// create empty build directory
if (fs.existsSync(BUILD_DIR)) {
  fs.rmSync(BUILD_DIR, { recursive: true })
}
fs.mkdirSync(BUILD_DIR)

// write html to build directory
fs.writeFileSync(path.join(BUILD_DIR, "index.html"), html);
