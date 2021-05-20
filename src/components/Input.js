import React, { useState } from 'react';
/* 
  【inputコンポーネント】
　・新しいTodoを作成するINPUTフィールドを作成するコンポーネント
　・Enterをクリックされたら入力された文字を使って新しいTodoを作成する
*/
import {getKey} from "../lib/util";

function Input( {onChangeInput, items} ) {

  const [valueInput, putValueInput] = React.useState({key: "", text: "", done: false});
  
  var handleChangeInput = (event) => {
    putValueInput({key:"",text: event.target.value, done: false});
  }
  
  var onKeyUpInput = (event) => {
    if(event.keyCode === 13){ //key code of Enter key is 13
      valueInput.key = getKey();
      // change state of items -> render list
      onChangeInput({key: valueInput.key, text: event.target.value.trim(), done: false});
      // change value of input to reset to empty value
      putValueInput({key: "", text: "", done: false})
    }
  }
  
  return (
    <div className="panel-block">
      <input
        class="input"
        type="text"
        placeholder="Todoを入力してください"
        value={valueInput.text}
        onChange={event => handleChangeInput(event)}
        onKeyUp={event => onKeyUpInput(event)}
      />
    </div>
)}

export default Input;
