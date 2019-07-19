import React, { Component, useState, useEffect } from 'react';

// export default function Test() {
//     const [count, setCount] = useState(10)
//     // const [name, setName] = useState('222')
//     return (
//         <div>
//             <h1>点击了 { count } 次</h1>
//             <button onClick={ () => {setCount(count + 1)} }>点击</button>
//         </div>
//     )
// }


// class Test extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { count: 1 }
//     }
//     render() { 
//         return ( 
//             <div>
//                 <h1>点击了 { this.state.count } 次</h1>
//                 <button onClick={ () => {this.setState({count: this.state.count + 1})} }>点击</button>
//             </div>
//          );
//     }
// }
 
// export default Test;


// export default function Test() {
//     const [count, setCount] = useState(10)
//     setTimeout(() => {
//         setCount(count + 1)
//     }, 1000)
//     useEffect(() => {
//         console.log('aaa')
//         return () => {

//         }
//     })
//     return <h1>hello </h1>
// }



// 自定义hook

function useCheckNum(num) {
    const [type, setType] = useState('偶数')
    useEffect(() => {
        setType(num % 2 === 0 ? '偶数' : '奇数')
    }, [num])
    return type
}

export function NumType(props) {


    let type = useCheckNum(props.num)
    



    return (
        <div>
            <p>{ type }</p>
        </div>
    )
}

export default function Test() {
    const [num, setNum] = useState(0)
    const addNum = () => {
        setNum(num + 1)
    }
    return (
        <div>
            <NumType num={num}></NumType>
            <button onClick={ addNum }>aadd</button>
        </div>
    )
}