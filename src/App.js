import React from 'react';
import JsonCard from './JsonCard';

class App extends React.Component {
  constructor(props) {
    super(props);

    const token = "";
    this.state = { token };

    this.handleTokenChanged = this.handleTokenChanged.bind(this);
  }

  decodeToken(tokenStr) {
    const tokenParts = tokenStr.split(".").slice(0, -1).map(atob).map(JSON.parse);

    return {
      header: tokenParts[0],
      payload: tokenParts[1],
    }
  }

  handleTokenChanged(event) {
    const token = event.target.value;
    this.setState({ token, ...this.decodeToken(token) });
  }

  render() {
    const { token, header, payload } = this.state;

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

export default App;
