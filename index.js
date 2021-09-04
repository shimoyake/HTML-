'use strict'; 

var result = document.getElementById("result");
//resultをHTMLのID=resultと連携させる


//ボタンを押したときに数字を表示する、この処理では一文字のみ
//myValue＝今入力されてる数字
function append(myValue) // input tag を更新する関数
    {
      document.querySelector( 'input' ).value = myValue
    }

    //document.querySelector()：指定した要素ないの最初のものを返す
    //id要素を指定した場合は、('#id名')



//新しく入力した数字をmyValueに+=で連結
function append(myValue) // 数字ボタンが押されたので数字を後ろに追加する
    {
      var start =document.querySelector( 'input' ).value += myValue
    }


//ACボタンを押したときの更新
function update(myValue) 
    {
    document.querySelector( 'input' ).value = myValue
    }

//calc()関数：値を計算できる+-*/の４種
//「=」を押してからの計算
function calc() 
    {
      const v = document.querySelector( 'input' ).value
      const f = new Function( 'return ' + v )
      update( f().toString() )  
        //合計値を文字列として上書きする
    }
    //toString()：文字列で返す 12ではなく"12"
    //( f().toString() ) ：変数fのオブジェクトを文字列として返す指示
