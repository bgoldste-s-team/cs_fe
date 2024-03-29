import React from 'react';
import Link from 'next/link';
import ReactMarkdown from "react-markdown";

const HeroBlock = ({ header, subheader, body, cta1_text, cta2_text, cta1_link, cta2_link, image_link }) => {
    const imageContainerClasses = "w-full h-auto mx-auto";
    const headerClasses = "text-3xl font-bold mb-4 text-center";
    const subheaderClasses = "text-lg mb-6 text-center";
    const button1Classes = "btn "
    const button2Classes = "btn  btn-accent";
    const buttonContainerClasses = "flex justify-center gap-4 mt-4";
    const bodyClasses = "text-lg mb-6 text-center whitespace-pre-line";

    return (
<div className="hero min-h-[50vh] " style={{backgroundImage: `url(${image_link})`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-3xl font-bold ">{header}</h1>
      <p className="mb-5">{subheader}</p>
      <p className="mb-5">{body.slice(0,100)}</p>
        <div className={buttonContainerClasses}>
        {cta2_link && (
          <Link className="btn btn-secondary" href={cta2_link}>
            {cta2_text}
          </Link>
        )}
        {cta1_link && (
          <Link className="btn btn-primary" href={cta1_link}>
            {cta1_text}
          </Link>
        )}
      
      </div>
    </div>
  </div>
</div>



    );
};

export default HeroBlock;

{/*
<button className="btn">Button</button>
<button className="btn btn-neutral">Neutral</button>
<button className="btn btn-primary">Primary</button>
<button className="btn btn-secondary">Secondary</button>
<button className="btn btn-accent">Accent</button>
<button className="btn btn-ghost">Ghost</button>
<button className="btn btn-link">Link</button><button className="btn btn-info">Info</button>
<button className="btn btn-success">Success</button>
<button className="btn btn-warning">Warning</button>
<button className="btn btn-error">Error</button><button className="btn btn-outline">Default</button>
<button className="btn btn-outline btn-primary">Primary</button>
<button className="btn btn-outline btn-secondary">Secondary</button>
<button className="btn btn-outline btn-accent">Accent</button><button className="btn btn-outline btn-info">Info</button>
<button className="btn btn-outline btn-success">Success</button>
<button className="btn btn-outline btn-warning">Warning</button>
<button className="btn btn-outline btn-error">Error</button>
       */}