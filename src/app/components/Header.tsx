import Link from 'next/link';

const Header = () => {
  return (
    <header className="p-4 bg-gray-800 text-white">
      <nav>
        <ul className="flex space-x-4">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/service">Services</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/faqs">FAQ</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
