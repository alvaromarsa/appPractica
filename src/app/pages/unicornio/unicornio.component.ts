import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-unicornio',
  templateUrl: './unicornio.component.html',
  styleUrl: './unicornio.component.css'
})
export class UnicornioComponent implements AfterViewInit {
  estilos = {
    width: '100%',
    height: '500px'
  };

  @ViewChild('scratchCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  private isRascando = false;

  ngAfterViewInit() {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;

    // Ajustamos el tamaño del canvas
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Dibujamos la imagen de cobertura
    const img = new Image();
    img.src = 'assets/unicornio.jpg';
    img.onload = () => {
      this.ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      this.ctx.globalCompositeOperation = 'destination-out'; // Permite borrar con el ratón
    };

    // Eventos del ratón
    canvas.addEventListener('mousedown', () => this.isRascando = true);
    canvas.addEventListener('mouseup', () => this.isRascando = false);
    canvas.addEventListener('mousemove', (event) => this.rascar(event));
  }

  rascar(event: MouseEvent) {
    if (!this.isRascando) return;

    const canvas = this.canvasRef.nativeElement;
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    this.ctx.beginPath();
    this.ctx.arc(x, y, 20, 0, Math.PI * 2); // Tamaño del área rascada
    this.ctx.fill();

    this.verificarRascado();
  }

  verificarRascado() {
    const canvas = this.canvasRef.nativeElement;
    const imageData = this.ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;
    let pixelsTransparentes = 0;

    for (let i = 3; i < pixels.length; i += 4) {
      if (pixels[i] === 0) pixelsTransparentes++; // Contamos los píxeles borrados
    }

    const porcentajeRascado = (pixelsTransparentes / (pixels.length / 4)) * 100;

    if (porcentajeRascado > 75) {
      canvas.style.opacity = '0'; // Hace desaparecer la cobertura cuando se rasca más del 50%
    }
  }

}
