import React from 'react';

function ContentWrapper(props) {
    return (
        <div className="content  flex items-center justify-center ">
            <div className="content-wrapper content-wrapper max-w-[305px] usm:max-w-[400px] lsm:max-w-[355px] md:max-w-[550px] lg:max-w-[770px]">
                {props.children}
            </div>
        </div>
    );
}

export default ContentWrapper;
