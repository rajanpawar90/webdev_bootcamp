// setup canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// function to generate random number

function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

class Shape {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
    }
}

class EvilCircle extends Shape {
    constructor(x, y, color, size) {
        super(x, y, size);
        this.color = color;
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = 'teal';
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
    }
}


class Ball extends Shape {

    constructor(x, y, velX, velY, color, size) {
        super(x, y, size);
        this.velX = velX;
        this.velY = velY;
        this.color = color;
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
    }

    update() {
        if ((this.x + this.size) >= width) {
            this.velX = -(this.velX);
        }

        if ((this.x - this.size) <= 0) {
            this.velX = -(this.velX);
        }

        if ((this.y + this.size) >= height) {
            this.velY = -(this.velY);
        }

        if ((this.y - this.size) <= 0) {
            this.velY = -(this.velY);
        }

        this.x += this.velX;
        this.y += this.velY;
    }

    // collisionDetect() {
    //     for (let j = 0; j < balls.length; j++) {
    //         if (!(this === balls[j])) {
    //             const dx = this.x - balls[j].x;
    //             const dy = this.y - balls[j].y;
    //             const distance = Math.sqrt(dx * dx + dy * dy);

    //             if (distance < this.size + balls[j].size) {
    //                 balls[j].color = this.color = 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')';
    //             }
    //         }
    //     }
    // }

    collisionDetect(evilBall) {
        const evil_x = evilBall.x;
        const evil_y = evilBall.y;

        for (let j = 0; j < balls.length; j++) {
            const evil_dx = balls[j].x - evil_x;
            const evil_dy = balls[j].y - evil_y;
            const evil_distance = Math.sqrt(evil_dx * evil_dx + evil_dy * evil_dy);

            if (evil_distance < evilBall.size + balls[j].size) {
                balls[j].destroy()
                //delete balls[j]; 
            } else {
                if (!(this === balls[j])) {
                    const dx = this.x - balls[j].x;
                    const dy = this.y - balls[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < this.size + balls[j].size) {
                        balls[j].color = this.color = 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')';
                    }
                }

            }

        }
    }
}


var balls = [];

while (balls.length < 25) {
    const size = random(10, 20);
    let ball = new Ball(
        // ball position always drawn at least one ball width
        // away from the edge of the canvas, to avoid drawing errors
        random(0 + size, width - size),
        random(0 + size, height - size),
        random(-7, 7),
        random(-7, 7),
        'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')',
        size
    );

    balls.push(ball);
}

function loop(evilBall) {
    console.log(evilBall.x);
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
    ctx.fillRect(0, 0, width, height);
    evilBall.draw(); ///////Why this is not a function?????????????????
    for (let i = 0; i < balls.length; i++) {
        balls[i].draw();
        balls[i].update();
        balls[i].collisionDetect(evilBall);
    }

    requestAnimationFrame(loop);
}

const size = random(10, 20);
let evilBall = new EvilCircle(
    random(0 + size, width - size),
    random(0 + size, height - size),
    'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')',
    random(10, 20)
);

//evilBall.draw()

loop(evilBall);
