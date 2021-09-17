import React, { useEffect } from "react";
import AppFooter from "../components/application/AppFooter/AppFooter";
import AppHeader from "../components/application/AppHeader/AppHeader";
import AppMain from "../components/application/AppMain/AppMain";
import BasicTemplate from "../components/templates/BasicTemplate/BasicTemplate";
import "./../../scss/style.scss";

const ExampleHomePageMainContent = ({ chidren, setAppContext = () => {} }) => {
    const config = {
        pageHeader: {
            title: (
                <>
                    Donec sed turpis at <br />
                    nulla tristique sodales
                </>
            ),
            titlePrefix: "NEW!",
            subtitle: "Aliquam nec vehicula velit",
            backgroundImage: "https://unsplash.it/1920/1080",
        },
    };

    useEffect(() => {
        setAppContext({ appNavigationOverlapContent: true });
    }, [setAppContext]);

    return (
        <>
            <BasicTemplate config={config} setAppContext={setAppContext}>
                <div className="row">
                    <div className="col-md-8">
                        <div className="card mb-4">
                            <img
                                className="card-img-top"
                                src="https://unsplash.it/1080/640"
                                alt="Card cap"
                            />
                            <div className="card-block">
                                <h2 className="card-title">Serengeti</h2>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Reiciendis aliquid atque,
                                    nulla? Quos cum ex quis soluta, a
                                    laboriosam. Dicta expedita corporis animi
                                    vero voluptate voluptatibus possimus, veniam
                                    magni quis!
                                </p>
                                <a href="#navigable" className="btn btn-primary">
                                    Read More →
                                </a>
                            </div>
                            <div className="card-footer text-muted">
                                Posted on January 1, 2017 by{" "}
                                <a href="#navigable">Author Name</a>
                            </div>
                        </div>

                        <div className="card mb-4">
                            <img
                                className="card-img-top"
                                src="https://unsplash.it/1080/960"
                                alt="Card cap"
                            />
                            <div className="card-block">
                                <h2 className="card-title">Manyara</h2>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Reiciendis aliquid atque,
                                    nulla? Quos cum ex quis soluta, a
                                    laboriosam. Dicta expedita corporis animi
                                    vero voluptate voluptatibus possimus, veniam
                                    magni quis!
                                </p>
                                <a href="#navigable" className="btn btn-primary">
                                    Read More →
                                </a>
                            </div>
                            <div className="card-footer text-muted">
                                Posted on January 1, 2017 by{" "}
                                <a href="#navigable">Author Name</a>
                            </div>
                        </div>

                        <div className="card mb-4">
                            <img
                                className="card-img-top"
                                src="https://unsplash.it/1080/840"
                                alt="Card cap"
                            />
                            <div className="card-block">
                                <h2 className="card-title">Tarangire</h2>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Reiciendis aliquid atque,
                                    nulla? Quos cum ex quis soluta, a
                                    laboriosam. Dicta expedita corporis animi
                                    vero voluptate voluptatibus possimus, veniam
                                    magni quis!
                                </p>
                                <a href="#navigable" className="btn btn-primary">
                                    Read More →
                                </a>
                            </div>
                            <div className="card-footer text-muted">
                                Posted on January 1, 2017 by{" "}
                                <a href="#navigable">Author Name</a>
                            </div>
                        </div>

                        <ul className="pagination justify-content-center mb-4">
                            <li className="page-item">
                                <a className="page-link" href="#navigable">
                                    ← Older
                                </a>
                            </li>
                            <li className="page-item disabled">
                                <a className="page-link" href="#navigable">
                                    Newer →
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-4">
                        <div className="card my-4 my-md-0">
                            <h5 className="card-header">Search</h5>
                            <div className="card-block">
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search for..."
                                    />
                                    <span className="input-group-btn">
                                        <button
                                            className="btn btn-secondary"
                                            type="button"
                                        >
                                            Go!
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="card my-3">
                            <h5 className="card-header">Categories</h5>
                            <div className="card-block">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <ul className="list-unstyled mb-0">
                                            <li>
                                                <a href="#navigable">Simba</a>
                                            </li>
                                            <li>
                                                <a href="#navigable">Nyati</a>
                                            </li>
                                            <li>
                                                <a href="#navigable">Faru</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6">
                                        <ul className="list-unstyled mb-0">
                                            <li>
                                                <a href="#navigable">Kiboko</a>
                                            </li>
                                            <li>
                                                <a href="#navigable">Fisi</a>
                                            </li>
                                            <li>
                                                <a href="#navigablenavigable">
                                                    Pundamlia
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card my-4">
                            <h5 className="card-header">maelezo</h5>
                            <div className="card-block">
                                You can put anything you want inside of these
                                side widgets. They are easy to use, and feature
                                the new Bootstrap 4 card containers!
                            </div>
                        </div>
                        <div className="card my-4">
                            <h5 className="card-header">banner</h5>
                            <div className="card-block">
                                <img
                                    className="card-img-top"
                                    src="https://unsplash.it/1080/720"
                                    alt="Card cap"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </BasicTemplate>
        </>
    );
};

const ExampleHomePage = ({ config = {} }) => {
    return (
        <>
            <AppHeader config={config.appHeader} />
            <AppMain>
                <ExampleHomePageMainContent />
            </AppMain>
            <AppFooter config={config.appFooter} />
        </>
    );
};

export default {
    title: "Examples/ExampleHomePage",
    component: ExampleHomePage,
};

const Template = (args) => <ExampleHomePage {...args} />;

export const Default = Template.bind({});

Default.args = {
    config: {
        appHeader: {
            appNavigation: {
                brandContent: (
                    <>
                        <span className="h3 mb-0">MyGritApp</span>
                    </>
                ),
                links: false,
            },
        },
        appFooter: {
            colophon: {
                entityAddress: (
                    <>
                        <address>
                            12201 Research Parkway, Suite 501
                            <br />
                            Orlando, FL 32826-3246
                        </address>
                        <p>
                            <a
                                href="mailto:researchit@ucf.edu"
                                className="bg-inverse-link"
                            >
                                researchit@ucf.edu
                            </a>
                            <br />
                            407.823.5500
                        </p>
                    </>
                ),
                entityHours: (
                    <>
                        Monday&ndash;Friday <br />
                        8:00 AM&ndash;5:00 PM
                    </>
                ),
                entityTitle: <>Office of Research</>,
                sitemapLinks: [
                    {
                        text: "Home",
                        href: "/",
                    },
                    {
                        text: "Total Awards",
                        href: "/total-awards",
                    },
                    {
                        text: "CCIE",
                        href: "/ccie",
                    },
                    {
                        text: "CECS",
                        href: "/cecs",
                    },
                ],
            },
        },
    },
};
