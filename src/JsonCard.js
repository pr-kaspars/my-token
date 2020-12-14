import React from 'react';

class JsonCard extends React.Component {

  render() {
    const { data, title } = this.props;

    return (
      <div className="card mb-3">
        <div className="card-header">{title}</div>
        <div className="card-body">
          <pre className="mb-0">{JSON.stringify(data, null, 2)}</pre>
        </div>
      </div>
    );
  }
}

export default JsonCard;
