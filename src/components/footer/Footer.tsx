const Footer = () => {
  return (
    <footer className="border-t-1 border-t-gray-200 py-6 text-center text-sm font-semibold">
      © {new Date().getFullYear()} EV Charging Simulator.
    </footer>
  );
};

export default Footer;
