import { render } from '@testing-library/react';
import * as React from 'react';
import UserLabel from './UserLabel';

const user = {
    id: "testId",
    name: "test name",
    avatarURL: "https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-on-transparent-vector-id1313958250?b=1&k=20&m=1313958250&s=170667a&w=0&h=9SnigCTdaqo6v-R24TabGaIczGLG-5m6rkY6cMSDbgM=", 
}

describe('UserLabel', () => {
    it('will match snapshot', () => {
        var component = render(<UserLabel user={user} />);
        expect(component).toMatchSnapshot();
    });
    it('will match snapshot without user', () => {
        var component = render(<UserLabel />);
        expect(component).toMatchSnapshot();
    });

    it('will have expected fields', () => {
        var component = render(<UserLabel user={user} />);
        var result = component.getByText(user.name);
        expect(result).toBeInTheDocument();
    });
});
