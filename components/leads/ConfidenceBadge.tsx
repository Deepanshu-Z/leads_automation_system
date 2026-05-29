export default function ConfidenceBadge({ intent, confidence }: any) {
  return (
    <div
      className="
        text-xs
        mt-2
      "
    >
      {intent}
      {" • "}
      {(confidence * 100).toFixed(0)}%
    </div>
  );
}
