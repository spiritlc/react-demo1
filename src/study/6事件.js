import React, { Component, useState } from 'react'

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: 'sss'
         }
         this.click3 = this.click3.bind(this)
    }
    click1(params) {
        console.log('click1')
        console.log(this)
    }
    click2 = () => {
        console.log(this)
    }
    click3 = id => {
        console.log(this)
        console.log(id)
    }
    render() { 
        return ( 
            <div>
                <h1 onClick={ this.click1 }>点击事件</h1>
                <h1 onClick={ this.click2 }>this指向</h1>
                <h1 onClick={ () => { this.click1() } }>this指向2</h1>
                <h1 onClick={ this.click3 }>this指向3</h1>
                <h1 onClick={ () => { this.click3('11')} }>传参1</h1>
                <h1 onClick={ this.click3.bind(this,3) }>传参2</h1>
            </div>
        );
    }
}
 
export default Test;


// export default function Test() {
//     function clickBtn() {
//         console.log('111')
//     }
//     const clickEve = () => {
//         console.log(this)
//     }
//     return (
//         <div>
//             <h1 onClick={ clickBtn }>点击事件</h1>
//             <h1 onClick={ clickEve }>点击事件</h1>
//         </div>
//     )
// }