import DrumPad from "./DrumPad"
import Controls from "./Controls"
import {bankOne, bankTwo} from "./banks"
import React from "react"

class Wrapper extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            powerState: true,
            bankState: true,
            display: String.fromCharCode(160),
        }
    }
    changeDisplay = (text) => {
        this.setState({
            display: text
        })
    }
    changePowerState = () => {
        this.setState(state => ({
            powerState: !state.powerState
        }))
    }
    changeBankState = () => {
        this.setState(state => ({
            bankState: !state.bankState
        }))
    }
    playAudio = (element) =>{
        element.currentTime = 0
        element.play()
    }

    render(){
    const padBank = [bankOne, bankTwo]
    let bankIndex = this.state.bankState ? 0 : 1
    let banks = padBank[bankIndex].map((bank,index) => (<DrumPad playAudio={this.playAudio} bank={bank} settings={this.state} changeDisplay={this.changeDisplay} key={index}/>))
    return (<div className="Wrapper">
            <div className="pad-bank">
                {banks}
            </div>
            <div className="controls-container">
                <Controls changePowerState={this.changePowerState} changeBankState={this.changeBankState} settings={this.state}/>
            </div>
    </div>)
    }
}
export default Wrapper