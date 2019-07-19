// import React, {
//     Component
// } from 'react';




// // class Test extends Component {
// //     constructor(props) {
// //         super(props);
// //         this.state = { 
// //             time: new Date().toLocaleTimeString()
// //         }
// //     }
// //     componentDidMount() {
// //         this.timer = setInterval(() => {
// //             this.setState({
// //                 time: new Date().toLocaleTimeString()
// //             })
// //             // this.state.time = new Date().toLocaleTimeString()
// //         }, 1000)
// //     }
// //     componentWillUnmount() {
// //         clearInterval(this.timer)
// //     }
// //     render() { 
// //         return ( 
// //             <div>
// //                 <h1>{ this.state.time }</h1>
// //             </div>
// //         );
// //     }
// // }
// // export default Test

// // class Test extends Component {
// //     constructor(props) {
// //         super(props);
// //         this.state = {  }
// //     }
// //     render() { 
// //         return (  );
// //     }
// // }
 
// // export default Test;



// // class Test extends Component {
// //     constructor(props) {
// //         super(props);
// //         this.state = { 
// //             count: 1,
// //             count2: 2
// //          }
// //     }
// //     componentDidMount() {
// //         // this.setState({
// //         //     count: this.state.count + 1
// //         // })
// //         // this.setState({
// //         //     count: this.state.count + 1
// //         // })
// //         // this.setState({
// //         //     count: this.state.count + 1
// //         // })


// //         this.setState((state) => ({
// //             count: state.count + 1
// //         }))
// //         this.setState((state) => ({
// //             count: state.count + 1
// //         }))
// //         this.setState((state) => ({
// //             count: state.count + 1
// //         }))
// //     }
// //     render() { 
// //         return ( 
// //             <h1>{ this.state.count } --- {this.state.count2}</h1>
// //          );
// //     }
// // }

// // export default Test;



// function toCelsius(fahrenheit) {
//     return (fahrenheit - 32) * 5 / 9;
// }

// function toFahrenheit(celsius) {
//     return (celsius * 9 / 5) + 32;
// }

// function WenduInput(props) {
//     const change = (e) => {
//         props.changeWenDu(props.type, e.target.value)
//     }
//     return(
//         <input type="text" value={ props.wendu } onChange={ change }/>
//     )
// }


// class Test extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { 
//             wendu: 0,
//             type: 'c'
//          }
//     }
//     changeWenDu = (type, val) => {
//         this.setState({
//             type,
//             wendu: val
//         })
//     }
//     render() { 
//         const cWendu = this.state.type === 'c' ? this.state.wendu : toCelsius(this.state.wendu)
//         const fWendu = this.state.type === 'f' ? this.state.wendu : toFahrenheit(this.state.wendu)
//         return ( 
//             <div>
//                 <WenduInput type="c" wendu={ cWendu } changeWenDu={ this.changeWenDu }></WenduInput>
//                 <WenduInput type="f" wendu={ fWendu } changeWenDu={ this.changeWenDu }></WenduInput>
//             </div>
//          );
//     }
// }
 
// export default Test;



import React, { Component } from 'react';
class Person extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount() {

    }
    shouldComponentUpdate(nextProps) {
        console.log(nextProps);
        
    }
    render() { 
        return ( 
            <div>
                <h1>{ this.props.age }</h1>
                <h2>{ this.props.obj.name }</h2>
                <button onClick={ () => {
                    console.log(this.props)
                    this.props.obj.name = 444
                    console.log(this.props)
                } }>点击</button>
            </div>
         );
    }
}
 
// export default Persno;

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            age: '22',
            obj: {
                name: '111'
            }
         }
    }
    render() { 
        return ( 
            <div>
                {/* <h1></h1> */}
                <Person {...this.state}></Person>
            </div>
         );
    }
}
 
export default Test;