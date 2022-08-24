import { Type } from "typescript";

interface ImportSectionProps {
    componentName?: string;
    path?: string;
}

export default function ImportSection({ componentName, path }: ImportSectionProps) {
    return (
        <section className='import'>
            <h1>Import</h1>
        </section>
    );
}
