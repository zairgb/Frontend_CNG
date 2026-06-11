import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Proveedor } from '../models/proveedor';
import { Producto } from '../models/producto';

export interface SaludoResponse {
    mensaje: string;
}

@Injectable({
    providedIn: 'root',
})
export class Api {
    private http = inject(HttpClient);
    private baseUrl = 'http://localhost/backend_CNG/public/api'; 
    // Cambia esto por tu URL base

    saludar(): Observable<SaludoResponse> {
        return this.http.get<SaludoResponse>(`${this.baseUrl}/saludo`);
    }

    //productos
    obtenerProductos(): Observable<Producto[]> {
        return this.http.get<Producto[]>(`${this.baseUrl}/productos`);
    }

    //proveedores
    obtenerProveedores(): Observable<Proveedor[]> {
        return this.http.get<Proveedor[]>(`${this.baseUrl}/proveedores`);
    }
}
