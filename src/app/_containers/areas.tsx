import { Container } from "../_components/container";
import { Www, House, Book } from "../../assets/svg";
import { ArrowButton } from "../_components/arrowButton";

const cards = [
  {
    id: 1,
    img: <Www />,
    title: "Intellectual Property",
    text: "Intellectual Property law deals with laws to protect creators and owners of inventions, writing, music, designs and other works.",
  },
  {
    id: 2,
    img: <House />,
    title: "Real Estate",
    text: "Real estate law is a branch of civil law that covers the right to possess, use, and enjoy land.",
  },
  {
    id: 3,
    img: <Book />,
    title: "Tax Law",
    text: "Tax law cover income, corporate, excise, luxury, estate and property taxes, to name a few.",
  },
];

export const Areas = () => {
  return (
    <section className="py-40">
      <Container>
        <div className="title-secondary mb-6 tracking-tight">
          Areas of Practice
        </div>
        <div className="text-body mb-20 max-w-[37ch]">
          Our disciplined approach to resolving your legal issues will produce
          the best-possible outcome.
        </div>

        <div className="grid grid-cols-3 gap-x-10">
          {cards.map((card) => (
            <div
              key={card.id}
              className="row-[auto_/_span_4] grid grid-rows-subgrid rounded pl-8 pt-4 text-blue-dark shadow-custom"
            >
              <div className="mb-11 self-end">{card.img}</div>
              <h4 className="mb-3 text-xl tracking-wider">{card.title}</h4>
              <p className="mb-8 max-w-[25ch] text-lg leading-loose tracking-wider">
                {card.text}
              </p>
              <ArrowButton className="mb-8 text-xl">Learn More</ArrowButton>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
