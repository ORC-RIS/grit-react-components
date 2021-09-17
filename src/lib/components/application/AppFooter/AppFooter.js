import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import UcfFooter from "./../../ucf/UcfFooter/UcfFooter";

const AppFooter = ({ children, config = {} }) => {
    return (
        <footer className="AppFooter">
            <Colophon config={config.colophon} />
            <UcfFooter />
        </footer>
    );
};

const Colophon = ({ config = {} }) => {
    return (
        <div className="bg-inverse py-4 py-lg-5">
            <Container>
                <Row className="row-sy-4">
                    <Col xs={12} lg={6}>
                        <h2 className="text-primary h4 mb-3 font-slab-serif font-weight-normal">
                            {config.entityTitle}
                        </h2>

                        <address>{config.entityAddress}</address>

                        <p className="mb-0">{config.entityHours}</p>
                    </Col>

                    <Col xs={12} lg={6}>
                        <h2 className="h6 heading-underline letter-spacing-3 mb-2 mb-lg-3">
                            Sitemap
                        </h2>

                        <ul className="list-unstyled mb-0 row row-sy-lg-2">
                            {config.sitemapLinks &&
                                config.sitemapLinks.map((link, idx) => (
                                    <li key={idx} className="col-12">
                                        <a
                                            href={link.href}
                                            target={link.target}
                                            className="text-white py-1 d-inline-block"
                                            as={config.sitemapLinksAs}
                                        >
                                            {link.text}
                                        </a>
                                    </li>
                                ))}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AppFooter;
