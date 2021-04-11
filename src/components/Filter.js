/* 
  【Filterコンポーネント】
　・該当するTodoをステータス毎にで分けてリスト表示する
　・タブで表示する
　・サポートするステータスは「すべて」「未完了」「完了済み」
*/
import React, { useState } from 'react' 
function Filter({ onFilterClick }) {
    const [filteredItems, setfilteredItems] = useState([
        {id: 1, text: "全て", isActive: true},
        {id: 2, text: "未完了", isActive: false},
        {id: 2, text: "完了済み", isActive: false},
        ]);
    
    const handleOnClick = (element) =>{
        let newItems = [];
        
        for(const item of filteredItems){
            if(item.id === element.id){
                item.isActive = true;
            } else item.isActive = false;
            
            newItems.push(item);
        }
        
        setfilteredItems(newItems);
        onFilterClick(element);
    }
        
  return (
    <div className="panel-tabs">
    {filteredItems.map((element, key) => (
        <a
            className={element.isActive ? "is-active":""}
            key={key}
            onClick={()=>handleOnClick(element)}
        >{element.text}</a>
        
    ))}
    </div>
  );
}

export default Filter