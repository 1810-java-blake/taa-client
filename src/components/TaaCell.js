import React, { Component } from 'react';

class TaaCell extends Component {
  render() {
    return (
      <tr className="TaaRow">
        <td className="TaaCell">{this.props.trackName}</td>
        <td className="TaaCell">{this.props.albumName}</td> 
        <td className="TaaCell">{this.props.artistName}</td>
      </tr>
    );
  }
}

export default TaaCell;