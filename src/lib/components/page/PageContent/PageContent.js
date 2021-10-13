import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import narrowClass from "../../../narrowClass";

const PageContent = ({ children, config = {} }) => {
    return (
        <div className="PageContent">
            <Container className="mt-4 mt-lg-5">
                <Row className="justify-content-center">
                    <Col xs={12} className={`${config.narrow && narrowClass}`}>
                        <PageContentWrapper>{children}</PageContentWrapper>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

const PageContentWrapper = ({ children, config }) => {
    return <div className="PageContentWrapper mb-4 mb-lg-5">{children}</div>;
};

export default PageContent;
