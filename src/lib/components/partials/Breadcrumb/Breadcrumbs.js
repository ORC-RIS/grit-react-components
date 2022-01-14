import React from "react";
import { Col, Row } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import narrowClass from "../../../narrowClass";

const Breadcrumbs = ({ config = {} }) => {
    config.listProps = {
        ...config.listProps,
        className:
            config.listProps && config.listProps.className
                ? config.listProps.className + " mb-0"
                : "mb-0",
    };

    config.container = config.container ? config.container : "true";

    return config.links ? (
        <div className="Breadcrumbs">
            <div
                className={
                    config.wrapperClass ? config.wrapperClass : "bg-faded py-2"
                }
            >
                <div
                    className={`
                        ${
                            config.innerWrapperClass
                                ? config.innerWrapperClass
                                : "py-1"
                        }
                        ${config.container ? "container" : "px-3"}
                        `}
                >
                    {config.container ? (
                        <Row className="justify-content-center">
                            <Col
                                xs={12}
                                className={config.narrow ? narrowClass : ""}
                            >
                                <CustomBreadcrumb config={config} />
                            </Col>
                        </Row>
                    ) : (
                        <CustomBreadcrumb config={config} />
                    )}
                </div>
            </div>
        </div>
    ) : (
        <></>
    );
};

const CustomBreadcrumb = ({ config }) => {
    return (
        <Breadcrumb listProps={config.listProps}>
            {config.links &&
                config.links.map((link, idx) => {
                    return (
                        <Breadcrumb.Item
                            href={link.href ? link.href : false}
                            to={link.href ? link.href : false}
                            linkAs={config.linksAs}
                            linkProps={link}
                            key={idx}
                            active={link.active}
                        >
                            {link.text}
                        </Breadcrumb.Item>
                    );
                })}
        </Breadcrumb>
    );
};

export default Breadcrumbs;
