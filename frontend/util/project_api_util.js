import $ from '@rtorr/ajax-only';

export const scrapeQuote = () => {
  return $.ajax({
    method: 'GET',
    url: '/quotes/1'
  });
};
