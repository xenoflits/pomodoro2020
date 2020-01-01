import React from 'react';

class Pomodoro extends React.Component {
    constructor() {
        super();
        this.state = {
            timer: 0,
        }
    }

    render() {
        return (
            <div>
                <div>
                    <Button name="25m" />
                    <Button name="10m" />
                    <Button name="5m" />
                </div>
                <div>{this.state.timer}</div>
                <div><Button name="start/pause"/>
                <Button name="reset"/></div>
            </div>
        )
    }
}

const Button = (props) => {
    return (
        <button>{props.name}</button>
    )
}

export default Pomodoro