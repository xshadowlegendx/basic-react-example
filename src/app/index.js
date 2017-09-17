
import React from 'react';
import { render } from 'react-dom';

console.log( "Working !" );

class Button extends React.Component {

    alertOnClick () {

        alert ( "Yo bro and sis" );

    }

};

class SimpleApp extends Button {

    render () {
        return (
            <div>
                <button onClick={ this.alertOnClick.bind( this ) }>Click Me</button>
            </div>
        );
    }

};

render ( < SimpleApp />, window.document.getElementById ( "root" ) );