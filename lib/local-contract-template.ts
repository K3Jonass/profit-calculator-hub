import type { RevenueShareFormValues } from "@/lib/contract-types";

export function generateLocalRevenueShareContract(
  values: RevenueShareFormValues
) {
  return `REVENUE SHARE AGREEMENT

This Revenue Share Agreement ("Agreement") is entered into by and between ${values.partyAName} ("Party A") and ${values.partyBName} ("Party B").

1. PARTIES
Party A: ${values.partyAName}
Party B: ${values.partyBName}

2. PURPOSE / SCOPE
This Agreement governs a revenue share arrangement relating to the following service or product:
${values.serviceDescription}

3. REVENUE SHARE TERMS
Party B shall be entitled to receive ${values.revenueSharePercentage}% of the revenue generated from the applicable service, product, offer, or business activity covered by this Agreement, unless otherwise agreed in writing by both parties.

4. PAYMENT TERMS
Payments shall be calculated and paid on a ${values.paymentFrequency} basis in ${values.currency}.
Each payment should be accompanied by a reasonable summary of the revenue calculation for the relevant period.

5. DURATION
This Agreement shall begin on the effective date signed by both parties and shall continue until terminated in accordance with this Agreement.

6. TERMINATION
Either party may terminate this Agreement by providing written notice to the other party within a reasonable notice period.
Any unpaid revenue share amounts earned before the termination date shall remain payable.

7. LIABILITY AND LIMITATION OF RESPONSIBILITY
Each party remains responsible for its own business operations, decisions, and compliance obligations.
Neither party shall be liable for indirect, incidental, or consequential losses except where required by applicable law.

8. GOVERNING LAW
This Agreement shall be governed by the laws of ${values.country}.

9. GENERAL PROVISIONS
Any amendments to this Agreement should be made in writing and agreed to by both parties.
If any provision is found unenforceable, the remaining provisions shall remain in effect.

10. SIGNATURE BLOCKS

Party A: ${values.partyAName}
Signature: ______________________
Date: __________________________

Party B: ${values.partyBName}
Signature: ______________________
Date: __________________________

This document is a template and not legal advice.`;
}