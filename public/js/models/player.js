class Player {
    constructor({x , y , radius, color, ship, angle}) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.lifes = 0;
        this.bullets = 0;
        this.image = new Image();
        this.image.src = ship;
        this.angle = angle;  // Ángulo inicial
    }

    draw() {
        const size = this.radius * 2;
        const half = size / 2;
    
        context.save();
        context.translate(this.x, this.y);
        context.rotate(this.angle || 0);  // Agrega angle al jugador
        context.rotate((this.angle || 0) + Math.PI / 2);
        context.drawImage(this.image, -half, -half, size, size);
        context.restore();
    }
}