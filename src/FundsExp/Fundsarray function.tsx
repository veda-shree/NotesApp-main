import React from "react";

export const FUND_STATUSES = [
  { actual: "Available", display: "Available" },
  { actual: "Withdrawn", display: "Withdrawn" },
  { actual: "Pending_Deposit", display: "Pending Deposit" },
  { actual: "Pending_Withdrawn", display: "Pending Withdrawn" },
  { actual: "Pending_Return", display: "Pending Return" },
  { actual: "Return", display: "Return" },
  { actual: "Frozen", display: "Frozen" },
  { actual: "Void", display: "Void" },
];
export function getFundStatusNames(selectedStasusesNew: string[]): string[] {
  let fundStatusNames: string[] = [""];
  // eslint-disable-next-line array-callback-return
  selectedStasusesNew.map((display) => {
    const fundStatusMatch = FUND_STATUSES.find(
      (fundStatus) => fundStatus.display === display
    );
    console.log(fundStatusMatch);
    fundStatusNames.push(fundStatusMatch.actual);
  });

  console.log(fundStatusNames.splice(0, 1));
  console.log(fundStatusNames);
  return fundStatusNames;
}
getFundStatusNames(["Available", "Pending Withdrawn"]);
