import * as React from 'react';
import { reduxForm, Field } from 'redux-form';

import { RenderField } from './RenderField';
import {
    Box,
    Form,
    Button
} from './styled';


const required = value => value ? undefined : 'Campo requerido';

export const SimpleForm = ({ handleSubmit }) => (
    <Box>
        <Form onSubmit={handleSubmit}>
            <h1 style={{textAlign: 'center'}}>Formulario de registro</h1>
            <Field
                name="name"
                type="text"
                component={RenderField}
                label="Nombre"
                validate={[required]}
            />
            <Field
                name="lastname"
                type="text"
                component={RenderField}
                label="Apellidos"
                validate={[required]}
            />
            <Field
                name="address"
                type="text"
                component={RenderField}
                label="Dirección"
                validate={[required]}
            />
            <Field
                name="email"
                type="text"
                component={RenderField}
                label="Email"
                validate={[required]}
            />
            <Field
                name="phone"
                type="text"
                component={RenderField}
                label="Telefono"
                validate={[required]}
            />
            <Field
                name="code"
                type="text"
                component={RenderField}
                label="Código Postal"
                validate={[required]}
            />
            <Field
                name="date"
                type="date"
                component={RenderField}
                label="Fecha de nacimiento"
                validate={[required]}
            />
            <Button data-test="button-create">Registrarse</Button>
        </Form>
    </Box>
);

export default reduxForm({
    form: 'single',
    onSubmit: (values) => {
        console.log('submit', values);
    }
})(SimpleForm)