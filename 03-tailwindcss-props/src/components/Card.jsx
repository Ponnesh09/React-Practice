import React from 'react'

const Card = ({username ,title,codeNo,imgLink, btnText = "Visit Me"}) => {                    //{} important
    // console.log("props",props);
    // console.log(username);
    
    
  return (
    <div>
      
    <div className="flex flex-col items-center gap-6 p-5 md:flex-row md:gap-4 rounded-2xl border-2 m-5 w-100" >
    <div>
    <img className="size-auto shadow-xl rounded-md" alt="profile" src={imgLink} />
    </div>
    <div className="flex flex-col items-center ">
    <span className="text-2xl font-medium">{username}</span>
    <span className="font-medium text-sky-500">{title}</span>
    <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
      <span>Code-No {codeNo}</span>
    </span>
    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white border p-1 px-2 rounded-2xl">
      {btnText}
      {/* {btnText || "visit me"} → */}
    </button>
    </div>
    </div>

    </div>
  )
}

export default Card
