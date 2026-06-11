import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Api } from './services/api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('frontend_CNG');
  mensaje = signal('');

  private api = inject(Api);

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
