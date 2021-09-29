import React, { useEffect, useState } from 'react';

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

  useEffect(() => {
    let settings = {
      displayCompleted,
      itemsPerPage,
      sortField,
    };
    localStorage.setItem('userSettings', JSON.stringify(settings));

    let stringSettings = localStorage.getItem('userSettings');
    let newSettings = JSON.parse(stringSettings);
    state = [...state, ...newSettings];

  }, [state])

  return (
    <SiteContext.Provider value={state}>
      {props.children}
    </SiteContext.Provider>
  );

}

export default Site;