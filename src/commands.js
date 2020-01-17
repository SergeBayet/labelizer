const terminalConfig = {
  'commands':
    [
      {
        'name': 'ngrams',
        'method': 'ngrams',
        'args':
          [{
            'name': 'n',
            'info': 'number of contiguous items',
            'type': 'int',
            'filter': [1, 15],
            'default': 3
          }],
        'opts':
          [{
            'name': 'selection',
            'abbr': 's',
            'info': "Retrieve ngrams only in the selection"
          },
          {
            'name': 'recursive',
            'abbr': 'r',
            'info': "Find all the n-grams from n to 1 recursively"
          },
          {
            'name': 'insensitive',
            'abbr': 'i',
            'info': "Case insensitive"
          },
          {
            'name': 'stemming',
            'abbr': 't',
            'info': "Group ngrams by stemming tokens"
          },
          {
            'name': 'rsort',
            'abbr': 'r',
            'info': "Reverse sorting"
          },
          {
            'name': 'asort',
            'abbr': 'a',
            'info': "Ascendant sorting"
          }],
        'info': "Retrieving ngrams...",
        'help': `In the fields of computational linguistics and probability, an n-gram is a contiguous sequence of n items from a given sample of text or speech. The items can be phonemes, syllables, letters, words or base pairs according to the application. The n-grams typically are collected from a text or speech corpus. When the items are words, n-grams may also be called shingles`
      },
      {
        'name': 'loadwiki',
        'method': 'loadHtml',
        'args':
          [
            {
              'name': 'wikipage',
              'info': 'name of Wikipedia page (case sensitive)',
              'type': 'string',
              'filter': new RegExp("^.*$"),
              'transform': str => str.replace(' ', '_')
            }
          ],
        'info': "Retrieving wikipedia page '$1'..."
      }
    ]
};

export default terminalConfig;