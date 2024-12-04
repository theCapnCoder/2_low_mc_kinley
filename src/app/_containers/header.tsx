import Image from "next/image";
import Logo from "../../../public/images/logo.jpg";
import Link from "next/link";
import { Button } from "../_components/button";
import { Container } from "../_components/container";

const links = [
  {
    url: "#",
    label: "Services",
  },
  {
    url: "#",
    label: "About",
  },
  {
    url: "#",
    label: "Articles",
  },
  {
    url: "#",
    label: "Contact",
  },
];

export const Header = () => {
  return (
    <header>
      <div className="bg-blue-dark p-3">
        <p className="text-center text-lg text-blue-muted">
          We have moved into our brand new downtown office at the corner of
          Broadway and Bellview
        </p>
      </div>

      <Container>
        <div className="flex items-center justify-between py-7">
          <div className="flex items-center gap-10">
            <Image src={Logo} alt="Logo" />

            <nav>
              <ul className="flex gap-10">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link
                      key={index}
                      href={link.url}
                      className="text-lg text-blue-dark hover:text-blue-muted"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-12">
            <p className="text-blue-dark">(123) 456-7890</p>
            <Button blue>Request Consultation</Button>
          </div>
        </div>
      </Container>
    </header>
  );
};
