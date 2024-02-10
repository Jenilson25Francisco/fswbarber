type SectionTitlePorps = {
    title: string
}

export function SectionTitle({ title }: SectionTitlePorps) {
    return (
        <h2 className="text-xs mb-3 uppercase text-gray-400 font-bold">
            {title}
        </h2>
    )
}