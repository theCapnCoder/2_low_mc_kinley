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
      <div>
        We have moved into our brand new downtown office at the corner of
        Broadway and Bellview
      </div>

      <div>
        <div>Logo</div>

        <nav>
          <ul>
            {links.map((link) => (
              <li key={link.url}>
                <a href={link.url}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <div>Request Consultation</div>
          <div>(123) 456-7890</div>
        </div>
      </div>
    </header>
  );
};
