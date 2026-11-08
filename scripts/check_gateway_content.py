"""Check the free gateway draft for structure and internal links.

This does not run a website. Application wiring is blocked until a learner
app exists. The design mock under design/ is not treated as that app.
"""

from __future__ import annotations

import re
import sys
from pathlib import Path

LESSON_HEADINGS = (
    "## Spoken narration",
    "## Your exercise",
    "## Artifact",
)
LINK_RE = re.compile(r"\[[^\]]+\]\(([^)]+)\)")


def gateway_root(repo: Path) -> Path:
    return repo / "courses" / "gateway"


def lesson_files(root: Path) -> list[Path]:
    return sorted((root / "lessons").glob("[0-9][0-9]-*.md"))


def check(repo: Path) -> list[str]:
    errors: list[str] = []
    root = gateway_root(repo)
    lessons = lesson_files(root)
    if len(lessons) != 7:
        errors.append(f"expected 7 lesson files, found {len(lessons)}")

    index = root / "index.md"
    toolkit = root / "toolkit.md"
    assessment = root / "assessment.md"
    for path in (index, toolkit, assessment):
        if not path.is_file():
            errors.append(f"missing {path.relative_to(repo)}")

    if index.is_file():
        index_text = index.read_text(encoding="utf-8")
        for lesson in lessons:
            rel = lesson.relative_to(root).as_posix()
            if f"]({rel})" not in index_text:
                errors.append(f"index does not link {rel}")
        for name in ("toolkit.md", "assessment.md"):
            if f"]({name})" not in index_text:
                errors.append(f"index does not link {name}")

    for lesson in lessons:
        text = lesson.read_text(encoding="utf-8")
        for heading in LESSON_HEADINGS:
            if heading not in text:
                errors.append(f"{lesson.name} missing {heading}")

    if assessment.is_file():
        text = assessment.read_text(encoding="utf-8")
        if "## Learner questions" not in text:
            errors.append("assessment.md missing learner questions")
        if "## Instructor key" not in text:
            errors.append("assessment.md missing instructor key")

    for path in [index, toolkit, assessment, *lessons, root / "production-checklist.md"]:
        if path.is_file():
            errors.extend(_broken_links(repo, path))
    return errors


def _broken_links(repo: Path, path: Path) -> list[str]:
    errors: list[str] = []
    text = path.read_text(encoding="utf-8")
    for target in LINK_RE.findall(text):
        target = target.strip()
        if not target or target.startswith(("#", "http://", "https://", "mailto:")):
            continue
        path_part, _, _fragment = target.partition("#")
        if not path_part:
            continue
        resolved = (path.parent / path_part).resolve()
        try:
            resolved.relative_to(repo.resolve())
        except ValueError:
            errors.append(f"{path.name} link escapes repo: {target}")
            continue
        if not resolved.is_file():
            errors.append(f"{path.relative_to(repo)} broken link: {target}")
    return errors


def check_catalog(repo: Path) -> list[str]:
    errors: list[str] = []
    courses = repo / "courses"
    required = [
        courses / "index.md",
        courses / "inventory.md",
        courses / "advanced" / "briefs.md",
        courses / "shared" / "worksheets.md",
    ]
    for path in ("video", "website", "automation"):
        base = courses / "paid" / path
        required.extend([base / "index.md", base / "lessons.md"])
        first = next(base.glob("01-*.md"), None)
        if first is None:
            errors.append(f"{path} missing script-ready lesson 01")
        else:
            required.append(first)
    for path in required:
        if not path.is_file():
            errors.append(f"missing {path.relative_to(repo)}")
            continue
        text = path.read_text(encoding="utf-8")
        if path.name == "index.md" and path.parent.parent.name == "paid":
            if "Not for sale" not in text:
                errors.append(f"{path} must say it is not for sale")
        if path.name.startswith("01-") and "## Exercise" not in text:
            errors.append(f"{path.name} missing exercise")
        errors.extend(_broken_links(repo, path))
    return errors


def main() -> int:
    repo = Path(__file__).resolve().parents[1]
    errors = check(repo) + check_catalog(repo)
    if errors:
        print("\n".join(errors))
        return 1
    print("course content ok: gateway, paid drafts, links")
    return 0


if __name__ == "__main__":
    sys.exit(main())
