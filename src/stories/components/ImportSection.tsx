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
                <span>{`import ${componentName} from '${path}/${componentName}';`}</span>
                <span>// or</span>
                <span>{`import { ${componentName} } from '${path}';`}</span>
            </div>
        </section>
    );
}
