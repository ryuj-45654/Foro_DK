import React from 'react';
import { AnnouncementCard } from '../components/announcements/AnnouncementCard';
import { Announcement, User } from '../types';

// Datos de ejemplo para demostración
const mockAnnouncements: Announcement[] = [
  {
    id: '1',
    title: '🎉 ¡Nuevo Concurso de Historias!',
    content: '¡Prepárate para nuestro concurso mensual de escritura! Tema: "Mundos Perdidos"...',
    authorId: '1',
    createdAt: new Date(),
    updatedAt: new Date(),
    pinned: true,
    category: 'EVENT',
  },
  {
    id: '2',
    title: '🛠️ Aviso de Mantenimiento del Foro',
    content: 'El foro estará en mantenimiento el sábado...',
    authorId: '1',
    createdAt: new Date(),
    updatedAt: new Date(),
    pinned: false,
    category: 'MAINTENANCE',
  },
];

const mockAuthor: User = {
  id: '1',
  username: 'Admin',
  role: 'ADMIN',
  avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=faces',
  joinDate: new Date(),
};

export function Announcements() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Anuncios</h1>
      </div>

      <div className="space-y-6">
        {mockAnnouncements.map((announcement) => (
          <AnnouncementCard
            key={announcement.id}
            announcement={announcement}
            author={mockAuthor}
          />
        ))}
      </div>
    </div>
  );
}