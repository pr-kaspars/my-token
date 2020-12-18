import React from 'react';
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
    const { token } = this.props;

    return (
      <div className="form-group">
        <textarea
          className="form-control text-monospace small-text-form-control"
          rows="3"
          placeholder="Enter JWT token here"
          value={token}
          onChange={this.handleTokenChanged}
        />
      </div>
    );
  }
}


const mapStateToProps = state => ({
  token: state.token.token,
});

const mapDispatchToProps = () => ({ decode });

export default connect(mapStateToProps, mapDispatchToProps())(App);