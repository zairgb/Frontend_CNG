import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface SaludoResponse {
    mensaje: string;
}

@Injectable({
    providedIn: 'root',
})
export class Api {
    private http = inject(HttpClient);
    private baseUrl = 'http://backend_CNG.test/api'; 
    // Cambia esto por tu URL base

    saludar(): Observable<SaludoResponse> {
        return this.http.get<SaludoResponse>(`${this.baseUrl}/saludo`);
    }
}
