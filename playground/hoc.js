import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => {
    return(
        <div>
            <h1>Info</h1>
            <p>This is is about: {props.info}</p>
        </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => {
        
       return (
            <div>
                {props.isAuthenticated ? (<WrappedComponent {...props} />):
                (
                    <p>You are not authenticated</p>
                )}
                
            </div>
        )

    }
}

const AuthInfo = requireAuthentication(Info);
const jsx = (
    <AuthInfo isAuthenticated={true} info="Sensitive info"/>
)
const docLoc = document.getElementById('app');
ReactDOM.render(jsx, docLoc);