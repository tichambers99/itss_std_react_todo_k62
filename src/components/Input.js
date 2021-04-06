import React, { useState } from 'react';
/* 
  【inputコンポーネント】
　・新しいTodoを作成するINPUTフィールドを作成するコンポーネント
　・Enterをクリックされたら入力された文字を使って新しいTodoを作成する
*/
function Input(  ) {

  return (
    <div className="panel-block">
      <input type="text" />
      <button>Add item</button>
    </div>
  );
}

export default Input;
