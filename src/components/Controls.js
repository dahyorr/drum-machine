import React from'react'
class controls extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        }
        this.powerRef = React.createRef()
        this.bankRef = React.createRef()
    }
    componentDidMount(){
        this.powerRef.current.addEventListener('click', this.props.changePowerState)
        this.bankRef.current.addEventListener('click', this.props.changeBankState)
    }
    componentWillUnmount(){
        this.powerRef.current.removeEventListener('click', this.props.changePowerState)
        this.bankRef.current.removeEventListener('click', this.props.changeBankState)
    }
    
    render(){
        let powerSlider = this.props.settings.powerState ? {float: 'right'}: {float: 'left'}
        let bankSlider = this.props.settings.bankState ? {float: 'left'}: {float: 'right'}
        return (<div className={'Controls'}>

            <div className='control powerSlider'>
            <p>Power</p>
            <div className='select' ref={this.powerRef} >
              <div className='inner' style={powerSlider} />
            </div>
          </div>
            
          <p id='display'>{this.props.settings.display}</p>

          <div className='volume-slider'>
            <input max='1' min='0' step='0.01' type='range' value={0}/>
          </div>
            
            <div className='control bankSlider'>
            <p>Bank</p>
            <div className='select' ref={this.bankRef}>
              <div className='inner' style={bankSlider} />
            </div>
          </div>



        </div>)

    }
}
export default controls