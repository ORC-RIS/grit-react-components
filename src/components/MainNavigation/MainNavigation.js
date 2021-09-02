import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const MainNavigation = ({ config = {} }) => {
    return (
        <div className="MainNavigation">
            <div className="main-navigation-wrapper">
                <Navbar
                    collapseOnSelect
                    className={`main-navigation ${
                        config.overlapContent ? "overlap-content" : ""
                    }`}
                >
                    <Container>
                        <NavbarBrand as={config.brandAs} content={config.brandContent} />
                        {config.links && <NavbarToggle />}
                        {config.links && (
                            <Navbar.Collapse id="navbarScroll">
                                <MainNav links={config.links} />
                            </Navbar.Collapse>
                        )}
                    </Container>
                </Navbar>
            </div>
        </div>
    );
};

const MainNav = ({ links = [] }) => {
    return (
        <Nav className="main-nav" as="ul" activeKey="">
            {links &&
                links.map((link, idx) => {
                    return (
                        <Nav.Item as="li" key={idx}>
                            <Nav.Link
                                as={link.as}
                                activeClassName=""
                                className={
                                    link.className ? link.className : false
                                }
                                to={link.href}
                                target={link.target}
                            >
                                {link.text}
                            </Nav.Link>
                        </Nav.Item>
                    );
                })}
        </Nav>
    );
};

const NavbarBrand = ({ as, content }) => {
    return (
        <Navbar.Brand as={as} to="/">
            {content}
        </Navbar.Brand>
    );
};

const NavbarToggle = () => {
    return (
        <Navbar.Toggle>
            <span className="navbar-toggler-text">Navigation</span>
            <span className="navbar-toggler-icon ml-2"></span>
        </Navbar.Toggle>
    );
};

export default MainNavigation;
