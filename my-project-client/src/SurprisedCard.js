import React from 'react';
import { Image } from 'semantic-ui-react'
import ReactCardFlip from 'react-card-flip';

class SurprisedCard extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    let audio = new Audio("../assets/sounds/pop.wav")
    audio.play()
  }

  render() {
    return (
        <ReactCardFlip
        isFlipped={this.state.isFlipped} flipDirection="vertical"
      >
        <div>
            <Image onClick={this.handleClick} src={require("./images/surprised.png")} wrapped ui={false} />
        </div>

        <div>
        <Image onClick={this.handleClick} src={require("./images/surprisedback.png")} wrapped ui={false} />
        </div>
      </ReactCardFlip>
    );
  }
}

export default SurprisedCard;
