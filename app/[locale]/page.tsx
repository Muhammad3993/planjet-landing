
import Create from "@/components/Create";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Integration from "@/components/Integration";
import Manage from "@/components/Manage";
import Navbar from "@/components/Navbar";
import OpenSource from "@/components/OpenSource";
import SelfHosted from "@/components/SelfHosted";



export default function Home() {
  return (
    <main className='relative'>
      <Navbar />
      <div className="img max-md:hidden"></div>
      <div className="img1 max-md:hidden"></div>
      <div className="img2 max-md:hidden"></div>
      <Hero />
      <div className="img3 max-md:hidden"></div>
      <div className="img4 max-md:hidden"></div>
      <div className="img5 max-md:hidden"></div>
      <Integration />
      <Create />
      <OpenSource />
      <SelfHosted />
      <Manage />
      <Footer />
    </main>
  );
}
