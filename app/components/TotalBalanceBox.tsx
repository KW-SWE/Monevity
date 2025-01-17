import React from 'react';

const TotalBalanceBox = ({
  accounts = [], // default is empty array if not provided
  totalBanks,
  totalCurrentBalance,
}: TotalBalanceBoxProps) => {
  return (
    <section className="total-balance">
      <div className="total-balance-chart">{/* Doughnut chart */}</div>
      <div className="flex flex-col gap-6">
        <h2 className="header-2">Bank Accounts: {totalBanks} </h2>
      </div>
    </section>
  );
};

export default TotalBalanceBox;
