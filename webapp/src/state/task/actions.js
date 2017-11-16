import { createAction } from 'redux-actions';

export const markAsDone = createAction('TASK_MARK_AS_DONE', taskId => taskId);
export const markAsUndone = createAction('TASK_MARK_AS_UNDONE', taskId => taskId);