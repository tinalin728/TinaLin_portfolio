import React from 'react'

export default function ProjectSectionLayout({ id, title, children, additionalPadding }) {
    return (
        <section id={id} className={`${additionalPadding}`}>
            <div className="section-gap">
                <h2 className="text-center pb-14 lg:pb-20">{title}</h2>
                {children}
            </div>
        </section>
    )
}
