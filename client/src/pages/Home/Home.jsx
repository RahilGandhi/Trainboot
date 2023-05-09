import { BiMenu } from "react-icons/bi";
import { useGlobalAppContext } from "../../context/AppContext";
import { Header, FeatureCard, TrainingCards, Contact } from "../../components";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";

const Home = () => {
  const { toggleSidebar } = useGlobalAppContext();
  const navigate = useNavigate();
  const { user } = useAuth0();

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user]);

  return (
    <main className="bg-primary">
      <section className="section-center">
        <div className="md:hidden py-2">
          <button className="my-4 text-white text-4xl" onClick={toggleSidebar}>
            <BiMenu />
          </button>
        </div>

        <Header />
        <FeatureCard />
        <TrainingCards />
        <Contact />
      </section>
    </main>
  );
};

export default Home;
