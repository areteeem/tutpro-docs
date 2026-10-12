module.exports = {
  guideSidebar: [
    'index',
    {type: 'category', label: 'Get started', items: ['accounts', 'teacher/first-week', 'student/join', 'student/workspaces']},
    {type: 'category', label: 'Teacher', items: [
      'teacher/dashboard', 'teacher/students', 'teacher/groups', 'teacher/forms',
      {type: 'category', label: 'Schedule', items: ['teacher/schedule', 'teacher/schedule-create', 'teacher/schedule-edit']},
      {type: 'category', label: 'Library', items: ['teacher/library', 'teacher/library-lessons', 'teacher/library-homework']},
      {type: 'category', label: 'Tasks and grading', items: ['teacher/tasks', 'teacher/homework-grading', 'teacher/homework-create', 'teacher/homework-edit', 'teacher/grading']},
      {type: 'category', label: 'Payments', items: ['teacher/payments', 'teacher/distribute', 'teacher/invoices', 'teacher/expenses']},
      'teacher/tutorials', 'teacher/stats', 'teacher/reports', 'teacher/feed', 'teacher/inbox', 'teacher/administration', 'teacher/settings', 'teacher/data-tools', 'teacher/copilot', 'teacher/student-migration',
    ]},
    {type: 'category', label: 'Schools', items: [
      'schools/overview', 'schools/create-school', 'schools/campuses-and-rooms', 'schools/staff', 'schools/students',
      'schools/schedule-and-resources', 'schools/accounting', 'schools/communications', 'schools/certificates', 'schools/reports',
      'schools/roles-and-access', 'schools/audit-log', 'schools/data-tools', 'schools/security', 'schools/console',
    ]},
    {type: 'category', label: 'Student', items: [
      'student/app', 'student/dashboard', 'student/schedule', 'student/homework', 'student/tutorial-homework', 'student/decks', 'student/progress', 'student/ai-assistant', 'student/grades', 'student/skills',
      'student/payments', 'student/certificates', 'student/achievements', 'student/feed', 'student/profile', 'student/settings', 'student/tutorial-workspaces', 'student/workspaces',
    ]},
    {type: 'category', label: 'Decks', items: ['decks/overview', 'decks/tutorials', 'decks/library', 'decks/build-and-study', 'decks/study-modes', 'decks/progress', 'decks/teacher-guide', 'decks/student-guide', 'decks/shared-decks', 'decks/settings']},
    {type: 'category', label: 'Assess', items: ['assess/overview', 'assess/tutorials', 'assess/builder', 'assess/question-types', 'assess/quiz-controls', 'assess/vision-monitoring', 'assess/pdf-exports', 'assess/responses', 'assess/autocheck', 'assess/student-guide', 'assess/academic-integrity', 'assess/release-notes', 'assess/autocheck-release-notes']},
    {type: 'category', label: 'Wordly', items: ['wordly/overview', 'wordly/tutorials', 'wordly/home', 'wordly/editor-and-library', 'wordly/vocabulary-browser', 'wordly/exercises', 'wordly/practice-and-export', 'wordly/settings']},
    {type: 'category', label: 'Self-hosting', items: ['hosting/overview', 'hosting/backend', 'hosting/domains', 'hosting/releases']},
  ],
};
