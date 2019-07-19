import React, { Component } from 'react';

/**
 * 数据类型
 * 1.string
 * 2.number
 * 直接输出
 * 3.bool
 * 4.undefined
 * 5.null
 * 不显示
 * 6.object
 * 不可以直接输出对象，数组对象例外, 会以join('')的形式输出
 */
export default function Test() {
    return (
        <div>
            {/* <h1>{ '字符串' }</h1>
            <h1>{ 1111 }</h1>
            <h1>{ true }</h1>
            <h1>{ undefined }</h1>
            <h1>{ null }</h1> */}
            {/* <h1>{ {name: 'aaa'} }</h1> */}
            <h1>{ [1,2,3] }</h1>
        </div>
    )
}