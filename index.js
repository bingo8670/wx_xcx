# 数据绑定
# 例1、2、3
Page({
  data: {
    message: "数据绑定",
    theName: "Jack",
    flag: false
  }
})


# 列表渲染
Page({
  data: {
    items: [
      { name: "商品A" },
      { name: "商品B" },
      { name: "商品C" },
      { name: "商品D" },
      { name: "商品E" }
    ]
  }
})


# 条件渲染
Page({
  data: {
    condition: Math.floor(Math.random()*3+1)
  }
})

Page({
  data: {
    item: {
      name: "张三",
      phone: "123123123",
      address: "中国"
    }
  }
})


// index.js
Page({
  data: {
      colorValue: 'red'
    }
})

Math.random()     得到一个0到1到小数
Math.floor()      向下取整


# 模版引用
Page({
  data: {
    item: {
      name: "张三",
      phone: "123123123",
      address: "中国"
    }
  }
})


# 内联样式
// index.js
Page({
  data: {
      colorValue: 'red'
    }
})


# 事件
# 例1
// index.js
Page({
  clickMe(e){
    console.log(e)
  }
})


# 例2
// index.js
Page({
  clickA(){
    console.log('click container-A')
  },
  clickB() {
    console.log('click container-B')
  },
  clickC() {
    console.log('click container-C')
  }
})


