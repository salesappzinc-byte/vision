import sys
import unittest
from pathlib import Path

REPO = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(REPO))

from scripts.check_gateway_content import check, lesson_files  # noqa: E402

class GatewayContentTest(unittest.TestCase):
    def test_live_draft_has_no_structural_errors(self):
        self.assertEqual(check(REPO), [])

    def test_seven_lesson_files(self):
        names = [path.name for path in lesson_files(REPO / "courses" / "gateway")]
        self.assertEqual(len(names), 7)
        self.assertTrue(names[0].startswith("01-"))
        self.assertTrue(names[-1].startswith("07-"))

    def test_missing_exercise_heading_is_reported(self):
        import tempfile

        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            gateway = root / "courses" / "gateway" / "lessons"
            gateway.mkdir(parents=True)
            for index in range(1, 8):
                body = "# L\n\n## Spoken narration\n\nx\n\n## Your exercise\n\nx\n\n## Artifact\n\nx\n"
                (gateway / f"{index:02d}-lesson.md").write_text(body, encoding="utf-8")
            (gateway / "07-lesson.md").write_text("# L\n\n## Spoken narration\n\nx\n", encoding="utf-8")
            index = root / "courses" / "gateway" / "index.md"
            links = "\n".join(
                f"[l](lessons/{index:02d}-lesson.md)" for index in range(1, 8)
            )
            index.write_text(f"[t](toolkit.md)\n[a](assessment.md)\n{links}\n", encoding="utf-8")
            (root / "courses" / "gateway" / "toolkit.md").write_text("t\n", encoding="utf-8")
            (root / "courses" / "gateway" / "assessment.md").write_text(
                "## Learner questions\n\n## Instructor key\n", encoding="utf-8"
            )
            errors = check(root)
        self.assertTrue(any("07-lesson.md missing ## Your exercise" in error for error in errors))


if __name__ == "__main__":
    unittest.main()
