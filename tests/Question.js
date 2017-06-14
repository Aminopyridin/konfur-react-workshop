import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Question from '../src/components/Question';

describe('<Question />', () => {
    it('должен генерировать две радио-кнопки', () => {
        const variants = [{value: 'val1', label: 'text1'},
            {value: 'val2', label: 'text2'}];
        const wrapper = shallow(<Question variants={variants}/>);
        expect(wrapper.find('RadioButton').length).to.equal(2);
    });
});
