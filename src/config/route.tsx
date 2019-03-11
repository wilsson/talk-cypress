import * as React from 'react';
import { App } from '../App';
import { ProductForm } from '../components/ProductForm';
import { SimpleForm } from '../components/SimpleForm';

export const routes = [
    {
        component: App,
        routes: [
            {
                path: '/product',
                component: ProductForm,
                exact: true,
            },
            {
                path: '/simple-form',
                component:  SimpleForm,
                exact: true,
            }
        ]
    }
];