import { screen, render } from '@testing-library/react';
import * as React from 'react';
import Header from './Header';

const authedUser = {
    id: "sarahedo",
    password: "password123",
    avatarURL: "https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-on-transparent-vector-id1313958250?b=1&k=20&m=1313958250&s=170667a&w=0&h=9SnigCTdaqo6v-R24TabGaIczGLG-5m6rkY6cMSDbgM=", 
}

describe('Header', () => {
    it('will match snapshot', () => {
        var component = render(<Header />);
        expect(component).toMatchSnapshot();
    });
});
