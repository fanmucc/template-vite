// 开发环境配置
import path from "path";
import { defineConfig } from "vite";
export default defineConfig({
	envDir: path.resolve(__dirname, "./env"),
	envPrefix: "VITE_",
});
