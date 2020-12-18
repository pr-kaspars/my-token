import React from 'react';
import JsonCard from './JsonCard';
import { decode } from './tokenSlice';
import { connect } from 'react-redux'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleTokenChanged = this.handleTokenChanged.bind(this);
  }

  handleTokenChanged(event) {
    this.props.decode(event.target.value);
  }

  render() {
    const { token, header, payload } = this.props;

    return (
      <div>

        <div className="form-group">
          <textarea
            className="form-control text-monospace"
            rows="3"
            placeholder="Enter JWT token here"
            value={token}
            onChange={this.handleTokenChanged}
          />
        </div>

        <JsonCard title="Header" data={header} />
        <JsonCard title="Payload" data={payload} />

      </div>
    );
  }
}


const mapStateToProps = state => ({
  token: state.token.token,
  header: state.token.header,
  payload: state.token.payload,
});

const mapDispatchToProps = () => ({ decode });

export default connect(mapStateToProps, mapDispatchToProps())(App);