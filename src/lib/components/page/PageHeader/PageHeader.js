import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import narrowClass from "../../../narrowClass";

const PageHeader = ({ children, config = {} }) => {
    return (
        !config.hide &&
        (config.title ?? children) && (
            <div className="PageHeader">
                <div
                    className={`page-header ${
                        config.siteNavigationOverlapContent &&
                        "navigation-overlap-content"
                    }
                        ${config.inline && "inline"}
                        `}
                >
                    {config.backgroundImage && (
                        <PageHeaderMedia
                            backgroundImage={config.backgroundImage}
                        />
                    )}
                    <PageHeaderContent
                        buttons={config.buttons}
                        narrow={config.narrow}
                        subtitle={config.subtitle}
                        title={config.title}
                        titlePrefix={config.titlePrefix}
                        widgets={config.widgets}
                        centered={config.centered}
                    />
                    {children}
                </div>
            </div>
        )
    );
};

const PageHeaderMedia = ({ backgroundImage }) => {
    return (
        <div className="page-header-media">
            <img
                className="page-header-image"
                src={backgroundImage}
                alt="Header background"
            />
        </div>
    );
};

const PageHeaderContent = ({
    buttons,
    centered,
    narrow,
    subtitle,
    title,
    titlePrefix,
    widgets,
}) => {
    return (
        (title ?? widgets) && (
            <div className="page-header-content">
                <Container>
                    <Row className="justify-content-center">
                        <Col xs={12} className={`${narrow && narrowClass}`}>
                            <Row className="align-items-center">
                                <Col xs={12} lg>
                                    <Row className="row-sy-4 row-sy-lg-5">
                                        {(title || subtitle) && (
                                            <Col xs={12}>
                                                <Row className="row-sy-3 row-sy-lg-4">
                                                    {title && (
                                                        <Col xs={12}>
                                                            <PageHeaderTitle
                                                                centered={
                                                                    centered
                                                                }
                                                                title={title}
                                                                titlePrefix={
                                                                    titlePrefix
                                                                }
                                                            />
                                                        </Col>
                                                    )}
                                                    {subtitle && (
                                                        <Col xs={12}>
                                                            <PageHeaderSubtitle
                                                                centered={
                                                                    centered
                                                                }
                                                                subtitle={
                                                                    subtitle
                                                                }
                                                            />
                                                        </Col>
                                                    )}
                                                </Row>
                                            </Col>
                                        )}
                                        <PageHeaderButtons buttons={buttons} />
                                    </Row>
                                </Col>
                                {widgets && widgets.map((widget) => widget)}
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    );
};

const PageHeaderTitle = ({ centered, title, titlePrefix }) => {
    return (
        <h1 className={`page-header-title ${centered && "text-center"}`}>
            {titlePrefix && <span className="title-prefix">{titlePrefix}</span>}
            <span className="title">{title}</span>
        </h1>
    );
};

const PageHeaderSubtitle = ({ centered, subtitle }) => {
    return (
        <div className={`page-header-subtitle ${centered && "text-center"}`}>
            {subtitle}
        </div>
    );
};

const PageHeaderButtons = ({ buttons }) => {
    return (
        <>
            {buttons && (
                <Col xs={12}>
                    <Row className="row-sy-2 row-sy-lg-3">
                        {buttons.map((button, idx) => (
                            <Col xs={12} md="auto" key={idx}>
                                <Button
                                    block
                                    href={button.href}
                                    target={button.target}
                                    variant={
                                        idx === buttons.length - 1
                                            ? "primary"
                                            : "secondary"
                                    }
                                >
                                    {button.text}
                                </Button>
                            </Col>
                        ))}
                    </Row>
                </Col>
            )}
        </>
    );
};

export default PageHeader;
