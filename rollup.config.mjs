import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import commonjs from '@rollup/plugin-commonjs';

export default [
    {
        input: "src/index.js",
        output: [
            {
                file :"dist/index.esm.js",
                format: 'es', 
                exports: "named"
            },
            ],
        plugins: [
            resolve(),
            babel({
                babelHelpers: "runtime",
                exclude: "node_modules/**",
                presets: ["@babel/preset-react"]
            }),
            commonjs()
        ]
    }
]