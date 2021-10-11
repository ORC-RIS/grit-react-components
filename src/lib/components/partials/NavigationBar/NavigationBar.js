import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const NavigationBar = ({ config = {}, setAppContext = () => {} }) => {
    return (
        <div className="AppNavigation">
            <div className="main-navigation-wrapper">
                <Navbar
                    collapseOnSelect
                    className={`main-navigation ${
                        config.overlapContent ? "overlap-content" : ""
                    }`}
                >
                    <Container>
                        <NavbarBrand
                            as={config.brandAs}
                            content={config.brandContent}
                        />
                        {config.links && <NavbarToggle />}
                        {config.links && (
                            <Navbar.Collapse id="navbarScroll">
                                <MainNav
                                    links={config.links}
                                    linksAs={config.linksAs}
                                />
                            </Navbar.Collapse>
                        )}
                    </Container>
                </Navbar>
            </div>
        </div>
    );
};

const MainNav = ({ links = [], linksAs }) => {
    return (
        <Nav className="main-nav" as="ul" activeKey="">
            {links &&
                links.map((link, idx) => {
                    return (
                        <Nav.Item as="li" key={idx}>
                            <Nav.Link as={linksAs} {...link}>
                                {link.text}
                            </Nav.Link>
                        </Nav.Item>
                    );
                })}
        </Nav>
    );
};

const NavbarBrand = (props) => {
    return (
        <Navbar.Brand {...props}>
            {props.content}
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

export default NavigationBar;
