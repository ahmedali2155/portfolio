const sections = [
  { id: "abstract", title: "Abstract" },
  { id: "research-question", title: "Research Question" },
  { id: "introduction", title: "Introduction" },
  { id: "data", title: "Data" },
  { id: "methodology", title: "Methodology" },
  { id: "results", title: "Results" },
  { id: "limitations", title: "Limitations" },
  { id: "recommendations", title: "Recommendations" },
  { id: "reproducibility", title: "Reproducibility" },
  { id: "acknowledgments", title: "Acknowledgments" },
  { id: "conclusion", title: "Conclusion" },
];

export function TableOfContents() {
  return (
    <nav className="space-y-1">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className="
            block
            rounded-lg
            px-3
            py-2
            text-sm
            text-text-secondary
            transition-all
            duration-200
            hover:bg-bg-secondary
            hover:text-text-primary
          "
        >
          {section.title}
        </a>
      ))}
    </nav>
  );
}