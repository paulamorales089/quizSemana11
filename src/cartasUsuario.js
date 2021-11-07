import {getDatabase, ref, set, onValue, push} from "firebase/database";


export class cartasUsuario {

    constructor (usuario) {
        this.usuario=usuario;
    
    }

    render(){
        let carta = document.createElement("div");
        carta.className = "cartasClass";

        let nombreUsuario = document.createElement("h4");
        nombreUsuario.className = "nombreUsuarioClass";
        nombreUsuario.innerHTML = this.usuario.NOM;

        let cursoUsuario = document.createElement("h4");
        cursoUsuario.className = "cursoUsuarioClass";
        cursoUsuario.innerHTML = this.usuario.CUR;

        let codigoUsuario = document.createElement("h5");
        codigoUsuario.className = "codigoUsuarioClass";
        codigoUsuario.innerHTML = this.usuario.COD;

        let participacionUsuario = document.createElement("h4");
        participacionUsuario.className = "participacionUsuarioClass";
        participacionUsuario.innerHTML = this.usuario.PART;

        let sumarboton = document.createElement("button");
        sumarboton.className = "botonSumar";
        sumarboton.innerHTML = "sumate bb";

        let eliminateboton = document.createElement("button");
        eliminateboton.className = "botonEliminar";
        eliminateboton.innerHTML = "eliminate chiki";

        sumarboton.addEventListener("click", (e, event)=>{

            const db = getDatabase();
            const usuarioRef = ref(db, "usuarios/" + this.usuario.NOM + "/" + "PART");
            const newRef = this.usuario.PART +=1;
            set (usuarioRef, newRef);
        });

        eliminateboton.addEventListener("click", (e, event)=>{

            const db = getDatabase();
            const usuarioRef = ref(db, "usuarios/" + this.usuario.NOM );
        
            set (usuarioRef, null);
        });



        carta.appendChild(nombreUsuario);
        carta.appendChild(cursoUsuario);
        carta.appendChild(codigoUsuario);
        carta.appendChild(participacionUsuario);
        carta.appendChild(sumarboton);
        carta.appendChild(eliminateboton);


        return carta;

    }

    
}
