import React from 'react';
import { format } from 'date-fns';
import { ChatMessage as ChatMessageType, User } from '../../types';
import { Edit, Smile, MoreVertical } from 'lucide-react';

interface ChatMessageProps {
  message: ChatMessageType;
  author: User;
}

export function ChatMessage({ message, author }: ChatMessageProps) {
  return (
    <div className="py-2 px-4 hover:bg-gray-50 group">
      <div className="flex items-start space-x-3">
        <img
          src={author.avatarUrl}
          alt={author.username}
          className="w-10 h-10 rounded-full"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2">
            <span className="font-medium">{author.username}</span>
            <span className="text-xs text-gray-500">
              {format(message.createdAt, 'MMM d, yyyy h:mm a')}
            </span>
            {message.editedAt && (
              <span className="text-xs text-gray-500 flex items-center">
                <Edit className="h-3 w-3 mr-1" />
                edited
              </span>
            )}
          </div>
          <p className="text-gray-900 mt-1">{message.content}</p>
          {message.attachments && message.attachments.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {message.attachments.map((url, index) => (
                <img
                  key={index}
                  src={url}
                  alt="Attachment"
                  className="max-w-xs rounded-lg"
                />
              ))}
            </div>
          )}
          {message.reactions && message.reactions.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1">
              {message.reactions.map((reaction, index) => (
                <button
                  key={index}
                  className="inline-flex items-center space-x-1 bg-gray-100 hover:bg-gray-200 rounded-full px-2 py-1 text-sm"
                >
                  <span>{reaction.emoji}</span>
                  <span className="text-gray-600">{reaction.count}</span>
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="opacity-0 group-hover:opacity-100 flex items-center space-x-2">
          <button className="p-1 hover:bg-gray-200 rounded">
            <Smile className="h-5 w-5 text-gray-500" />
          </button>
          <button className="p-1 hover:bg-gray-200 rounded">
            <MoreVertical className="h-5 w-5 text-gray-500" />
          </button>
        </div>
      </div>
    </div>
  );
}