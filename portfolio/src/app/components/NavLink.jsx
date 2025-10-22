import Link from "next/link";
import { motion } from "framer-motion";

const NavLink = ({ href, title }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Link
        href={href}
        className="relative block py-2 pl-3 pr-4 text-gray-300 text-lg font-light rounded md:p-0 group transition-all duration-300 hover:text-yellow-500"
      >
        <span className="relative z-10">{title}</span>
        <div className="absolute -bottom-1 left-0 w-0 h-px bg-yellow-500 group-hover:w-full transition-all duration-500"></div>
      </Link>
    </motion.div>
  );
};

export default NavLink;
