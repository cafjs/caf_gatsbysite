import React from 'react';

const DocsSection = ({children, id}) => {
    return (
        <>
            <section id={id} className="docs-section scroll-offset">{children}</section>
        </>
    );
};

export default DocsSection;
