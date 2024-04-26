/*
document.write("<script language=javascript src='./crypto-js.min.js'></script>");

function show() {
  var t = document.getElementById('output'); //选取id为test的元素
  t.hidden = false;
}

function hide() {
  var t = document.getElementById('output'); //选取id为test的元素
  t.hidden = true; // 设置隐藏元素
}

//获取地址栏属性，name 为参数名称
function getUrlParam(name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)'); //构造一个含有目标参数的正则表达式对象
  var r = window.location.search.substr(1).match(reg); //匹配目标参数
  if (r != null) return unescape(r[2]);
  return null; //返回参数值
}

function genUid() {
  let currentDate = new Date();
  let month = currentDate.getMonth();
  const secretKey = '3u99x5hi1es4bjsd0y8at2yrz56s'; // 如果需要可以作为密钥
  return CryptoJS.MD5(month + secretKey).toString();
}
*/
