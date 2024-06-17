import Navigation from "./components/NavigationPanel/NavigationPanel.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Raiding from "./components/Raiding.jsx";
import CardRaidDay from "./components/Card-raid-day.jsx";
import Recruitment from "./components/Recruitment.jsx";
import Platforms from "./components/Platforms.jsx";
import CardPlatforms from "./components/Card-platforms.jsx";
import Streamers from "./components/Streamers.jsx";
import YoutubeVideos from "./components/Youtube-videos.jsx";
import Contact from "./components/Contact.jsx";
import Card from "./components/Card-contacts.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Navigation></Navigation>
      <Hero></Hero>
      <About></About>
      <section className="raiding">
        <Raiding></Raiding>
        <CardRaidDay></CardRaidDay>
      </section>
      <Recruitment></Recruitment>
      <section className="platforms">
        <Platforms></Platforms>
        <CardPlatforms></CardPlatforms>
      </section>
      <Streamers></Streamers>
      <YoutubeVideos></YoutubeVideos>
      <Contact></Contact>
      <section className="contact-cards">
        <Card></Card>
      </section>
      <Footer></Footer>
    </>
  );
}

export default App;
