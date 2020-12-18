import React from 'react';
import JsonCard from './JsonCard';
import { decode } from './tokenSlice';
import { connect } from 'react-redux'

class App extends React.Component {
  constructor(props) {
    super(props);

    console.log(props);

    this.handleTokenChanged = this.handleTokenChanged.bind(this);
  }

  handleTokenChanged(event) {
    this.props.decode(event.target.value);
  }

  render() {
    const { token, header, payload } = this.props.token;

    return (
      <div>

        <nav className="navbar navbar-light bg-light mb-3">
          <span className="navbar-brand mb-0 h1">MyToken</span>
        </nav>

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
  token: state.token
});

const mapDispatchToProps = () => {
  return {
    decode
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(App);