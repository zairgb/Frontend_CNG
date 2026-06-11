import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Api } from './services/api';
import { Producto } from './models/producto';
import { Proveedor } from './models/proveedor';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgClass],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('frontend_CNG');
  mensaje = signal('');

  private api = inject(Api);

  productos: Producto[] = [];
  proveedores: Proveedor[] = [];

  ngOnInit() {
    this.cargarProductos();
    this.cargarProveedores();
  }

  cargarProductos() {
    this.api.obtenerProductos().subscribe({
      next: (res: any) => {
        console.log('Respuesta completa:', res);
        console.log('Es array:', Array.isArray(res));
        console.log('Es array data:', Array.isArray(res.data));

        this.productos = res.data;

        console.log('Productos asignados:', this.productos);
      },
      error: (error) => {
        console.error('Error al cargar productos:', error);
      }
    });
  }

  cargarProveedores() {
    this.api.obtenerProveedores().subscribe({
      next: (res: any) => {
        console.log('Proveedores:', res);
        this.proveedores = res.data;
      },
      error: (error) => {
        console.error('Error al cargar proveedores:', error);
      }
    });
  }

  constructor() {
    this.api.saludar().subscribe({
      next: (res) => {
        console.log('Respuesta del saludo:', res);
        this.mensaje.set(res.mensaje);
        console.log('Mensaje:', this.mensaje);
      },
      error: (err) => {
        console.error('Error al obtener el saludo:', err);
      }
    });
  }
}
