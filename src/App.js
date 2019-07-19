import React, { useState, Component } from 'react';
import './App.css';
// import Test from './study/1jsx'
// import Test from './study/2内容输出'
// import Test from './study/3插值表达式';
// import Test from './study/4循环';
// import Test from './study/5组件，props';
// import Test from './study/6事件';
import Test from './study/7state';
// import Test from './study/8生命周期';
// import Test from './study/9组件优化'
// import Test from './study/10高阶组件'
// import Test from './study/11复合'
// import Test from './study/hook'




function App() {

  // componentDidMount() {
    // setTimeout(() => {
    //   setName('')
    // },2000)
  // }
  return (
    <Test></Test>
  );
}

export default App;


// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { 
//       name: '张三'
//      }
//   }
//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({
//         name: ''
//       })
//     })
//   }
//   render() { 
//     // console.log('父组件渲染')
//     return ( 
//       <Test name={ this.state.name }></Test>
//      );
//   }
// }
 
// export default App;
