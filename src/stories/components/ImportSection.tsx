import { Type } from "typescript";

interface ImportSectionProps {
    componentName: string;
    path: string;
}

export default function ImportSection({ componentName, path }: ImportSectionProps) {
    return (
        <section className='import-section'>
            <h2>Import</h2>
            <div>
                <span className="keyword">
                    {`import `}   
                    <span className="default">{componentName} </span>
                    {`from `}
                    <span className="string">{`'${path}/${componentName}'`}</span>
                    <span className="default">;</span>
                </span>
                <span className="comment">
                    // or
                </span>
                <span className="keyword">
                    {`import `}
                    <span className="default">{`{ ${componentName} }`} </span>
                    {`from `}
                    <span className="string">{`'${path}'`}</span>
                    <span className="default">;</span>
                </span>
            </div>
        </section>
    );
}
