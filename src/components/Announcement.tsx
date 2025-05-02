import { useEffect,useState } from 'react';
import { fetchAnnouncement, Announcement } from '../api/announcement';

export const AnnouncementBanner: React.FC = () => {
  const [announcement, setAnnouncement] = useState<Announcement | null>(null);

  useEffect(() => {
    fetchAnnouncement().then(setAnnouncement);
  }, []);

  if (!announcement) return null;

  return (
    <h2>
      🔔{announcement.message}🔔
    </h2>
  );
};