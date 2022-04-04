import AsyncStorage from '@react-native-async-storage/async-storage';

const key = 'logs';

const logsStorage = {
  async get() {
    try {
      const raw: any = await AsyncStorage.getItem(key);
      const parsed = JSON.parse(raw);
      return parsed;
    } catch (e) {}
  },
  async set(data: any) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      throw new Error('Failed to save logs');
    }
  },
};

export default logsStorage;
