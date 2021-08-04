window.jQuery = function(selector){
    const elements =document.querySelectorAll(selector)
    const api ={
        addClass(className){
           for(let i=0;i<elements.length;i++) {
               elements[i].calssList.add(className)
        }
        return api
    }
}
   return api
}

//定义了一个叫jQuery的函数
//输入选择器，然后返回能操作选择器的api
//jQuery的核心就是，输入选择器然后返回一个对象
//该对象有能操作选择器的函数
//闭包：函数访问外部的变量