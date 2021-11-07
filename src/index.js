import {initializeApp} from "firebase/app";
import {getDatabase, ref, set, onValue, push} from "firebase/database";
import { object } from "webidl-conversions";

import {getFirebaseConfig} from "./firebase-config";
import { cartasUsuario} from "./cartasUsuario";
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
//DIV DE CADA UNA DE LAS CARTAS
const carta1 = document.getElementById("tarjeta_Zas1");
const carta2 = document.getElementById("tarjeta_Zas2");
const carta3 = document.getElementById("tarjeta_Zas3");


function listaUsuarios (){
    const db = getDatabase();
    const dbref = ref(db, "usuarios");
    onValue (dbref, (snapshot)=>{
        const data = snapshot.val();
        dibujarTarjetasCasino(data);
    });
}

function dibujarTarjetasCasino (info){
    
    if (info){

        carta1.innerHTML="";
        carta2.innerHTML="";
        carta3.innerHTML="";
    
        Object.keys(info).forEach((k,i)=>{


            const cartita = new cartasUsuario(info[k]);

            let participaciones = info[k].PART;

            if (participaciones <= 5){
                carta1.appendChild(cartita.render());
                
            }
            
            if (participaciones >5  && participaciones <=10){
                carta2.appendChild(cartita.render());

            }

            if (participaciones >10){
                carta3.appendChild(cartita.render());

            }
            
            

            
        });

    }

}

const matricularEstudiante = (e, event) => {
    let n = nombre.value;
    let c = codigo.value;
    let cu = curso.value; 
    

    let usuario = {
        NOM : n,
        COD : c,
        CUR : cu,
        PART : 0
    };
    console.log(usuario);
    registrarUsuario(usuario);
}
listaUsuarios();
matricularBtn.addEventListener("click",matricularEstudiante);