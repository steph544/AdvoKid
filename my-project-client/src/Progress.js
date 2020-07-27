import React from 'react'
import "./styles.css"
import {VictoryPie, VictoryLabel, VictoryAnimation} from 'victory';
import { Dropdown, Grid} from 'semantic-ui-react'
import LevelOneProgress from "./LevelOneProgress.js"
import LevelTwoProgress from "./LevelTwoProgress.js"
import LevelAnimation from "./LevelAnimation.js"

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
      percent: 0, 
      data: this.getData(0)
    };
  }

      handleChange = (e, { value }) => this.setState({ value })

      componentDidMount() {
        let percent = 25;
        this.setStateInterval = window.setTimeout(() => {
          percent += (Math.random() * 25);
          percent = (percent > 100) ? 0 : percent;
          this.setState({
            percent, 
            data: this.getData(percent)
          });
        }, 500);
      }
    
      componentWillUnmount() {
        window.clearInterval(this.setStateInterval);
      }
    
      getData(percent) {
        return [{ x: 1, y: percent }, { x: 2, y: 100 - percent }];
      }

renderSwitch=(param)=>{
    switch(param){
    case 'One':
      return <LevelOneProgress currentChild={this.props.currentChild}/>
    case 'Two':
        return <LevelTwoProgress currentChild={this.props.currentChild}/>
    case 'Three':
        return <h1 className="child-font">Level 3 Progress</h1>
    case 'Four':
        return <h1 className="child-font">Level 4 Progress</h1>
    case 'Five':
        return <h1 className="child-font">Level 5 Progress</h1>
    case 'Six':
        return <h1 className="child-font">Level 6 Progress</h1>
    case 'Seven':
        return <h1 className="child-font">Level 7 Progress</h1>
    default: 
    return <LevelAnimation currentChild={this.props.currentChild}/>
    }
}


    render(){
        const { value } = this.state
          return(
        <>
            <div class="div2"> 

              <Grid columns={1}>
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
            </div>
   

            <div class="div3"> 
              {this.renderSwitch(this.state.value)}
            </div>
        </>    
    )
    }
  
    
}


export default Progress