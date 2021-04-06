/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/

function TodoItem({ item, onItemClick }) {

  return (
    <label className={item.done ? 'panel-block has-text-grey-light': 'panel-block'}>
            <input type="checkbox" onClick={() => onItemClick(item)}/>
            {item.text}
    </label>
  );
}

export default TodoItem;