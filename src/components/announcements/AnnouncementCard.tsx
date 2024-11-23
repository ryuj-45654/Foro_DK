import React from 'react';
import { format } from 'date-fns';
import { Announcement, User } from '../../types';
import { Pin, AlertCircle, Calendar, Tool } from 'lucide-react';

interface AnnouncementCardProps {
  announcement: Announcement;
  author: User;
}

export function AnnouncementCard({ announcement, author }: AnnouncementCardProps) {
  const getCategoryIcon = () => {
    switch (announcement.category) {
      case 'EVENT':
        return <Calendar className="h-5 w-5" />;
      case 'UPDATE':
        return <Tool className="h-5 w-5" />;
      case 'MAINTENANCE':
        return <Tool className="h-5 w-5" />;
      case 'IMPORTANT':
        return <AlertCircle className="h-5 w-5" />;
    }
  };

  const getCategoryColor = () => {
    switch (announcement.category) {
      case 'EVENT':
        return 'bg-green-100 text-green-800';
      case 'UPDATE':
        return 'bg-blue-100 text-blue-800';
      case 'MAINTENANCE':
        return 'bg-yellow-100 text-yellow-800';
      case 'IMPORTANT':
        return 'bg-red-100 text-red-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <img
              src={author.avatarUrl}
              alt={author.username}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h3 className="font-medium">{author.username}</h3>
              <p className="text-sm text-gray-500">
                {format(announcement.createdAt, 'MMM d, yyyy h:mm a')}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            {announcement.pinned && (
              <Pin className="h-5 w-5 text-gray-500" />
            )}
            <span className={`px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1 ${getCategoryColor()}`}>
              {getCategoryIcon()}
              <span>{announcement.category}</span>
            </span>
          </div>
        </div>

        <h2 className="text-xl font-bold mb-2">{announcement.title}</h2>
        <div className="prose max-w-none">
          {announcement.content}
        </div>
      </div>
    </div>
  );
}