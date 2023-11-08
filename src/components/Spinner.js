import React, { Component } from 'react'

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <div className="spinner-border m-2" role="status"></div>
      </div>
      )
  }
}
