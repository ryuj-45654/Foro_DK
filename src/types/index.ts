export type UserRole = 'ADMIN' | 'MODERATOR' | 'AUTHOR' | 'MEMBER' | 'BANNED';

export interface User {
  id: string;
  username: string;
  role: UserRole;
  avatarUrl: string;
  joinDate: Date;
  status?: 'online' | 'offline' | 'away' | 'busy';
  banStatus?: {
    reason: string;
    expiryDate: Date;
  };
}

export interface Book {
  id: string;
  title: string;
  content: string;
  authorId: string;
  createdAt: Date;
  updatedAt: Date;
  published: boolean;
}

export interface Appeal {
  id: string;
  userId: string;
  type: 'BAN' | 'WARNING';
  reason: string;
  explanation: string;
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
  createdAt: Date;
  resolvedAt?: Date;
  resolvedBy?: string;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  authorId: string;
  createdAt: Date;
  updatedAt: Date;
  pinned: boolean;
  category: 'EVENT' | 'UPDATE' | 'MAINTENANCE' | 'IMPORTANT';
}

export interface ChatMessage {
  id: string;
  content: string;
  authorId: string;
  channelId: string;
  createdAt: Date;
  editedAt?: Date;
  attachments?: string[];
  reactions?: {
    emoji: string;
    count: number;
    users: string[];
  }[];
}

export interface ChatChannel {
  id: string;
  name: string;
  type: 'TEXT' | 'VOICE' | 'ANNOUNCEMENT';
  description?: string;
  categoryId: string;
  permissions: {
    roleId: string;
    canRead: boolean;
    canWrite: boolean;
    canModerate: boolean;
  }[];
}

export interface Category {
  id: string;
  name: string;
  description?: string;
  order: number;
  channels: string[];
}