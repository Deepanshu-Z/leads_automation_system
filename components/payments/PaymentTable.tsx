import PaymentRow from "./PaymentRow";

export default function PaymentTable({ payments = [] }: any) {
  return (
    <div
      className="
        bg-card
        rounded-xl
        border
        border-border
        shadow-sm
        overflow-hidden
        w-full
      "
    >
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead
            className="
              border-b
              border-border
              bg-muted/40
              text-[11px]
              font-bold
              text-muted-foreground
              uppercase
              tracking-wider
            "
          >
            <tr>
              <th className="px-6 py-4">Lead Name</th>
              <th className="px-6 py-4">Amount</th>
              <th className="px-6 py-4">Platform</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Sent At</th>
              <th className="px-6 py-4">Paid At</th>
              <th className="px-6 py-4">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-border text-sm">
            {payments.length === 0 ? (
              <tr>
                <td colSpan={7} className="px-6 py-10 text-center text-muted-foreground">
                  No payment records found.
                </td>
              </tr>
            ) : (
              payments.map((payment: any) => (
                <PaymentRow key={payment.id} payment={payment} />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
