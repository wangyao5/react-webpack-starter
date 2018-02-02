import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

@connect((state, props) => ({


}))
class Welcome extends React.Component{
  render(){
    console.log('into welcome')
    return(
      <div>
        <h2>welcome,你好！</h2>
      </div>
    )
  }
}

export default withRouter(Welcome)