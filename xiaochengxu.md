# 微信小程序学习记录

## 微信小程序开发框架
### WXML
WwXin Markup Language，是框架设计的一套标签语言，结合组件、WXS 和事件系统，可以构建页面的结构。
- 语法：
      <标签名 属性名=“属性名1” 属性名=”属性名2” ···>
        ···
      </标签名>

变量名加双大括号；
- 属性
| 属性名         |类型            | 描述            | 注解 |
| :-----------  | :-----------  | :-------------  | :--  |
| id            | String        | 组件的唯一标示    |  保持整个页面唯一 |
| class         | String        | 组件的样式类      |   在对应的WXSS中定义的样式类     |
| style         | String        | 组件的内恋样式    |   可以动态设置的内联样式 |
| hidden        | Boolean       | 组件是否显示     | 所有组件默认显示 |
| data-*        | Any           | 自定义属性       |    组件上触发的事件时，会发送给事件处理函数 |
| bind\* /catch\* | EventHandler  | 组件的事件       |    详见事件 |

- 数据绑定
- 列表渲染
- 条件渲染
- 模版引用
template     代码自建模版
import       文件引用，作用域在模版内
include      文件引用，作用域在模版外


### WXSS
Weixin Style Sheets，是一套样式语言，用于描述WXML的组件样式。
- 尺寸单位rpx
设备像素(device pixels)   :设备能显示的最小物理像素
CSS像素(CSS pixels)       :css 样式的虚拟像素
PPI/DPI(pixel per inch)  :每英寸拥有的像素数
DPR(devicepixelRatio)    :设备像素在某一方向上与CSS像素之比
- 样式导入
@import
- 内联样式
静态样式写入class，动态样式写入style；
- 选择器
| 选择器 | 样例  | 样例描述 |
|-------|------|---------|
| .class | .intro | 选择所有拥有class'intro'的组件|
| #id | #firstname | 选择拥有id='firstname'的组件|
| element | view | 选择所有view组件|
| element,element| view, checkbox| 选择所有文档的view组件和所有的checkbox组件|
| ::after | view::after | 在view组件后边插入内容|
| ::before | view::before | 在view组件前边插入内容|

选择器优先级(按权重值大小处理优先级)
> !important     ∞
  style          1000
  #element       100
  .element       10
  element        1


### Java Script
一种轻量的、解释型的、面向对象的头等函数语言，是一种动态的基于原型和多范式的脚本语言，支持面向对象、命令式和函数式的编程风格。
- Nodejs中的JavaScript三大模块
> ECMAScript ：通过ECMA-262标准化的脚本程序设计语言
  Native ：原生模块，具备一些Javascript没有的功能
  NPM ：包管理系统，开源库

- 小程序中的JavaScript三大模块
> ECMAScript
  小程序框架
  小程序API

- 浏览器中的JavaScript三大模块
> ECMAScript
  DOM
  BOM

### WXS:
- 模块
- 变量
- 注释
>单行注释： // 单行注释
 多行注释： /* -- /*   多行注释

- 运算符
> 基本运算符
  一元运算符
  位运算符
  比较运算符
  等值运算符
  赋值运算符
  二元逻辑运算符

- 语句
- 数据类型
> number
  string
  boolean
  object
  array
  function
  date
  regexp

- 基础类库
> console，仅含log 方法
  Math
  JSON
  Number
  Date
  Global

### MINA框架


### 路由

### 事件流
事件是视图层到逻辑层到通讯方式；
事件可以将用户到行为反馈到逻辑层进行处理；
事件可以绑定在组件上，触发事件后，就会执行逻辑层中对应到事件处理函数；
事件对象可以携带额外信息；

事件流程：事件捕获阶段---事件处理阶段---事件冒泡阶段

可捕获事件：touchstart, touchmove, touchcancel, touchend, tap, longpress, longtap
可冒泡事件：touchstart, touchmove, touchcancel, touchend, tap, longpress, longtap, transitionend, animationstart, animationiteration, touchforcechange


