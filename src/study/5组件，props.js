import React, { Component } from 'react';




// function Hello(props) {
//     return (
//         <h1>hello { props.name }</h1>
//     )
// }

// class Nice extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {  }
//     }
//     render() { 
//         return ( 
//             <h1>
//                 nice to meet { this.props.name }
//             </h1>
//             // <h2>helo</h2>
//          );
//     }
// }
// class Test extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {  }
//     }
//     render() { 
//         return ( 
//             <div>
//                 <Hello name='z张三'></Hello>
//             <Nice name='z张三'></Nice>
//             </div>
//          );
//     }
// }
 
// export default Test;
 

// let name = '张三'
// let age = '18'
// class Test extends Component {
//     render() { 
//         return ( 
//             <div>
//                 <Hello name={ name } age={ age }></Hello>
//                 <Nice name={ name }></Nice>
//             </div>
//          );
//     }
// }
 
// export default Test;


// import React, { Component } from 'react';
// 受控组件
class Test extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: 'zhangsan',
            age: '',
            formItem: [{
                type: 'input',
                name: 'name'
            },{
                type: 'input',
                name: 'age'
            },{
                type: 'input',
                name: 'sex'
            },{
                type: 'input',
                name: 'class'
            },{
                type: 'input',
                name: 'aaa'
            }]
        }
    }
    changeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }, () => {

            console.log(this.state)
        })
    }
    render() { 
        return ( 
            <form action="">
                {
                    this.state.formItem.map(item => {
                        return <input key={ item.name } type={ item.type } name={ item.name }  value={ this.state[item.name] } onChange={ this.changeInput }></input>
                    })
                }
            </form>
         );
    }
}



// class Test extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { 
//             val: 'aaa'
//          }
//     }
//     changeVal = (e) => {
//         this.setState({
//             val: e.target.value
//         })
//     }
//     render() { 
//         return ( 
//             <input type="text" value={ this.state.val } onChange={ this.changeVal }/>
//          );
//     }
// }
 
export default Test;
 
// export default Test;



// class Test extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {  }
//     }
//     render() { 
//         return ( 

//          );
//     }
// }
 
// export default Test;