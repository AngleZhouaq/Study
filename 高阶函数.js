//高阶函数的使用 filter/map/reduce

// 1.filter函数的使用
//filter中的回调函数有一个要求：必须返回一个boolean值
//true:当返回为true时，函数内部会自动将这次回调的n加入到新的数组中
//false:当返回为false时，函数内部会过滤掉这次的n
const nums=[10,20,444,56,88,41,50]
//取出小于100的数字
let newnums=nums.filter(function(n){
    // return false;
    return n<100;
})
//结果：newnums=[10,20,56,88,41,50]

// 2.map函数的使用
//将newmums中的数字都*2
let listnums=newnums.map(function(n){
    return n*2;
})
//结果：listnums=[20,40,。。。。。100]

//3.reduce函数的使用
//reduce作用对数组中所有的内容进行汇总 (第一个参数为return的值，第二个参数为初始化preValue值为0)
let total=numtotal.reduce(function(preValue,n){
    return preValue+n;
},0)
// 第一次：preValue:0  n:20
// 第一次：preValue:20  n:40
// 第一次：preValue:60  n:56*2。。。

//总结：经简化后：
let newnums=nums.filter(function(n){
    return n<100
}).map(function(n){
    return n*2
}).reduce(function(preValue,n){
    return preValue+n;
},0)

//最终精简版本：
let total=nums.filter(n=>n<100).map(n=>n*2).reduce((pre,n)=>pre+n);


