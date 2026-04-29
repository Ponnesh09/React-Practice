import React from 'react'
import Card from './components/Card'
 <link href="/src/App.css" rel="stylesheet"></link>
 
const App = () => {

  let myObj = {
    username: "petter",
    age: 21
  }

  let newArr = [1, 2, 3]

  return (
    <div >
      
    <h1 className="text-3xl font-bold underline bg-yellow-400">
    Welcome
    </h1>

    {/* popup */}
    <div className="mx-auto flex max-w-sm items-center gap-x-4 rounded-2xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
    <img className="size-12 shrink-0" src="https://downloadr2.apkmirror.com/wp-content/uploads/2023/04/92/643c40fb195db.png" alt="ChitChat Logo" />
    <div>
    <div className="text-xl font-medium text-black dark:text-white">DoomChat</div>
    <p className="text-gray-500 dark:text-gray-400">Avengers Assemble</p>
    </div>
    </div>
    {/* popup */}

      <div className="mx-auto flex flex-wrap max-w-mx gap-20">
    {/* card start */}
    <Card username="Tony" title = "Iron Man" btnText="click me" codeNo ="02" imgLink ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOlLMhgxgBekrUCej-ZS4VCPalsj3V6EbfQw&s"/>
    <Card username="Petter Parker" title = "Spider Man" btnText="click me" codeNo ="255" imgLink ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzuYmyoBsx9N7PpZEphpRESnm8RDeLKRapcw&s" />
    

      </div>

    

    </div>
  )
}

export default App
