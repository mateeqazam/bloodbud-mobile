/**
 *
 * Icon
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import ViewPropTypes from 'bloodbud/app/config/ViewPropTypes';

import IconElem from 'react-native-vector-icons/FontAwesome';

import styled, { css } from 'styled-components';
import parseStyles from './parseStyles';

// margintop: ${props => props.marginTop || 1};
const test = 'paddingHorizontal: 5px;';
export const Wrapper = styled.View`
  ${test}
`;

function Icon(props) {
  if (!props) return null;
  // if (!props || !Icons[props.name]) return null;

  const { name, style, marginTop, ...restProps } = props;
  console.log('name: ', name);
  delete restProps.align;
  const styles = parseStyles(style, restProps);

  return (
    <Wrapper marginTop={marginTop}>
      <IconElem style={styles} name={name} />
    </Wrapper>
  );
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  style: ViewPropTypes.style,
  color: PropTypes.string,
  fontSize: PropTypes.number,
};

export default Icon;
