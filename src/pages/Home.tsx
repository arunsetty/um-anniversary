import FloatingHearts from '@/components/Home/FloatingHearts';
import Sparkles from '@/components/Home/Sparkles';
import Hero from '@/components/Home/Hero';
import LoveStory from '@/components/Home/LoveStory';
import Gallery from '@/components/Home/Gallery';
import LoveLetter from '@/components/Home/LoveLetter';
import Wishes from '@/components/Home/Wishes';
import Footer from '@/components/Home/Footer';

const Home = () => {
  return (
    <div className="relative">
      {/* Background Particles */}
      <FloatingHearts />
      <Sparkles />

      {/* Main Content */}
      <main>
        <Hero />
        <LoveStory />
        <Gallery />
        <LoveLetter />
        <Wishes />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
