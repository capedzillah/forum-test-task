import React from 'react';

export default React.createContext({
    login: (userName, password) => {},
    logout: () => {},
    userName: null,
});
