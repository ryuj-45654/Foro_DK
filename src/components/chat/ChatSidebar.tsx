import React from 'react';
import { Hash, Volume2, Megaphone, ChevronDown, Plus, Settings } from 'lucide-react';
import { ChatChannel, Category } from '../../types';

interface ChatSidebarProps {
  categories: Category[];
  channels: ChatChannel[];
  currentChannel?: string;
  onChannelSelect: (channelId: string) => void;
}

export function ChatSidebar({ categories, channels, currentChannel, onChannelSelect }: ChatSidebarProps) {
  return (
    <div className="w-64 bg-gray-800 text-gray-100 flex flex-col h-full">
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-xl font-bold">RolePlay Hub</h2>
      </div>

      <div className="flex-1 overflow-y-auto">
        {categories.map((category) => (
          <div key={category.id} className="mt-4">
            <div className="px-3 flex items-center justify-between text-gray-400 hover:text-gray-200 cursor-pointer">
              <div className="flex items-center space-x-1">
                <ChevronDown className="h-4 w-4" />
                <span className="text-xs font-semibold uppercase">{category.name}</span>
              </div>
              <Plus className="h-4 w-4 opacity-0 group-hover:opacity-100" />
            </div>

            <div className="mt-1">
              {channels
                .filter((channel) => category.channels.includes(channel.id))
                .map((channel) => (
                  <button
                    key={channel.id}
                    onClick={() => onChannelSelect(channel.id)}
                    className={`w-full px-3 py-1 flex items-center space-x-2 hover:bg-gray-700 ${
                      currentChannel === channel.id ? 'bg-gray-700' : ''
                    }`}
                  >
                    {channel.type === 'TEXT' && <Hash className="h-5 w-5 text-gray-400" />}
                    {channel.type === 'VOICE' && <Volume2 className="h-5 w-5 text-gray-400" />}
                    {channel.type === 'ANNOUNCEMENT' && <Megaphone className="h-5 w-5 text-gray-400" />}
                    <span className="text-sm">{channel.name}</span>
                  </button>
                ))}
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-gray-700 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=faces"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-sm font-medium">Username</span>
        </div>
        <Settings className="h-5 w-5 text-gray-400 hover:text-gray-200 cursor-pointer" />
      </div>
    </div>
  );
}