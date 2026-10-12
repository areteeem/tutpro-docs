---
title: Assess tutorials
description: Step-by-step guides for creating assessments, assigning work, reviewing responses, and checking paper PDFs.
---

# Assess tutorials

These short guides explain what to do in common Assess workflows and why each step matters. Open [Assess](https://assess.tutpro.org/assessments) to follow along. Cloud features require a connected backend and a signed-in TutPro teacher account; locally saved drafts stay in the browser where they were created.

## Create a question draft with AI

[Open the assessment builder](https://assess.tutpro.org/assessments).

1. In the builder, choose **Create with AI** (the sparkle action). This opens the draft generator without replacing the assessment you are editing.
2. Enter the topic, learning goals, language, difficulty, question types, and number of questions. Add specific instructions about the class level or format if they will help.
3. Choose **Generate draft** and wait for the generated questions to appear in the builder. The output is an editable draft, not a published assessment and not an answer key that has been independently verified.
4. Read every question and answer, check the level and factual accuracy, edit or remove anything unsuitable, and preview it in the student view.
5. Save the reviewed assessment. Publish or assign it only when you are satisfied with the content and settings.

Assess sends the generation prompt and selected options to its authenticated server endpoint, which requests text from Google Gemini. This AI generation is **not local-only**. Do not put student personal information, confidential records, or other sensitive material in the prompt. The generated content returns to Assess for teacher review; the AI does not publish or assign it for you.

## Create and save an assessment

[Open a blank assessment](https://assess.tutpro.org/?new=empty).

1. From **My assessments**, select the **+** button (**Create empty quiz**). This opens a new draft without changing an existing assessment.
2. Give it a clear title, then add questions from the question-type panel. The title helps you and students recognize it; each question type determines how students will answer.
3. Choose **Preview** in the builder header to try the student view and check wording, answers, and points. A quick preview catches confusing instructions before students see them.
4. Choose **Save**. If the status says **Saved locally**, the draft is on this browser. Cloud saving and publishing require a connected backend and TutPro sign-in, so a local draft is not yet available to students or on another device.

## Publish and share a student link

[Open My assessments](https://assess.tutpro.org/assessments).

1. Open the saved assessment in the builder and review it in **Preview**. Students receive the published version, so check the student experience first.
2. In the builder header, select the link button to publish and copy the student URL. Publishing saves the current version and creates a direct link to the student player.
3. Send the copied URL to students, or assign the assessment in TutPro for a tracked homework workflow. A direct link is simple to distribute; a TutPro assignment connects the work to selected students and homework.
4. Return to **My assessments** to close or reopen student access when needed. Availability controls whether students can start or continue the assessment.

## Assign through TutPro

[Open My assessments](https://assess.tutpro.org/assessments).

1. Select the TutPro assignment icon beside a saved assessment. This opens the assignment form for that assessment.
2. Choose students and optionally set a due date and attempt limit. These settings define who receives the homework and how the task is completed.
3. Choose whether students may see an automatic score immediately, then select **Assign in TutPro**. Teacher-only scoring keeps results private until you review and publish them.
4. Students open the task from their TutPro homework; submissions return to Assess for review. This keeps the assignment, student identity, and teacher response workflow connected.

## Review submissions and publish grades

[Open My assessments](https://assess.tutpro.org/assessments).

1. Open an assessment and choose **Responses**, or use the recent-submissions inbox. Both routes take you to submissions for the selected assessment.
2. Filter for **Needs review** and open a student response. This helps prioritize work that still needs a teacher decision.
3. Check answers and adjust points where needed, then choose **Save grades**. Saving records your review without automatically making the grade visible to the student.
4. Choose **Publish grade** when you are ready to share the result. Publishing is separate so unreviewed or provisional scores stay private.

## Create a student library

[Manage assessment libraries](https://assess.tutpro.org/assessments/libraries).

1. Open **Libraries** from My assessments and create a library name and code. A library groups related work; its 4–16 character code lets students find that group.
2. Return to My assessments, choose that library, and add only the assessments you want included. Membership is explicit, so drafts and unrelated assessments are not exposed by accident.
3. Share the student [library page](https://assess.tutpro.org/library) and code with learners. Students enter the code to see the assignments you selected.
4. Remove an assessment from the library when it should no longer appear there. This changes library visibility without deleting the assessment itself.

## Check paper assessment PDFs

[Open PDF checking](https://assess.tutpro.org/autocheck).

1. Save the assessment, then export a new **Checkable student handout** from its builder. The handout includes page identifiers that connect scans to the correct saved assessment.
2. Open **Check paper PDFs** and select the assessment before uploading scans. This matches pages against the right questions and answer key.
3. Group pages by student and inspect uncertain marks or missing pages. Recognition can propose answers, but your review resolves ambiguous marks and prevents missing pages from being treated as wrong.
4. Review answers and scores, confirm the import, then open the response in Submissions. Only confirmed work is imported; grades remain teacher-controlled until you save and publish them.

For scanning requirements and local data handling, see the [AutoCheck guide](./autocheck).

<div className="actionLinks"><a href="https://assess.tutpro.org/assessments">Open My assessments ↗</a><a href="https://assess.tutpro.org/?new=empty">Create an assessment ↗</a><a href="https://assess.tutpro.org/autocheck">Open PDF checking ↗</a></div>
