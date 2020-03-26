class Registro {
        
    constructor(id,nombre,codigo){
        this.id = id;
        this.nombre = nombre;
        this.codigo = codigo;
    };

    borrar(id){                
        db.collection("superprod").doc(id).delete();
    };

    agregar(){
        db.collection('superprod').add({
            nombre: this.nombre,
            codigo: this.codigo
        });
    }

    editar(id){    
        formularioeditar.nombreeditar.value = this.nombre;
        formularioeditar.codigoeditar.value = this.codigo;
        formularioeditar.ideditar.value = this.id;
    };

    actualizar(){    
        db.collection('superprod').doc(this.id).update({
            nombre: this.nombre,
            codigo: this.codigo
        });
    };

};