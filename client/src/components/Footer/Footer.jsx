import { FooterLinks } from "../../utils/helper";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary py-10 text-white">
      <section className="section-center flex flex-col justify-around md:flex-row">
        {FooterLinks.map(({ id, title, links }) => {
          return (
            <div key={id} className="flex flex-col">
              <h2 className="text-lg mb-3">{title}</h2>
              {links.map(({ id, name, href }) => {
                return (
                  <Link to={href} key={id} className="mb-1 font-light text-sm">
                    {name}
                  </Link>
                );
              })}
            </div>
          );
        })}
      </section>
    </footer>
  );
};

export default Footer;
