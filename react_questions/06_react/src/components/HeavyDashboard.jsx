import React,{useMemo, useCallback} from 'react'

// 1. Component Memoization: Prevents re-rendering if props do not change
const HeavyDashboard = React.memo(({item, onRefresh}) => {

     // 2. Value Memoization: Caches expensive computation results

     const  totalSum = useMemo( ()=>{
        console.log("calculating ");
        // Simulate a hard-to-calculate array aggregation
        return item.reduce((acc, crrVal)=> acc + crrVal.value, 0)
     },[item])

      // 3. Callback Memoization: Keeps function reference stable
      const handleItemClick = useCallback((id)=>{
            console.log(`item clicked ${id}`);
      },[])

       // Simulating an unexpected rendering crash for the Error Boundary to catch

       if(item.some(item=>item.value < 0)){
        throw new Error ("Dashboard crashed: Negative values are strictly forbidden!")
       }


  return (
    <div>
        <h3>📊 Heavy Analytics Dashboard (Code-Split)</h3>
        <p><strong>Total Computed Sum:</strong> {totalSum}</p>
        <button onClick={onRefresh}>Refresh Random Data</button>
      
      <ul>{
        items.map((item,)=>(
            <li key={item.id} onClick={()=>handleItemClick(item.id)}>
                Item #{item.id}:{item.value}

            </li>
        ))
        }</ul>
    </div>
  )
})
// React.lazy requires a default export to correctly hook up dynamic imports
export default HeavyDashboard
