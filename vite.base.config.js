//公共配置 所有环境下都用到的配置
import path from "path";
import { defineConfig } from "vite";
export default defineConfig({
	// 配置env文件路径
	envDir: path.resolve(__dirname, "./env"),
	// 设置暴露出去的公共变量前缀，import.meta.env.VITE_***
	// string | string[]
	envPrefix: "VITE_", // ["VITE_"]
});
