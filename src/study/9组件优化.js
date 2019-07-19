import React, { PureComponent,Component } from 'react';


// class Person extends PureComponent {
//     constructor(props) {
//         super(props);
//         this.state = {  }
//     }
//     // shouldComponentUpdate(nextProps, state) {
//     //     // console.log(nextProps)
//     //     // console.log(this.props)
//     //     // if(nextProps.name === this.props.name) return false
//     //     // return true
//     //     return true
//     // }

//     render() { 
//         console.log('render')
//         return ( 
//             <div>
//                 <p>{ this.props.name.name }</p>
//             </div>
//          );
//     }
// }

// class Person extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {  }
//     }
//     render() { 
//         console.log('render')
//         return ( 
//             <div>
//                 <p>{ this.props.obj.name }</p>
//                 <p>{ this.props.obj.age }</p>
//             </div>
//          );
//     }
// }

// class Person extends PureComponent {
//     constructor(props) {
//         super(props);
//         this.state = {  }
//     }
//     render() { 
//         console.log('render')
//         return ( 
//             <div>
//                 <p>{ this.props.name }</p>
//                 <p>{ this.props.age }</p>
//             </div>
//          );
//     }
// }


const Person = React.memo(function (props) {
    console.log('render')
    return (
        <div>
            <p>{ props.name.name }</p>
            {/* <p>{ props.age }</p> */}
        </div>
    )
})

 


class Test extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            obj: {
                name: '张三',
                age: 19
            }
         }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                obj: Object.assign(this.state.obj)
            })
        }, 1000)
    }
    render() { 
        return ( 
            <Person name={ this.state.obj }></Person>
            // <Person { ...this.state.obj }></Person>
         );
    }
}
 
export default Test;
