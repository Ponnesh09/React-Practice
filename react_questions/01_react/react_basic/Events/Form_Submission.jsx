import React from 'react'

const Form_Submission = () => {

    const handleSubmit = (event)=>{
        event.preventDefault();
        console.log("form was submitted successfully");        
    }

  return (
    <div>
      <form onSubmit={handleSubmit} action="submit">
        <button type='submit'>Submit Form</button>
      </form>
    </div>
  )
}

export default Form_Submission
