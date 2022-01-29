import React from "react";
import Checkbox from "./checkbox";

export default {
    title: 'atom/checkbox',
    component: Checkbox,
    argTypes: {
        label:'remind me', onChange:() => {console.log('works')}, value: false},
};

const Template = (args) => <Checkbox {...args} />;

export const Checked = Template.bind({});

Checked.args = {
    label:'', 
    value: true,
    onChange:() => {console.log('works')}, 
    value: true
};

export const WithLabel = Template.bind({});

WithLabel.args = {
    label:'remind me', 
    value: false,
    //onChange:() => {console.log('works')}, value: false
}