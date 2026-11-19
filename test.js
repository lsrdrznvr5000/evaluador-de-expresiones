class Nodo {
    constructor(dato) {
        this.dato = dato;
        this.anterior = null;
        this.siguiente = null;
        this.hizq = null;
        this.hder = null;
    }
}

class Expression {
    constructor() {
        this.primero = null;
        this.ultimo = null;
    }

    // Agrega al FINAL de la lista enlazada doble
    agregar(dato) {
        const nuevo = new Nodo(dato);
        if (this.primero === null) {
            this.primero = nuevo;
            this.ultimo = nuevo;
        } else {
            nuevo.anterior = this.ultimo;
            this.ultimo.siguiente = nuevo;
            this.ultimo = nuevo;
        }
    }

    // 2 pasadas: primero * y /, luego + y -
    evaluar() {
        this._procesar(['*', '/']);
        this._procesar(['+', '-']);
    }

    _procesar(ops) {
        let nodo = this.primero;
        while (nodo !== null) {
            if (ops.includes(nodo.dato)) {
                const izq = nodo.anterior;
                const der = nodo.siguiente;

                if (izq !== null && der !== null) {
                    nodo.hizq = izq;
                    nodo.hder = der;
                    this._extraer(izq);
                    this._extraer(der);
                    // izq y der ya no forman parte de la lista
                    izq.anterior = null;
                    izq.siguiente = null;
                    der.anterior = null;
                    der.siguiente = null;
                    // nodo queda "soltero" en la lista, seguimos después de él
                    nodo = nodo.siguiente;
                } else {
                    nodo = nodo.siguiente;
                }
            } else {
                nodo = nodo.siguiente;
            }
        }
    }

    // Extrae un nodo de la lista (manejando inicio, intermedio y fin)
    _extraer(nodo) {
        if (nodo === this.primero && nodo === this.ultimo) {
            // Único elemento
            this.primero = null;
            this.ultimo = null;
        } else if (nodo === this.primero) {
            // Primer elemento
            this.primero = nodo.siguiente;
            this.primero.anterior = null;
        } else if (nodo === this.ultimo) {
            // Último elemento
            this.ultimo = nodo.anterior;
            this.ultimo.siguiente = null;
        } else {
            // Elemento intermedio
            nodo.anterior.siguiente = nodo.siguiente;
            nodo.siguiente.anterior = nodo.anterior;
        }
    }

    // Recorrido preorden del árbol (raíz, izq, der)
    preOrder(nodo) {
        if (nodo === null || nodo === undefined) return;
        console.log(nodo.dato);
        this.preOrder(nodo.hizq);
        this.preOrder(nodo.hder);
    }
}

