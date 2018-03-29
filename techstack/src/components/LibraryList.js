import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';

class LibraryList extends Component {
  render() {
    console.log(this.props);
    return <View />;
  }
}

const mapStateToPros = globalState => ({ librariesProps: globalState.libraries });

export default connect(mapStateToPros)(LibraryList);
