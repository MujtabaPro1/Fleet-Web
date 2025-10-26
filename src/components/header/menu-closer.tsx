import React, {useState} from 'react'

export default function MenuCloser() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleClick = () => {
    if (mobileMenu) {
      setMobileMenu(false);
      document.body.classList.remove('menu-open');
      document.body.classList.remove('show-submenu');
    } else {
      setMobileMenu(true);
      document.body.classList.add('menu-open');
    }
  }

  return (
    <button type="button" onClick={handleClick} className="inline-flex items-center justify-center focus:outline-none close-menu">
      <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
      <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  )
}
