import Imagelogo from '../assets/img/Ustack-logo.png'

const NavBar = () => {
  return (
     <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-6">
    <div className="flex h-16 items-center justify-between">
      <div className="flex-1 md:flex md:items-center md:gap-12">
        <a className="block -mt-2" href="#">
          <span className="sr-only">Home</span>
            <img 
                src={Imagelogo}
                alt=''
                className=''
            />
        </a>
      </div>

      <div className="md:flex md:items-center md:gap-12">
        <nav aria-label="Global" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <a className="text-[16px] text-[var(--color-primary)] transition hover:text-[var(--color-secondary)]" href="#"> Dashboard </a>
            </li>

            <li>
              <a className="text-[16px] text-[var(--color-secondary)] transition hover:text-[var(--color-primary)]" href="#"> Courses </a>
            </li>
          </ul>
        </nav>

        <div className="hidden md:relative md:block">
          <button
            type="button"
            className="overflow-hidden rounded-full border border-gray-300 shadow-inner"
          >
            <span className="sr-only">Toggle dashboard menu</span>

            <img
              src="https://images.unsplash.com/photo-1627161684458-a62da52b51c3?q=80&w=549&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="size-10 object-cover"
            />
          </button>

        </div>

        <div className="block md:hidden">
          <button
            className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default NavBar