const links = ["LinkedIn", "Facebook", "Twitter"];

export const Footer = () => {
  return (
    <footer>
      <div>
        <div>Denver, CO 80021</div>
        <div>info.denver@mckinley.com</div>
        <div>2972 Westheimer Road</div>
        <div>(720) 555-0123</div>
      </div>

      <div>
        <div>
          Get legal news, advice, and best practices delivered to your inbox.
        </div>
        <div>Email Address</div>
      </div>

      <div>
        <ul>
          {links.map((link) => (
            <li key={link}>{link}</li>
          ))}
        </ul>
      </div>

      <div>
        <div>Powered by Webflow</div>
        <div>Licensing</div>
        <div>Style Guide</div>
        <div>© 2020 McKinley Legal Template •</div>
      </div>
    </footer>
  );
};
