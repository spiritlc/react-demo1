import React, { Component } from 'react';


// function Person(props) {
//     return <div>
//     {props.header}
//         { props.children }
//         {props.footer}
//     </div>
// }

// 类似插槽
// export default function Test() {
//     return <Person>
//         <h1>张三</h1>
//     </Person>
// }


// 具名插槽
// class Test extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { count: 1 }
//     }
//     header = <button onClick={() => this.clickBtn()}>点击</button>
//     footer = <button onClick={() => this.clickBtn()}>点击</button>
//     clickBtn() {
//         this.setState({
//             count: this.state.count + 1
//         })
//     }
//     render() { 
//         return ( 
//             <Person header={this.header} footer={this.footer}>
//                 <h1>nameee</h1>
//             </Person>
//          );
//     }
// }
 
// export default Test;


// 作用域插槽
// class Test extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {  }
//     }
//     render() { 
//         return (  );
//     }
// }
 
// export default Test;



// const Api = {
//     getUser() {
//         return {name: '张三', age: 10}
//     }
// }
// class GetData extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {  }
//     }
//     componentDidMount() {
//         setTimeout(() => {
//             console.log(Api[this.props.api]().name)
//             this.setState({
//                 name: Api[this.props.api]().name,
//                 age: Api[this.props.api]().age
//             })
//         }, 1000)
//     }
//     render() { 
//         return ( 
//             this.props.children(this.state.name, this.state.age)
//         );
//     }
// }
 
// class Test extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {  }
//     }
//     render() { 
//         return ( 
//             <GetData api="getUser">
//                 { 
//                     (name, age) => {
//                         return <p>{ name } - { age }</p>
//                     }
//                 }
//             </GetData>
//         );
//     }
// }

// export default Test



// function Filter(props) {
//     console.log(props.children)
//     console.log(React.Children)
//     return (
//         <div>
//             { React.Children.map(props.children, child => {
//                 console.log(child)
//                 if (child.type === 'p') {
//                     return child
//                 }
//             }) }
//         </div>
//     )
// }

// class Test extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {  }
//     }
//     render() { 
//         return ( 
//             <Filter>
//                 <p>这是p标签</p>
//                 <h1>这是h1标签</h1>
//                 <p>这是p标签</p>
//                 <h1>这是h1标签</h1>
//             </Filter>
//         );
//     }
// }

function RadioGroup(props) {
    return (<div>
        { React.Children.map(props.children, child => {
            // child.props.name = props.name
            return React.cloneElement(child, {name: props.name}) 
            })}
    </div>)
}

function Radio({children, ...rest}) {
    return (
        <div>
            <input type="radio" {...rest}/>
            { children }
        </div>
    )
}

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <RadioGroup name="aaa">
                <Radio value="vue">选择vue</Radio>
                <Radio value="react">选择react</Radio>
                <Radio value="angluar">选择angluar</Radio>
            </RadioGroup>
         );
    }
}
 
 
export default Test;