import React from 'react';
function Message(){
    console.log("Message Componenet")
    return (
        <>
        <h4>We are Learning React JS State Management</h4>
        </>
    );
}
export default React.memo(Message);