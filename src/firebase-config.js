const firebaseConfig = {
    apiKey: "AIzaSyBVuDO4POyrohIIVWtk0Gf-zsLs6FN51a4",
    authDomain: "quizsemana11.firebaseapp.com",
    databaseURL: "https://quizsemana11-default-rtdb.firebaseio.com",
    projectId: "quizsemana11",
    storageBucket: "quizsemana11.appspot.com",
    messagingSenderId: "547591515057",
    appId: "1:547591515057:web:29dc05041dbfb0caf02b90",
    measurementId: "G-7WHR7DTTSZ"
  };
  

export function getFirebaseConfig()
{
    if(!firebaseConfig || !firebaseConfig.apiKey)
    {
        throw new Error("Firebase config error");
    }
    else
    {
        return firebaseConfig;
    }
}