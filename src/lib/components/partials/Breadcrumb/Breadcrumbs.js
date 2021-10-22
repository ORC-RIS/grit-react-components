import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb'

const Breadcrumbs = ({config = {}}) => {

    config.listProps = {
		...config.listProps,
		className:
			config.listProps && config.listProps.className
				? config.listProps.className + " mb-0"
				: "mb-0",
	};

    return (
    <div className = "Breadcrumbs">
        <div className = {config.wrapperClass ? config.wrapperClass : "bg-faded px-3 py-2"}>
            <div className = {config.innerWrapperClass ? config.innerWrapperClass : "py-1"}>
                <Breadcrumb listProps={config.listProps}>
                    {config.links &&
                        config.links.map((link, idx) => {
                            return (
                                <Breadcrumb.Item
                                    href={link.href}
                                    linkAs={config.linksAs}
                                    linkProps={link}
                                    key={idx}
                                >
                                    {link.text}
                                </Breadcrumb.Item>
                            );
                        })}
                </Breadcrumb>
            </div>
        </div>
    </div>
	);
}


export default Breadcrumbs;