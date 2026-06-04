import PaymentRow from "./PaymentRow";

export default function PaymentTable({ payments = [] }: any) {
  return (
    <table
      className="
        w-full
        bg-white
        border
        rounded-xl
      "
    >
      <thead>
        <tr>
          <th>Lead</th>
          <th>Amount</th>
          <th>Platform</th>
          <th>Status</th>
          <th>Sent At</th>
          <th>Paid At</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {payments.map((payment: any) => (
          <PaymentRow key={payment.id} payment={payment} />
        ))}
      </tbody>
    </table>
  );
}
