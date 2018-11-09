import React, { Component } from 'react';
import TaaCell from './TaaCell';
import { connect } from 'react-redux';

import * as schinookActions from '../redux/Actions/Schinook.actions';

class TaaTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taaList: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:8080/ServletsDay1/schinook')
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          ...this.state,
          taaList: data
        })
      });
  }
  render() {
    const taaList = this.props.taaList;
    let count = 0;
    let taaTable = taaList.map((taa) => 
      <TaaCell key={count++} trackName={taa.trackName} albumName={taa.albumName} artistName={taa.artistName} />
    );

    return (
      <div className="TaaTable-container">
        <table className="TaaTable">
          <tbody>
            <tr>
              <th className="TaaHeader">Track Name</th>
              <th className="TaaHeader">Album Name</th> 
              <th className="TaaHeader">Artist Name</th>
            </tr>
            {taaTable}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    taaList: state.schinook.taaList
  }
}
 
const mapDispatchToProps = {
  useSchinook: schinookActions.useSchinook
}

export default connect(mapStateToProps, mapDispatchToProps)(TaaTable)