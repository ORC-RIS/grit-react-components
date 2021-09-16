import React from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import Scrollspy from "react-scrollspy-navigation";

const PageNavigation = ({ config = {} }) => {
    const navbarClass = ["navbar-light", "bg-primary", "navbar-toggleable-lg"]
        .filter((c) => c)
        .join(" ");

    return (
        <>
            {config.links && (
                <div className="sticky-top">
                    <div className="PageNavigation">
                        <Navbar
                            collapseOnSelect
                            className={navbarClass}
                            expand="lg"
                        >
                            <Container className="d-block">
                                <Row>
                                    <Col xs={12} className="px-lg-0">
                                        {config.links.length && (
                                            <>
                                                <NavbarToggle />

                                                <Navbar.Collapse id="pageNavigation">
                                                    <MainNav
                                                        links={config.links}
                                                    />
                                                </Navbar.Collapse>
                                            </>
                                        )}
                                    </Col>
                                </Row>
                            </Container>
                        </Navbar>
                    </div>
                </div>
            )}
        </>
    );
};

const MainNav = ({ links }) => {
    return (
        <Nav className="mx-0 nav pb-2 pb-lg-0">
            <Scrollspy offsetTop={61}>
                {links.map((link, idx) => (
                    <Nav.Link
                        className={[link.class ? link.class : false]
                            .filter((c) => c)
                            .join(" ")}
                        href={link.href}
                        target={link.target}
                        key={idx}
                        ref={React.createRef()}
                    >
                        {link.text}
                    </Nav.Link>
                ))}
            </Scrollspy>
        </Nav>
    );
};

const NavbarToggle = () => {
    return (
        <Navbar.Toggle className="d-flex d-lg-none ml-sm-auto w-100 w-sm-auto flex-row align-items-center justify-content-between">
            <span className="navbar-toggler-text">Skip to section</span>
            <span className="navbar-toggler-icon ml-2"></span>
        </Navbar.Toggle>
    );
};

export default PageNavigation;
