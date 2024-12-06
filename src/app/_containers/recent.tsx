import { Container } from "../_components/container";
import Area1 from "../../../public/images/areas/area_1.jpg";
import Area2 from "../../../public/images/areas/area_2.jpg";
import Area3 from "../../../public/images/areas/area_3.jpg";
import Image from "next/image";
import { ArrowButton } from "../_components/arrowButton";

const cards = [
  {
    id: 1,
    img: Area1,
    alt: "hall",
    subtitle: "December 13, 2020",
    text: "12 Things About Web Design Your Boss Wants To Know",
  },
  {
    id: 2,
    img: Area2,
    alt: "street",
    subtitle: "December 10, 2020",
    text: "The History Of Web Design",
  },
  {
    id: 3,
    img: Area3,
    alt: "office",
    subtitle: "December 10, 2020",
    text: "How to improve Web Design Process",
  },
];

export const Recent = () => {
  return (
    <section className="py-36">
      <Container className="text-blue-dark">
        <h2 className="mb-16 font-dm-serif text-[2.75rem] leading-tight">
          Recent Articles
        </h2>

        <div className="grid grid-cols-3 gap-x-10">
          {cards.map((card) => (
            <div
              key={card.id}
              className="row-[auto_/_span_4] grid grid-rows-subgrid shadow-custom"
            >
              <Image src={card.img} alt={card.alt} className="mb-10" />
              <div className="mb-4 pl-8 leading-tight">{card.subtitle}</div>
              <div className="max-w-[25ch] mb-8 pl-8 text-xl leading-normal">
                {card.text}
              </div>
              <ArrowButton className="pl-8 text-xl mb-8">Learn More</ArrowButton>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
