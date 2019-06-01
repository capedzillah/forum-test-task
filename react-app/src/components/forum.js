import React, { useState, useEffect, useContext } from 'react'

import UserContext from '../context/user';

import Message from './message';
import MessageForm from './messageForm';

const Forum = props => {

    const [messages, setMessages] = useState([])
    const [form, setForm] = useState({ title: '', body: '' })
    const [loading, setLoading] = useState(true);

    const context = useContext(UserContext);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch('http://localhost:3200/message');
            const data = await response.json()
            setTimeout(() => {
                setMessages(data)
                setLoading(false)
            }, 1000);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    const handleChangeForm = name => e => {
        setForm({ ...form, [name]: e.target.value })
    }

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        if (!form.title || !form.body) return;
        try {
            const response = await fetch('http://localhost:3200/message', {
                method: 'post', body: JSON.stringify(form), headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': context.userName
                },
            });
            setForm({ title: '', body: '' });
            const data = await response.json();
            setMessages([...messages, data]);

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="container">
            <div className="forum-wrapper">

                {loading && <div className="overlay" >
                    <div className="spinner"></div>
                </div>}
                <MessageForm
                    title={form.title}
                    body={form.body}
                    onSubmit={handleSubmitForm}
                    onChange={handleChangeForm}
                />
                <div className="messages">
                    {messages.map((message, index) => (
                        // wrong key
                        <Message key={index} {...message} count={messages.length} />
                    ))}
                    <p className="messages__count">
                        <strong>
                            Количество сообщений: { messages.length }
                        </strong>
                    </p>
                </div>
            </div>
            
        </div>
    )
}

Forum.propTypes = {

}

export default Forum
