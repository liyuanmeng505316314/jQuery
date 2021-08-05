window.jQuery = function(selectorOrArray){

    let  elements //elements 用来装初步进行处理后的输入变量

    if(typeof selectorOrArray==='string'){
        elements =document.querySelectorAll((selectorOrArray))
    }else if(selectorOrArray instanceof Array){
        elements = selectorOrArray
    }//其实这里就是对上面的东西进行分类

    //selectorOrArray,或许可以拓展到输入函数的是‘标签==字符串’‘数组对象’‘函数对象’‘普通对象’

    const api={
        find(selector){
            let array=[]
            for(let i=0;i<elements.length;i++) {
                array=array.concat(Array.from(elements[i].querySelectorAll(selector)))               
            }          
        return jQuery(array)
        },
        addClass(className){
            for(let i=0;i<elements.length;i++) {
                elements[i].classList.add(className)
            } 
            return this
        }
    }
    return api
 }
        
//定义了一个叫jQuery的函数
//输入选择器，然后返回能操作选择器的api
//jQuery的核心就是，输入选择器然后返回一个对象
//该对象有能操作选择器的函数
//闭包：函数访问外部的变量
//jQuery的精髓，给定范围，返回一个对象，该对象有些方法，能让你自由的操纵那些对象 
