import { readFile } from "fs/promises";
async function readFileAsync() {
    try {
        const data = await readFile("example.txt", "utf8");
        console.log("File content:", data);
    }
    catch (error) {
        console.error("Error reading file:", error);
    }
}
readFileAsync();
