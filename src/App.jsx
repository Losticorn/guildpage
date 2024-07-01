import Navigation from "./components/NavigationPanel/NavigationPanel.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Raiding from "./components/Raiding.jsx";
import Recruitment from "./components/Recruitment.jsx";
import Platforms from "./components/Platforms.jsx";
import Streamers from "./components/Streamers.jsx";
import YoutubeVideos from "./components/Youtube-videos.jsx";
import Contact from "./components/Contact.jsx";
import Card from "./components/Card-contacts.jsx";
import Footer from "./components/Footer.jsx";
import BackToTopButton from "./components/Back-to-top-button.jsx";

function App() {
  return (
    <>
      <Navigation></Navigation>
      <Hero></Hero>
      <About></About>
      <section className="raiding">
        <Raiding></Raiding>
      </section>
      <Recruitment></Recruitment>
      <Platforms></Platforms>
      <Streamers></Streamers>
      <YoutubeVideos></YoutubeVideos>
      <Contact></Contact>
      <section className="contact-cards">
        <Card></Card>
      </section>
      <BackToTopButton></BackToTopButton>
      <Footer></Footer>
    </>
  );
}

export default App;
