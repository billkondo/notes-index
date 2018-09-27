import React from 'react';
import { connect } from 'react-redux';
import { Collapse, Card, InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';

import ExitButton from '../../Buttons/ExitButton';
import Tag from './FilterTag';

import { filterOff } from '../../../actions/notes-data';

class Filter extends React.Component {
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
    const { filter, filterOff } = this.props;
    
    return (
      <Collapse isOpen={filter} >
        <Card className="notes-filter">
          <ExitButton click={filterOff} />

          <div className="header">
            <InputGroup className="input">    
              <InputGroupAddon addonType="prepend">
                TAGS
              </InputGroupAddon>
              <Input 
                onChange={this.onChange} 
                onKeyDown={this.onKeyDown} 
                value={this.state.tag} 
              />
            </InputGroup>
          </div>

          <div className="tags-container">
            {
              this.state.tags.map(tag => {
                return (
                  <Tag key={tag} tag={tag} deleteTag={this.deleteTag} />
                );
              })
            }
          </div>

          <Button className="tags-submit">
            FILTER
          </Button>
          
        </Card>
      </Collapse>
    );
  }
}

export default connect(
  (state) => ({
    filter: state.notesData.filter
  }),
  { filterOff }
)(Filter);