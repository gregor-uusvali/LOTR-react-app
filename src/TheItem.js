import React from 'react';

class Item extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            clicks: 0,
            totalLeft: 100,
        }
    }


    clickMe() {
        this.setState({
            clicks: this.state.clicks + 1,
            totalLeft: this.state.totalLeft - 1
        })
        console.log("Nor is he early - ", this.props.name)
    }

    render() {
      return(
        <div>
            <h3 onClick={() => this.clickMe()}>A wizzard is never late - {this.props.name}</h3>
            {/* <span>{this.state.clicks} is the number of clicks.{this.state.totalLeft} left.</span> */}
        </div>
        
      )
    }
}

export default Item;