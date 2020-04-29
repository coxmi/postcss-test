

import postcss from 'rollup-plugin-postcss'


export default {
    input: [
        'src/index.js'
    ],
    output: {
        dir: 'dist',
        format: 'iife',
    },
    plugins: [
        postcss({
            plugins: [],
            extract: 'site.css',
            minimize: false,
            sourceMap: true
        })
    ]
}