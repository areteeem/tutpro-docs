---
title: Camera gaze monitoring
description: How optional gaze monitoring calibrates, warns students, and lets teachers tune sensitivity.
---

# Camera gaze monitoring

Camera gaze monitoring is an optional check for a student looking away during a quiz. It is **off by default**. When enabled, the browser analyzes the camera feed on the student’s device. **The camera video and face/eye measurements are processed locally in the browser. They are not recorded, uploaded, or sent to TutPro or an AI service.** The assessment may retain the resulting warning count and event details in the submitted attempt so the teacher can review them. That is assessment activity data, not camera footage or a stored face scan.

<div className="guide-feature-note"><p><strong>Camera privacy:</strong> the live video stays on the student’s device. Face and eye coordinates are calculated in the browser, used in memory to compare against calibration, and discarded as the page runs. No video, image, face template, or eye-position history is sent to a server or saved by this feature. If monitoring is enabled, the assessment can submit an integrity record containing a warning reason and time (and the combined warning count) with the attempt. This makes camera processing local; it does not mean the whole assessment is stored only on the device.</p></div>

This is an estimate of gaze direction, not proof of misconduct. Camera position, lighting, glasses, and device performance can affect it. Review the attempt and its context before making a decision based on warnings.

## Try the camera demo

Use the local interactive prototype below to try calibration, adjust sensitivity, watch the live eye-position estimate, and review the detection log. Select **Start camera & demo** and allow camera access when the browser asks. The camera is used only in this browser tab: frames are analyzed in memory on this device, not uploaded or recorded. The demo’s detection log is temporary page state; it is not saved or transmitted and disappears when the demo is stopped or reloaded. Selecting **Stop demo** turns the camera off. Move your eyes or turn your head to see the tracker respond. Briefly look down as if at a keyboard, then look to the side long enough to see how the delay and warning limit work.

The embedded prototype is available when the Assess development server is running locally at port 5178. If it does not load, open [the local camera demo](http://127.0.0.1:5178/vision-demo) in another tab.

<iframe className="vision-demo-embed" title="Interactive camera gaze monitoring demo" src="http://127.0.0.1:5178/vision-demo?embed=1" allow="camera" />

## How calibration works

1. When the student starts the quiz, the browser asks for camera access if it has not already been granted. The student should sit where their face and eyes are visible and look at the screen. The video stream remains in the student’s browser.
2. The camera check analyzes several clear eye and face samples locally. It uses their median position as that student’s starting point for looking at the screen; samples and coordinates are not saved or sent elsewhere.
3. During the quiz, the check compares new eye and head positions with that calibrated starting point and the teacher’s tolerance setting.
4. A brief glance does not count. A look beyond the allowed range must last for the configured time before it creates a warning. Small downward glances for the keyboard are allowed.
5. The warning count is checked against the assessment’s maximum warning limit. Reaching the limit submits the attempt. The limit is shared with other enabled integrity warnings, such as leaving fullscreen or switching tabs. If the attempt is submitted to the teacher, its integrity record can include warning reasons and event times, but never the camera stream or face/eye measurements.

Calibration needs a clear view of the student’s eyes. If the camera cannot see them, the student should improve the lighting or camera position and retry. A new quiz attempt calibrates again.

### What is and is not collected

| Information | Handling |
| --- | --- |
| Live camera frames | Analyzed in the browser on the student’s device; not recorded, uploaded, or stored by gaze monitoring. |
| Face and eye position estimates | Used temporarily in browser memory for calibration and comparison; not sent to a server or retained as a profile. |
| Demo detection log | Shown temporarily in the local demo page; not saved or transmitted. |
| Assessment warning events | When the assessment is submitted, warning reason/time and the warning count may be included in its integrity data for teacher review. |
| Assessment answers and grades | Follow the assessment’s normal save and submission flow; these are separate from camera processing. |

The local camera analysis does not make the rest of Assess offline. A submitted assessment can still be stored in the connected TutPro service as usual. The only gaze-related information that may accompany it is the warning record described above.

## Set it up in the editor

1. Create or open a quiz in the Assess editor.
2. In **Teacher controls**, set **Maximum warnings**. The default is 2; set it to 0 for no warning-count limit.
3. Open **Test environment** and turn on **Warn when the student looks away**. This setting is off by default.
4. Open **Gaze detection sensitivity** and set the gaze tolerance and time away before warning. These controls appear when gaze monitoring is enabled.
5. Review **Give 0% after a violation** if you want that separate consequence. Save the assessment and preview the student instructions before sharing it.

### Choose a sensitivity

**Gaze tolerance** is relative to the student’s calibrated eye position and is expressed as a percentage of eye width. It can be set from 6% to 16%. A lower value catches smaller movements but can produce more warnings during ordinary reading. A higher value allows wider glances before they count. The browser performs this comparison locally; changing the sensitivity does not upload camera frames or measurements.

**Time away before warning** can be set from 0.75 to 2.5 seconds. A shorter delay reacts sooner but is less forgiving of normal pauses. A longer delay gives students more time to glance at their work or the room before a warning is recorded.

The recommended starting point is **10% gaze tolerance** and **1.5 seconds**. Adjust these values for the assessment layout, camera placement, and student needs. The camera cannot reliably distinguish every on-screen glance from a look away, so use warnings as review signals rather than automatic evidence.

## Example

Suppose the teacher enables monitoring, sets tolerance to 10%, sets the delay to 1.5 seconds, and sets the warning limit to 3:

| Student behavior | Result |
| --- | --- |
| Looks at the screen during calibration | That eye and head position becomes the attempt’s starting point. |
| Briefly looks to the side for less than 1.5 seconds | No warning is added. |
| Looks beyond the 10% tolerance for longer than 1.5 seconds | One warning is added, with the detected event recorded for review. |
| Looks down briefly toward the keyboard | Allowed; it does not add a warning. |
| Reaches warning 3 | The assessment submits the attempt. |

Returning to the calibrated screen position clears the current away timer. It does not remove warnings already recorded for that attempt.

<div className="actionLinks"><a href="https://assess.tutpro.org/builder">Open the assessment editor ↗</a><a href="./quiz-controls">Quiz controls →</a><a href="./academic-integrity">Academic integrity guidance →</a></div>
