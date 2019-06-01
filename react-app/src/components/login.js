import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';


import { Redirect } from 'react-router-dom';
import UserContext from '../context/user';

const LoginPage = props => {

    const [ form, setForm ] = useState({ userName: '', password: '' });
    const [ loading, setLoading ] = useState(false);
    const context = useContext(UserContext);


    const handleChange = name => e => {
        setForm({...form, [name]: e.target.value });
    }

    const handleSubmit = e => {
        e.preventDefault();

        if (!form.userName || !form.password) return;

        setLoading(true);

        setTimeout(() => {
            localStorage.setItem('isAuthed', true);
            localStorage.setItem('userName', form.userName);
            context.login(form.userName, form.password);
            props.history.push('/forum');
        }, 1000);
    }

    if (context.userName) {
        return (
          <Redirect to='/forum' />
        );
    }
  
    return (
        <form className="login-block" onSubmit={ handleSubmit }>
            <h1>Авторизация</h1>
            <label>
                User name
            <input className="form-control" type="text" placeholder="Username" value={ form.userName } onChange={ handleChange('userName') } required />
            </label>
            <label>
                Password
            <input className="form-control" type="password" placeholder="Password" value={ form.password } onChange={ handleChange('password') } required />
            </label>
            <button className="btn" disabled={ loading }>
                Войти
            </button>
        </form >
    )
}

LoginPage.propTypes = {
    history: PropTypes.object.isRequired
}

export default LoginPage
