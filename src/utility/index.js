const filterCredit = transactions => transactions.filter(
  transaction => Math.sign(transaction.amount.value) !== 1,
);

const orderByValue = transactions => (
  transactions.sort((a, b) => (
    (a.amount.value < b.amount.value) ? 1 : -1))
);

const limitArray = (transactions, limit) => transactions.slice(0, limit);

const orderByLatestDate = transactions => (
  transactions.sort((a, b) => (
    (a.date < b.date) ? 1 : -1))
);

const getList = (transactions) => {
  const filteredTransactions = filterCredit(transactions);
  const orderedTransactions = orderByValue(filteredTransactions);
  const limitTransactions = limitArray(orderedTransactions, 10);
  const orderTransactionsByDate = orderByLatestDate(limitTransactions);
  return orderTransactionsByDate;
};

export {
  filterCredit,
  orderByValue,
  limitArray,
  orderByLatestDate,
  getList,
};
