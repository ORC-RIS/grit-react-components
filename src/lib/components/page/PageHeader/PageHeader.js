import React, { useContext } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import narrowClass from "../../../narrowClass";
import { AppContext } from "../../context/AppContext/AppContext";

const PageHeader = ({ children, config = {} }) => {
    const { appContext } = useContext(AppContext);

    return (
        !config.hide && (
            <div className="PageHeader">
                <div
                    className={`page-header ${
                        appContext.siteNavigationOverlapContent &&
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
                        appContext={appContext}
                        buttons={config.buttons}
                        subtitle={config.subtitle}
                        title={config.title}
                        titlePrefix={config.titlePrefix}
                        widgets={config.widgets}
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
    appContext,
    buttons,
    subtitle,
    title,
    titlePrefix,
    widgets,
}) => {
    return (
        <div className="page-header-content">
            <Container>
                <Row className="justify-content-center">
                    <Col
                        xs={12}
                        className={`${appContext.narrowContent && narrowClass}`}
                    >
                        <Row className="align-items-center">
                            <Col xs={12} lg>
                                <Row className="row-sy-4 row-sy-lg-5">
                                    {(title || subtitle) && (
                                        <Col xs={12}>
                                            <Row className="row-sy-3 row-sy-lg-4">
                                                {title && (
                                                    <Col xs={12}>
                                                        <PageHeaderTitle
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
                                                            subtitle={subtitle}
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
    );
};

const PageHeaderTitle = ({ title, titlePrefix }) => {
    return (
        <h1 className="page-header-title">
            <span className="title-prefix">{titlePrefix}</span>
            <span className="title">{title}</span>
        </h1>
    );
};

const PageHeaderSubtitle = ({ subtitle }) => {
    return <div className="page-header-subtitle">{subtitle}</div>;
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
