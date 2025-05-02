import api from '../api';

export interface Announcement {
  message: string;
  expiresAt: Date;
}

export async function fetchAnnouncement(): Promise<Announcement | null> {
  try {
    const response = await api.get<Announcement>('/RestaurantMockResponse');
    
    if (response.status === 204) {
      return null; // No announcement (expired or not set)
    }

    return response.data;
  } catch (error) {
    console.error('Failed to fetch announcement:', error);
    return null;
  }
}

export async function postAnnouncement(
    message: string,
    durationHours: number
  ): Promise<boolean> {
    try {
      const response = await api.post('/announcement', {
        message,
        durationHours,
      });
  
      return response.status === 200;
    } catch (error) {
      console.error('Failed to post announcement:', error);
      return false;
    }
  }
