# Creator media contract

**Status:** Specification, 8 November 2026. No upload service, storage, or scanner is running. The Clearpath screen that looks like an upload does not accept a file.

## Registry

`media_contract.py` is the allowed list, version 1. Categories: video, audio, image, pdf, text, presentation (PDF only), archive (zip only), code_asset (plain text only). HTML, JavaScript, executables, and Office macro formats are rejected. A new MIME is rejected until this table and a test change together. Enabling a type needs a cost and security note from the owner. That note does not exist.

## Responsibilities

| Piece | Job | Now |
| --- | --- | --- |
| Registry | Names the type and the filename suffix. | In the Python module. |
| Signature check | Confirms bytes match the MIME. | Not built. Do not trust the browser's label alone when a server exists. |
| Storage adapter | Puts bytes in a private bucket. | Not built. |
| Processor | Posters, captions, and transcoding for video and audio only. | Not built. Must not run uploaded code. |
| Quarantine | Holds unknown or failed scans. | Not built. Spec: unknown files are refused, not stored. |
| Access | Signed link for the owner and reviewers. Learners see a preview only after publish. | Not built. |
| Rights | Creator states they may use the file. A real face or voice needs a yes. | Worksheet only. |
| Moderation | Reviewer sees a safe preview, not an executed document. | Not built. |
| Migration | A new version of the registry does not reopen old rejected types. | Rule only. |

## Sizes

Proposed caps, not enforced: video 500 MB, audio 50 MB, image 15 MB, pdf and zip 30 MB, text 2 MB. Zips are stored, not unpacked, until a scanner exists.

## Acceptance

`python3 -m unittest tests.test_media_contract` checks accept and reject. It does not upload.
