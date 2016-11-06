import React, { Component } from 'react';

export default class Document extends Component {
  render() {
    return (
      <div>
        <h1>Document Page</h1>
        <div
          className="fb-like"
          data-share="true"
          data-width="450"
          data-show-faces="true">
        </div>
      </div>
    )
  }
}
