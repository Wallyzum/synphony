import axios from 'axios';

interface Entry {
  API: string;
  Description: string;
  Auth?: string;
  HTTPS: boolean;
  Cors: string;
  Link: string;
  Category: string;
}

describe('API Test', () => {
  it('should retrieve objects with Category "Authentication & Authorization"', async () => {
    
    (async () => {
      try {
        const { data } = await axios.get('https://api.publicapis.org/entries');
        const entries: Entry[] = data.entries;
        const foundEntries: Entry[] = entries.filter(e => e.Category === 'Authentication & Authorization');
        const count = foundEntries.length;
        console.log(`${count} entries found:`, foundEntries);
      } catch (error) {
        console.error(error);
      }
    })();
  });
});
