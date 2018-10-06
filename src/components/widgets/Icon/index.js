/**
*
* Icon
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import ViewPropTypes from 'bloodbud/src/config/ViewPropTypes';

import parseStyles from './parseStyles';

function Icon(props) {
  if (!props || !Icons[props.name]) return null;

  const { name, style, ...restProps } = props;
  delete restProps.align;
  const styles = parseStyles(style, restProps);
  return (
    <FontAwesome style={styles}>{Icons[props.name]}</FontAwesome>
  );
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  style: ViewPropTypes.style,
  color: PropTypes.string,
  fontSize: PropTypes.number,
};

export default Icon;
