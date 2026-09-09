import { ReactNode } from "react";

interface PaperTableProps {
  headers: string[];
  rows: ReactNode[][];
}

export function PaperTable({
  headers,
  rows,
}: PaperTableProps) {
  return (
    <div className="overflow-x-auto rounded-card border border-border-subtle">
      <table className="min-w-full divide-y divide-border-subtle">
        <thead className="bg-bg-secondary">
          <tr>
            {headers.map((header) => (
              <th
                key={header}
                className="
                  px-6
                  py-4
                  text-left
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wider
                  text-text-secondary
                "
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="divide-y divide-border-subtle bg-surface-card">
          {rows.map((row, index) => (
            <tr
              key={index}
              className="transition-colors hover:bg-bg-secondary"
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="px-6 py-4 text-sm text-text-muted"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}