import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Image, Card } from 'semantic-ui-react'
import ReactCardFlip from 'react-card-flip';

class WorriedCard extends React.Component{
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
  }

  render() {
    return (
        <ReactCardFlip
        isFlipped={this.state.isFlipped} flipDirection="vertical"
      >
        <div>
            <Image onClick={this.handleClick} src={require("./images/worried.png")} wrapped ui={false} />
        </div>

        <div>
        <Image onClick={this.handleClick} src={require("./images/worriedback.png")} wrapped ui={false} />
        </div>
      </ReactCardFlip>
    );
  }
}

export default WorriedCard;