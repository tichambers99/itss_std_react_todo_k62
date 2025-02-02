import React, { useState } from 'react';

/* 
  【Todoのデータ構成】
　・key：Todoを特定するID（String）
　・text：Todoの内容（String）
　・done：完了状態（Boolean true:完了済み,, false:未完了）
*/

/* コンポーネント */
import TodoItem from './TodoItem';
import Input from './Input';
import Filter from './Filter';

/* カスタムフック */
import useStorage from '../hooks/storage';

/* ライブラリ */
import {getKey} from "../lib/util";

function Todo() {
  const [items, putItems] = React.useState([
      /* テストコード 開始 */
    { key: getKey(), text: '日本語の宿題', done: false },
    { key: getKey(), text: 'reactを勉強する', done: false },
    { key: getKey(), text: '明日の準備をする', done: false },
    /* テストコード 終了 */
  ]);
  
  const [filterItems, setFilterItems] = useState(items);
  
  const onItemClick = (item) => {
    var newItems = [];
    
    for(var i = 0; i < items.length; i++){
      if(items[i].key === item.key){
          items[i].done = !items[i].done;
      }
      
      newItems.push(items[i]);
    }
    
     putItems(newItems);
    }
    
    const onChangeInput = (newItem) => {
      putItems([...items, newItem]);
    }
    
    const handleOnFilterClick = (element) => {
    if (element.text === "未完了") {
      setFilterItems(items.filter((item) => item.done === false));
    }
    else if (element.text === "完了済み") {
      setFilterItems(items.filter((item) => item.done === true));
    }
    else {
      setFilterItems(items);
    }
  }
    
  return (
    <div className="panel">
        <div className="panel-heading">
          ITSS ToDoアプリ
        </div>
        <Input onChangeInput={onChangeInput} items={items}/>
        <Filter onFilterClick={handleOnFilterClick} />
        {filterItems.map(item => (
          <TodoItem
            key={item.key}
            item={item}
            onItemClick={() => onItemClick(item)}
          />
        ))}
        <div className="panel-block">
          {items.filter(item => item.done === false).length} items
        </div>
    </div>
  );
}

export default Todo;