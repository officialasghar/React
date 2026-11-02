import { useState } from 'react'

const links = ['Home', 'Class', 'Promo', 'Online Class', 'Contact']

const MountainLogo = () => (
  <svg viewBox="0 0 54 38" className="h-9 w-12" aria-hidden="true">
    <circle cx="25" cy="8" r="4.5" fill="#12b8d9" />
    <path d="M2 34h50L39 19l-6 7L22 5l-9 17-4-5z" fill="#12b8d9" />
    <path d="M11 34h33" stroke="#232d3b" strokeWidth="2" />
  </svg>
)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="absolute left-[6.5%] right-[6%] top-[calc(2.5%-8px)] z-50 flex h-20 items-center px-0" aria-label="Main navigation">
      <a href="#" className="flex items-center gap-3 text-[#12b8d9]" aria-label="Hiking Life home">
        <MountainLogo />
        <span className="text-lg font-medium md:text-xl">
          Hiking <strong className="font-bold">Life</strong>
        </span>
      </a>

      <button
        type="button"
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
      >
        <span className={`h-0.5 w-6 bg-white transition ${isOpen ? 'translate-y-2 rotate-45' : ''}`} />
        <span className={`h-0.5 w-6 bg-white transition ${isOpen ? 'opacity-0' : ''}`} />
        <span className={`h-0.5 w-6 bg-white transition ${isOpen ? '-translate-y-2 -rotate-45' : ''}`} />
      </button>

      <div className={`${isOpen ? 'flex' : 'hidden'} absolute left-[-7%] right-[-7%] top-20 flex-col bg-[#232d3b] px-6 py-5 md:static md:ml-24 md:flex md:flex-row md:items-center md:gap-14 lg:gap-24 md:bg-transparent md:p-0`}>
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase().replaceAll(' ', '-')}`}
            className="py-3 font-sans text-sm font-semibold text-white transition-colors hover:text-[#6dffa0] md:py-0"
          >
            {link}
          </a>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
