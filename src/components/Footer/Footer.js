import React from 'react';
import './Footer.css';

class Footer extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return <footer>
            <a href="/schedule-test-flight">schedule a test flight! No pilot's license required!</a>
        </footer>
    }
}

export default Footer;