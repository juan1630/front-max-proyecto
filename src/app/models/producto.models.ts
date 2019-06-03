export class Producto {
    constructor(
        public nombre: string,
        public categoria: string,
        public modelo: string,
        public marca: string,
        public precioCompra: string,
        public precioVenta: string,
        public disponible: number
     ) {}
}
