import { useState } from 'react';

export default function Sample({loading, data}) {
  const [checkItems, setCheckItems] = useState([]);

  // 체크박스 단일 선택 & 전체 선택
  const handleSingleCheck = (checked, id) => {
    if (checked) {
      setCheckItems(prev => [...prev, id]);
    } else {
      setCheckItems(checkItems.filter((el) => el !== id));
    }
  };
  const handleAllCheck = (checked) => {
    if(checked) {
      const idArray = [];
      data.forEach((el) => idArray.push(el.id));
      setCheckItems(idArray);
    }
    else {
      setCheckItems([]);
    }
  }

  return (
    <table>
      <thead>
        <tr>
          <th>
            <input type='checkbox' name='select-all'
              onChange={(e) => handleAllCheck(e.target.checked)}
              checked={
                checkItems.length === data.length
                  ? true
                : false
              } />
          </th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((data, key) => (
          <tr key={key}>
            <td>
              <input type='checkbox' name={`select-${data.id}`}
                onChange={(e) => handleSingleCheck(e.target.checked, data.id)}
                checked={checkItems.includes(data.id) ? true : false} />
            </td>
            <td>{data.title}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}