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
            seconds: 60,
            playing: false,
            finished: false,

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
        clearInterval(this.pulser)
        this.setState({
            timer: 25,
            seconds: 60,
            playing: false,
            finished: false,

        })


    }

    finished() {
        
        this.setState({
            finished: true
        })

        alert('time is up')
    }

    decrement() {

        if (this.state.seconds === 0 & this.state.timer === 0) {
            this.resetTimer()
            this.finished()

            setTimeout(() => {
                this.setState({
                    seconds: 60
                })
            }, 1000)
        }


        else if (this.state.seconds === 0) {
            this.setState({
                timer: this.state.timer - 1,
                seconds: 60
            })


        }
        let timer2 = this.state.seconds - 1
        this.setState({
            seconds: timer2
        })

    }


    startPuls() {
        setTimeout(() => {
            this.setState({
                timer: this.state.timer - 1
            })
        }, 1000)
        this.pulser = setInterval(this.decrement, 1000);
    }

    startTimer() {
        this.setState({
            playing: true
        })
        this.startPuls();
    }







    render() {
        return (
            <div className="pomodoro">
                <div className="buttonBar">
                    <Button buttonStatus={this.state.playing} name="25" clicker={this.setTimer} />
                    <Button buttonStatus={this.state.playing} name="10" clicker={this.setTimer} />
                    <Button buttonStatus={this.state.playing} name="1" clicker={this.setTimer} />
                </div>
                {this.state.seconds !== 60 ?
                    <div>{this.state.timer}M {this.state.seconds}S</div> :
                    <div>{this.state.timer}M 00S</div>}
{this.state.finished ? <div></div>: null}

                <div><Button buttonStatus={this.state.playing} clicker={this.startTimer} name="start" />
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