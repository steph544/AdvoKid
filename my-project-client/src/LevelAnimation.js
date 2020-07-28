import React from 'react'
import "./styles.css"
import {VictoryPie, VictoryLabel, VictoryAnimation} from 'victory';

class LevelAnimation extends React.Component{
  constructor() {
    super();
    this.state = {
      percent: 0, 
      data: this.getData(0),
      childName: ""
    };
  }

      handleChange = (e, { value }) => this.setState({ value })

      componentDidMount() {
        if (this.props.currentChild){
            let percent = 25;
        this.setStateInterval = window.setTimeout(() => {
          percent += (Math.random() * 25);
          percent = (percent > 100) ? 0 : percent;
          this.setState({
            percent, 
            data: this.getData(percent), 
            childName:`${this.props.currentChild.first_name}'s` 
          });
        }, 500);
        }else {
            return""
        }

      }
    
      componentWillUnmount() {
        window.clearInterval(this.setStateInterval);
      }
    
      getData(percent) {
        return [{ x: 1, y: percent }, { x: 2, y: 100 - percent }];
      }


    render(){
        const { value } = this.state
          return(

            <div className="div22"> 
                <h1 className="child-font4">{this.state.childName} Current Overall Progress:</h1>
              {/* <img src={require("./images/progressbanner.png")}/> */}
                <svg viewBox="0 0 400 400" width="65%" height="65%">
                <text x="43%" y="49%" textAnchor="middle" stroke="black" strokeWidth="1px" dy=".3em">COMPLETED</text>
                <text x="43%" y="54%" textAnchor="middle" stroke="black" strokeWidth="1px" dy=".3em">LEVELS</text>
        
                <VictoryPie
                    standalone={false}
                    animate={{ duration: 1000 }}
                    width={350} height={350}
                    data={this.state.data}
                    innerRadius={80}
                    cornerRadius={0}
                    labels={() => null}
                    style={{
                    data: { fill: ({ datum }) => {
                        const color = datum.y > 0 ? "orange" : "#EEEEEE";
                        return datum.x === 1 ? color : "white";
                    }
                    }
            
                    }}
                    
                />
                <VictoryAnimation duration={1000} data={this.state}>
                    {(newProps) => {
                    return (
                        <VictoryLabel
                        textAnchor="middle" verticalAnchor="middle"
                        x={175} y={157}
                        text={`${Math.round(newProps.percent)}%`}
                        style={{ fontSize: 45 }}
                        />
                    );
                    }}
                </VictoryAnimation>
                </svg>
            </div>
     
            )
    }
  
    
}


export default LevelAnimation