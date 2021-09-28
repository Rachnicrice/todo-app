import React from 'react';

export const SiteContext = React.createContext();

function Site(props) {

  const state = {
    displayCompleted: true,
    itemsPerPage: 4,
    sortField: 'name',
  };

  return (
    <SiteContext.Provider value={state}>
      {props.children}
    </SiteContext.Provider>
  );

}

export default Site;