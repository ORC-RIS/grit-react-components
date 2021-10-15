import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import narrowClass from "../../../narrowClass";

const PageContent = ({ children, config = {} }) => {
    return (
        <div className="PageContent">
            <Container className="mt-4 mt-lg-5">
                <Row
                    className={`${
                        config.narrow
                            ? "justify-content-center"
                            : "justify-content-between"
                    }`}
                >
                    <Col
                        xs={12}
                        className={`${config.narrow && narrowClass} ${
                            config.sidebar && "col-lg-7"
                        }`}
                    >
                        <PageContentWrapper>{children}</PageContentWrapper>
                    </Col>
                    {config.sidebar && (
                        <Col xs={12} lg={4}>
                            <SidebarContentWrapper>
                                {config.sidebar}
                            </SidebarContentWrapper>
                        </Col>
                    )}
                </Row>
            </Container>
        </div>
    );
};

const PageContentWrapper = ({ children }) => {
    return <div className="PageContentWrapper mb-4 mb-lg-5">{children}</div>;
};

const SidebarContentWrapper = ({ children }) => {
    return <div className="SidebarContentWrapper mb-4 mb-lg-5">{children}</div>;
};

export default PageContent;
