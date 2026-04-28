import React from 'react'
 <link href="/src/App.css" rel="stylesheet"></link>
const App = () => {
  return (
    <div>
      
    <h1 className="text-3xl font-bold underline bg-green-700">
    Hello world!
    </h1>


    <div class="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
      <img class="size-12 shrink-0" src="/img/logo.svg" alt="ChitChat Logo" />
    <div>
    <div class="text-xl font-medium text-black dark:text-white">ChitChat</div>
    <p class="text-gray-500 dark:text-gray-400">You have a new message!</p>
    </div>
    </div>


    </div>
  )
}

export default App
