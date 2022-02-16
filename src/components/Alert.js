import React from 'react'

function Alert(props) {
    const capatalize = (word) =>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <div style={{height:'50px'}}>
        {props.Alert && <div className={`alert alert-${props.Alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capatalize(props.Alert.type)}</strong>: {props.Alert.msg}
        </div>}
        </div>
    )
}

export default Alert
