export function SectionHeader({
  number,
  title,
  description,
  className = "",
}: {
  number?: number;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={`mb-12 ${className}`}>
      <div className="flex items-center gap-4">
        {number && (
          <div className="px-3 py-1 rounded-md border border-primary bg-primary/10 text-primary text-[11px] font-bold flex-shrink-0">
            {String(number).padStart(2, "0")}
          </div>
        )}
        <h2 className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-foreground whitespace-nowrap">
          {title}
        </h2>
        <div className="flex-grow h-[1px] bg-border" />
      </div>
      {description && (
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
