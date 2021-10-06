import React from 'react'

class DrumPad extends React.Component{
    constructor(props){
        super(props)
        this.state = {};
        this.keyRef = React.createRef()
        this.audioRef = React.createRef()
    }
    // this.props.bank
    componentDidMount() {
        document.addEventListener('keydown', this.onKeyPress);
        this.keyRef.current.addEventListener('click', this.onKeyPress);
      }
      componentWillUnmount() {
        document.removeEventListener('keydown', this.onKeyPress);
        this.keyRef.current.removeEventListener('click', this.onKeyPress);
      }

      onKeyPress = (e) => {
        if (e.keyCode === this.props.bank.keyCode || e.target.innerText === this.props.bank.keyTrigger ) {
            this.props.changeDisplay(this.props.bank.id)    
            this.props.playAudio(this.audioRef.current);
        }
      }

    render(){
        return (<div className="DrumPad drum-pad" id={this.props.bank.id} ref={this.keyRef} >
            {this.props.bank.keyTrigger}
            <audio ref={this.audioRef}
          className='clip'
          id={this.props.bank.keyTrigger}
          src={this.props.bank.url}
        />

        </div>)
        
    }
}
export default DrumPad