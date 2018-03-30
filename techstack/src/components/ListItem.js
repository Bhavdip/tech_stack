import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { View, Text, TouchableWithoutFeedback, LayoutAnimation } from 'react-native';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
  componentDidUpdate() {
    LayoutAnimation.spring();
  }
  onPressItem() {
    return this.props.actionChooseLib(this.props.data.id);
  }
  renderDescription() {
    const { data, expanded } = this.props;
    if (expanded) {
      return (
        <CardSection>
          <Text style={{ flex: 1 }}> {data.description} </Text>
        </CardSection>
      );
    }
  }
  render() {
    const { titleStyle } = styles;
    return (
      <TouchableWithoutFeedback onPress={this.onPressItem.bind(this)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>{this.props.data.title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
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

//This is plain function that help to convert the state to component props
//As input first parameter you will get global state object
//and second we get own component props(this.props)
const mapStateToProps = (globalState, ownProps) => {
  //ownProps is the same as this.props
  //selectionLibId is define inside combindreducer as variable
  //extract thing we do here is pre calculation inside this block
  //this will match the selectedLibId and own Data Id if matched
  //expanded make it true or false
  const expanded = globalState.selectionLibId === ownProps.data.id;
  //as we know now expanded is become the new props of own component.

  //make sure that you must return plain object instead of undefine inside this function.
  return { expanded };
};
export default connect(mapStateToProps, actions)(ListItem);
