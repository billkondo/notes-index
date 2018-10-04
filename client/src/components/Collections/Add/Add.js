import React from 'react';

import Header from './Header';
import Title from '../Utils/Title';
import Description from '../Utils/Description';
import Tags from '../Utils/Tags';
import Children from '../Utils/Children';
import Submit from './Submit';
import Search from '../../Modal/Search/Search';

class Add extends React.Component {
  state = {
    shouldRender: false
  }

  enterSearchMenu = () => this.setState({ shouldRender: true });
  exitSearchMenu = () => this.setState({ shouldRender: false });

  render() {
    const { shouldRender } = this.state;

    return (
      <div className="collections-add-page">
        <div className="collections-add">
          <Header />
          <Title />
          <Description />
          <Tags />
          <Children enterSearchMenu={this.enterSearchMenu} />
          <Submit />
        </div>

        <Search shouldRender={shouldRender} exitSearchMenu={this.exitSearchMenu} />
      </div>
    );
  }
}

export default Add;