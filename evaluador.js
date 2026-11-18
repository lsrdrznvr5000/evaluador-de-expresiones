class Nodo{
    constructor(){
        this.dato = this.dato;
        this.anterior = null;
        this.siguiente = null;
        this.hder = null;
        this.hizq = null;
    }
}

class Expression{
    constructor(){
        this.primero = null;
    }

    agregar(nuevo) {
        if (this.primero === null){
            this.primero = nuevo;
        } else{
            this._agregate(nuevo, this.raiz);
        }
    }

    _agregate(nuevo, nodor) {
        if (nuevo.codigo > nodor.codigo) {
            if(nodor.hder === null) {
                nodor.hder = nuevo;
            } else {
                this._agregate(nuevo, nodor.hder);
            }
        } else{
            if (nodor.hiz === null) {
                nodor.hiz = nuevo;
            } else {
                this._agregate(nuevo, nodor.hiz);
            }
        }
    }

    evaluar(){

    }
    
    _extraer(dato){
        const datoExtr = dato;
        dato.anterior.siguiente = dato.siguiente;
        dato.siguiente.anterior = dato.anterior;
        return datoExtr;
    }

    /*
    agregar(nuevo){
        if(this.primero = null) {
            this.primero = nuevo;
            this.primero.siguiente = this.primero;
            this.primero.anterior = this.primero;
        } else if (this.primero.siguiente = this.primero) {
            this.primero.siguiente = nuevo;
            nuevo.siguiente = this.primero.siguiente;
            this.primero.anterior = nuevo;
            nuevo.anterior = this.primero;
        } else {
            let aux = this.primero;
            do {
                aux = aux.siguiente;
            } while (aux.siguiente !== this.primero)
            aux.siguiente = nuevo;
            nuevo.anterior = aux;
            nuevo.siguiente = this.primero;
        }
    }
    */

}