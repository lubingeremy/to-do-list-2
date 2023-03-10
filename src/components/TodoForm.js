import React, {useState} from 'react';


function TodoForm(props) {

  const [input, setInput] = useState("");

  const handleChange = e => {
    setInput(e.target.value)
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });

    setInput("");
  }

  return (
    <form className='todoForm' onSubmit={handleSubmit}>
      <label for="text">What's the plan for today?</label>
      <div>
        <input
          className='todoInput'
          type="text" 
          placeholder='ex: Be awsome'
          value={input}
          name='text'
          onChange={handleChange}
        />
        <button
          className='todoButton'
        >
          Add
        </button>
      </div>
    </form>
  )
}

export default TodoForm