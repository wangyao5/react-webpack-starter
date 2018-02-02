import React, { Component } from 'react'
import { connect } from 'react-redux'
import { query } from '../actions/userAction'
import { welcomePage } from '../actions/pageAction'

@connect((state, props) => ({


  }))

export default class Login extends Component {
    // 初始化页面常量 绑定事件方法
    constructor(props, context) {
        super(props);
    }
    render() {
        console.log('props');
        console.dir(this.props);
        console.log('state');
        console.dir(this.state);
        // this.props.history.go('/welcome');
        return (
            <div>
                <h2>login！</h2>
                <div onClick={()=>{this.props.dispatch(welcomePage)}}>go to welcome</div>
                <div onClick={()=>{this.props.dispatch(query())}}>fetch baidu.com</div>
                {/* {this.state.data.map((item) => (
                    <div>{item}</div>
                ))} */}
            </div>
        )
    }
}