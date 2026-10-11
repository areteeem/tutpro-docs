---
title: Release notes
description: Current TutPro Assess features, researched patterns, and confirmed release history.
---

# Release notes

This page is a feature and research inventory for TutPro Assess. The list below describes the documented product surface; it does not assign a release date to features whose deployment history has not been confirmed.

## Current feature inventory

### Authoring and delivery

- Create a **Form** for collecting responses or a **Quiz** for scored work.
- Organize questions into groups and sections; add, reorder, and edit questions from a visual question list.
- Use a visual rich-text editor or edit the structured JSON schema directly. Validate and preview after schema changes.
- Preview student-facing content, save drafts, publish a share link, and use a join code when a student needs to enter it manually.
- Download assessment JSON for structured backup and a printable assessment PDF for paper use.
- Connect an assessment to a Teacher homework assignment. Assess assignments remain a distinct attachment type alongside ordinary links and Decks.

### Question types and learning supports

- Choice and multiple-select questions, including answer options with supporting media where available.
- Fill-in-the-blank, matching, categorization, and reorder questions.
- Supporting passages or media, hints, explanations shown after checking, and teacher-only grading notes.
- Points, required questions, section placement, and optional question timing.
- Entry questions for collecting a learner’s name, email, class, or other short details before starting.
- Reference sheets for formulas and other permitted text during an attempt.

### Teacher controls and student experience

- Accept responses and optional close date/time; attempt count and passing percentage.
- Automatic point rules, question timing, questions per page, and assessment flow controls such as backtracking and progress visibility.
- Results and review settings, including when feedback and answer keys are revealed.
- Respondent naming, blocked names, warning thresholds, and full-screen testing options where configured.
- Question and answer-option shuffling, resume support, and copying/selection restrictions in the active assessment player where enabled.
- Student guidance and completion text, with preview for checking the delivered experience.

### Responses and paper workflows

- Review submissions, inspect automatic scores, make teacher corrections, add feedback, and publish results using the controls available for that assessment.
- Open **Check PDFs** to process paper work and review detected answers or suggested scores. See [AutoCheck release notes](./autocheck-release-notes) for its feature inventory and limitations.
- Export three distinct PDF outputs: a **Student handout** without answers, an explicitly opt-in **Checkable student handout** for AutoCheck template registration, and a **Teacher answer key**.
- Standard handout and answer-key generation is browser-local. Only the explicit checkable-handout action registers a template for AutoCheck; see [PDF export guide](./pdf-exports).

<div className="guide-feature-note"><p><strong>Feature inventory subject to change.</strong> Availability can vary by assessment mode and release. The guide will be updated as soon as possible when the product surface changes; use the app’s current controls as the source of truth.</p></div>

## Product research and design notes

### Patterns seen in established assessment tools

- Google Forms documents answer keys, points, feedback, manual or immediate grade release, and summaries of frequently missed questions and score distributions. Its form settings also provide question and answer shuffling. These are useful comparison patterns, not a claim that every Forms feature exists in TutPro Assess. [Google Forms quiz guide](https://support.google.com/docs/answer/7032287?hl=en-en) · [Google Forms settings](https://support.google.com/docs/answer/2839737?hl=en-GB)
- Moodle’s quiz workflow includes time limits, attempt controls, shuffled questions and answers, and question-bank selection. Random draws from a bank can create different equivalent forms, but availability and configuration should be checked in the target Moodle release. [Moodle quiz settings](https://docs.moodle.org/403/en/Quiz_settings) · [Building a Moodle quiz](https://docs.moodle.org/403/en/Building_Quiz)
- Similarity products help locate matching text, but a similarity score is not a determination of plagiarism. A high score can reflect quotations and references; a low score does not rule out contract cheating. [Turnitin: similarity and plagiarism](https://guides.turnitin.com/hc/en-us/articles/34400565079053-Turnitin-and-plagiarism)
- Research on remote proctoring reports trade-offs around false positives, fairness, bias, privacy, and recording a student’s private home environment. Treat automated flags as prompts for human review, not proof of misconduct. [2026 review of online exam proctoring research](https://link.springer.com/article/10.1007/s44217-026-01224-3)
- One randomized field study found behavior consistent with information sharing between exam rounds, while a generic ethics reminder did not change measured behavior in that context. It does not establish that any single control prevents cheating. [Barcelona School of Economics study](https://bse.eu/research/publications/academic-integrity-line-exams-evidence-randomized-field-experiment)
- A study of medical multiple-choice items examined question susceptibility to ChatGPT-based answering. Its domain and evaluation window are narrow, so it is a reason to review item design regularly, not a universal estimate of AI performance. [Study of test-question vulnerability](https://arxiv.org/abs/2402.14881)

### Integrity guidance

No online control can guarantee that a student works without outside help. Use a layered assessment design: varied application questions, clear permitted-resource and AI policies, randomized order where appropriate, controlled availability, and human review of unusual results. For consequential exams, choose accommodations and safeguards deliberately, minimize collected data, and provide an appeal path. See [Academic integrity and reducing answer sharing](./academic-integrity).

## Confirmed release history

No dated public Assess release history or version identifiers are recorded in this documentation source, so this inventory is not a chronological changelog.

<div className="actionLinks"><a href="https://assess.tutpro.org/assessments">Open assessment library ↗</a><a href="https://assess.tutpro.org/assessments/submissions">Review submissions ↗</a><a href="https://assess.tutpro.org/autocheck">Open AutoCheck ↗</a><a href="./autocheck-release-notes">AutoCheck release notes →</a><a href="./academic-integrity">Academic integrity guide →</a></div>
