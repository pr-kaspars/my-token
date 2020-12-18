import React from 'react';

class JsonCard extends React.Component {

  render() {
    const { data, title } = this.props;

    return (
      <div className="card mb-3">
        <h6 className="card-header">{title}</h6>
        <div className="card-body">
          <pre className="mb-0">{JSON.stringify(data, null, 2)}</pre>
        </div>
      </div>
    );
  }
}

export default JsonCard;
