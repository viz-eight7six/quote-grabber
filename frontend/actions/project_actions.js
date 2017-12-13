import * as APIUtil from '../util/project_api_util';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const RECEIVE_QUOTE = 'RECEIVE_QUOTE';

export const getQuote = () => dispatch => (
  APIUtil.scrapeQuote()
    .then((quote) => (dispatch(receiveQuote(quote))))
    .fail((errors) => (dispatch(receiveErrors(errors.responseJSON))))
);

export const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
});

export const receiveQuote = quote => ({
  type: RECEIVE_QUOTE,
  quote
});
