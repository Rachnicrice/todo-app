import { useContext } from 'react';
import { SiteContext } from '../../context/Site';

function PageButton(props) {

  const siteContext = useContext(SiteContext);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(props.list.length / siteContext.itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  function setCurrentPage (e) {
    props.setPage(e.target.id);
  }

  return (
    <div>
      {pageNumbers.map(number => {
        return <button onClick={setCurrentPage} id={number}>{number}</button>;
      })
      }
    </div>
  );
}

export default PageButton;