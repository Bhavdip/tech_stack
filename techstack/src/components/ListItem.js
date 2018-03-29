import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
  componentWillMount() {
    console.log(this.props);
  }
  render() {
    const { titleStyle } = styles;
    return (
      <CardSection>
        <Text style={titleStyle}>{this.props.data.title}</Text>
      </CardSection>
    );
  }
}

ListItem.propTypes = {
  data: PropTypes.any.isRequired
};

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 14
  }
};

export default connect(null, actions)(ListItem);
