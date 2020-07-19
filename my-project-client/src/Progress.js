import React, {Component} from 'react'
import { NavLink, withRouter } from 'react-router-dom';
import {connect} from 'react-redux'
import "./styles.css"
import {VictoryPie, VictoryLabel, VictoryAnimation} from 'victory';


  


class Progress extends React.Component{
    constructor() {
        super();
        this.state = {
          metric: 80
        };
      }

//       componentDidMount() {
//         let percent = 25;
//         this.setStateInterval = window.setInterval(() => {
//           percent += (Math.random() * 25);
//           percent = (percent > 100) ? 0 : percent;
//           this.setState({
//             percent, data: this.getData(percent)
//           });
//         }, 2000);
//       }
    
//       componentWillUnmount() {
//         window.clearInterval(this.setStateInterval);
//       }

//       getData(percent) {
//     return [{ x: 1, y: percent }, { x: 2, y: 100 - percent }];
//   }

    render(){
          return(
        <>
            <div class="div24"> 
                <svg width={400} height={400}>
                    
                    <VictoryPie 
                    standalone={false}
                        padAngle={0}
                        // used to hide labels
                        labelComponent={<span/>}
                        innerRadius={70}
                        width={400} height={400}
                        data={[{'key': "", 'y': this.state.metric}, {'key': "", 'y': (100-this.state.metric)} ]}
                        colorScale={["orange", "white" ]}
                    />
                     <VictoryAnimation duration={1000} data={this.state.metric}>
            {(newProps) => {
              return (
                <VictoryLabel
                  textAnchor="middle" verticalAnchor="middle"
                  x={200} y={200}
                  text={this.state.metric}
                  style={{ fontSize: 30 }}
                />
              );
            }}
          </VictoryAnimation>

                </svg>

            </div>

            <div class="div25"> 
                <h1>Progress Tab </h1>
            </div>
        </>    
    )
    }
  
    
}


export default Progress