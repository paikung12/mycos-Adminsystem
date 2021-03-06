export default function NavbarExport() {
  
    return (
      <>
        {/* Navbar */}
        <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-no-wrap md:justify-start flex items-center p-4">
          <div className="w-full mx-autp items-center flex justify-between md:flex-no-wrap flex-wrap md:px-10 px-4">
            {/* Brand */}
            <span className="  font-bold text-2xl mt-2  ">Export Attendace</span>
          </div>
        </nav>
        {/* End Navbar */}
      </>
    );
  }
  