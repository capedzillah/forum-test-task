import React, { useState, useEffect } from 'react'
import {BrowserRouter as Router}  from 'react-router-dom';
import Routes from '../routes/routes';

import UserContext from '../context/user';

const Master = props => {

    const [ user, setUser ] = useState('')

    useEffect(() => {
        const userName = localStorage.getItem('userName')
        if(userName) {
            setUser({ userName })
        }
    }, [])

    const login = (userName) => {
        setUser(userName);
    }
    
    const logout = () => {
        setUser(null);
    }

    return (
        <div className="app-content">
            <div className="page-wrap">
                <Router>
                    <UserContext.Provider
                        value={{
                            login: login,
                            logout: logout,
                            userName: user.userName,
                        }}
                    >
                        <Routes/> 
                    </UserContext.Provider>
                </Router>
            </div>
        </div>
    )
}

Master.propTypes = {

}

export default Master
