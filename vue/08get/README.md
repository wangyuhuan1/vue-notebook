### 1.安装rem

```
yarn add lib-flexible postcss-pxtorem
```

### 2.postcss.config.js

```js
module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-pxtorem': {
      rootValue: 75,
      propList: ['*']
    }
  }
}
```

### 3.main.js导入

```
import 'lib-flexible/flexible'
```



### 1.安装

```
yarn add vue-router
```

### 2.routers/index.js



## 三、拆分配置文件

//main.js

```js
import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import '../utils/config'
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

```

//utils/config.js

```js
import Vue from 'vue';
import 'lib-flexible/flexible'
import BsBtn from '@/components/BsBtn.vue'
Vue.filter("format",function(val){
  if(val.length>6){
    val=val.slice(0,6)+"..."
  }
  return val
})
Vue.component('BsBtn',BsBtn)
export default Vue

```

