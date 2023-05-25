import axios from 'axios'

describe('API Test', () => {
  it('should retrieve objects with Category "Authentication & Authorization"', async () => {
    try {
      const response = await axios.get('https://api.publicapis.org/entries');
      const data = response.data;
      const filteredObjects = data.entries.filter(entry =>
        entry.Category === 'Authentication & Authorization'
      );
      const count = filteredObjects.length;
      console.log(`Number of objects with Category "Authentication & Authorization": ${count}`);
      console.log('Found objects:');
      filteredObjects.forEach(obj => console.log(obj));
    } catch (error) {
      console.error('An error occurred during the API test:', error);
    }
  });
});
