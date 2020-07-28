import React from 'react'
import "./styles.css"
import {Table, Button, Icon} from 'semantic-ui-react'

class PrizeTable extends React.Component{

    deletePrize=()=>{
        fetch(`http://localhost:3000/prizes/${this.props.prize.id}`, {
            method: 'DELETE'
        })
        this.props.deletePrize(this.props.prize)
            
    }

    render(){
        return(
        <Table.Row>
                <Table.Cell>
                    {this.props.prize.name}
                </Table.Cell>
                <Table.Cell>
                    {Date(`${this.props.prize.created_at.toString()}`)}
                    </Table.Cell>
                <Table.Cell>
                    <Button color="green" onClick={this.deletePrize} icon labelPosition='left'>
                        <Icon name='money bill alternate' /> Redeemed
                    </Button>
                </Table.Cell>
        </Table.Row>
        )
    }
}
    export default PrizeTable