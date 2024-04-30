import { Position } from "./position";
import { BALL_H, BALL_V, BAT_H, BAT_V, SCALE } from "./constants";

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
    }
  }

  checkRightBatCollision(rightBatPosition: Position) {
    if (this.position.x >= rightBatPosition.x) {
      this.position.x = rightBatPosition.x;
      this.speed.speedX = this.speed.speedX * -1;
    }
  }

  checkLeftBatCollision(leftBatPosition: Position) {
    if (
      this.position.x <= leftBatPosition.x + BAT_H * SCALE &&
      this.position.x >= leftBatPosition.x - BAT_H * SCALE
    ) {
      if (this.position.y === leftBatPosition.y + BAT_V * SCALE * 0.5) {
        this.speed.speedY = 0;
        this.position.x = leftBatPosition.x;
        this.speed.speedX = this.speed.speedX * -1;
      } else if (
        this.position.y > leftBatPosition.y + BAT_V * SCALE * 0.5 &&
        this.position.y <= leftBatPosition.y + BAT_V * SCALE * 0.5 * 2
      ) {
        // console.log("lower half");
        this.speed.speedY = Math.abs(this.speed.speedX);
        this.position.x = leftBatPosition.x;
        this.speed.speedX = this.speed.speedX * -1;
      } else if (
        this.position.y <= leftBatPosition.y + BAT_V * SCALE * 0.5 &&
        this.position.y >= leftBatPosition.y
      ) {
        // console.log("upper half");
        this.speed.speedY = Math.abs(this.speed.speedX) * -1;
        this.position.x = leftBatPosition.x;
        this.speed.speedX = this.speed.speedX * -1;
      }
    }
  }

  checkBatCollision(leftBatPosition: Position, rightBatPosition: Position) {
    //console.log(this.position.y);
    // console.log(rightBatPosition.y);
    this.checkRightBatCollision(rightBatPosition);
    this.checkLeftBatCollision(leftBatPosition);
    // if (
    //   this.position.x >= rightBatPosition.x &&
    //   this.position.y >= rightBatPosition.y - (BAT_V * SCALE) / 2 &&
    //   this.position.y < rightBatPosition.y
    // ) {
    //   this.speed.speedY = this.speed.speedX * -1;
    //   this.speed.speedX = this.speed.speedX * -1;
    // }

    // else if (
    //   this.position.x >= rightBatPosition.x &&
    //   this.position.y <= rightBatPosition.y + (BAT_V * SCALE) / 2 &&
    //   this.position.y > rightBatPosition.y
    // ) {
    //   this.speed.speedY = this.speed.speedX;
    //   this.speed.speedX = this.speed.speedX * -1;
    // } else if (
    //   this.position.x <= leftBatPosition.x &&
    //   this.position.y >= leftBatPosition.y - (BAT_V * SCALE) / 2 &&
    //   this.position.y < leftBatPosition.y
    // ) {
    //   this.speed.speedY = this.speed.speedX * -1;
    //   this.speed.speedX = this.speed.speedX * -1;
    // } else if (
    //   this.position.x <= leftBatPosition.x &&
    //   this.position.y <= leftBatPosition.y + (BAT_V * SCALE) / 2 &&
    //   this.position.y > leftBatPosition.y
    // ) {
    //   this.speed.speedY = this.speed.speedX;
    //   this.speed.speedX = this.speed.speedX * -1;
    // }
  }

  checkCanvasCollision(limitY: number) {
    if (this.position.y >= limitY || this.position.y <= 0) {
      this.speed.speedY = this.speed.speedY * -1;
    }
  }
}
