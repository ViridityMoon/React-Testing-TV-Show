import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('../')

test('App renders correctly when mounting', () => {
    render(<App/>)
});