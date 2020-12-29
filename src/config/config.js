import Constants from 'expo-constants';

  const { manifest } = Constants;
  const uri = `http://${manifest.debuggerHost.split(':').shift()}:3000/`;

  export default uri;