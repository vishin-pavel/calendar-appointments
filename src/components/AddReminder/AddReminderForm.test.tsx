import React from 'react';
import { render } from '@testing-library/react';
import AddReminderFormComponent from './AddReminderForm';

describe("AddReminderForm fields exists", () =>{
    let AddReminderForm;
    beforeEach(()=>{
        AddReminderForm = render(<AddReminderFormComponent />);
    });
    test('input field for reminder\'s start date should be available', () => {
        const reminderStartDateInput = AddReminderForm.getByLabelText("Start date", {
            selector: "input"
        });
        expect(reminderStartDateInput).toBeInTheDocument();
    });
    test('input field for reminder\'s start time should be available', () => {
        const reminderStartTimeInput = AddReminderForm.getByLabelText("Start time", {
            selector: "input"
        });
        expect(reminderStartTimeInput).toBeInTheDocument();
    });
    test('input field for reminder\'s end date should be available', () => {
        const reminderTextInput = AddReminderForm.getByLabelText("End date", {
            selector: "input"
        });
        expect(reminderTextInput).toBeInTheDocument();
    });
    test('input field for reminder\'s end time should be available', () => {
        const reminderTextInput = AddReminderForm.getByLabelText("End time", {
            selector: "input"
        });
        expect(reminderTextInput).toBeInTheDocument();
    });
    test('input field for reminder\'s text should be available', () => {
        const reminderTextInput = AddReminderForm.getByLabelText("Text");
        expect(reminderTextInput).toBeInTheDocument();
    });
});
