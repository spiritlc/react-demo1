import React, { Component } from 'react';


let num = 1
const q = <p>hello world</p>
// 插值表达式
export default function Test() {
    return (
        <div>
            {/* { num + 1 } */}
            { true && q }
            {/* { q } */}
        </div>
    )
}