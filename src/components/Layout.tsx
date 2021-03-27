import * as React from 'react';
import Container from 'reactstrap/lib/Container';

export default class Layout extends React.Component {
    render() {
        return <Container fluid className="p-0 App">{this.props.children}</Container>
    }
}