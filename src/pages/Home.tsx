import Landing from "@/components/front-page/Landing";
import Demo from "@/components/front-page/demo";
import Features from "@/components/front-page/features";
import Footer from "@/components/front-page/footer";
import NavBar from "@/components/front-page/nav-bar";
import Price from "@/components/front-page/price";
import Reviews from "@/components/front-page/reviews";
import Team from "@/components/front-page/team";
import LoginModal from "@/components/modals/loginModal";
import RegisterModal from "@/components/modals/registerModal";

const Home = () => {
  return (
    <div>
      <RegisterModal />
      <LoginModal />
      <NavBar />
      <Landing />
      <Features />
      <Demo />
      <Reviews />
      <Price />
      <Team />
      <Footer />
    </div>
  );
};

export default Home;
