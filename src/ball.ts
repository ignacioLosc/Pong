import { Position } from "./position";
import { BALL_H, BALL_V } from "./constants";

export class Speed {
  speedX: number;
  speedY: number;
  constructor(speedX: number, speedY: number) {
    this.speedX = speedX;
    this.speedY = speedY;
  }
}
export class Ball {
  position: Position;
  initialPosition: Position;
  speed: Speed;
  constructor(position: Position, speed: Speed) {
    this.position = position;
    this.speed = speed;
  }

  setInitialPosition(initialPosition: Position) {
    this.initialPosition = initialPosition;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.fillStyle = "white";
    ctx.fillRect(this.position.x, this.position.y, BALL_H * 10, BALL_V * 10);
    ctx.restore();
  }

  moveProcess(limitX: number, limitY: number) {
    this.position.x += this.speed.speedX;
    this.position.y += this.speed.speedY;
    if (
      this.position.x > limitX ||
      this.position.x < 0 ||
      this.position.y > limitY ||
      this.position.y < 0
    ) {
      this.position = new Position(
        this.initialPosition.x,
        this.initialPosition.y
      );
    }
  }

  checkBatCollision(leftBatPosition: Position, rightBatPosition: Position) {
    if (
      this.position.x === leftBatPosition.x ||
      this.position.x === rightBatPosition.x
    ) {
      this.speed.speedX = this.speed.speedX * -1;
    }
    return false;
  }
}
