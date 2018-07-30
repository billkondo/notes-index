import React from 'react';

class Description extends React.Component {
  render() {
    return (
      <div id="note-description">
        <div id="title"> Description </div>

        <div id="description">
          <div className="form-group">
            <textarea 
              className="form-control" 
              rows="3" 
              placeholder="Description" 
              id="description-text" 
              value={this.props.description} 
              onChange={this.props.enterDescription}
            />
          </div>
        </div>

        <div className="separator">
        </div>
      </div>
    );
  }
}

export default Description;