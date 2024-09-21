import React, { useState, useMemo } from 'react';

function ListFilter() {
  const [query, setQuery] = useState('');
  const [count, setCount] = useState(0);

  const items = [
    'apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape', 'honeydew'
  ];

  // useMemo memoriza a lista filtrada
  const filteredItems = useMemo(() => {
    console.log('Filtrando itens...');
    return items.filter(item => item.toLowerCase().includes(query.toLowerCase()));
  }, [query]); // Reexecuta apenas quando 'query' mudar

  return (
    <div>
      <input 
        type="text" 
        placeholder="Pesquisar..." 
        value={query} 
        onChange={e => setQuery(e.target.value)} 
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={() => setCount(count + 1)}>Incrementar contador: {count}</button>
    </div>
  );
}

export default ListFilter;
