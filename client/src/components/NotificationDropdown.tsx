import { useState } from 'react';
import { Bell, UserPlus, MessageSquare, CheckCircle, Clock } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ScrollArea } from './ui/scroll-area';

interface Notification {
  id: string;
  type: 'application' | 'comment' | 'accepted' | 'general';
  message: string;
  time: string;
  read: boolean;
}

const mockNotifications: Notification[] = [
  {
    id: '1',
    type: 'application',
    message: 'Ani Lestari baru saja melamar ke proyek Desain UI/UX Anda.',
    time: '5 menit lalu',
    read: false,
  },
  {
    id: '2',
    type: 'comment',
    message: 'Budi Santoso mengomentari proyek "Aplikasi Mobile Banking".',
    time: '1 jam lalu',
    read: false,
  },
  {
    id: '3',
    type: 'accepted',
    message: 'Selamat! Lamaran Anda untuk proyek "Website E-Commerce" diterima.',
    time: '2 jam lalu',
    read: false,
  },
  {
    id: '4',
    type: 'application',
    message: 'Citra Dewi melamar sebagai Frontend Developer di proyek Anda.',
    time: '3 jam lalu',
    read: true,
  },
  {
    id: '5',
    type: 'general',
    message: 'Proyek "Dashboard Analytics" akan segera dimulai minggu depan.',
    time: '1 hari lalu',
    read: true,
  },
];

function getNotificationIcon(type: Notification['type']) {
  switch (type) {
    case 'application':
      return <UserPlus className="w-5 h-5 text-[#0052A3]" />;
    case 'comment':
      return <MessageSquare className="w-5 h-5 text-[#FF9966]" />;
    case 'accepted':
      return <CheckCircle className="w-5 h-5 text-[#27AE60]" />;
    default:
      return <Clock className="w-5 h-5 text-[#6B7280]" />;
  }
}

interface NotificationItemProps {
  notification: Notification;
  onMarkAsRead: (id: string) => void;
}

function NotificationItem({ notification, onMarkAsRead }: NotificationItemProps) {
  return (
    <div
      className={`px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors border-b border-[#E5E7EB] ${
        !notification.read ? 'bg-blue-50/30' : ''
      }`}
      onClick={() => onMarkAsRead(notification.id)}
    >
      <div className="flex gap-3">
        <div className="flex-shrink-0 mt-1">
          {getNotificationIcon(notification.type)}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[#1A1A1A] mb-1">
            {notification.message}
          </p>
          <p className="text-[#6B7280] text-sm">
            {notification.time}
          </p>
        </div>
        {!notification.read && (
          <div className="flex-shrink-0">
            <div className="w-2 h-2 bg-[#0052A3] rounded-full mt-2"></div>
          </div>
        )}
      </div>
    </div>
  );
}

export function NotificationDropdown() {
  const [notifications, setNotifications] = useState(mockNotifications);
  const [open, setOpen] = useState(false);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const handleMarkAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const handleMarkAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const filterNotifications = (type?: Notification['type']) => {
    if (!type) return notifications;
    return notifications.filter((n) => n.type === type);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <Bell className="w-6 h-6 text-[#6B7280]" />
          {unreadCount > 0 && (
            <span className="absolute top-1 right-1 w-2 h-2 bg-[#FF9966] rounded-full"></span>
          )}
        </button>
      </PopoverTrigger>
      <PopoverContent
        align="end"
        className="w-[400px] p-0 bg-white border border-[#E5E7EB] shadow-lg"
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-[#E5E7EB]">
          <h3 className="text-[#1A1A1A]">Notifikasi</h3>
          <button
            onClick={handleMarkAllAsRead}
            className="text-[#0052A3] hover:underline text-sm"
          >
            Tandai semua sudah dibaca
          </button>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="px-4 pt-3">
            <TabsList className="grid w-full grid-cols-3 bg-gray-100">
              <TabsTrigger value="all" className="text-sm">
                Semua
              </TabsTrigger>
              <TabsTrigger value="applications" className="text-sm">
                Lamaran
              </TabsTrigger>
              <TabsTrigger value="comments" className="text-sm">
                Komentar
              </TabsTrigger>
            </TabsList>
          </div>

          <ScrollArea className="h-[400px]">
            <TabsContent value="all" className="m-0 mt-3">
              {notifications.length > 0 ? (
                notifications.map((notification) => (
                  <NotificationItem
                    key={notification.id}
                    notification={notification}
                    onMarkAsRead={handleMarkAsRead}
                  />
                ))
              ) : (
                <div className="text-center py-8 text-[#6B7280]">
                  <Bell className="w-12 h-12 mx-auto mb-3 opacity-30" />
                  <p>Tidak ada notifikasi</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="applications" className="m-0 mt-3">
              {filterNotifications('application').length > 0 ? (
                filterNotifications('application').map((notification) => (
                  <NotificationItem
                    key={notification.id}
                    notification={notification}
                    onMarkAsRead={handleMarkAsRead}
                  />
                ))
              ) : (
                <div className="text-center py-8 text-[#6B7280]">
                  <UserPlus className="w-12 h-12 mx-auto mb-3 opacity-30" />
                  <p>Tidak ada lamaran baru</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="comments" className="m-0 mt-3">
              {filterNotifications('comment').length > 0 ? (
                filterNotifications('comment').map((notification) => (
                  <NotificationItem
                    key={notification.id}
                    notification={notification}
                    onMarkAsRead={handleMarkAsRead}
                  />
                ))
              ) : (
                <div className="text-center py-8 text-[#6B7280]">
                  <MessageSquare className="w-12 h-12 mx-auto mb-3 opacity-30" />
                  <p>Tidak ada komentar baru</p>
                </div>
              )}
            </TabsContent>
          </ScrollArea>
        </Tabs>

        <div className="px-4 py-3 border-t border-[#E5E7EB] text-center">
          <button className="text-[#0052A3] hover:underline text-sm">
            Lihat Semua Notifikasi
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
}