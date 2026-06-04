import PaymentStatusBadge from "./PaymentStatusBadge";
import ResendButton from "./ResendButton";

export default function PaymentRow({ payment }: any) {
  return (
    <tr
      className="
        border-b
      "
    >
      <td>{payment.lead?.name}</td>

      <td>₹{payment.amount}</td>

      <td>{payment.lead?.platform}</td>

      <td>
        <PaymentStatusBadge status={payment.status} />
      </td>

      <td>{new Date(payment.createdAt).toLocaleString()}</td>

      <td>
        {payment.paidAt ? new Date(payment.paidAt).toLocaleString() : "-"}
      </td>

      <td>
        {payment.status === "FAILED" && <ResendButton paymentId={payment.id} />}
      </td>
    </tr>
  );
}
