const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="flex flex-row space-x-4 items-center justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
           XXXXX footer
          </span>

          <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
