import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const NavigationBar = ({ config = {} }) => {
    return (
        <div className="NavigationBar">
            <div className="main-navigation-wrapper">
                <Navbar
                    collapseOnSelect={true}
                    className={`main-navigation ${
                        config.overlapContent ? "overlap-content" : ""
                    }`}
                    onSelect={config.onSelect}
                    fixed={config.fixed}
                    expand={config.expand}
                    expanded={config.expanded}
                >
                    <Container>
                        <NavbarBrand {...config.brand} />
                        {config.links && <NavbarToggle {...config.toggle} />}
                        {config.links && (
                            <Navbar.Collapse id="navbarScroll">
                                <MainNav
                                    links={config.links}
                                    linksAs={config.linksAs}
                                    linksClick={config.linksClick}
                                />
                            </Navbar.Collapse>
                        )}
                    </Container>
                </Navbar>
            </div>
        </div>
    );
};

const MainNav = ({ links = [], linksAs, linksClick = () => {} }) => {
    return (
        <Nav className="main-nav" as="ul" activeKey="">
            {links &&
                links.map((link, idx) => {
                    return (
                        <Nav.Item as="li" key={idx}>
                            <Nav.Link
                                eventKey={idx}
                                as={linksAs}
                                onClick={() => {
                                    typeof linksClick === "function" &&
                                        linksClick();
                                }}
                                {...link}
                            >
                                {link.text}
                            </Nav.Link>
                        </Nav.Item>
                    );
                })}
        </Nav>
    );
};

const NavbarBrand = (props) => {
    return <Navbar.Brand {...props}>{props.content}</Navbar.Brand>;
};

const NavbarToggle = (props) => {
    return (
        <Navbar.Toggle {...props}>
            <span className="navbar-toggler-text">Navigation</span>
            <span className="navbar-toggler-icon ml-2"></span>
        </Navbar.Toggle>
    );
};

export default NavigationBar;
