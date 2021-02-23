## ref 
- [Hot reload doesn't reflect frontmatter nor config.js changes](https://github.com/vuejs/vuepress/issues/1283#issuecomment-629849407)
- ```npm i -D nodemon```
- Add to the scripts block in package.json
```
"start": "nodemon --ext md,vue --watch .vuepress --watch . --exec vuepress dev"
```
- Start vuepress with ```npm start```

After a change in .vue or .md files the vuepress dev command will be executed. The changes can be seen after a browser refresh.