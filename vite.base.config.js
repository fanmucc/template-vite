//公共配置 所有环境下都用到的配置
import path from "path";
import { defineConfig } from "vite";
export default defineConfig({
	envDir: path.resolve(__dirname, "./env"),
	envPrefix: "VITE_",
});
