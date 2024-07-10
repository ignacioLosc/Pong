import { Position } from "../position";
import { BALL_H, BALL_SPEED, BALL_V, SCALE } from "../constants";
import { Speed } from "../speed";

export class Ball {
  position: Position;
  initialPosition: Position;
  speed: Speed;
  constructor(position: Position, speed: Speed) {
    this.position = position;
    this.speed = speed;
  }

  getYSpeed() {
    return this.speed.speedY;
  }

  getXSpeed() {
    return this.speed.speedX;
  }

  setYSpeed(speedY: number) {
    this.speed.speedY = speedY;
  }

  setXSpeed(speedX: number) {
    this.speed.speedX = speedX;
  }

  getYTopPosition() {
    return this.position.y;
  }

  getYHalfPosition() {
    this.position.y + BALL_V * SCALE * 0.5;
  }

  getYBottomPosition() {
    return this.position.y + BALL_V * SCALE;
  }

  getXLeftPosition() {
    return this.position.x;
  }

  getXRightPosition() {
    return this.position.x + BALL_V * SCALE;
  }

  setInitialPosition(initialPosition: Position) {
    this.initialPosition = initialPosition;
  }

  setBallSpeed(ballSpeed: Speed) {
    this.speed = ballSpeed;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.fillStyle = "white";
    ctx.fillRect(
      this.position.x,
      this.position.y,
      BALL_H * SCALE,
      BALL_V * SCALE
    );
    ctx.restore();
  }

  moveProcess(limitX: number, limitY: number) {
    if (this.position.y + this.speed.speedY > limitY) {
      this.position.y = limitY;
    } else if (this.position.y + this.speed.speedY < 0) {
      this.position.y = 0;
    } else {
      this.position.y += this.speed.speedY;
    }
    this.position.x += this.speed.speedX;
    this.checkCanvasCollision(limitY);
    if (this.position.x > limitX || this.position.x < 0) {
      this.position = new Position(
        this.initialPosition.x,
        this.initialPosition.y
      );
      this.setBallSpeed(new Speed(-BALL_SPEED, 0));
    }
  }

  checkCanvasCollision(limitY: number) {
    if (this.position.y >= limitY || this.position.y <= 0) {
      this.speed.speedY = this.speed.speedY * -1;
    }
  }
}
