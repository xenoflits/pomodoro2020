import React from 'react';

class Pomodoro extends React.Component {
    constructor() {
        super();
        this.toggle = this.toggle.bind(this);
        this.resetTimer = this.resetTimer(this);
        this.state = {
            timer: 0,
            playing: false,
        }
    }

    toggle(){
        
        this.setState(prefState => ({
            playing: !prefState.playing,
            
        }))
    }

    startTimer(time){
        this.setState({
            playing: true,
            timer: time

        })
    }

    resetTimer(){
        this.setState({
            timer: 0,
            playing: false
        })
    }

    render() {
        return (
            <div>
                <div>
                    <Button name="25m" clicker={this.startTimer}/>
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
        <button onClick={()=>props.clicker}>{props.name}</button>
    )
}

export default Pomodoro