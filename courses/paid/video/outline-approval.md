# Video mini-course outlines, awaiting approval

**Status:** Outline only, 8 November 2026. Not approved. Do not write full lessons, scripts, or recordings from this file until the owner approves it.

The earlier paid video draft at [index.md](index.md) is also unapproved and not for sale. This note does not replace it.

**Open assumptions, not decisions:** tool budget, phone versus computer, and country. No tool price is stated here.

## What the docs support, and what is judgement

Read 8 November 2026:

- Google Cloud, [text-to-video](https://cloud.google.com/vertex-ai/generative-ai/docs/video/generate-videos-from-text) and [image-to-video](https://cloud.google.com/vertex-ai/generative-ai/docs/video/generate-videos-from-an-image). These are different tasks. Image-to-video uses a JPEG or PNG as the first frame. A best-practice page says the still already carries subject and style, so the prompt should ask for motion, not a second description of the picture. Documented Veo 3 durations on that image page are 4, 6, or 8 seconds. People can be allowed as adults or disallowed. This is one vendor's API, not every product.
- ByteDance, [Seedance 2.0 launch, 12 February 2026](https://seed.bytedance.com/en/blog/seedance-2-0-official-launch). Text, image, audio, and video inputs. That post says up to 9 images, 3 video clips, and 3 audio clips, and 15-second multi-shot output. It also says a real person's portrait needs identity verification or prior legal authorisation.
- ByteDance, [Seedance 2.5, 31 July 2026](https://seed.bytedance.com/en/blog/one-take-creation-flexible-referencing-introducing-seedance-2-5). That post says up to 30 seconds, further extensions, and up to 30 images, 10 video clips, and 10 audio clips. It names Jimeng and Doubao Pro as access, and says an API is coming later. Learner access and price were not on the page. **To validate** before naming it as the course tool.
- Alibaba Cloud, [wan2.2-s2v lip-sync](https://help.aliyun.com/en/model-studio/wan-s2v-api). A still plus speech audio; audio under 20 seconds and 15 MB; the video length follows the audio; the page says cartoon and real people are in scope. **To validate** for our learners. Other vendors publish different limits. Do not treat one limit as universal.

**Judgement:** a style name is not a workflow. Mid-century hand-drawn (the 1960s Disney-like look), cel anime, retro TV cartoon, and a voxel look can share one reference-image workflow. Trademarked characters, a studio's exact designs, and a real person's face are rights problems, not reasons to ban a whole style. A generated voxel clip is not an editable 3D scene or a game project.

**Not read this pass:** X, YouTube transcripts, Facebook, Reddit. No social accounts were connected.

## Shared foundation

Free gateway, then the unapproved honest-clip lesson. Every project below reuses that script habit and the [shared worksheets](../../shared/worksheets.md).

**Decision order:** goal and style, then what must stay consistent, then reference stills, then generate or animate, then voice, edit, and captions, then export, rights, and budget.

**Prompt structure, not a full prompt:**

```
Task: [one motion or one line of speech]
Subject: [what is already in my still, or "none"]
Keep unchanged: [colours, outfit, object]
Do not add: [customer, price, logo I do not own, extra people]
Length I am attempting: [seconds]
Disclosure I will keep: [I filmed this / the picture is generated]
```

**Rights check for every project:** I made the still or I have permission. No trademark mascot. No real person's face or voice without a yes. No fake customer. Say if a person on screen is generated.

## Projects

Only distinct workflows are numbered. Styles sit inside project 4.

### 1. Product-only still, then a short move

**Why separate:** the input is one object photo, not a person and not a script alone. **Starter rank 1** for novices: few likeness issues, one still, a short move.

- **Capstone:** a 4 to 8 second move of one object you photographed. That length matches one vendor's documented menu. It is a project target, not a promise that every tool will do it.
- **Start:** gateway done. One photo you have rights to.
- **Lessons:** 1 take the still. 2 write motion only. 3 generate. 4 cut a bad move. 5 caption and disclosure.
- **Stack:** phone camera, browser chat for the script, one image-to-video tool. **Candidate to validate:** Veo image-to-video on Google Cloud, JPEG or PNG. Not chosen.
- **Checks:** object still recognisable. No extra people. No slogan you did not write.
- **Limit:** the still's framing is cropped or resized by some tools. Confirm on the tool you open.
- **Next:** project 2 if you want to appear yourself.

### 2. You, on your own camera

**Why separate:** the picture is filmed, not generated. Style variants are optional captions, not a new model. **Starter rank 2.**

- **Capstone:** you hold or point at the object and say one true sentence. About 10 to 20 seconds. Proposed, not a tool guarantee.
- **Start:** a phone. No generation required.
- **Lessons:** 1 one sentence. 2 film in daylight. 3 cut the stumble. 4 captions. 5 disclosure: "I filmed this."
- **Stack:** phone, any editor you already have. Generation **to validate** only if you add a cutaway later.
- **Checks:** your face is yours. No customer quote. Audio is understandable.
- **Limit:** this does not teach lip-sync onto a drawn character.
- **Next:** project 5 only if a drawn face must speak.

### 3. Testimonial-shaped, without a fake customer

**Why separate:** the risk is the claim, not the camera. Nested variants: you speak about your own use, or a generated presenter who is labelled as generated. Not a customer who does not exist.

- **Capstone:** a 15 second clip with one true sentence and a spoken or written disclosure.
- **Start:** project 2, or a still you may use.
- **Lessons:** 1 pick a sentence you can prove. 2 choose you or a labelled generated presenter. 3 remove results and prices you do not have. 4 disclosure. 5 do not post yet.
- **Stack:** same as project 2, or project 1 if the presenter is a still. Lip-sync **to validate** only for the generated face.
- **Checks:** a stranger can tell who is speaking. No review stars.
- **Limit:** platform ad rules differ by country. Not taught as one global law.
- **Next:** stop, or project 4 if you need the same drawn character twice.

### 4. Same character, two shots, your chosen look

**Why separate:** consistency needs reference stills, not only a style adjective. **Not a first starter.** Style variants, not extra courses: mid-century hand-drawn, cel anime, retro TV cartoon (thick outlines, flat colour, simple background), voxel look (blocks in the picture only).

- **Capstone:** two shots, about 4 to 8 seconds each, same character design.
- **Start:** two stills you drew or generated and have rights to. No studio character.
- **Lessons:** 1 design sheet. 2 shot 1 from still 1. 3 shot 2 from still 2. 4 compare faces and colours. 5 one-line disclosure.
- **Stack:** image tool plus image-to-video. **Candidate to validate:** Seedance reference inputs, only after access and price are known. Veo-style first-frame control is the fallback to validate if Seedance is not available to the learner.
- **Checks:** outfit and colours match. No extra fingers hidden as "style". Trademark shapes removed.
- **Limit:** vendor reference counts differ. A match is not guaranteed.
- **Next:** project 5 if the mouth must follow recorded speech. Project 6 if the blocks must be editable.

### 5. Optional later: a mouth that follows a voice

**Why separate:** audio-in, video-out, with a face-detect step. Easy to fail when speech is noisy or the clip is long.

- **Capstone:** one face, your voice or a voice you may use, under 20 seconds, matching the Alibaba page's documented audio cap. Other tools differ. **To validate.**
- **Start:** project 4 or a filmed face, plus a clean voice recording.
- **Lessons:** 1 record dry speech. 2 confirm one face. 3 generate. 4 compare mouth to words. 5 disclose generated face if it is not you.
- **Stack:** recorder plus a lip-sync API. **Candidate to validate:** `wan2.2-s2v`. Not chosen.
- **Checks:** words match. No music under the test take.
- **Limit:** length and file-size caps are per vendor. A long line must be split and joined in an editor.
- **Next:** an editor lesson only if joins fail. Not written.

### 6. Optional later: editable 3D, not a voxel filter

**Why separate:** a video of blocks cannot be opened as a game level. This path is a real 3D tool. No vendor was verified in this pass. **Stack: to validate** (a beginner editor such as a blocks sandbox or a simple 3D app the owner names).

- **Capstone:** one object you can orbit and re-export, plus a 5 second screen recording of that orbit.
- **Start:** project 4's voxel look is not required and does not count as this skill.
- **Lessons:** 1 place blocks or primitives. 2 camera move. 3 export an image. 4 image-to-video only if you want a clip. 5 say the file is yours.
- **Checks:** you can change the model after the clip. If you cannot, it was project 4.
- **Limit:** game-engine publishing and multiplayer are out.
- **Next:** stop.

## What is not its own course

Disney-like, anime, 1990s cartoon, and voxel-look prompts. They are lesson notes inside project 4. Ultra-realistic UGC is projects 1 to 3, not a fourth style school.

## Suggested first paid builds, if the owner wants production later

1. Project 1, product-only still.
2. Project 2, your own camera.
3. Project 4 only after a reference tool is validated for the learner's country and budget.

Full materials wait on approval of this outline.
