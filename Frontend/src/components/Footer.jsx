function Footer() {
    return (
      <footer className="bg-blue-950 text-white py-10 mt-auto">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Sumair Ahmed Dero.
          </p>
          <p className="text-sm text-center md:text-left">
          All rights reserved.
          </p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:underline text-sm">Privacy</a>
            <a href="#" className="hover:underline text-sm">Terms</a>
            <a href="#" className="hover:underline text-sm">Contact</a>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  