import * as React from 'react';

export interface WidgetProps { name: string }

export class Widget extends React.Component<WidgetProps, any>{
    render(){
        return(<h1>Hello, {this.props.name}!</h1>);
    }
}