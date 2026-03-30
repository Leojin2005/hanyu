export default function StreakFire({ streak }) {
  return (
    <div className="flex items-center gap-1 text-accent font-bold">
      <span className="text-xl">🔥</span>
      <span>{streak}</span>
    </div>
  );
}