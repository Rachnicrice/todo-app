import React, { useEffect, useState, useContext } from 'react';
import { SiteContext } from '../../context/Site';
import Header from '../header/header';
import Form from '../form/form';
import List from '../list/list';

const ToDo = () => {

  const siteContext = useContext(SiteContext);

  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  function deleteItem(id) {
    console.log(id);
    const items = list.filter( item => item.id !== id );
    setList(items);
  }

  function toggleComplete(id) {
    const items = list.map( item => {
      if ( item.id == id ) {
        item.complete = ! item.complete;
      }
      return item;
    });

    setList(items);
  }

  function filterList () {
    let filtered = list.filter(item => item.complete !== siteContext.displayCompleted);
    setFilteredList(filtered);
  }

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
    filterList();
  }, [list]);

  return (
    <>
      <Header incomplete={incomplete}></Header>
      <section>
        <Form list={list} setList={setList} ></Form>
        <List list={list} toggleComplete={toggleComplete} deleteItem={deleteItem}></List>
      </section>
    </>
  );
};

export default ToDo;