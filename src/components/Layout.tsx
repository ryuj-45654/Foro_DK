import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Book, ScrollText, Shield, Users } from 'lucide-react';

export function Layout() {
  const location = useLocation();
  
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-indigo-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <ScrollText className="h-8 w-8" />
              <span className="font-bold text-xl">RolePlay Hub</span>
            </Link>
            
            <div className="flex space-x-4">
              <NavLink to="/books" icon={<Book className="h-5 w-5" />} label="Historias" />
              <NavLink to="/appeals" icon={<Shield className="h-5 w-5" />} label="Apelaciones" />
              <NavLink to="/members" icon={<Users className="h-5 w-5" />} label="Miembros" />
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>

      <footer className="bg-gray-800 text-gray-300 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center">© {new Date().getFullYear()} RolePlay Hub. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

function NavLink({ to, icon, label }: { to: string; icon: React.ReactNode; label: string }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors
        ${isActive 
          ? 'bg-indigo-700 text-white' 
          : 'text-indigo-100 hover:bg-indigo-500'
        }`}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}