import type { ReferenceBlock } from "@/lib/lesson-reference-blocks";
import { lessonReferenceBlocks } from "@/lib/lesson-reference-blocks";

export function LessonReferenceBlocks({ slug }: { slug: string }) {
  const blocks = lessonReferenceBlocks[slug];
  if (!blocks?.length) return null;

  return (
    <section className="lesson-references" aria-labelledby={`refs-${slug}`}>
      <h2 className="lesson-h2" id={`refs-${slug}`}>
        Examples and prompts on this page
      </h2>
      <p className="field-note">
        Fictional models from the review-draft course—shown here so you do not
        need files outside this website.
      </p>
      {blocks.map((block) => (
        <ReferenceBlockView key={block.title} block={block} />
      ))}
    </section>
  );
}

function ReferenceBlockView({ block }: { block: ReferenceBlock }) {
  switch (block.type) {
    case "note":
      return (
        <div className="card card--flat ref-block">
          <p className="eyebrow">{block.title}</p>
          <p>{block.body}</p>
        </div>
      );
    case "quote":
      return (
        <figure className="card card--flat ref-block">
          <p className="eyebrow">{block.title}</p>
          <p className="field-note">
            <strong>{block.label}</strong>
          </p>
          <blockquote className="ref-quote">
            {block.body.split("\n").map((line, index) => (
              <span key={`${index}-${line.slice(0, 16)}`}>
                {line}
                {index < block.body.split("\n").length - 1 ? <br /> : null}
              </span>
            ))}
          </blockquote>
        </figure>
      );
    case "prompt":
      return (
        <div className="card card--flat ref-block">
          <p className="eyebrow">{block.title}</p>
          <pre className="ref-prompt" tabIndex={0}>
            {block.body}
          </pre>
        </div>
      );
    case "table":
      return (
        <div className="card card--flat ref-block">
          <p className="eyebrow">{block.title}</p>
          <table className="ref-table">
            <thead>
              <tr>
                {block.headers.map((h) => (
                  <th key={h} scope="col">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "link":
      return (
        <div className="card card--flat ref-block">
          <p className="eyebrow">{block.title}</p>
          <p>{block.body}</p>
          <p>
            <a href={block.href} rel="noopener noreferrer" target="_blank">
              {block.href}
            </a>
          </p>
        </div>
      );
    default:
      return null;
  }
}
