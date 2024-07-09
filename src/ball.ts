import { Position } from "./position";
import { BALL_H, BALL_SPEED, BALL_V, BAT_H, BAT_V, SCALE } from "./constants";
import { Speed } from "./speed";

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
