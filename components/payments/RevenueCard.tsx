export default function RevenueCard({ revenue }: any) {
  return (
    <div
      className="
        bg-green-50
        border
        rounded-xl
        p-6
        mb-6
      "
    >
      <h2
        className="
          text-lg
          font-semibold
        "
      >
        Total Revenue
      </h2>

      <p
        className="
          text-3xl
          font-bold
          mt-2
        "
      >
        ₹{revenue}
      </p>
    </div>
  );
}
