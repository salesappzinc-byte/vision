"""Allowed creator media types. Not an upload server.

Unknown types are rejected. Active and executable types are rejected even if
someone adds them by mistake. No file is stored here.
"""

from __future__ import annotations

ALLOWED = {
    "video": {"video/mp4": (".mp4",), "video/webm": (".webm",)},
    "audio": {"audio/mpeg": (".mp3",), "audio/wav": (".wav",)},
    "image": {"image/png": (".png",), "image/jpeg": (".jpg", ".jpeg")},
    "pdf": {"application/pdf": (".pdf",)},
    "text": {"text/plain": (".txt", ".md")},
    "presentation": {"application/pdf": (".pdf",)},
    "archive": {"application/zip": (".zip",)},
    "code_asset": {"text/plain": (".txt",)},
}

REJECTED = {
    "text/html",
    "application/javascript",
    "application/x-msdownload",
    "application/vnd.ms-excel",
    "application/vnd.ms-powerpoint",
}


def decide(category: str, mime: str, filename: str) -> str:
    """Return 'accept' or a short reject reason. Does not read the bytes."""
    if category not in ALLOWED:
        return "reject-unknown-category"
    if mime in REJECTED or mime not in ALLOWED[category]:
        return "reject-type"
    suffix = filename[filename.rfind(".") :].lower() if "." in filename else ""
    if suffix not in ALLOWED[category][mime]:
        return "reject-extension"
    return "accept"
