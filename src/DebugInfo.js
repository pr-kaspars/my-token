import React from 'react';
import JsonCard from './JsonCard';
import { connect } from 'react-redux'

class DebugInfo extends React.Component {

  render() {
    const { header, payload } = this.props;

    return (
      <div className="row">
        <div className="col">
          <JsonCard title="Header" data={header} />
        </div>
        <div className="col">
          <JsonCard title="Payload" data={payload} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  header: state.token.header,
  payload: state.token.payload,
});

export default connect(mapStateToProps)(DebugInfo);