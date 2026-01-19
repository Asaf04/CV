import TagList from './components/TagList';
import TextSection from './components/TextSection';
import TimelineSection from './components/TimeLineSection';
import portfolioData from './data/portfolio.json';
import Hero from './components/Hero';
import CardContainer from './components/CardContainer';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-purple-50">
      <div className="pt-8 pb-4">
        <Hero
          name={portfolioData.personal.name}
          title={portfolioData.personal.title}
          location={portfolioData.personal.location}
          image={portfolioData.personal.image}
          languages={portfolioData.personal.languages}
          resumeUrl={portfolioData.personal.resumeUrl}
        />
      </div>

      <main className="max-w-4xl mx-auto pb-12 px-4">
        <CardContainer>
          <TextSection title="About" content={portfolioData.about} />
          <TagList title="Skills" items={portfolioData.skills} />
          <TimelineSection
            title="Experience"
            items={portfolioData.experience}
          />
          <Contact {...portfolioData.contact} />
        </CardContainer>
      </main>
    </div>
  );
}

export default App;
