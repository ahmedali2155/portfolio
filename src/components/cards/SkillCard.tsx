import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import type { SkillCategory } from "@/types";

export function SkillCard({ category }: { category: SkillCategory }) {
  return (
    <Card>
      <h3 className="font-heading text-h5 font-semibold text-text-primary">
        {category.category}
      </h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <Badge key={skill}>{skill}</Badge>
        ))}
      </div>
    </Card>
  );
}
