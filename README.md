#### 环境搭建

```npm
yarn add redux  react-redux redux-thunk 
```

此次demo中练习 redux、react-redux、redux-thunk

#### 使用redux-thunk

```npm
 yarn add redux-devtools-extension
```

#### 配置store.js

```js
import {composeWithDevTools} from 'redux-devtools-extension'

const store = createStore(
    reducer,composeWithDevTools(applyMiddleware(thunk))
)
```

