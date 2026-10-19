export default function Navbar({ cartCount = 0 }) {
  return (
    <header className="bg-[#FFFFFF] text-[#121417] border-b border-[#DDE1E7] px-4 py-3">
      <div className="max-w-[1120px] mx-auto grid grid-cols-[1fr_auto_1fr] items-center">
        <div className="justify-self-start">
          <button className="p-1 hover:bg-gray-100 rounded-md cursor-pointer" aria-label="Menu">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>

        <h1 className="justify-self-center whitespace-nowrap text-2xl sm:text-[26px] font-body font-black italic tracking-tight cursor-pointer">
          <span style={{ color: '#0c4668' }}>Internet</span>
          <span style={{ color: '#EAA222' }}> finds</span>
        </h1>

        <div className="justify-self-end flex items-center gap-2 sm:gap-4">
          <button
            type="button"
            className="hidden sm:inline-flex rounded-md border border-black px-3 py-1.5 text-xs sm:text-sm font-semibold hover:bg-gray-100 cursor-pointer"
          >
            Sign in
          </button>
          <button className="p-1 hover:bg-gray-100 rounded-full cursor-pointer" aria-label="Search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>

          <div className="relative cursor-pointer">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            <span className="absolute -top-1.5 -right-2 bg-white border border-black text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
              {cartCount}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}