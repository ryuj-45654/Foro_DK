import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { BookEditor } from './components/BookEditor';
import { AppealForm } from './components/AppealForm';
import { Chat } from './pages/Chat';
import { Announcements } from './pages/Announcements';

function Home() {
  return (
    <div className="text-center space-y-6">
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1518932945647-7a1c969f8be2?auto=format&fit=crop&q=80&w=1200&h=400"
          alt="Paisaje fantástico"
          className="w-full h-[400px] object-cover rounded-xl"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-xl">
          <div className="text-white space-y-4">
            <h1 className="text-4xl font-bold">Bienvenido a RolePlay Hub</h1>
            <p className="text-xl">Donde las historias cobran vida y las comunidades prosperan</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <FeatureCard
          title="Crear Historias"
          description="Escribe y publica tus historias únicas en nuestra biblioteca"
          image="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=400"
        />
        <FeatureCard
          title="Únete a la Comunidad"
          description="Conéctate con otros jugadores de rol y forma amistades duraderas"
          image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=400"
        />
        <FeatureCard
          title="Moderación Justa"
          description="Nuestro equipo dedicado asegura un ambiente seguro y agradable"
          image="https://images.unsplash.com/photo-1453738773917-9c3eff1db985?auto=format&fit=crop&q=80&w=400"
        />
      </div>
    </div>
  );
}

function FeatureCard({ title, description, image }: { title: string; description: string; image: string }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="books" element={<BookEditor onSubmit={console.log} />} />
          <Route path="appeals" element={<AppealForm onSubmit={console.log} />} />
          <Route path="announcements" element={<Announcements />} />
        </Route>
        <Route path="/chat" element={<Chat />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;