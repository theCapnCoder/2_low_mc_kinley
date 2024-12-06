import { Container } from "../_components/container";
import { Facebook, Linkedin, Twitter, Logo } from "@/assets/svg";
import Link from "next/link";

const links = [
  {
    url: "#",
    svg: <Facebook />,
    text: "Facebook",
  },
  {
    url: "#",
    svg: <Linkedin />,
    text: "Linkedin",
  },
  {
    url: "#",
    svg: <Twitter />,
    text: "Twitter",
  },
];

export const Footer = () => {
  return (
    <footer>
      <div className="bg-blue-dark">
        <Container className="py-32">
          <div className="glex mb-14 flex gap-[17%]">
            <div>
              <Logo className="mb-10 fill-white" />

              <div className="text-lg leading-loose text-blue-muted">
                <p>2972 Westheimer Road</p>
                <p>Denver, CO 80021</p>
                <p>(720) 555-0123</p>
                <p>info.denver@mckinley.com</p>
              </div>
            </div>

            <div>
              <h3 className="mb-8 mt-[-0.5rem] max-w-[25ch] font-dm-serif text-[1.72rem] leading-tight text-white">
                Get legal news, advice, and best practices delivered to your
                inbox.
              </h3>
              <input
                type="text"
                placeholder="Email Address"
                className="w-full bg-blue-muted p-4 placeholder:text-blue-dark"
              />
            </div>
          </div>

          <div>
            <ul className="flex flex-col gap-4">
              {links.map((link, index) => (
                <li key={index} className="flex gap-2">
                  <Link href={link.url}>{link.svg}</Link>
                  <p className="text-lg leading-relaxed text-blue-muted">
                    {link.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </div>

      <div className="flex justify-between pl-6 pr-10 py-6 bg-blue-deep text-sm text-blue-muted ">
        <p>© 2020 McKinley Legal Template • Powered by Webflow </p>
        <div className="flex gap-4">
          <p>Style Guide</p>
          <p>Licensing</p>
        </div>
      </div>
    </footer>
  );
};
