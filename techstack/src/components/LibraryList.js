import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import ListItem from './ListItem';

class LibraryList extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(this.props.librariesProps);
    console.log(this.props);
  }

  renderSingleRow(dataItem) {
    return <ListItem data={dataItem} />;
  }

  render() {
    return <ListView dataSource={this.dataSource} renderRow={this.renderSingleRow} />;
  }
}

const mapStateToPros = globalState => ({
  librariesProps: globalState.libraries
});

export default connect(mapStateToPros)(LibraryList);
