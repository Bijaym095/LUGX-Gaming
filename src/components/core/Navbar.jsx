import { NavLink } from "react-router-dom";

const Navbar = () => {

    const navLinks = [
      {
        name: "Home",
        href: "/",
      },
      {
        name: "Components",
        href: "/components",
      },
      {
        name: "Our Shop",
        href: "/",
      },
      {
        name: "Product Details",
        href: "/",
      },
      {
        name: "Contact Us",
        href: "/",
      },
    ];

  return (
    <nav className="site-header">
      <div className="container">
          <div className="flex justify-between items-center gap-4">
            <NavLink to="/" className="navbar-brand">LUGX</NavLink>
            
            <div>
              <div className="navbar-collapse">
                <ul className="navbar-nav">
                  {navLinks.map((link, index) => (
                    <li key={index}>
                      <NavLink to={link.href}>{link.name}</NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;