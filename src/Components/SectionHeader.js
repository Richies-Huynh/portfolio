export default function SectionHeader({title, subtitle = [], className=''}) {
    return (
        <div className={className}>
            <h1>{title}</h1>
            {subtitle.map((item, index) => <h2 key={index}>{item}</h2>)}
        </div>
    );
}