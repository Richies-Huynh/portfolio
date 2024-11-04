import './App.css';

function SectionHeader({title, subtitle = '', className=''}) {
    return (
        <div className={className}>
            <h1>{title}</h1>
            {subtitle && <h2>{subtitle}</h2>}
        </div>
    );
}

export default function Portfolio() {
    return <SectionHeader title="Richies Huynh" subtitle="Software Engineer" className="banner"/>;
}
