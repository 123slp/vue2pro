// 将数组里面的某个对象换成另一个
var list = [{
  id: 1,
  name: "a"
},
{
  id: 2,
  name: "a"
},
{
  id: 3,
  name: "a"
}
];
let replaceObj = {
  id: 2,
  name: "d"
};
var newList = list.map(item => {
  return item.id === replaceObj.id ? replaceObj : item;
});
console.log(newList);
// 阻止默认行为
document.body.addEventListener("touchmove", (e) => {
  e.preventDefault();
}, false);
// 点击dom弹出索引值
// 方式一，使用利用事件冒泡委托给列表的父节点去处理的方式：
var ulObj = document.getElementById("myUl");
ulObj.onclick = function(event) {
  var tg = event.target;
  var liArray = ulObj.getElementsByTagName("li");
  for (var i = 0; i < liArray.length; i++) {
    if (liArray[i] === tg) {
      alert(i + 1);
    }
  }
};
// 方式二：
var li = document.getElementsByTagName("li");
for (var i = 0; i < li.length; i++) {
  li[i].index = i; // 给每个li定义一个属性索引值，赋
  li[i].onclick = function() {
    alert("下标索引值为：" + this.index); // 索引值从0开始
  };
}
// 方式三，使用闭包：
var liArray = document.getElementById("myUl").getElementsByTagName("li");
for (var j = 0; j < liArray.length; j++) {
  (function() {
    var n = j;
    liArray[j].onclick = function() {
      alert(n + 1);
    };
  })(j);
}