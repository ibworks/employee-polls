import { fireEvent, render } from '@testing-library/react';
import * as React from 'react';
import NewQuestion from './NewQuestion';

describe('NewQuestion', () => {
    it('will match snapshot', () => {
        var component = render(<NewQuestion />);
        expect(component).toMatchSnapshot();
    });

    it('will call submit', () => {
        var calledSubmit = false;
        var component = render(<NewQuestion onSubmit={() => calledSubmit=true} />);
        var form = component.getByTestId("form");

        fireEvent.submit(form);

        expect(calledSubmit).toBe(true);
    });

    it('will call update options', () => {
        var options = []
        const handleSubmit = (o) => {
            options = o;
        }
        var component = render(<NewQuestion onSubmit={handleSubmit} />);
        var tb1 = component.getByTestId("tb1");
        var tb2 = component.getByTestId("tb2");
        var form = component.getByTestId("form");

        fireEvent.change(tb1, { target: { value: 'a' } });
        fireEvent.change(tb2, {target: {value: 'b'}})
        fireEvent.submit(form);

        expect(options[0]).toBe('a');
        expect(options[1]).toBe('b');
    });
});
