import unittest

from creator.media_contract import decide


class MediaContractTest(unittest.TestCase):
    def test_accepts_plain_video(self):
        self.assertEqual(decide("video", "video/mp4", "clip.mp4"), "accept")

    def test_rejects_unknown_mime(self):
        self.assertEqual(decide("video", "video/x-new", "clip.mp4"), "reject-type")

    def test_rejects_html_and_executable(self):
        self.assertEqual(decide("text", "text/html", "page.html"), "reject-type")
        self.assertEqual(decide("code_asset", "application/javascript", "app.js"), "reject-type")

    def test_rejects_bad_extension(self):
        self.assertEqual(decide("image", "image/png", "photo.jpg"), "reject-extension")

    def test_rejects_unknown_category(self):
        self.assertEqual(decide("model-weights", "application/octet-stream", "w.bin"), "reject-unknown-category")


if __name__ == "__main__":
    unittest.main()
