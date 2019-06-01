import React from 'react'
import PropTypes from 'prop-types';

const MessageForm = ({ onSubmit, onChange, body, title }) => {

    return (
        <form className="form-group" onSubmit={ onSubmit }>
            <label>
                Заголовок
            <input className="form-control" type="text" placeholder="Заголовок" onChange={ onChange('title') } value={ title } name="title" required/>
            </label>
            <label>
                Текст сообщения
            <input className="form-control" type="text" placeholder="Текст сообщения" onChange={ onChange('body') } value={ body } name="body" required/>
            </label>
            <button className="btn">
                Отправить
            </button>
        </form>
    )
}

MessageForm.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
    onSubmit: PropTypes.func,
    onChange: PropTypes.func,
}

export default MessageForm
