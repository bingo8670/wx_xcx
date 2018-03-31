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
- 内联样式
- 选择器

### WXS:
### Java Script:
