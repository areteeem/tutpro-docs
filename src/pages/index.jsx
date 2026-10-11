import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

const paths = [
  {eyebrow: 'TEACHER', title: 'Run your teaching day', body: 'Set up students, plan lessons, track homework, and keep payments in one workspace.', href: '/guides/teacher/first-week', action: 'Explore teacher guides'},
  {eyebrow: 'STUDENT', title: 'Make learning easy to follow', body: 'Help learners find their schedule, complete homework, review feedback, and switch providers.', href: '/guides/student/app', action: 'Explore student guides'},
  {eyebrow: 'PRACTICE', title: 'Build a learning rhythm', body: 'Create flashcard decks and assessments, share them with students, and review progress.', href: '/guides/decks/overview', action: 'Explore Decks and Assess'},
  {eyebrow: 'OPERATIONS', title: 'Bring your school online', body: 'Set up campuses, roles, shared records, hosting, domains, and the backend.', href: '/guides/teacher/schools', action: 'Explore school and hosting guides'},
];

export default function Home() {
  return <Layout title="Help" description="TutPro guides for teachers, students, and schools.">
    <main className={styles.home}>
      <div className={styles.intro}>
        <p className={styles.eyebrow}>TUTPRO HELP</p>
        <h1>Make more room<br/>for learning.</h1>
        <p className={styles.lead}>Clear, practical guides to help you teach, learn, and run TutPro with confidence.</p>
        <Link className={styles.primaryLink} to="/guides">Browse all guides <span aria-hidden="true">→</span></Link>
      </div>
      <div className={styles.guideGrid}>
        {paths.map((item) => <Link className={styles.guideCard} to={item.href} key={item.eyebrow}>
          <span className={styles.eyebrow}>{item.eyebrow}</span>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
          <span className={styles.cardAction}>{item.action} <span aria-hidden="true">→</span></span>
        </Link>)}
      </div>
      <section className={styles.helpStrip}>
        <div><p className={styles.eyebrow}>NEED A HAND?</p><h2>Start with the task in front of you.</h2><p>Use the guide search or browse a product area. Each guide links to the place where you can take the next step.</p></div>
        <Link to="/guides/accounts">Account and sign-in help <span aria-hidden="true">→</span></Link>
      </section>
    </main>
  </Layout>;
}
