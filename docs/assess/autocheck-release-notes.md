---
title: AutoCheck release notes
description: Current AutoCheck workflow, feature inventory, research, and confirmed release history.
---

# AutoCheck release notes

This page records AutoCheck separately from the wider Assess feature set. The inventory describes the current documented workflow; it is not a dated release announcement. No public AutoCheck version history or confirmed release identifiers are available in this documentation source.

## Current feature inventory

### Prepare and export paper assessments

- Build the assessment and answer key in TutPro Assess, then review the question order, points, expected answers, print layout, and student instructions.
- Export an ordinary student handout for printing; it does not include answers.
- Explicitly choose **Checkable student handout** when the paper is intended for AutoCheck. This opt-in registers the assessment template needed to connect scans to the expected questions. Ordinary PDFs and answer keys remain local browser exports.
- Export the teacher answer key separately and keep it private.

### Scan and review

- Open **Check PDFs** from an assessment and follow the upload prompts for scanned work.
- Keep each student’s pages together, upright, readable, and in the intended order. Include the template’s page identifiers when the checkable PDF supplies them.
- Inspect extracted responses against the source scan. Mark questions as correct, incorrect, or blank where supported; adjust suggested points for partial or non-standard work.
- Revisit uncertain handwriting and answer crops, correct the response or score, and save the reviewed outcome through the available response workflow.
- Confirm student identity, assessment, and attempt before associating the checked work with a submission. AutoCheck suggestions need teacher confirmation before results are released.

### Local model and evidence controls

The settings surface documents on-device mark checking and a local handwriting-recognition model, along with evidence export and restore controls. Model, language, and device support can vary. Preserve the browser profile until review is complete; export evidence before clearing local browser data or changing devices. Check the app’s current storage explanation before processing sensitive student work.

<div className="guide-feature-note"><p><strong>Feature inventory subject to change.</strong> AutoCheck behavior, model availability, and review controls can vary by release and device. We’ll update this guide as soon as possible when confirmed product changes are available.</p></div>

## What we learned from the current product landscape

- Optical mark recognition is well suited to clearly printed bubbles or boxes. Handwriting recognition is less predictable, especially with cursive writing, crowded answers, low contrast, skewed pages, unusual symbols, or language-specific letter forms. Keep a teacher review step for every uncertain answer.
- A clear page template, stable page identifiers, generous answer areas, and consistent scan quality make paper-to-digital matching more reliable. Ask for one student per upload unless the current interface explicitly confirms batch support.
- Separate the confidence of recognition from the correctness of the answer. A legible transcription can still be conceptually wrong; a valid alternate answer can be correct even when it differs from a reference string.
- Similarity detection can help surface matching text but cannot decide plagiarism by itself. Turnitin explains that similarity is a signal for review, not a verdict; the same caution applies to automated scoring and AI-writing indicators. [Turnitin: similarity and plagiarism](https://guides.turnitin.com/hc/en-us/articles/34400565079053-Turnitin-and-plagiarism)
- Remote exam proctoring research identifies privacy, accessibility, false-positive, and fairness concerns. Do not treat a flag, an irregular response pattern, or an automated confidence score as proof of cheating. [Review of automated online exam proctoring research](https://link.springer.com/article/10.1007/s44217-026-01224-3)
- UNESCO’s guidance recommends a human-centered approach to generative AI in education, including attention to privacy, age-appropriate use, and pedagogical purpose. [UNESCO guidance for generative AI in education and research](https://www.unesco.org/en/articles/guidance-generative-ai-education-and-research?hub=67098)

## Product improvement opportunities

These are research-informed directions to evaluate; they are not claims about features already shipped:

- Show a confidence value and the source crop next to each uncertain transcription so reviewers can decide quickly.
- Let teachers set a review threshold and make low-confidence, partial-credit, and identity-mismatch items visible in a focused queue.
- Keep original scans, crops, recognition output, manual edits, and final scores distinguishable in the review history.
- Support a rubric for equivalent answers, spelling tolerance, units, and partial credit, while keeping teacher override clear.
- Offer a scan-quality check before processing: page count, orientation, blur, contrast, and whether all answer regions are visible.
- Explain which processing happens on the device, what is saved locally, what crosses to a server, and how to export or delete it.
- Collect only the minimum learner identifiers needed for matching; provide a manual route when a QR or name cannot be read.
- Keep an audit trail of teacher-confirmed score changes and make the final score publisher explicit.

These safeguards reduce preventable mistakes and improve reviewability; they do not promise perfect recognition or eliminate cheating. For assessment design that reduces answer sharing, see [Academic integrity and reducing answer sharing](./academic-integrity).

## Confirmed release history

No dated public AutoCheck release history or version identifiers are recorded here. The researched opportunities above are separate from confirmed shipped features.

<div className="actionLinks"><a href="https://assess.tutpro.org/autocheck">Open AutoCheck ↗</a><a href="https://assess.tutpro.org/assessments">Open assessment library ↗</a><a href="./autocheck">AutoCheck tutorial →</a><a href="./release-notes">Assess release notes →</a></div>
