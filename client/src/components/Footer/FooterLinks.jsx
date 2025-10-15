const FooterLinks = ({ links }) => {
  return (
    <>
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.href} className="hover:underline">
            {link.name}
          </a>
        </li>
      ))}
    </>
  );
};

export default FooterLinks;
