import React, { useState } from 'react';

export const SiteContext = React.createContext();

function Site(props) {

  const [displayCompleted, setDisplayCompleted] = useState(true);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [sortField, setSortField] = useState('name');

  const state = {
    displayCompleted,
    itemsPerPage,
    sortField,
    setDisplayCompleted,
    setItemsPerPage,
    setSortField,
  };

  return (
    <SiteContext.Provider value={state}>
      {props.children}
    </SiteContext.Provider>
  );

}

export default Site;