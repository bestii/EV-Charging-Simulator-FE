const Footer = () => {
  return (
    <footer className="container mx-auto text-center text-sm font-semibold">
      <div className="border-t border-gray-950/5 py-6">
        © {new Date().getFullYear()} EV Charging Simulator.
      </div>
    </footer>
  );
};

export default Footer;
