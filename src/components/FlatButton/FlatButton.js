import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const FlatButton = ({ onPress, disabled, disabledStyle, Style, ...rest }) => {
    return (
        <TouchableOpacity activeOpacity={0.5} style={[disabled ? Style : disabledStyle]} onPress={onPress} disabled={disabled}>
            {rest.children}
        </TouchableOpacity>
    );
};

FlatButton.propTypes = {
    onPress: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    disabledStyle: PropTypes.object,
    containerStyle: PropTypes.object
};

export default FlatButton;