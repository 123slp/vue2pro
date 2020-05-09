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
// 遍历树结构 改变深度
let limitSelectLevels = (arr, level) => {
  let resFunc = (options, num) => {
    for (let i = 0; i < options.length; i++) {
      let item = options[i];
      if (num < level - 1) {
        if (item.children && item.children.length > 0) {
          resFunc(item, ++num);
        }
      } else {
        delete item.children;
      }
    }
  };
  resFunc(arr, 0);
  return arr;
};
// 返回两数之和=target的下标   for-for时间复杂度 O(n2) 和 哈希表-登记册
var twoSum = function(nums, target) { // 时间复杂度 O(n)
  let res = {};
  for (let i = 0; i < nums.length; i++) {
    if (res[nums[i]] !== undefined) {
      return [res[nums[i]], i];
    } else {
      res[target - nums[i]] = i;
    }
  }
  console.log(res);
};
twoSum([1, 2, 3, 4, 5], 7);

// 返回满足三个数之和的集合  一个数用一次  3层for循环
var threeSum = function(nums) { // 时间复杂度 O(n3)
  let res = [];
  for (let i = 0; i < nums.length - 2; i++) { // 每个人
    for (let j = i + 1; j < nums.length - 1; j++) { // 依次拉上其他每个人
      for (let k = j + 1; k < nums.length; k++) { // 去问剩下的每个人
        if (nums[i] + nums[j] + nums[k] === 0) { // 我们是不是可以一起组队
          res.push([nums[i], nums[j], nums[k]]);
        }
      }
    }
  }
  return res;
};
// 快速排序
function quickSort2(arr) {
  const pivot = arr.shift();
  const left = [];
  const right = [];

  if (arr.length < 2) { return arr; }

  arr.forEach((element) => {
    element < pivot ? left.push(element) : right.push(element);
  });

  return quickSort2(left).concat([pivot], quickSort2(right));
}

// 选择排序
var a = [4, 12, 13, 4, 3, 42, 33, 4, 43, 44];
var temp;
var minIndex;

for (var i = 0; i < a.length; i++) {
  minIndex = i;
  for (var j = i + 1; j < a.length; j++) {
    if (a[minIndex] > a[j]) {
      minIndex = j;
    }
  }
  temp = a[minIndex];
  a[minIndex] = a[i];
  a[i] = temp;
}