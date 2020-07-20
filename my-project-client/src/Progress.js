import React, {Component} from 'react'
import { NavLink, withRouter } from 'react-router-dom';
import "./styles.css"
import {VictoryPie, VictoryLabel, VictoryAnimation} from 'victory';
import { Dropdown, Grid, Card} from 'semantic-ui-react'

const options = [
    { key: 1, text: 'Level One', value: 'One' },
    { key: 2, text: 'Level Two', value: 'Two' },
    { key: 3, text: 'Level Three', value: 'Three'},
    { key: 4, text: 'Level Four', value: 'Four' },
    { key: 5, text: 'Level Five', value: 'Five' },
    { key: 6, text: 'Level Six', value: 'Six' },
    { key: 7, text: 'Level Seven', value: 'Seven' },
  ]
  


class Progress extends React.Component{
    constructor() {
        super();
        this.state = {
          metric: 80
        };
      
      }

      handleChange = (e, { value }) => this.setState({ value })

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
renderSwitch=(param)=>{
    switch(param){
    case 'One':
      return <h1>Level one Progress</h1>
    case 'Two':
        return <h1>Level 2 Progress</h1>
    case 'Three':
        return <h1>Level 3 Progress</h1>
    case 'Four':
        return <h1>Level 4 Progress</h1>
    case 'Five':
        return <h1>Level 5 Progress</h1>
    case 'Six':
        return <h1>Level 6 Progress</h1>
    case 'Seven':
        return <h1>Level 7 Progress</h1>
    default: 
    return <h1>Level 5 Progress</h1>
    }
}


    render(){
        const { value } = this.state
          return(
        <>
            <div class="div2"> 
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

            <div class="div3"> 
            <Grid columns={2}>
        <Grid.Column>
          <Dropdown
            onChange={this.handleChange}
            options={options}
            placeholder='Choose a Level to View Progress'
            selection
            value={value}
          />
        </Grid.Column>

      </Grid>
      {this.renderSwitch(this.state.value)}
            </div>
        </>    
    )
    }
  
    
}


export default withRouter(Progress)