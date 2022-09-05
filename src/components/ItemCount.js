import React, {useState} from 'react'

function ItemCount () {
const [count, setCount] = useState(0);
  return (
    <div>
       <button onClick={() => setCount(count + 1)}>
        Click me
       </button>
       <p>{count}</p>

    </div>
  )
}

export default ItemCount