## typeScript 基础

### 编译方式
1. 安装  npm install -g typescript

2. 指定比那一的文件  tsc hello.ts

3. 通过tsconfig.json 编译  直接 tsc (这里可以有更多的设置)

4

### 基本类型和扩展类型

1. 除啦和js共享的数据类型之外还有额外类型
    - 元组 <em>tuple<em>
    - 枚举 enum
    - Any 与 Void 
    
```js
// 数字，二、八、十六进制都支持
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;

// 字符串，单双引都行
let name: string = "bob";
let sentence: string = `Hello, my name is ${ name }`

// 数组，第二种方式是使用数组泛型，Array<元素类型>：
let list: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3];

let u: undefined = undefined;
let n: null = null;

// 特殊类型
//元组 
let tuple: [number, string, string]
tuple = ['123', 12, '123']

// 枚举 enum类型是对JavaScript标准数据类型的一个补充


//  ts中定义的函数必须有返回值，否则会报错,可以将放回值类型定位void


function say(name: string): void{
    console.log(name)
}
say('')

// 当无法确定类型时用Any，但要慎用，用多了就失去ts 的意义了
let person: any = "前端劝退师"
person = 25
person = true

```
2. 类型断言 <类型>值 或 值 as 类型
有的时候需要获取某个数据上的属性或者方法，但不确定数据类型

```js
function getLength(something: string | number): number {
    if((<string>something).length) { //直接使用 something.length 报错，使用断言
        return (<string>something).length
    }else {
        return something.toString().length
    }
}
```
    
#### 安全导航操作符（?.） 非空断言操作符（!.）

- ?. (为了解决导航变量值为null，页面运行出错)

this.page name is {{ nullHero?.name }}

- !. 与安全导航操作符不同的是，非空断言操作符不会防止出现 null 或 undefined。
let s = e!.name;  // 断言e是非空并访问name属性
- ?: 可选参数
```js
function buildName(firstName: string, lastName?: string) {
    return firstName + ' ' + lastName
}

// 错误演示
buildName("firstName", "lastName", "lastName")
// 正确演示
buildName("firstName")
// 正确演示
buildName("firstName", "lastName")

```

### 泛型 Generics 主要是为了实现创建可复用的组件
1. 泛型方法
 ```js
function gen_func1<T>(arg: T): T {
    return arg;
}
// 或者
let gen_func2: <T>(arg: T) => T = function (arg) {
}
// 调用
gen_func1<string>('Hello world');
gen_func2('Hello world'); 
// 第二种调用方式可省略类型参数，因为编译器会根据传入参数来自动识别对应的类型。

```


### 访问修饰符： private/ public/ protected
1. 默认是 public
2. 当车成员被标记为private时。它就不能在声明它的类的外部使用

```js
class Animal {
    private name: string;
    constructor(theName: string) {
        this.name = theName;
    }
}

let a = new Animal('Cat').name; //错误，‘name’是私有的

```
3.  protected和private类似，但是，protected成员在派生类中可以访问

```js
class Animal {
    protected name: string;
    constructor(theName: string) {
        this.name = theName;
    }
}

class Rhino extends Animal {
    constructor() {
        super('Rhino');
   }         
   getName() {
       console.log(this.name) //此处的name就是Animal类中的name
   }
} 

```

### vue-property-decorator使用指南


1. 它包含的修饰符有
    * @Component
    * @Prop
    * @Model
    * @Watch
    * @Emit
    * @Inject
    * @Provide
    * Mixins

2. @Component
```js
import {comA, comB} from './component'
import {Component, Vue} from 'vue'
@component({
    components: {
        comA,
        comB
    },
    directives: {
        focus: {
            inserted: function(el) {
                el.focus()
            }
        }
    }
})
export default class MyCom extends Vue{
    
}

```

### vue中使用 vuex=== vuex-class

1. 包含的修饰符
* @Action
* @State
* @Getter
* @Mutation
* namespace

store.js
```js
// msg模块
import Vuex, { ActionTree } from 'vuex'
const state = {
    msg: '我是msg的state'
}
let id = 0;

const actions: ActionTree<any, any> = {
    changeMsg ({state, commit}, msg: any) {
        let newMsg = msg + id++;
        commit('SET_MSG', newMsg)
    }
}
export default {
    namespaced: true, 
    state,
    actions: actions,
    mutations: {
        SET_MSG(state: any, msg: any) {
            state.msg = msg
        }
    }
}

// 总的store
export default new Vuex.Store({
  state: {
    token: getToken,
    isCollape: false,
  },
  getters: {
    token: (state: any) => state.token,
    collape: (state: any) => state.isCollape,
  },
  actions,
  mutations: {
    SET_TOKEN(state: any, data: any) {
      state.token = data
    },
    SET_COLLAPE(state: any) {
      state.isCollape = !state.isCollape
    },
  },
  modules: {
    Msg
  }
})
```
:::tip
模块的namespace设置为false,则使用的时候可以直接按照全局的方式引用，如果为true,使用则需声明模块名称
:::
使用该store
```js
import { State, Action, Getter, Mutation,namespace } from 'vuex-class'
const msgModule = namespace('Msg'); //获取到msg模块命名空间
@Component
export default class About extends Vue {
   // 两种不同的引用方法
  // @State public isCollape!: boolean 
  @State('isCollape') isCollape
  @Action public toggleCollape!: any
  @Getter public collape!: any
  @Mutation public SET_COLLAPE!: any
  
  @msgModule.Action('changeMsg') changeMsg;
  @msgModule.State(state => state.msg) msg;
  
  // this.toggleCollape()
}
```









