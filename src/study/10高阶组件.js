import React, { Component } from "react";

const withHello = (Comp, age) => {
  // console.log("with hello");
  // // 获取level
  let level = "管理员";
  // console.log(age);

  return function(props) {
    return <Comp {...props} level={level} age={age}></Comp>
    // <Hello level={}></Hello>
  }


//   // return props => <Comp {...props} level={level} />;

//   // return class NewHello extends Component {
//   //     constructor(props) {
//   //         super(props);
//   //         this.state = { 
//   //           level: ''
//   //          }
//   //     }
//   //     componentDidMount() {

//   //     }
//   //     render() {
//   //         return ( <Comp></Comp> );
//   //     }
//   // }
// };

// // const withLog = Comp => {
// //     console.log('日志')
// //     return props => <Comp {...props}></Comp>
// // }

// // @withLog
@withHello
class Hello extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount() {
      console.log(this.props)
    }
    render() {
        return ( <div>hello { this.props.level } {this.props.name} { this.props.age }</div> );
    }
}

// // // const log = ()
// let age = '111'
// // const NewHello = withHello(Hello, age)

// class Test extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { name: '张三' }
//     }
//     componentDidMount() {
//         // setTimeout(() => {
//         //     this.setState({
//         //         name: '李四'
//         //     })
//         // }, 2000)
//     }
//     render() {
//         return (
//             <Hello name={this.state.name}></Hello>
//          );
//     }
// }

// export default Test;

export function Person(props) {
  return (
    <div>
      <p>当前用水量 {props.count} 吨</p>
      <p>当前水单价 {props.price} 元</p>
    </div>
  );
}

const withAge = Comp => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        price: 10
      };
    }
    static getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.count < 10) {
        return {
          price: 10
        }
      } else if (nextProps.count < 20) {
        return {
          price: 20
        }
      } else {
        return {
          price: 30
        }
      }
    }
    // () {
    //     this.setState({
    //         price: 20
    //     })
    
    // }
    render() {
      return <Comp {...this.props} {...this.state} />;
    }
  };
};
const AgePerson = withAge(Person);

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState(state => {
        return {
          count: state.count + 3
        };
      });
    }, 1000);
  }
  render() {
    return <AgePerson count={this.state.count} />;
  }
}

export default Test;
