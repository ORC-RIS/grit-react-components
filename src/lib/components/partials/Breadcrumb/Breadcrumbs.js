import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb'

const Breadcrumbs = ({config = {}}) => {
    return (
        <MainBread links={config.links} linksAs={config.linksAs}/>
    )
}

const MainBread = ({links = [], linksAs}) => 
{
    return(
        <Breadcrumb>
             {links &&
                links.map((link, idx) => {
                    return (
                        <Breadcrumb.Item href={link.href} linkAs={linksAs} linkProps={link} key={idx}>
                            {link.text}
                        </Breadcrumb.Item>
                    );
                })}
        </Breadcrumb>
    );
};

export default Breadcrumbs;