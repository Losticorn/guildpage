import Navigation from "./components/NavigationPanel/NavigationPanel.jsx";
import Hero from "./Hero.jsx";
import About from "./About.jsx";
import Raiding from "./Raiding.jsx";
import CardRaidDay from "./Card-raid-day.jsx";
import Recruitment from "./Recruitment.jsx";
import Platforms from "./Platforms.jsx";
import CardPlatforms from "./Card-platforms.jsx";
import Streamers from "./Streamers.jsx";
import YoutubeVideos from "./Youtube-videos.jsx";
import Services from "./Services.jsx";
import Contact from "./Contact.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";

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
      <Services></Services>
      <Contact></Contact>
      <section className="contact-cards">
        <Card></Card>
      </section>
      <Footer></Footer>
    </>
  );
}

export default App;
