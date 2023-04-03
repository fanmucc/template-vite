// let root = document.getElementById("root");
import "./componentsA.js";
import { a } from "./jsonDemo.json";

console.log("vite 模板");
console.log(import.meta.env.VITE_HOST);
console.log(import.meta.env.VITE_API);
console.log(BASES, "配置的BASES变量直接使用");
console.log(typeof a, a);
