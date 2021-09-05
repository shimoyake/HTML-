'use strict'; 

//result id=上部の数字を表示する部分
let result= document.getElementById("result");

//最初の入力が0の時、続けて入力できないようにする
function number(elem) {
  if(result.value==="0") {
    return;
  }else {
    result.value = result.value + elem.value;
  }
}

//記号のボタンも同じ
function edit(elem) {
   
  if(result.value.slice(-1)==="+") {
  return;
   
  }else if(result.value.slice(-1)==="-") {
  return;
   
  }else if(result.value.slice(-1)==="*") {
  return;
   
  }else if(result.value.slice(-1)==="/") {
  return;
   
  }else{
    result.value= result.value + elem.value; 
}
}

//=ボタンで計算　calc()関数：値を計算できる+-*の４種
function calc() {
  result.value = new Function("return " + result.value)();
}

//ACボタンを押したときの更新
function update() {
  result.value="";
}
/**/