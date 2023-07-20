import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.ionic.upload',
  appName: 'Upload',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
