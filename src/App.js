import React from 'react';
import './style.css'
import Component from './components/Header'

export default class extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            message: `Hi, I'm John Smile`
        };
    }
    
	componentDidMount() {
        console.log('test: ', test);
    }

    componentWillUnmount() {}
    
    render() {
        const { message } = this.state
		return (
            <>
                <h1>{ message }</h1>
                <Component></Component>
            </>
		)
	}
}