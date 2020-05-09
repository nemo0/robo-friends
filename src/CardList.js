import React from "react"
import Card from "./Card"
import robots from "./robots"
class CardList extends React.Component {
    render(){
        const cardArray = robots.map((user, i) => {
            return (
            <Card 
                id={this.props.robots[i].id} 
                name={this.props.robots[i].name} 
                email={this.props.robots[i].email} 
                key={this.props.robots[i].id}
            />)
        })
        return(
                < div className="tc">
                    {cardArray}
                </div >
        )
    }
}
export default CardList;