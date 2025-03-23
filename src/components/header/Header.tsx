import { default as logoSrc } from '../../assets/logo.png';

const Header = () => {
  return (
    <header className="sticky top-0 border-b border-gray-950/5 bg-white px-4 py-4">
      <div className="container mx-auto">
        <img className="w-[85px]" src={logoSrc} alt="company logo" />
      </div>
    </header>
  );
};

export default Header;
