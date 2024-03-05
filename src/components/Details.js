import React, { Component } from 'react'

export default class Content extends Component {

   

  render() {
    let {content} = this.props;

    return (
      <div className='container'>
        {content}
      </div>
    )
  }
}
