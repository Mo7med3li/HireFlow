import Hero from "./components/hero-section";
import { CandidateDirectory } from "./components/candidate-directory";

function App() {
  return (
    <section className="flex flex-col w-full">
      <Hero />
      <div id="candidates" className="container mx-auto px-4 md:px-8 py-12">
        <CandidateDirectory />
      </div>
    </section>
  );
}

export default App;
