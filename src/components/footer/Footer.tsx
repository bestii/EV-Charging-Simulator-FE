const Footer = () => {
  return (
    <footer className="container mx-auto text-sm font-semibold">
      <div className="flex justify-between border-t border-gray-950/5 py-6">
        <span>© {new Date().getFullYear()} EV Charging Simulator.</span>
        <span>
          <span className="me-1 text-gray-500">
            {'Created / Code / Design by'}
          </span>
          <a
            href="https://github.com/bestii"
            className="underline"
            target="_blank"
          >
            Bestin John
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
