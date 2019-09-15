# webpack 2019 


## 安裝

1. 安裝 node.js  9x 版本以上
2. 


## 執行

1. `npm run dev`   開發使用   ["dev": "webpack-dev-server --open " ]
2. `npm run watch` 監看使用          ["watch": "webpack -d --｀watch"]
3. `npm run prod`  輸出使用 production      "prod": "webpack --mode production"


## 開發

1. `./src/sass/`  sass 開發檔案

2. 




## 套件

- 清理 dist 檔案
- 產生 stye.css 檔案
- 生成html 檔案



## 使用手冊


## 套件

- https://github.com/jantimon/html-webpack-plugin#options
  生成html 檔案 注入資源

## 文章


 - Webpack 出新手簡單起手式（打包jquery+bootstrap+Babel+less+css+其餘外掛）
https://medium.com/@weisheng1202/webpack-%E5%87%BA%E6%96%B0%E6%89%8B%E7%B0%A1%E5%96%AE%E8%B5%B7%E6%89%8B%E5%BC%8F-%E6%89%93%E5%8C%85jquery-bootstrap-babel-less-css-%E5%85%B6%E9%A4%98%E5%A4%96%E6%8E%9B-d7c31a5e6f00


- 自动加载模块，而不必到处 import 或 require 。
https://www.webpackjs.com/plugins/provide-plugin/



# html-webpack-plugin 配置

```jsx=
this.options = _.extend({
    template: path.join(__dirname, 'default_index.ejs'),
    filename: 'index.html',
    hash: false,
    inject: true,
    compile: true,
    favicon: false,
    minify: false,
    cache: true,
    showErrors: true,
    chunks: 'all',
    excludeChunks: [],
    title: 'Webpack App',
    xhtml: false
  }, options);
```

- #### title

生成的html文檔的標題 
配置方式 `<%= htmlWebpackPlugin.options.title %>`


- #### filename

輸出文件的文件名稱，默認為index.html，不配置就是該文件名；此外，還可以為輸出文件指定目錄位置（例如'html/index.html'）


- #### template

本地模板文件的位置，支持加載器(如handlebars、ejs、undersore、html等)，如比如 `handlebars!src/index.hbs`

- #### inject

向template或者templateContent中注入所有靜態資源，不同的配置值注入的位置不經相同。

- 1 `true或者body` 所有JavaScript資源插入到body元素的底部
- 2  `head` 所有JavaScript資源插入到head元素中
- 3  `false` 所有靜態資源css和JavaScript都不會注入到模板文件中


- #### favicon

favicon  : 添加特定favicon路徑到輸出的html文檔中，這個同title配置項，需要在模板中動態獲取其路徑值


- #### chunks

chunks：允許插入到模板中的一些chunk，不配置此項默認會將entry中所有的chunk注入到模板中。在配置多個頁面時，每個頁面注入的thunk應該是不相同的，需要通過該配置為不同頁面注入不同的thunk；


## 參考文件
zh  https://www.cnblogs.com/wonyun/p/6030090.html
en  https://github.com/jantimon/html-webpack-plugin

## 延伸閱讀

1. webpack 二三事：如何讓 CommonsChunkPlugin() 發揮最大效益
https://medium.com/frochu/webpack-commons-chunk-plugin-f2e4bd853c26



2. 概念術語
  https://webpack.docschina.org/glossary




# path.join() 和 path.resolve() 區別

https://zhuanlan.zhihu.com/p/27798478