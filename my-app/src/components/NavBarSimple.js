import React from "react";

class NavBarSimple extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello, guest!",
            buttonText: "Log in",
            count: 0
        };
    }

    handleClick() {
        this.setState((prevState, prevProps) => {
          console.log("Previous State:", prevState);
          console.log("Previous Props:", prevProps);
          return {
            introduction:
              prevState.introduction === "Hello, guest!" ? "Welcome back, guest!" : "Hello, guest!",
            buttonText: prevState.buttonText === "Log in" ? "Log out" : "Log in",
          };
        });
      }
    
    
      render() {
        return (
          <div>
            <h1>
              My Gallery <span>{this.state.introduction} {this.props.greeting}</span>
              <button onClick={() => this.handleClick()}>
              {this.state.buttonText}
            </button>
            </h1>
            
          </div>
        );
      }

}

export default NavBarSimple;