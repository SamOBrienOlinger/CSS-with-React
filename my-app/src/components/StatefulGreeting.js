import React from "react";

class StatefulGreeting extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello, Sam U Well!",
            buttonText: "Exxxit",
        };
    }

    handleClick() {
        this.setState({
            introduction: "Goodbye!"
        });
        console.log(this.state.introduction);
    }

    render() {
        return (
            <div>
                <h1>{this.state.introduction} {this.props.greeting}</h1>
                {/* <button>{this.state.buttonText}</button> */}
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
            </div>
        )
    }
}

export default StatefulGreeting;