import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 8f71906a889c6fc3257f92cdcb9579610d2798cf27a8639f59d24f197463160f'
  }
});