export type ContractSection = {
  heading: string;
  paragraphs: string[];
};

export type ParsedContract = {
  title: string;
  subtitle?: string;
  dateLine?: string;
  intro?: string;
  sections: ContractSection[];
  trailingNotes: string[];
};

const SECTION_HEADING_PATTERN = /^\d+\.\s+/;
const DEFINITIONS_HEADING_PATTERN = /^definitions:?$/i;

function cleanLine(line: string) {
  return line.replace(/\s+/g, " ").trim();
}

export function parseContractText(contractText: string): ParsedContract {
  const lines = contractText
    .split("\n")
    .map((line) => line.trimEnd())
    .filter((line) => line.length > 0);

  const firstSectionIndex = lines.findIndex((line) =>
    SECTION_HEADING_PATTERN.test(line)
  );

  const preamble =
    firstSectionIndex >= 0 ? lines.slice(0, firstSectionIndex) : lines;
  const bodyLines =
    firstSectionIndex >= 0 ? lines.slice(firstSectionIndex) : [];

  const title = cleanLine(preamble[1] || preamble[0] || "CONTRACT");
  const subtitleCandidate = preamble.length > 1 ? cleanLine(preamble[0]) : "";
  const subtitle = subtitleCandidate && subtitleCandidate !== title
    ? subtitleCandidate
    : undefined;

  const dateLine = preamble.find((line) => /^Date:/i.test(line));
  const intro = preamble
    .filter((line) => !/^Date:/i.test(line) && cleanLine(line) !== title && cleanLine(line) !== subtitle)
    .slice(-1)[0];

  const sections: ContractSection[] = [];
  let current: ContractSection | null = null;

  for (const rawLine of bodyLines) {
    const line = cleanLine(rawLine);
    if (!line) {
      continue;
    }

    if (SECTION_HEADING_PATTERN.test(line) || DEFINITIONS_HEADING_PATTERN.test(line)) {
      if (current) {
        sections.push(current);
      }
      current = {
        heading: line,
        paragraphs: [],
      };
      continue;
    }

    if (!current) {
      continue;
    }

    current.paragraphs.push(line);
  }

  if (current) {
    sections.push(current);
  }

  const trailingNotes = lines.filter((line) =>
    /template and not legal advice/i.test(line)
  );

  return {
    title,
    subtitle,
    dateLine,
    intro,
    sections,
    trailingNotes,
  };
}
