export default function SectionHeading({
    eyebrow,
    title,
    body,
}: {
    eyebrow: string;
    title: string;
    body: string;
}) {
    return (
        <div className="section-heading">
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="section-title">{title}</h2>
            <p className="section-body">{body}</p>
        </div>
    );
}
