const cards = [
  {
    id: 1,
    title: "Intellectual Property",
    text: "Learn More",
    buttonText:
      "Intellectual Property law deals with laws to protect creators and owners of inventions, writing, music, designs and other works.",
  },
  {
    id: 2,
    title:
      "Real estate law is a branch of civil law that covers the right to possess, use, and enjoy land.",
    text: "Learn More",
    buttonText: "Real Estate",
  },
  {
    id: 3,
    title: "Tax Law",
    text: "Learn More",
    buttonText:
      "Tax law cover income, corporate, excise, luxury, estate and property taxes, to name a few.",
  },
];
export const Areas = () => {
  return (
    <section>
      <div>Areas of Practice</div>
      <div>
        Our disciplined approach to resolving your legal issues will produce the
        best-possible outcome.
      </div>

      <div>
        {cards.map((card) => (
          <div key={card.id}>
            <div>{card.title}</div>
            <div>{card.text}</div>
            <div>{card.buttonText}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
