---
title: Teacher guide
description: Build, configure, publish, and review forms and quizzes in Assess.
---

# Teacher guide

Assess has two authoring modes: **Form** collects responses; **Quiz** supports scored questions and assessment controls. Start in the assessment library, create or explicitly open an assessment, and use the editor to build it.

## Create a form or quiz

1. Open [Assess](https://assess.tutpro.org/assessments) and choose **New assessment**.
2. Set the title and choose **Form** or **Quiz**.
3. Add a group to organize questions into sections, then add questions within each group.
4. Choose a task type, enter the prompt, and fill in answer choices or expected responses.
5. Set the points, required state, time limit, and section for the selected question.
6. Save the draft and use **Preview** to inspect the student view before publishing.

Supported question types depend on the selected assessment mode. The current builder includes short and long response, single and multiple choice, grid choice, searchable selection, confidence rating, number, date, yes-or-no, verb conjugation, fill-in-the-blank, cloze, dropdown cloze, word-bank cloze, ordering, matching, categorization, sentence correction, word highlighting, and vocabulary-table tasks. Context groups, section headings, and instruction blocks help organize the assessment. Translation remains supported in the assessment format and player, though it is not in the current quick-add menu. See the complete [question type guide](./question-types) for details.

<div className="guide-feature-note"><p><strong>Feature availability can change.</strong> This inventory reflects the current builder and assessment format. Types can vary by mode or release; we’ll update the guide as soon as possible when the product changes.</p></div>

## Organize and edit questions

Use **Add group** for a new section. Drag questions in the question list to change their order or move them between sections. Select a question to edit its prompt, options, point value, and settings. Delete only after checking the selected item; removing a question changes the assessment content.

Use the visual editor for guided editing. **JSON schema** exposes the structured assessment data for advanced users. Keep a copy before making direct schema changes, and preview the assessment after edits. **Download JSON** exports the assessment source; **Download printable PDF** creates a print copy.

## Configure quiz controls

The teacher controls panel includes options such as:

- **Passing percentage**, attempts, and questions per page.
- **Maximum warnings** and other testing-environment controls.
- **Availability**, including whether students can open the assessment and an optional close date/time.
- **Respondent naming** and response title fields.
- **Automatic points** rules, assessment flow, and results/review behavior.
- **Organization** settings and blocked student names.
- **Entry questions** for details collected before the student starts.
- **Reference sheets** such as formulas or reference text that students can open during work.
- **Instructions and completion text** shown around the assessment.

Review controls in the active assessment before publication. Date/time settings use the local time shown in the editor. A disabled acceptance control prevents students from opening the quiz even if they still have its link.

## Save, publish, and share

Use **Save draft** while editing. Check the cloud-save indicator before leaving. Choose **Publish and copy link** when the assessment is ready for respondents. The published assessment can also be connected to Teacher using **Add quiz**; select the intended student or group, then confirm the assignment details in Teacher.

Use a short code when a learner needs to join manually. The code and full share URL are different values. Share the complete link or code through your normal class channel and avoid posting private response links publicly.

## Review responses and check PDFs

Choose **View responses** to review submissions. Assess may offer individual response review, automatic points, and PDF checking depending on the assessment and its settings. Open **Check PDFs** when the assessment supports uploaded paper work; inspect extracted answers and scoring before accepting the result. Teachers remain responsible for reviewing ambiguous answers and releasing results.

When an assessment is linked to a Teacher assignment, check that the response belongs to the correct student and attempt before treating it as completed work.

## Edit an existing assessment

Open the assessment explicitly from the library before editing. Review its current availability and responses first. After material changes, preview again and check whether the published link and assignment still point to the intended version.

<div className="actionLinks"><a href="https://assess.tutpro.org/assessments">Open assessment library ↗</a><a href="https://assess.tutpro.org/?new=empty">Create an assessment ↗</a><a href="https://assess.tutpro.org/assessments/submissions">Review submissions ↗</a><a href="https://assess.tutpro.org/autocheck">Open AutoCheck ↗</a><a href="../teacher/insights-and-tools">Teacher grading and assignments →</a></div>
