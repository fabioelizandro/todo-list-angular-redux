import { createAction } from 'redux-actions';

export const markAsDone = createAction('TASK_MARK_AS_DONE', taskId => taskId);