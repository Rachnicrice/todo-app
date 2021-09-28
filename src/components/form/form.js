import React from 'react';
import useForm from '../../hooks/form';

import { v4 as uuid } from 'uuid';


function Form (props) {

  const { handleChange, handleSubmit } = useForm(addItem);

  function addItem(item) {
    item.id = uuid();
    item.complete = false;
    props.setList([...props.list, item]);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add To Do Item</h2>

      <label>
        <span>To Do Item</span>
        <input onChange={handleChange} name="text" type="text" placeholder="Item Details" />
      </label>

      <label>
        <span>Assigned To</span>
        <input onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />
      </label>

      <label>
        <span>Difficulty</span>
        <input onChange={handleChange} defaultValue={3} type="range" min={1} max={5} name="difficulty" />
      </label>

      <label>
        <button type="submit">Add Item</button>
      </label>
    </form>
  );
}

export default Form;