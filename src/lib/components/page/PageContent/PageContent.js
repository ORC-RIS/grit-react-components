import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import narrowClass from "../../../narrowClass";

const PageContent = ({ children, config = {} }) => {
    return (
        <div className="PageContent">
            <Container className="mt-4 mt-lg-5">
                <Row className="justify-content-center">
                    <Col xs={12} className={`mb-4 mb-lg-5 ${config.narrow && narrowClass}`}>
                        {children}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PageContent;
