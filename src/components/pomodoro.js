import React from 'react';

class Pomodoro extends React.Component {
    constructor() {
        super();
        this.toggle = this.toggle.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
        this.setTimer = this.setTimer.bind(this);
        this.startTimer = this.startTimer.bind(this);
        this.decrement = this.decrement.bind(this);
        this.state = {
            timer: 25,
            playing: false,

        }
    }

    toggle() {

        this.setState(prefState => ({
            playing: !prefState.playing,

        }))
    }

    setTimer(time) {
        this.setState({
            timer: time

        })
    }

    resetTimer() {
        this.setState({
            timer: 25,
            playing: false

        })
        clearInterval(this.pulser)
        
    }
    
    decrement(){
        let timer2 = this.state.timer-1

        this.setState({
            timer: timer2
        })
    }

    
    startPuls(){
        this.pulser = setInterval(this.decrement,1000);
    }

    startTimer() {
        let toggle = !this.state.playing
        this.setState({
            playing: toggle
        })
    this.startPuls();   
    }

    

    



    render() {
        return (
            <div>
                <div>
                    <Button buttonStatus={this.state.playing} name="25" clicker={this.setTimer} />
                    <Button buttonStatus={this.state.playing} name="10" clicker={this.setTimer} />
                    <Button buttonStatus={this.state.playing} name="5" clicker={this.setTimer} />
                </div>
                <div>{this.state.timer}</div>
                <div><Button clicker={this.startTimer} name="start/pause" />
                    <Button clicker={this.resetTimer} name="reset" /></div>
            </div>
        )
    }
}

const Button = (props) => {
    let buttonStatus = props.buttonStatus

    return (
        <button disabled={buttonStatus} onClick={() => props.clicker(props.name)}>{props.name}</button>
    )
}

export default Pomodoro