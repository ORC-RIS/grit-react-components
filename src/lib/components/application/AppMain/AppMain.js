import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AppContext } from "../../context/AppContext/AppContext";

const AppMain = ({ children, config = {} }) => {
    const { updateAppContext, defaultAppContext } = useContext(AppContext);

    const [appContext, setAppContext] = useState(defaultAppContext);

    useEffect(() => {
        updateAppContext({ type: "RESET", payload: {} });
    }, [updateAppContext]);

    useEffect(() => {
        updateAppContext({
            type: "UPDATE",
            payload: { ...appContext },
        });
    }, [appContext, updateAppContext]);

    return (
        <main className="AppMain">
            {appContext.isLoading && <Loading />}
            {!appContext.isLoading &&
                React.Children.map(children, (child) => {
                    return React.cloneElement(child, {
                        setAppContext,
                    });
                })}
        </main>
    );
};

const Loading = () => {
    return (
        <Container className="h-100">
            <Row className="text-center align-content-center h-100 row-sy-2 row-sy-lg-3">
                <Col xs={12}></Col>
                <Col xs={12}>
                    <p className="mb-0 letter-spacing-3 text-uppercase font-weight-bold">
                        Loading
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default AppMain;
