window.firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

window.isFirebaseConfigured = function () {
  return !!window.firebaseConfig &&
    Object.values(window.firebaseConfig).every((value) => value && String(value).trim() !== '');
};
