import { Proveedor } from "./proveedor";

export interface Producto {
    id: number;
    producto: string;
    cantidad: number;
    promocion: boolean;
    fecha_fin: string | null;
    proveedores: Proveedor[];
}