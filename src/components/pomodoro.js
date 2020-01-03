import React from 'react';

class Pomodoro extends React.Component {
    constructor() {
        super();
        this.toggle = this.toggle.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
        this.startTimer = this.startTimer.bind(this);
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
                    <Button name="25" clicker={this.startTimer}/>
                    <Button name="10" clicker={this.startTimer}/>
                    <Button name="5" clicker={this.startTimer}/>
                </div>
                <div>{this.state.timer}</div>
                <div><Button name="start/pause"/>
                <Button name="reset"/></div>
            </div>
        )
    }
}

const Button = (props) => {
    //let temp = props.name
    
    return (
        <button onClick={()=>props.clicker(props.name)}>{props.name}</button>
    )
}

export default Pomodoro