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
                            if(idx !== config.links.length - 2){
                                return (
                                    <Breadcrumb.Item
                                        href={link.href}
                                        linkAs={config.linksAs}
                                        linkProps={link}
                                        key={idx}
                                        className = "d-none d-sm-inline-block"
                                    >
                                        {link.text}
                                    </Breadcrumb.Item>
                                );
                            } else 
                            {
                                
                                return (
                                    <>
                                    <Breadcrumb.Item
                                        href={link.href}
                                        linkAs={config.linksAs}
                                        linkProps={link}
                                        key={idx}
                                        className = "d-block d-sm-none"
                                    >
                                        <i class="fas fa-arrow-left"></i> {link.text}
                                    </Breadcrumb.Item>

                                    <Breadcrumb.Item
                                        href={link.href}
                                        linkAs={config.linksAs}
                                        linkProps={link}
                                        key={idx}
                                        className = "d-none d-sm-inline-block breadcrumb-item"
                                    >
                                        {link.text}
                                    </Breadcrumb.Item>
                                    </>
                                ); 
                            }
                        })}
                </Breadcrumb>
            </div>
        </div>
    </div>
	);
}


export default Breadcrumbs;