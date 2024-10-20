export default function ZodErrors({ error }) {
  if (!error) return null;
  return (
    <div className="text-red-500 text-xs mt-1 py-1">
      {error[0]}
    </div>
  );
}
