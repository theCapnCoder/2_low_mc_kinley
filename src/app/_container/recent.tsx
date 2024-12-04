const cards = [
  {
    subtitle: "December 13, 2020",
    text: "12 Things About Web Design Your Boss Wants To Know",
  },
  { subtitle: "December 10, 2020", text: "How to improve Web Design Process" },
  { subtitle: "December 10, 2020", text: "The History Of Web Design" },
];
export const Recent = () => {
  return (
    <section>
      <div>Recent Articles</div>

      <div>
        {cards.map((card) => (
          <div key={card.subtitle}>
            <div>{card.subtitle}</div>
            <div>{card.text}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
