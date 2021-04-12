import React from 'react';

const DocsArticle = ({children, id}) => {
    return (
        <>
            <article id={id} className="docs-article scroll-offset">{children}</article>
        </>
    );
};

export default DocsArticle;
