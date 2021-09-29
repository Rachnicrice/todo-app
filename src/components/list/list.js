import { useContext, useState, useEffect } from 'react';
import { SiteContext } from '../../context/Site';
import { Card, Elevation, Icon } from '@blueprintjs/core';

import PageButton from '../pageButton/pageButton';


function List(props) {

  const siteContext = useContext(SiteContext);

  const [taskList, setTaskList] = useState([]);
  const [page, setPage] = useState(1);

  const indexOfLastPost = page * siteContext.itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - siteContext.itemsPerPage;
  const currentItems = props.list.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    setTaskList(currentItems);
  }, [props.list, page]);

  return (
    <div>
      {taskList.map((item, idx) => (
        <Card elevation={Elevation.THREE}>
          <div id={item.id} key={item.id}>
            <div>
              <Icon icon="cross" onClick={() => props.deleteItem(item.id)} />
              <span onClick={() => props.toggleComplete(item.id)}>{item.complete ? 'Complete' : 'In Progress'}</span>
              <p><small>Assigned to: {item.assignee}</small></p>
            </div>
            <p>{item.text}</p>
            <p className="difficulty"><small>Difficulty: {item.difficulty}</small></p>
          </div>
        </Card>
      ))
      }
      <PageButton list={props.list} page={page} setPage={setPage}></PageButton>
    </div >
  );
}

export default List;