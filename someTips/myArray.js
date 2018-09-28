var rawArr = [1, 2, 2, 5, 6, 6, 3, 3, 5, 6, 11, 53, 23, 4,32, 32 ,43, 32,'nihao','hello','world','hello','nihao','is this']
  function  IndexSelect  () {
        var selectArr = []
        rawArr.forEach(item =>{
            if (selectArr.indexOf(item) == -1) 
            selectArr.push(item);
        })
        console.log(rawArr)
        console.log(selectArr)
        return selectArr
    }
    IndexSelect(rawArr)
    function ObjectSelect () {
        var selectArr = []

    }
    function IndexSelect1 () {
        var selectArr = []
        for(i=0; i<rawArr.length; i++){
            if(rawArr.indexOf(rawArr[i]) == i)
            selectArr.push(rawArr[i])
        }
        console.log(selectArr)
    }
    IndexSelect1(rawArr)
    function sortSelect () {
        rawArr.sort()
            var selectArr = []
            for(let i=0; i<rawArr.length; i++){
                if(rawArr[i] !== selectArr[selectArr.length-1])
                selectArr.push(rawArr[i])
            }
            console.log(selectArr,rawArr)
            return selectArr
    }
    console.log(sortSelect(rawArr))
    function doubleFor () {
        var selectArr= []
        for (let i=0;i<rawArr.length;i++){
            for (let j=i+1;j<rawArr.length; j++){
                if(rawArr[i] === rawArr[j])
                 j=++i;
            }
            selectArr.push(rawArr[i])
        }
        console.log(selectArr,'双重for循环遍历去重')
    }
   doubleFor(rawArr)
   var mychart = echarts.init(document.getElementsByClassName('view')[0])
   var options = {
    title: {
        text: 'ECharts 入门示例'
    },
    tooltip: {},
    legend: {
        data:['销量']
    },
    xAxis: {
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
};
mychart.setOption(options)
var child = document.getElementsByClassName('child')[0]
 testClick= function(e){
     console.log('enter')
    console.log(e.target, e.srcElement)
}
child.onclick= function(e) {
    console.log(e,'get it ')
}
child.addEventListener('click',(e) => {
    console.log('just do IT',e)
})
window.addEventListener('click',(e) => {
    console.log(child)
    console.log(e.target)
    if (child.contains(e.target)){
        alert ('the child is  clicked!')
    }
})
document.getElementsByClassName('align1')[0].addEventListener('drag',(e) => {
    console.log(e.target,'drag')
})
 var testStr = '     hello world !      '
 function clearSpace (str) {
     if (str && typeof str === 'string') {
         return str.replace(/(^\s*)|(\s*)$/g,"")
     }
 }
 function deleteSpace (str) {
     if (str && typeof str === 'string') {
         return str.substring(0,str.length-1)
     }
 }
 console.log(clearSpace(testStr),deleteSpace(testStr) )
 console.log(Math.random())
 function grandParent () {
     this.people = 'chinese'
 }
 Parent.prototype = new grandParent()
  function Parent () {
      this.first = 'leo'
  }
  function Child () {
      this.age = 18
  }
  Child.prototype =new  Parent()
  var littleChild = new Child()
  console.log(new Child(),littleChild.first,littleChild.people)
  var nodes = document.getElementsByTagName("li");
  for(i = 0;i<nodes.length;i+= 1){
      nodes[i].onclick = (function(i){
                console.log(i)
                return function() {
                   console.log(i);
                }
                 //不用闭包的话，值每次都是4
              })(i);
        // nodes[i].onclick= function (){
        //     console.log(i)
        // }
  }
  var a = 'hello world'
  var a;
  console.log(a)
  console.log(window.localStorage)
  console.log(window.cookies)
  window.localStorage.setItem('a','hello')
  window.sessionStorage.setItem('aa','world')
  console.log(window.sessionStorage.getItem('aa'))
  console.log(window.localStorage.getItem('a'))
 var bindfunction = {
     name:'paradian',
     getName:function () {
         return this.name
     }
 }
  
var getbind = bindfunction.getName;
console.log(getbind())
// var getbind1 = getbind.bind(bindfunction)
// console.log(getbind1(),'mophito')
 for(let a =0;a<10;a++) {
     console.log(a)
 }