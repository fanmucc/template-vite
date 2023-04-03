//公共配置 所有环境下都用到的配置
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
	// 配置env文件路径
	envDir: path.resolve(__dirname, "./env"),
	// 设置暴露出去的公共变量前缀，import.meta.env.VITE_***
	// string | string[]
	envPrefix: "VITE_", // ["VITE_"]
	// 项目根目录
	root: process.cwd(),
	// base 项目路径
	base: "/",
	// 暴露在全局的变量
	define: {
		// 定义字符串需要使用显示的打引号，如JSON.stringify()
		BASES: JSON.stringify("bases"),
	},
	// // 静态资源目录
	// // 可以是文件系统的绝对路径，或者相对项目的相对路径，构建期间复制到 outDir 的根目录
	publicDir: "./src/assets",
	resolve: {
		alias: {
			// 别名
			// 比如引用组件 @/components
			"@": path.resolve(__dirname, "./src"),
		},
		// 导入时想要省略的扩展名列表
		extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".vue", "css"],
	},
	// css 相关配置
	css: {
		// ***.modules.css
		modules: {
			// 是否为全局化还是模块化
			scopeBehaviour: "local", // global
			// 修改生成的配置对象的key展示形式(驼峰或者中划线)
			// camelCase 驼峰 camelCaseOnly 驼峰命名法原始类名将被删除 dashes短横线命名 dashesOnly 仅使用短横线命名原始类名将被删除 null
			localsConvention: "camelCaseOnly",
			// 设置生成属性名的规则
			generateScopedName: "[name]_[local]_[hash:5]",
			// 也可以是函数
			// generateScopedName: (name, filename, css) => {
			// 	// return 的就是css key值
			// 	return ''
			// }
			// 自定义内容参与到生成属性名道中
			hashPrefix: "hello",
			// 不希望一些公共样式参与到模块化当中
			globalModulePaths: [],
		},
		// 内联的postcss配置，只接收数组形式 和写postcss.config.js文件一致
		// postcss: {plugins: [postcssPresetEnv()]},
		// 开启css文件的sourceMap文件索引
		devSourcemap: true,
	},

	// json配置
	json: {
		// 是否支持从 .json 文件中进行按名导入。
		// import { a } from "./jsonDemo.json";
		namedExports: true,
		// 若设置为 true，导入的 JSON 会被转换为 export default JSON.parse("...")，这样会比转译成对象字面量性能更好，尤其是当 JSON 文件较大的时候。
		// import { a } from "./jsonDemo.json";
		// 这个使用使用则报错
		stringify: false,
	},

	optimizeDeps: {
		entries: ["lodash-es"], // 指定预购建内容
		exclude: ["!lodash-es"], // 使用 exclude 属性可以指定哪些依赖项需要忽略 当依赖项前面没有!时，则对齐依赖项不进行构建
		// include: ["lodash-es"], //  默认情况下，不在 node_modules 中的，链接的包不会被预构建。使用此选项可强制预构建链接的包。
		// esbuildOptions: [""], // 在部署扫描和优化过程中传递给 esbuild 的选项。
		force: true, //设置为 true 可以强制依赖预构建，而忽略之前已经缓存过的、已经优化过的依赖。
		// boolean | 'build' | 'dev'
		disabled: "build", // 用依赖优化，值为 true 将在构建和开发期间均禁用优化器。传 'build' 或 'dev' 将仅在其中一种模式下禁用优化器。默认情况下，仅在开发阶段启用依赖优化。
	},

	// 预览相关配置
	preview: {
		// 为开发服务器指定 ip 地址。 设置为 0.0.0.0 或 true 会监听所有地址，包括局域网和公共地址。
		// 还可以通过 CLI 进行设置，使用 --host 0.0.0.0 或 --host。
		host: true,
		// 端口号，如果被占用则会改变
		port: 8080,
		// 如果ture,端口号被占用则直接退出
		strictPort: true,
		// 项目启动起来后自动打开浏览器
		open: true,
	},

	// 调整控制台输出类型
	// 'info' | 'warn' | 'error' | 'silent'
	logLevel: "info",

	// 设为 false 可以避免 Vite 清屏而错过在终端中打印某些关键信息。命令行模式下可以通过 --clearScreen false 设置。
	clearScreen: false,
});
