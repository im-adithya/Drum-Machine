import React from 'react'
import ReactDOM from 'react-dom'

const data = [
  { id: 'Heater-1', letter: 'Q', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },
  { id: 'Heater-2', letter: 'W', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },
  { id: 'Heater-3', letter: 'E', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },
  { id: 'Heater-4', letter: 'A', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },
  { id: 'Clap', letter: 'S', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },
  { id: 'Open-HH', letter: 'D', src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },
  { id: 'Kick-n-Hat', letter: 'Z', src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },
  { id: 'Kick', letter: 'X', src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },
  { id: 'Closed-HH', letter: 'C', src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'  },
]


class DrumPad extends React.Component{

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeydown) 
  }

  componentWillUnmount(){
    document.removeEventListener('keydown')
  }

handleKeydown = e => {
  if(e.keyCode === this.props.letter.charCodeAt()){
    this.audio.play()
    this.audio.currentTime = 0
    this.props.handleDisplay(this.props.id)
  }
}  
 
  handleClick = () => {
    this.audio.play()
    this.audio.currentTime = 0
    this.props.handleDisplay(this.props.id)
  }

  render(){
    return(
    <div 
      className="drum-pad"
      id={this.props.id}
      onClick={this.handleClick}
      ref = {ref => this.div = ref}>
        <h1 ref ={ref => this.h1 = ref} >{this.props.letter}</h1>
        <audio
          src={this.props.src}
          className="clip"
          id={this.props.letter}
          ref={ref => this.audio = ref}
        >
        </audio>
      </div>
    )
  }
}

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      display: 'Click or Press a key!'
    }
    this.handleDisplay.bind(this)
  }
  //handle events here
  handleDisplay = display => 
    this.setState({display})
  

  render(){
    return(
      <div id="drum-machine">
        <div id="display">{this.state.display}</div>
        <div id="drum-pads">{data.map( e => 
          <DrumPad
            key={e.id}
            id={e.id}
            letter={e.letter}
            src={e.src}
            handleDisplay={this.handleDisplay}
          />
          )}
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <div>
    <App />
  </div>,
  document.getElementById('root'))

