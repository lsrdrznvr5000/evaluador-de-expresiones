class Nodo{
    constructor(dato){
        this.dato = dato;
        this.anterior = null;
        this.siguiente = null;
        this.hder = null;
        this.hizq = null;
    }
}

class Expression{
    constructor(){
        this.raiz = null;
    }

    agregar(nuevo) {
        if (this.raiz === null){
            this.raiz = nuevo;
        } else{
            this._agregate(nuevo, this.primero);
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

    _evaluar(hola) {
        let nodo = this.raiz;
        while (nodo !== null) {
            if (hola === nodo.dato) {
                const izq = nodo.anterior;
                const der = nodo.siguiente;

                if (izq !== null && der !== null) {
                    nodo.hizq = izq;
                    nodo.hder = der;
                    this._extraer(izq);
                    this._extraer(der);
                    izq.anterior = null;
                    izq.siguiente = null;
                    der.anterior = null;
                    der.siguiente = null;
                    nodo = nodo.siguiente;
                } else {
                    nodo = nodo.siguiente;
                }
            } else {
                nodo = nodo.siguiente;
            }
        }
    }
    
    _extraer(nodo) {
        if (nodo === this.raiz) {
            this.raiz = null;
        } else if (nodo === this.raiz) {
            this.raiz = nodo.siguiente;
            this.raiz.anterior = null;
        } else if (nodo === this.ultimo) {
            this.ultimo = nodo.anterior;
            this.ultimo.siguiente = null;
        } else {
            nodo.anterior.siguiente = nodo.siguiente;
            nodo.siguiente.anterior = nodo.anterior;
        }
    }
}