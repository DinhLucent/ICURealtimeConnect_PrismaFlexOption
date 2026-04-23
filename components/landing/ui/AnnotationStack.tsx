import type { AnnotationItem } from '@/types/landing';

export default function AnnotationStack({
    summary,
    items,
}: {
    summary?: string;
    items: AnnotationItem[];
}) {
    return (
        <div>
            {summary ? <p className="lens-summary">{summary}</p> : null}
            <div className="annotation-stack">
                {items.map((item) => (
                    <div key={item.title} className="annotation-item">
                        <item.icon className="h-4 w-4" />
                        <div>
                            <p className="annotation-title">{item.title}</p>
                            <p className="annotation-body">{item.body}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
