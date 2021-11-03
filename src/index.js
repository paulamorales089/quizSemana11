import {initializeApp} from "firebase/app";
import {getDatabase, ref, set, onValue, push} from "firebase/database";

import {getFirebaseConfig} from "./firebase-config";
const firebaseAppConfig = getFirebaseConfig();
const firebaseApp = initializeApp(firebaseAppConfig);

function registrarUsuario (user){
    const db = getDatabase();
    // const nuevoUsuarioRef = push(ref(db,"usuarios"));
    const dbref = ref (db, "usuarios/" + user.NOM);
    set (dbref, user);

}


//CAMPOS DE TEXTO 
const nombre = document.getElementById("nombre_estudiante");
const codigo = document.getElementById("codigo_estudiante");
const curso = document.getElementById("curso_estudiante");
//BOTON MATRICULAR
const matricularBtn = document.getElementById("boton_matricular");

const matricularEstudiante = (e, event) => {
    let n = nombre.value;
    let c = codigo.value;
    let cu = curso.value; 

    let usuario = {
        NOM : n,
        COD : c,
        CUR : cu
    };
    console.log(usuario);
    registrarUsuario(usuario);
}

matricularBtn.addEventListener("click",matricularEstudiante);