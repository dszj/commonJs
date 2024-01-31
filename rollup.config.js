import babel from 'rollup-plugin-babel';
import {uglify} from 'rollup-plugin-uglify';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import json from 'rollup-plugin-json';

const env = process.env.npm_lifecycle_event

const config = {
  input: 'src/main.js',                        // 告诉rollup，不打包react,redux;将其视为外部依赖
  output: {
    format: 'iife',//iife  umd
    file: 'dist/common.js', // 打包后输出文件
    name: 'ds',  // 打包后的内容会挂载到window，name就是挂载到window的名称
    sourcemap: true // 代码调试  开发环境填true
  },
  plugins: [
    json(),
    babel({
      exclude: "node_modules/**"
    }),
  ]
}

if (env === 'build') {
  config.plugins.push(
    uglify({
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        // warnings: false
      }
    })
  )
}else{
  config.plugins.push(
    // 热更新 默认监听根文件夹
    livereload()
  )
  config.plugins.push(
    // 本地服务器
    serve({
    //   open: true, // 自动打开页面
      port: 8880, 
      openPage: '/public/index.html', // 打开的页面
      contentBase: ''
    })
  )
}

export default config