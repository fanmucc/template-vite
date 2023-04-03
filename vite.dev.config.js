// 开发环境配置
import path from "path";
import { defineConfig } from "vite";
export default defineConfig({
	base: "/dev/",
	define: {
		BASES: JSON.stringify("dev"),
	},
	// 测试环境 有错误直接控制台报错
	logLevel: "error",
	// 代理配置
	server: {
		host: "localhost",
		// 是否启用http2
		https: false,
		// 为开发服务器配置 CORS , 默认启用并允许任何源
		cors: true,
		//服务启动时自动在浏览器中打开应用
		open: true,
		// 开发服务器端口号
		port: "9000",
		// 自定义代理
		proxy: {
			// https://cn.vitejs.dev/config/server-options.html#server-proxy 官网相关配置
			"/api": {
				target: "localhost:8080",
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ""),
			},
		},
		// Vite 服务器默认会忽略对 .git/ 和 node_modules/ 目录的监听。如果你需要对 node_modules/ 内的包进行监听，你可以为 server.watch.ignored 赋值一个取反的 glob 模式
		watch: {
			ignored: ["!**/node_modules/your-package-name/**"],
		},
	},
});
