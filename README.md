# jQuery
预览链接：https://liyuanmeng505316314.github.io/jQuery/

#实现方式
封装了一个JQuery函数

#检查
先找到含test类的元素，再在这些元素里找到child类元素节点，给这些节点添加类
先找到含test类的元素，给这些元素添加类名
(```)
jQuery('.test').find('.child').addClass('red').addClass('blue')    
jQuery('.test').addClass('blue')    
(```)

#心得体会
//定义了一个叫jQuery的函数
//输入选择器，然后返回能操作选择器的api
//jQuery的核心就是，输入选择器然后返回一个对象
//该对象有能操作选择器的函数
//闭包：函数访问外部的变量
//jQuery的精髓，给定范围，返回一个对象，该对象有些方法，能让你自由的操纵那些对象 
// const api = jQuery('.test')
// api.addClass('red').addClass('blue')
// jQuery('.test').addClass('red').addClass('blue')
// obj.fn(pi) 和obj.fn.call(obj,p1)等价
