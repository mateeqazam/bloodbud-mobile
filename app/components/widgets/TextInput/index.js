/**
*
* TextInput
*
* TODO: update colors & refactor Icon part
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { isFunction } from 'lodash';
import { withTheme } from 'styled-components';

import Icon from 'bloodbud/app/components/widgets/Icon';
import FieldError from 'bloodbud/app/components/widgets/FormField/Error';

import parseIcon from './parseIcon';
import {
  InputFieldWrapper,
  TextInputWrapper,
  StyledTextInput,
  IconWrapper,
} from './styles';

class TextInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFieldFocused: false,
    };

    this.handleBlur = this.handleBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.onChangeText = this.handleChangeText.bind(this);
  }

  handleBlur = () => this.setState({ isFieldFocused: false });

  handleFocus = () => this.setState({ isFieldFocused: true });

  handleChangeText = (value) => {
    const { name, onChange } = this.props;
    if (isFunction(onChange)) onChange(value, name);
  }

  render() {
    const { isFieldFocused } = this.state;
    const {
      name, value,
      iconLeft, iconRight, onChange,
      status, error, ...props
    } = this.props;
    // if (!name || !isFunction(onChange)) return null;

    const iconLeftProps = parseIcon(iconLeft, 'left');
    const iconRightProps = parseIcon(iconRight, 'right');
    const iconStyles = {
      fontSize: 16,
      color: props.theme.colors.secondaryText,
    };
    return (
      <InputFieldWrapper>
        <TextInputWrapper {...{ status, isFieldFocused }}>
          {!!iconLeftProps
          && <IconWrapper><Icon {...iconStyles} {...iconLeftProps} /></IconWrapper>
          }
          <StyledTextInput
            style={{ color: props.theme.colors.text }}
            {...props}
            {...{ name, value }}
            underlineColorAndroid="transparent"
            onBlur={this.handleBlur}
            onFocus={this.handleFocus}
            onChangeText={this.handleChangeText}
          />
          {!!iconRightProps
          && <IconWrapper><Icon {...iconStyles} {...iconRightProps} /></IconWrapper>
          }
        </TextInputWrapper>
        {!status && <FieldError error={error} />}
      </InputFieldWrapper>
    );
  }
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  iconLeft: PropTypes.oneOfType([
    PropTypes.string, PropTypes.object,
  ]),
  iconRight: PropTypes.oneOfType([
    PropTypes.string, PropTypes.object,
  ]),
  onChange: PropTypes.func.isRequired,
  status: PropTypes.bool,
  error: PropTypes.string,
};

TextInput.defaultProps = {
  status: true,
};

export default withTheme(TextInput);
