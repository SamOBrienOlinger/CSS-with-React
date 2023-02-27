import React from "react";

class StatefulGreetingWithCallback extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello, Sam U Well!",
            buttonText: "Exxxit",
        };
    }

    handleClick() {
        this.setState({
          introduction: "Goodbye!",
          buttonText: 'Enter'
        }, ()=>{
            console.log('new state', this.state.introduction);
            console.log('new state', this.state.buttonText);
        });
        console.log(this.state.introduction);
        console.log(this.state.buttonText);
      }

    render() {
        return (
            <div>
                <h1>{this.state.introduction} {this.props.greeting}</h1>
                {/* <button>{this.state.buttonText}</button> */}
                <button onClick={() => this.handleClick()}>
                    
                    {this.state.buttonText}
                
                </button>
            </div>
        )
    }
}

export default StatefulGreetingWithCallback;