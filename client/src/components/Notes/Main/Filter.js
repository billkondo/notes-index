import React from 'react';
import { connect } from 'react-redux';
import { Collapse, Card, InputGroup, InputGroupAddon, Input } from 'reactstrap';

import ExitButton from '../../Buttons/ExitButton';
import Tag from './FilterTag';

import { endFilter } from '../../../actions/notes-routes';

class FilterUI extends React.Component {
  state = {
    tags: [],
    tag: ""
  }

  onChange = (e) => this.setState({ tag: e.target.value })
  
  addTag = () => {
     if (this.state.tag && this.state.tags.indexOf(this.state.tag) === -1) {
      this.setState(prevState => {
         return {
           tags: prevState.tags.concat([prevState.tag]),
           tag: ""
         }
       })
     }
  }

  onKeyDown = (e) => {
    if (e.key === 'Enter') 
      this.addTag();
  }

  deleteTag = (tag) => 
    this.setState(prevState => {
      return {
        tags: prevState.tags.filter(value => value !== tag)
      }
    })
  
  render() {
    return (
      <Collapse 
        isOpen={this.props.renderFilter} 
      >
        <Card id="menu-filter">

          <ExitButton click={this.props.endFilter} />

          <div id="tags">
            <InputGroup id="header">    
              <InputGroupAddon addonType="prepend">
                <i className="fas fa-hashtag icon" />
                <p>Tags</p>
              </InputGroupAddon>
              <Input 
                className="input-tag" 
                onChange={this.onChange} 
                onKeyDown={this.onKeyDown} 
                value={this.state.tag} 
              />
            </InputGroup>
          </div>

          <div id="tags-container">
            {
              this.state.tags.map(tag => {
                return (
                  <Tag key={tag} tag={tag} deleteTag={this.deleteTag} />
                );
              })
            }
          </div>

          <button id="tags-submit">
            FILTER
          </button>
          
        </Card>
      </Collapse>
    );
  }
}

const Filter = connect(
  (state) => ({
    renderFilter: state.notesRoutes.renderFilter
  }),
  (dispatch) => ({
    endFilter: () => dispatch(endFilter())
  })
)(FilterUI);

export default Filter;