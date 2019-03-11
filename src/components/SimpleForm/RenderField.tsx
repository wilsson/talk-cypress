import * as React from 'react';

import {
    Input,
} from './styled';

export const RenderField = ({
    input,
    label,
    type,
    meta: { touched, error }
}) => {
    const isError = touched && error;
    return(
        <div style={{ marginBottom: 20 }}>
            <span style={{ display: 'block' }}>{label}</span>
            <Input data-test={input.name} {...input} type={type} />
            {isError && <span style={{ color: 'red', display: 'block' }} data-test="error">campo requerido</span>}
        </div>
    )
};