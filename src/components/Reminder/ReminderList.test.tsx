import React from 'react';
import { render } from '@testing-library/react';
import ReminderListComponent from './ReminderList';


describe('ReminderList tests', function () {
    let reminders;
    beforeEach(()=>{
       reminders = [
        {id: 1, start: new Date(), end: new Date(), color:'#eee', text:''}
       ]
    });
    it('should render all Reminders', function () {

    });
});