import * as React from 'react';
import Card from 'reactstrap/lib/Card';
import Col from 'reactstrap/lib/Col';
import Row from 'reactstrap/lib/Row';
import Spinner from 'reactstrap/lib/Spinner';

export default ({ padding, margin }: { padding: string, margin: string }) => (
    <Row className={margin}>
        <Col />
        <Col xs='auto'>
            <Card className={padding}>
                <Spinner />
            </Card>
        </Col>
        <Col />
    </Row>
);