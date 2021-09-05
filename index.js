'use strict'; 

//result id=上部の数字を表示する部分
let result= document.getElementById("result");

//最初の入力が0の時、続けて入力できないようにする
function number(elem) {
  if(result.value==="0") {
    result.value= elem.value; //入力０の時に別の値入力したら上書きする
  }else {
    result.value= result.value + elem.value; //入力されてる値に、新しく入力した値をつか加える
  }
}
  //result.value=表示されてる値、elem.value=新しく入力した値


//記号のボタンも同じ
//処理：returnにすることで次に演算子の入力ができなくなる
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