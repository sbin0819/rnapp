import React, {createContext, useState} from 'react';

const SearchContext = createContext<any>(undefined);

export function SearchContextProvider({children}: {children: any}) {
  const [keyword, onChangeText] = useState('');

  return (
    <SearchContext.Provider value={{keyword, onChangeText}}>
      {children}
    </SearchContext.Provider>
  );
}

export default SearchContext;
