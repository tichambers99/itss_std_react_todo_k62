/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
function TodoItem({ item }) {
  
  const onItemClick = () => {
    console.log("1");
    console.log("2");
  }
  
  return (
    <label className="panel-block" onClick={onItemClick}>
            <input type="checkbox" />
            {item.text}
    </label>
  );
}

export default TodoItem;