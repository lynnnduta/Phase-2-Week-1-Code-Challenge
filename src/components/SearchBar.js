import React from 'react';

function SearchBar({ transactions, setTransactions }) {
  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredTransactions = transactions.filter(
      (transaction) =>
        transaction.description.toLowerCase().includes(searchTerm) ||
        transaction.category.toLowerCase().includes(searchTerm)
    );
    setTransactions(filteredTransactions);
  };

  return (
    <input
      type="text"
      placeholder="Search transactions..."
      onChange={handleSearch}
    />
  );
}

export default SearchBar;