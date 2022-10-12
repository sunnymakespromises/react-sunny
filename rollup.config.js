import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import postcss from "rollup-plugin-postcss";
import external from "rollup-plugin-peer-deps-external";
import nodePolyfills from 'rollup-plugin-polyfill-node';

const packageJson = require("./package.json");

export default [
	{
    	input: "src/index.js",
    	output: [
    		{ file: packageJson.main, format: "cjs", sourcemap: true },
      		{ file: packageJson.module, format: "esm", sourcemap: true },
    	],
		resolve: ({ 
			preferBuiltins: false 
		}),		
    	plugins: [
      		resolve(),
			nodePolyfills(),
      		commonjs({ include: ['node_modules/**'] }),
      		babel({
        		exclude: "node_modules/**",
        		presets: ["@babel/env", "@babel/preset-react"],
        		babelHelpers: 'bundled'
      		}),
      		postcss(),
      		external(),
    	],
  	},
];