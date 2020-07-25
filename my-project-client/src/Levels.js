import React, {Component} from 'react'
import { NavLink} from 'react-router-dom';
import "./styles.css"
import { Dropdown, Grid, Card} from 'semantic-ui-react'
import LevelTwoSettings from "./LevelTwoSettings.js"
  
    const options = [
        { key: 1, text: 'Level One', value: 'One' },
        { key: 2, text: 'Level Two', value: 'Two' },
        { key: 3, text: 'Level Three', value: 'Three'},
        { key: 4, text: 'Level Four', value: 'Four' },
        { key: 5, text: 'Level Five', value: 'Five' },
        { key: 6, text: 'Level Six', value: 'Six' },
        { key: 7, text: 'Level Seven', value: 'Seven' },
      ]

class Levels extends React.Component{


      constructor() {
        super();
        this.state = {
          metric: 80
        };
      
      }

    handleChange = (e, { value }) => this.setState({ value })

    renderSwitch=(param)=>{
        switch(param){
        case 'One':
          return <h1>Level 1 Settings</h1>
        case 'Two':
            return <LevelTwoSettings/>
        case 'Three':
            return <h1>Level 3 Settings</h1>
        case 'Four':
            return <h1>Level 4 Settings</h1>
        case 'Five':
            return <h1>Level 5 Settings</h1>
        case 'Six':
            return <h1>Level 6 Settings</h1>
        case 'Seven':
            return <h1>Level 7 Settings</h1>
        default: 
        return ""
        }
    }

    render(){
        const { value } = this.state
          return(
        <>
            <div class="div2"> 
              <Grid columns={2}>
                    <Grid.Column>
                    <Dropdown
                        onChange={this.handleChange}
                        options={options}
                        placeholder='Choose a Level to View Settings'
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


export default Levels