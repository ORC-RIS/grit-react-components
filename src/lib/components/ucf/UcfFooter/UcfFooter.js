import React from "react";
import { Container } from "react-bootstrap";

const UcfFooter = () => {
    const ucfFooterClass = [
        "ucf-footer",
        "bg-inverse-t-3",
        "text-white",
        "py-4",
        "py-lg-5",
    ].join(" ");

    const ucfFooterTitleClass = [
        "ucf-footer-title",
        "text-uppercase",
        "letter-spacing-5",
        "text-white",
        "d-inline-block",
        "mb-4",
    ].join(" ");

    const ucfFooterAddressClass = ["ucf-footer-address", "small", "mb-0"].join(
        " "
    );

    return (
        <div
            className={ucfFooterClass}
            aria-label="University of Central Florida footer"
        >
            <Container className="text-center">
                <a className={ucfFooterTitleClass} href="https://www.ucf.edu/">
                    University of Central Florida
                </a>
                <p className={ucfFooterAddressClass}>
                    4000 Central Florida Blvd. Orlando, Florida, 32816 |{" "}
                    <a
                        rel="nofollow"
                        className="bg-inverse-link"
                        href="tel:4078232000"
                    >
                        407.823.2000
                    </a>
                    <br />
                    &copy;{" "}
                    <a className="bg-inverse-link" href="https://www.ucf.edu/">
                        University of Central Florida
                    </a>
                </p>
            </Container>
        </div>
    );
};

export default UcfFooter;
