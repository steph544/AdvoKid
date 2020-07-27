import React from 'react';
import './index.css';
import CustomChatBot from "./ChatBot.js"

export default class Wheel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null,
    };
    this.selectItem = this.selectItem.bind(this);
  }

  selectItem() {
    if (this.state.selectedItem === null) {
      const selectedItem = Math.floor(Math.random() * this.props.items.length);
      this.props.selectedPrize(selectedItem)
      
      
      if (this.props.onSelectItem) {
        this.props.onSelectItem(selectedItem);
        
      }
      this.setState({ selectedItem });
    } else {
      this.setState({ selectedItem: null });
      setTimeout(this.selectItem, 500);
      let audio = new Audio("../assets/sounds/wheel.wav")
      audio.play()
    }
  // let audio = new Audio("../assets/sounds/wheel.wav")
  //   audio.play()
  
  }

  componentDidMount(){
    this.props.getItem(this.selectItem)
  }
    
  

  render() {
    const { selectedItem } = this.state;
    const { items } = this.props;

    const wheelVars = {
      '--nb-item': items.length,
      '--selected-item': selectedItem,
    };
    const spinning = selectedItem !== null ? 'spinning' : '';
    localStorage.getItem=this.selectItem
    return (
      <div className="wheel-container">
       
        <div className={`wheel ${spinning}`} style={wheelVars} onClick={this.selectItem}>
          {items.map((item, index) => (
            <div className="wheel-item" key={index} style={{ '--item-nb': index }}>
              {item}
            </div>
          ))}
        </div>

        {/* <div className="div18">
           <CustomChatBot spinWheel={this.spinWheel} currentChild={this.props.currentChild} childPoints={this.state.childPoints}/>
        </div>
        */}
      </div>
    );
  }
}
