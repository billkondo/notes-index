import React from 'react';
import { connect } from 'react-redux';
import TextEditor from '../Editor/TextEditor';

// Functions
import { enterNewDescription } from '../../actions/create-note';

// class DescriptionUI extends React.Component {
//   render() {
//     return (
//       <div id="note-description">
//         <div id="title"> Description </div>

//         <div id="description">
//           <div className="form-group">
//             <textarea
//               className="form-control"
//               rows="4"
//               id="description-text"
//               value={props.description}
//               onChange={(e) => props.enterDescription(e.target.value)}
//             />
//           </div>
//         </div>

//         <div className="separator">
//         </div>
//       </div>
//     );
//   }
// }

class DescriptionUI extends React.Component {
  render() {
    return (
      <div id="note-description">
        <div className="header-description">
          <div className="title"> Description </div>
          <div className="button-container">
            <i className="fas fa-bold button" /> 
            <i className="fas fa-italic button" /> 
          </div>
        </div>

        <div className="description">
          <TextEditor />
        </div>

        <div className="separator">
        </div>
      </div>
    );
  }
}

const Description = connect(
  (state) => ({
    description: state.createNote.description
  }),
  (dispatch) => ({
    enterDescription: (newDescription) => dispatch(enterNewDescription(newDescription))
  })
)(DescriptionUI);

export default Description;