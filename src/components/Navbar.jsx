/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import {
  Menu,
  Moon,
  Sun,
  Home,
  FileText,
  PlusCircle,
  Clock,
  LogIn,
  User,
  LogOut,
} from 'lucide-react';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [theme, setTheme] = useState('light');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const localTheme = localStorage.getItem('theme') || 'light';
    setTheme(localTheme);
    document.querySelector('html').setAttribute('data-theme', localTheme);
  }, []);

  const handleToggle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.querySelector('html').setAttribute('data-theme', newTheme);
  };

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const NavItem = ({ to, children, icon: Icon }) => (
    <NavLink
      to={to}
      className={({ isActive }) => `
        flex items-center gap-2 px-3 py-2 rounded-lg
        transition-colors duration-200
        ${
          isActive
            ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
            : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
        }
      `}
    >
      {({ isActive }) => (
        <>
          <Icon
            className={`w-5 h-5 ${
              isActive
                ? 'text-blue-600 dark:text-blue-400'
                : 'text-gray-500 dark:text-gray-400'
            }`}
          />
          {children}
        </>
      )}
    </NavLink>
  );

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm dark:shadow-xl sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <Menu className="w-8 h-8" />
          </button>
        </div>

        {/* Logo */}
        <Link to={'/'}>
          <div className="flex items-center space-x-2 text-xl font-bold text-gray-800 dark:text-gray-100">
            <img
              src="https://i.ibb.co/7tw5yvk/study-group.png"
              className="w-10 h-10"
              alt="StudyHive Logo"
            />
            <span>StudyHive</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-4">
          <NavItem to="/" icon={Home}>
            Home
          </NavItem>
          <NavItem to="/assignments" icon={FileText}>
            Assignments
          </NavItem>
          <NavItem to="/createAssignment" icon={PlusCircle}>
            Create Assignments
          </NavItem>
          <NavItem to="/pendingAssignment" icon={Clock}>
            Pending Assignments
          </NavItem>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-lg">
            <div className="flex flex-col p-4 space-y-2">
              <NavItem to="/" icon={Home}>
                Home
              </NavItem>
              <NavItem to="/assignments" icon={FileText}>
                Assignments
              </NavItem>
              <NavItem to="/createAssignment" icon={PlusCircle}>
                Create Assignments
              </NavItem>
              <NavItem to="/pendingAssignment" icon={Clock}>
                Pending Assignments
              </NavItem>
            </div>
          </div>
        )}

        {/* Right Side Actions */}
        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <button
            onClick={handleToggle}
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            {theme === 'light' ? (
              <Moon className="w-6 h-6" />
            ) : (
              <Sun className="w-6 h-6" />
            )}
          </button>

          {/* Authentication Actions */}
          {!user ? (
            <NavLink
              to="/login"
              className="flex items-center gap-2 px-4 py-2
              bg-blue-100 dark:bg-blue-900/30
              text-blue-700 dark:text-blue-300
              rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800/50
              transition-colors"
            >
              <LogIn className="w-5 h-5" />
              Login
            </NavLink>
          ) : (
            <div className="relative group">
              <div
                className="btn-ghost btn-circle avatar cursor-pointer"
                title={user?.displayName}
              >
                <div className="w-10 rounded-full border-2 border-gray-300 dark:border-gray-600">
                  <img
                    referrerPolicy="no-referrer"
                    src={user?.photoURL}
                    alt="User Avatar"
                    className="rounded-full"
                  />
                </div>
              </div>

              {/* Dropdown Menu */}
              <div
                className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800
              rounded-lg shadow-lg border border-gray-100 dark:border-gray-700
              opacity-0 invisible group-hover:opacity-100 group-hover:visible
              transition-all duration-300 z-50 p-2"
              >
                <NavLink
                  to="/mySubmit"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700
                  rounded-lg flex items-center gap-2 text-gray-700 dark:text-gray-300"
                >
                  <FileText className="w-5 h-5" />
                  My Assignments
                </NavLink>
                <NavLink
                  to="/allSubmittedAsn"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700
                  rounded-lg flex items-center gap-2 text-gray-700 dark:text-gray-300"
                >
                  <User className="w-5 h-5" />
                  All Submitted Assignments
                </NavLink>
                <button
                  onClick={logOut}
                  className="w-full text-left px-4 py-2 hover:bg-red-100 dark:hover:bg-red-900/30
                  rounded-lg flex items-center gap-2 text-red-600 dark:text-red-400"
                >
                  <LogOut className="w-5 h-5" />
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
