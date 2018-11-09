import React from 'react';
import { connect } from 'react-redux';

import * as exampleActions from '../redux/Actions/Example.actions';

export class ExampleComponent extends React.PureComponent {


  render() {
    const { clicks } = this.props;
    return (
      <>
        <div>
          Clicks: { clicks }
        </div>
        <button className="btn btn-primary" onClick={this.props.useExample} >Increment</button>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    clicks: state.example.clicks
  }
}
 
const mapDispatchToProps = {
  useExample: exampleActions.useExample
}

export default connect(mapStateToProps, mapDispatchToProps)(ExampleComponent)