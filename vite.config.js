// 公共配置
import { defineConfig, loadEnv } from "vite";

import viteBaseConfig from "./vite.base.config";
import viteDevConfig from "./vite.dev.config";
import viteProdConfig from "./vite.prod.config";

// 策略模式，统一处理相关配置
const envResolver = {
	build: () => Object.assign({}, viteBaseConfig, viteProdConfig),
	serve: () => Object.assign({}, viteBaseConfig, viteDevConfig),
};

export default defineConfig(({ mode, command }) => {
	// { mode: 'development', command: 'serve', ssrBuild: false }
	return envResolver[command]();
});
