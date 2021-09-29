import React from 'react';
import useForm from '../../hooks/form';

import { Card, Elevation } from '@blueprintjs/core';

import { v4 as uuid } from 'uuid';


function Form (props) {

  const { handleChange, handleSubmit } = useForm(addItem);

  function addItem(item) {
    item.id = uuid();
    item.complete = false;
    console.log(item, props.list);
    props.setList([...props.list, item]);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card elevation={Elevation.ONE} >
        <h4>Add To Do Item</h4>
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
      </Card>
    </form>
  );
}

export default Form;
