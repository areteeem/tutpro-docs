import React from 'react';
import DocItemContent from '@theme-original/DocItem/Content';

export default function DocItemContentWithGuideNotice(props) {
  return (
    <>
      <DocItemContent {...props} />
      <aside className="guide-feature-note guide-change-note" role="note">
        <strong>About these guides</strong>
        <p>Product features and screen layouts can change. We’ll update this guide as soon as possible when the product changes. If a screen looks different, use the current in-app labels and controls.</p>
      </aside>
    </>
  );
}
