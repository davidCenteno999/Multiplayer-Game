class PowerUp {
    constructor({ x, y, radius, type }) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.type = type; 
        this.image = new Image();
        type === 'extraLife'
            ? this.image.src = '/images/powerups/battery.png'
            : this.image.src = '/images/powerups/bullet.png';
    }
    draw() {
        const size = this.radius * 4;
        const half = size / 2;

        context.drawImage(this.image, this.x - half, this.y - half, size, size);
    }
}