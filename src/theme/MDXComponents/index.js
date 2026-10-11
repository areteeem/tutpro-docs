import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import MDXImg from '@theme-original/MDXComponents/Img';

const screenshotGuides = {
  'Create a recurring lesson and set its schedule details.': {
    crop: {position: '50% 100%', ratio: '2.35 / 1', label: 'Save control close-up'},
    marks: [{number: '1', title: 'Save the lesson', x: 2, y: 95, w: 48, h: 4.5}],
  },
  'Edit a recurring lesson and review its details.': {
    crop: {position: '50% 100%', ratio: '2.35 / 1', label: 'Save control close-up'},
    marks: [{number: '1', title: 'Save the change', x: 2, y: 95, w: 48, h: 4.5}],
  },
  'Edit homework instructions and linked lessons.': {
    crop: {position: '50% 58%', ratio: '1.75 / 1', label: 'Title and instructions close-up'},
    marks: [
      {number: '1', title: 'Enter the assignment title', x: 3, y: 33, w: 94, h: 5},
      {number: '2', title: 'Write student-facing instructions', x: 3, y: 43, w: 94, h: 14},
      {number: '3', title: 'Save before adding images', x: 2, y: 94, w: 47, h: 5},
    ],
  },
  'Attach Decks or an Assess quiz to homework.': {
    crop: {position: '50% 27%', ratio: '1.7 / 1', label: 'Attachment controls close-up'},
    marks: [
      {number: '1', title: 'Attach a Decks assignment', x: 78, y: 14, w: 16, h: 5},
      {number: '2', title: 'Attach an Assess quiz', x: 78, y: 23, w: 16, h: 5},
      {number: '3', title: 'Set and verify the due date', x: 3, y: 70, w: 94, h: 5},
      {number: '4', title: 'Save the assignment', x: 2, y: 94, w: 48, h: 5},
    ],
  },
  'Edit due date, grading, and progress tracking.': {
    crop: {position: '50% 72%', ratio: '1.7 / 1', label: 'Grade and feedback close-up'},
    marks: [
      {number: '1', title: 'Enter the grade', x: 4, y: 60, w: 35, h: 5},
      {number: '2', title: 'Write feedback', x: 4, y: 78, w: 92, h: 14},
      {number: '3', title: 'Save the grade and feedback', x: 2, y: 94, w: 47, h: 5},
    ],
  },
  'Task filters and assignment actions.': {
    crop: {position: '50% 40%', ratio: '1.65 / 1', label: 'Task filter menu close-up'},
    marks: [{number: '1', title: 'Choose Filter tasks', x: 32, y: 29, w: 36, h: 9}],
  },
  'Desktop quiz builder with question list, visual editor, and Teacher Controls.': {
    crop: {position: '100% 4%', ratio: '2.7 / 1', label: 'Builder actions close-up'},
    marks: [
      {number: '1', title: 'Preview the student experience', x: 54, y: 10, w: 6, h: 5},
      {number: '2', title: 'Check PDFs for paper workflows', x: 80, y: 1, w: 6, h: 5},
      {number: '3', title: 'Save your draft', x: 93, y: 1, w: 5, h: 5},
    ],
  },
  'Desktop JSON schema editor with quick-add question types and validation.': {
    crop: {position: '50% 7%', ratio: '2.5 / 1', label: 'Schema validation controls close-up'},
    marks: [
      {number: '1', title: 'Switch to JSON schema', x: 45, y: 3, w: 9, h: 5},
      {number: '2', title: 'Validate the schema', x: 70, y: 15, w: 4, h: 5},
      {number: '3', title: 'Import or copy JSON', x: 20, y: 93, w: 14, h: 6},
    ],
  },
  'Printable assessment export dialog showing student handout, checkable handout, and teacher answer key.': {
    crop: {position: '50% 50%', ratio: '1.35 / 1', label: 'Export choices close-up'},
    marks: [
      {number: '1', title: 'Choose a student handout', x: 9, y: 29, w: 82, h: 10},
      {number: '2', title: 'Choose a checkable handout for AutoCheck', x: 9, y: 45, w: 82, h: 10},
      {number: '3', title: 'Keep the teacher answer key private', x: 9, y: 62, w: 82, h: 10},
    ],
  },
};

function ScreenshotImage(props) {
  const guide = screenshotGuides[props.alt];
  const viewerId = `guide-image-${React.useId().replace(/:/g, '')}`;

  return (
    <figure className="guide-screenshot">
      <div className="guide-screenshot__frame">
        <a id={`${viewerId}-trigger`} className="guide-screenshot__expand" href={`#${viewerId}`} aria-label={`View full-screen: ${props.alt || 'screenshot'}`}>
          <MDXImg {...props} />
        </a>
        {guide?.marks.map((mark) => (
          <span
            className="guide-screenshot__target"
            key={mark.number}
            style={{left: `${mark.x}%`, top: `${mark.y}%`, width: `${mark.w}%`, height: `${mark.h}%`}}
            aria-hidden="true">
            <b>{mark.number}</b>
          </span>
        ))}
      </div>
      {guide && <>
        <figcaption>
          <span>{props.alt}</span>
          <ol>
            {guide.marks.map((mark) => <li key={mark.number}><b>{mark.number}.</b> {mark.title}</li>)}
        </ol>
        </figcaption>
        <details className="guide-screenshot__detail">
          <summary>Show focused crop · {guide.crop.label}</summary>
          <a className="guide-screenshot__crop" href={`#${viewerId}`} style={{aspectRatio: guide.crop.ratio}} aria-label={`View full-screen: ${props.alt || 'screenshot'}`}>
            <img src={props.src} alt="" style={{objectPosition: guide.crop.position}} />
          </a>
        </details>
      </>}
      <div
        id={viewerId}
        className="guide-screenshot__viewer"
        role="dialog"
        aria-modal="true"
        aria-label={`Full-screen screenshot: ${props.alt || 'screenshot'}`}
        tabIndex="-1">
        <a className="guide-screenshot__backdrop" href={`#${viewerId}-trigger`} aria-label="Close full-screen screenshot" />
        <a className="guide-screenshot__close" href={`#${viewerId}-trigger`} aria-label="Close full-screen screenshot">Close</a>
        <div className="guide-screenshot__viewer-image">
          <MDXImg {...props} />
          {guide?.marks.map((mark) => (
            <span
              className="guide-screenshot__target"
              key={mark.number}
              style={{left: `${mark.x}%`, top: `${mark.y}%`, width: `${mark.w}%`, height: `${mark.h}%`}}
              aria-hidden="true">
              <b>{mark.number}</b>
            </span>
          ))}
        </div>
        <p className="guide-screenshot__viewer-caption">{props.alt || 'Screenshot'} · Click outside to close</p>
      </div>
    </figure>
  );
}

function ScreenshotParagraph(props) {
  const children = React.Children.toArray(props.children);
  if (children.length === 1 && children[0]?.type === ScreenshotImage) return children[0];
  return <p {...props} />;
}

export default {
  ...MDXComponents,
  img: ScreenshotImage,
  p: ScreenshotParagraph,
};
