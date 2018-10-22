import React from 'react';
import { connect } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import classNames from 'classnames';
import { Input, Button } from 'reactstrap';

import ExitButton from '../../Buttons/ExitButton';
import AddButton from '../../Buttons/AddButton';

import { filterNotesByTags, filterCollectionsByTags } from '../../../utilities/filter';
import { loadNotes } from '../../../actions/notes-data';
import { loadCollections } from '../../../actions/collections-data';
import { prepareTag } from '../../../utilities/tags';
import { filterUnload } from '../../../actions/modal';

class Tag extends React.Component {
  state = {
    mouseOn: false
  }

  delete = () => {
    const { tag, deleteTag } = this.props;
    deleteTag(tag);
  }

  render() {
    const { tag } = this.props;
    const { mouseOn } = this.state;

    return (
      <div 
        className="Tag"
        onMouseEnter={() => this.setState({ mouseOn: true }) }
        onMouseLeave={() => this.setState({ mouseOn: false }) }
        onMouseOver={() => {
          if (!mouseOn)
            this.setState({ mouseOn: true });
        }}
      >
        {mouseOn && <ExitButton click={this.delete} />}
        {tag}
      </div>
    );
  }
}

class FilterUI extends React.Component {
  state = {
    tags: [], 
    tag: ""
  }

  endFilter = () => this.props.filterUnload();

  onChange = (e) => this.setState({ tag: e.target.value });
  
  onKeyDown = (e) => {
    if (e.key === 'Enter')
      this.addTag();
  }

  addTag = () => {
    const { tag, tags } = this.state;
    const newTag = prepareTag(tag);

    if (newTag && tags.indexOf(newTag) === -1) {
      this.setState(prevState => {
        return {
          tag: "", 
          tags: prevState.tags.concat(newTag)
        };
      });
    }
  }

  deleteTag = (tag) => {
    this.setState(prevState => {
      return {
        tags: prevState.tags.filter(value => value !== tag)
      };
    });
  }

  submit = () => {
    const { filterType, loadNotes, loadCollections } = this.props;
    const { tags } = this.state;

    if (filterType) {
      filterNotesByTags(tags)
        .then(notes => {
          loadNotes(notes);
          this.endFilter();
        })
        .catch(err => console.log(err));
    }
    else {
      filterCollectionsByTags(tags)
        .then(collections => {
          loadCollections(collections);
          this.endFilter();
        })
        .catch(err => console.log(err));
    }
  }

  render() {
    const { filterType } = this.props;
    const { tag, tags } = this.state;

    return (
      <div className="FilterPage">
        <div className={classNames(
            "FilterMenu", 
            { "NotePageLarge": filterType === 1 },
            { "CollectionPageLarge": filterType === 0 }
          )}
        >
          <ExitButton click={this.endFilter} />
          
          <div className="Header">
            {`Filter ${filterType ? "Notes" : "Collections"}`}
          </div>
          
          <div className="InputTag">
            <div className="Title">
              <i className="fas fa-hashtag TagIcon" />
              TAG
            </div>
            
            <Input
              value={tag}
              onChange={this.onChange}
              className={classNames(
                "Input",
                { "NotePageSmall": filterType === 1 },
                { "CollectionPageSmall": filterType === 0 }
              )}
              onKeyDown={this.onKeyDown}
            />

            <AddButton click={this.addTag} />
          </div>
          
          <TransitionGroup className="Tags">
            {
              tags.map(value => 
                <CSSTransition
                  timeout={500}
                  exit={false}
                  classNames={{
                    enter: "animated", 
                    enterActive: "fadeIn faster"
                  }}
                  key={value}
                >
                  <Tag tag={value} deleteTag={this.deleteTag} />
                </CSSTransition>
              )
            }
          </TransitionGroup>

          <Button color="success" className="Submit" onClick={this.submit} > FILTER </Button>
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    filterType: state.modal.filterType
  }), 
  { filterUnload, loadNotes, loadCollections }
)(FilterUI);