import { useContext, useState, useEffect } from 'react';
import { SiteContext } from '../../context/Site';
import { Card, Elevation, Icon } from '@blueprintjs/core';


function List(props) {

  const siteContext = useContext(SiteContext);

  const [taskList, setTaskList] = useState([]);

  const indexOfLastPost = props.currentPage * siteContext.itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - siteContext.itemsPerPage;
  const currentItems = props.list.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    setTaskList(currentItems);
  }, [props.list, props.currentPage]);


  return (
    <div>
      {taskList.map((item, idx) => (
        <Card elevation={Elevation.THREE}>
          <div id={idx} key={item.id}>
            <div>
              <span onClick={() => props.toggleComplete(item.id)}>{item.complete ? 'Complete' : 'In Progress'}</span>
              <p><small>Assigned to: {item.assignee}</small></p>
              <Icon icon="cross" onClick={() => props.deleteItem(item.id)} />
            </div>
            <hr />
            <p>{item.text}</p>
            <p className="difficulty"><small>Difficulty: {item.difficulty}</small></p>
          </div>
        </Card>
      ))
      }
    </div >
  );
}

export default List;