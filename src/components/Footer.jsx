import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black dark:bg-white text-white dark:text-black py-6 text-center border-t border-gray-700 dark:border-gray-300 transition-colors duration-500">
      <p className="text-sm sm:text-base">
        © {new Date().getFullYear()} Durgesh Patel. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
