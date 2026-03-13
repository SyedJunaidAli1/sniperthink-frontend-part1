import ProgressIndicator from "./components/strategy/progress-indicator";
import StrategyFlow from "./components/strategy/strtegy-flow";

export default function Home() {
  console.log(process.env.NEXT_PUBLIC_API)
  return (
    <main>
      <ProgressIndicator />
      <StrategyFlow />
    </main>
  );
}
