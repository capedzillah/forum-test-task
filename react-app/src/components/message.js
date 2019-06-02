import React from 'react'
import PropTypes from 'prop-types'

const Message = React.memo(({ title, body, userName, count }) => {

    return (
        <div className="message">
            <p className="message__username">Имя пользователя: { userName }</p>
            <p className="message__title">{ title }</p>
            <p className="message__content">{ body }</p>
        </div>
        
    )
})

Message.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
    userName: PropTypes.string, 
    count: PropTypes.number, 
}

export default Message
