import { Type } from "typescript";

interface ImportSectionProps {
    componentName: string;
    importPath: string;
}

export default function ImportSection({ componentName, importPath }: ImportSectionProps) {
    return (
        <section className='import-section'>
            <h2>Import</h2>
            <div>
                <span className="keyword">
                    {`import `}   
                    <span className="default">{componentName} </span>
                    {`from `}
                    <span className="string">{`'${importPath}/${componentName}'`}</span>
                    <span className="default">;</span>
                </span>
                <span className="comment">
                    // or
                </span>
                <span className="keyword">
                    {`import `}
                    <span className="default">{`{ ${componentName} }`} </span>
                    {`from `}
                    <span className="string">{`'${importPath}'`}</span>
                    <span className="default">;</span>
                </span>
            </div>
        </section>
    );
}
