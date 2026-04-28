import React from 'react';
import Head from './Head';


const App = () => {

  const userName = "petter"

  return (
    <> 
    <Head/>
    <h1>react vite project</h1>
    <h1>we follow this method to our practice section</h1>
    {/* we inject variable inside App.jsx   using JS   */}
    <h1> hii i am {userName}</h1>
    </>
    //  it's called fragment in react 

/* <div> 
<Head/>
<h1>react vite project</h1>
<h1>we follow this method to our practice section</h1>
</div> */    
    
  )
}

export default App
