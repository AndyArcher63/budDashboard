const Mock = {
  debitOnly: [
    {
      id: '13acb877dc4d8030c5dacbde33d3496a2ae3asdc000db4c793bda9c3228baca1a28',
      date: '2018-06-30',
      description: 'Tesco',
      category_title: 'Groceries',
      amount: {
        value: -57.21,
        currency_iso: 'GBP',
      },
    },
    {
      id: 'dbad80ded0d2d3419749a8dd391a61bc1b5970bdfffc27f254568ec86e5c0fa06bcc',
      date: '2018-06-22',
      description: 'Max Mustermann',
      category_title: 'Income',
      amount: {
        value: -510.55,
        currency_iso: 'GBP',
      },
    },
  ],
  mixed: [
    {
      id: '13acb877dc4d8030c5dacbde33d3496a2ae3asdc000db4c793bda9c3228baca1a28',
      date: '2018-06-30',
      description: 'Tesco',
      category_title: 'Groceries',
      amount: {
        value: -57.21,
        currency_iso: 'GBP',
      },
    },
    {
      id: 'dbad80ded0d2d3419749a8dd391a61bc1b5970bdfffc27f254568ec86e5c0fa06bcc',
      date: '2018-06-22',
      description: 'Max Mustermann',
      category_title: 'Income',
      amount: {
        value: 510.55,
        currency_iso: 'GBP',
      },
    },
  ],
  creditOnly: [
    {
      id: '13acb877dc4d8030c5dacbde33d3496a2ae3asdc000db4c793bda9c3228baca1a28',
      date: '2018-06-30',
      description: 'Tesco',
      category_title: 'Groceries',
      amount: {
        value: 57.21,
        currency_iso: 'GBP',
      },
    },
    {
      id: 'dbad80ded0d2d3419749a8dd391a61bc1b5970bdfffc27f254568ec86e5c0fa06bcc',
      date: '2018-06-22',
      description: 'Max Mustermann',
      category_title: 'Income',
      amount: {
        value: 510.55,
        currency_iso: 'GBP',
      },
    },
  ],
  randomSortOrder: [
    {
      amount: {
        value: 2,
      },
    },
    {
      amount: {
        value: 1,
      },
    },
    {
      amount: {
        value: 3,
      },
    },
  ],
  sortedOrder: [
    {
      amount: {
        value: 3,
      },
    },
    {
      amount: {
        value: 2,
      },
    },
    {
      amount: {
        value: 1,
      },
    },
  ],
  unorderDates: [
    {
      date: '2018-06-22',
    },
    {
      date: '2018-05-22',
    },
    {
      date: '2018-06-30',
    },
  ],
  orderedDates: [
    {
      date: '2018-06-30',
    },
    {
      date: '2018-06-22',
    },
    {
      date: '2018-05-22',
    },
  ],
};

export default Mock;
