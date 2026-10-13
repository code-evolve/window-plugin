export default {
    input: 'src/main.js',
    output: [
        {file: 'dist/index.js', format: 'umd', name: 'WindowPlugin', exports: 'default', sourcemap: true},
        {file: 'dist/index.mjs', format: 'es', sourcemap: true}
    ]
}
