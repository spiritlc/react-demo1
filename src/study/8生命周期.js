/**
 * 1.initialization组件初始化阶段
 * 也就是以下代码中类的构造方法( constructor() ),
 * Test类继承了react Component这个基类，
 * 也就继承这个react的基类，才能有render(),生命周期等方法可以使用，这也说明为什么函数组件不能使用这些方法的原因。
 * 2.
 */

import React, { Component } from "react";
export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
        age: 19
    }
    // 常用于初始化状态
    console.log("1.组件构造函数执行");
  }
  componentWillMount() {
    // 此时可以访问状态和属性，可进行api调用等 // 不推荐，推荐在didmount中进行api调用
    console.log("2.组件将要挂载");
  }
  componentDidMount() {
    // 组件已挂载，可进行状态更新操作
    console.log("3.组件已挂载");
    // this.setState({
    //   age: 18
    // })
  }
  componentWillReceiveProps() {
    // 父组件传递的属性有变化，做相应响应
    console.log("4.将要接收属性传递");
  }
  shouldComponentUpdate(props, state) {
    console.log(props, state)
    console.log(this.state)
    // if (this.state.age === state.age) return false
    if (!props.name) return false
    // 组件是否需要更新，需要返回布尔值结果，优化点
    console.log("5.组件是否需要更新？");
    return true;
  }
  componentWillUpdate() {
    // 组件将要更新，可做更新统计
    console.log("6.组件将要更新");
  }
  componentDidUpdate() {
    // 组件更新
    console.log("7.组件已更新");
  }
  componentWillUnmount() {
    // 组件将要卸载, 可做清理工作
    console.log("8.组件将要卸载");
  }
  render() {
    console.log("组件渲染");
    return <div>react生命周期</div>;
  }
}
