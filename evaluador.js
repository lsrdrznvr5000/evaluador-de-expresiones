class Nodo {
    constructor(dato) {
        this.dato = dato;
        this.anterior = null;
        this.siguiente = null;
        this.hizq = null;
        this.hder = null;
    }
}

class Expresiones {
    constructor() {
        this.raiz = null;
        this.ultimo = null;
    }

    agregar(nuevo) {
        if (this.raiz === null) {
            this.raiz = nuevo;
            this.ultimo = nuevo;
        } else {
            nuevo.anterior = this.ultimo;
            this.ultimo.siguiente = nuevo;
            this.ultimo = nuevo;
        }
    }

    evaluar() {
        this._evaluarPass(['*', '/']);
        this._evaluarPass(['+', '-']);
    }

    _evaluarPass(signo) {
        let nodo = this.raiz;
        while (nodo !== null) {
            if (signo.includes(nodo.dato)) {
                const izq = nodo.anterior;
                const der = nodo.siguiente;

                if (izq !== null && der !== null) {
                    this._extraer(izq);
                    this._extraer(der);

                    nodo.hizq = izq;
                    nodo.hder = der;
                }
            }
            nodo = nodo.siguiente;
        }
    }

    _extraer(nodo) {
        if (nodo === this.raiz) {
            this.raiz = nodo.siguiente;
            if (this.raiz !== null) {
                this.raiz.anterior = null;
            }
        } else if (nodo === this.ultimo) {
            this.ultimo = nodo.anterior;
            if (this.ultimo !== null) {
                this.ultimo.siguiente = null;
            }
        } else {
            nodo.anterior.siguiente = nodo.siguiente;
            nodo.siguiente.anterior = nodo.anterior;
        }
    }

    preOrder() {
        this._preOrder(this.raiz);
    }

    _preOrder(nodo) {
        if (nodo !== null) {
            console.log(nodo.dato);
            this._preOrder(nodo.hizq);
            this._preOrder(nodo.hder);
        }
    }
}
