const Footer = () => {
  return (
    <footer className="container mx-auto text-sm font-semibold">
      <div className="flex flex-col items-center gap-2 border-t border-black/10 px-4 py-6 sm:flex-row sm:justify-between">
        <span className="text-center">
          © {new Date().getFullYear()} EV Charging Simulator.
        </span>
        <span className="text-center">
          <span className="me-1 text-gray-500">
            Created / Coded / Designed by
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
