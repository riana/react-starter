import * as React from "react";
import * as ReactDOM from "react-dom";

require("./styles/index.scss");

export interface HelloProps { compiler: string; framework: string; }

export interface HelloState { value: number}

export class Hello extends React.Component<HelloProps, HelloState> {

   timerId:any;

   constructor() {
      super();
      this.state = {
         value: 42
      };
      this.start = this.start.bind(this);
      this.stop = this.stop.bind(this);
   }

   componentDidMount() {

   }

   start(e:any){
      this.timerId = setInterval(() => {
         this.setState({value: this.state.value + 1});
      }, 1000);
   }

   stop(e:any) {
      clearInterval(this.timerId);
   }

    render() {
         return <div>
           <button onClick={this.start}>Start</button>
           <button onClick={this.stop}>Stop</button>
           <h1>Hi from {this.props.compiler} and {this.props.framework}! {this.state.value}</h1>;
        </div>
    }

}

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("example")
);
