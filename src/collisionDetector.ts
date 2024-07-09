import { CollisionResolver } from "./collisionResolver";
import { BALL_H, BALL_V, BAT_H, BAT_V, SCALE } from "./constants";
import { GameState } from "./main";

export class CollisionDetector {
  gameState: GameState;
  collisionResolver: CollisionResolver;
  constructor(gameState: GameState, collisionResolver: CollisionResolver) {
    this.gameState = gameState;
    this.collisionResolver = collisionResolver;
  }

  detectCollisions() {
    this.checkRightBatCollision();
    this.checkLeftBatCollision();
    // if (this.checkRightBatCollision()) {
    //   this.collisionResolver.resolveRightBatCollision();
    // } else if (this.checkLeftBatCollision()) {
    //   this.collisionResolver.resolveLeftBatCollision();
    // }
  }

  checkRightBatCollision() {
    if (
      this.gameState.ball.position.x + BALL_H * SCALE >=
        this.gameState.rightBat.position.x &&
      this.gameState.ball.position.x + BALL_H * SCALE <=
        this.gameState.rightBat.position.x + BAT_H * SCALE &&
      this.gameState.ball.speed.speedX > 0
    ) {
      if (
        this.gameState.ball.position.y * 0.5 ===
        this.gameState.rightBat.position.y + BAT_V * SCALE * 0.5
      ) {
        this.gameState.ball.speed.speedY = 0;
        this.gameState.ball.speed.speedX =
          this.gameState.ball.speed.speedX * -1;
      } else if (
        (this.gameState.ball.position.y >
          this.gameState.rightBat.position.y + BAT_V * SCALE * 0.5 &&
          this.gameState.ball.position.y <=
            this.gameState.rightBat.position.y + BAT_V * SCALE * 0.5 * 2) ||
        (this.gameState.ball.position.y + BALL_V * SCALE >
          this.gameState.rightBat.position.y + BAT_V * SCALE * 0.5 &&
          this.gameState.ball.position.y + BALL_V * SCALE <=
            this.gameState.rightBat.position.y + BAT_V * SCALE * 0.5 * 2)
      ) {
        // console.log("lower half");
        this.gameState.ball.speed.speedY = Math.abs(
          this.gameState.ball.speed.speedX +
            this.gameState.ball.speed.speedX * 0.1
        );
        this.gameState.ball.speed.speedX =
          (this.gameState.ball.speed.speedX +
            this.gameState.ball.speed.speedX * 0.1) *
          -1;
      } else if (
        (this.gameState.ball.position.y <=
          this.gameState.rightBat.position.y + BAT_V * SCALE * 0.5 &&
          this.gameState.ball.position.y >=
            this.gameState.rightBat.position.y) ||
        (this.gameState.ball.position.y + BALL_V * SCALE <=
          this.gameState.rightBat.position.y + BAT_V * SCALE * 0.5 &&
          this.gameState.ball.position.y + BALL_V * SCALE >=
            this.gameState.rightBat.position.y)
      ) {
        // console.log("upper half");
        this.gameState.ball.speed.speedY =
          Math.abs(
            this.gameState.ball.speed.speedX +
              this.gameState.ball.speed.speedX * 0.1
          ) * -1;
        this.gameState.ball.speed.speedX =
          (this.gameState.ball.speed.speedX +
            this.gameState.ball.speed.speedX * 0.1) *
          -1;
      }
    }
  }

  checkLeftBatCollision() {
    if (
      this.gameState.ball.position.x <=
        this.gameState.leftBat.position.x + BAT_H * SCALE &&
      this.gameState.ball.position.x >= this.gameState.leftBat.position.x &&
      this.gameState.ball.speed.speedX < 0
    ) {
      if (
        this.gameState.ball.position.y ===
        this.gameState.leftBat.position.y + BAT_V * SCALE * 0.5
      ) {
        this.gameState.ball.speed.speedY = 0;
        this.gameState.ball.speed.speedX =
          this.gameState.ball.speed.speedX * -1;
      } else if (
        (this.gameState.ball.position.y >
          this.gameState.leftBat.position.y + BAT_V * SCALE * 0.5 &&
          this.gameState.ball.position.y <=
            this.gameState.leftBat.position.y + BAT_V * SCALE * 0.5 * 2) ||
        (this.gameState.ball.position.y + BALL_V * SCALE >
          this.gameState.leftBat.position.y + BAT_V * SCALE * 0.5 &&
          this.gameState.ball.position.y + BALL_V * SCALE <=
            this.gameState.leftBat.position.y + BAT_V * SCALE * 0.5 * 2)
      ) {
        // console.log("lower half");
        this.gameState.ball.speed.speedY = Math.abs(
          this.gameState.ball.speed.speedX +
            this.gameState.ball.speed.speedX * 0.1
        );
        this.gameState.ball.speed.speedX =
          (this.gameState.ball.speed.speedX +
            this.gameState.ball.speed.speedX * 0.1) *
          -1;
      } else if (
        (this.gameState.ball.position.y <=
          this.gameState.leftBat.position.y + BAT_V * SCALE * 0.5 &&
          this.gameState.ball.position.y >=
            this.gameState.leftBat.position.y) ||
        (this.gameState.ball.position.y + BALL_V * SCALE <=
          this.gameState.leftBat.position.y + BAT_V * SCALE * 0.5 &&
          this.gameState.ball.position.y + BALL_V * SCALE >=
            this.gameState.leftBat.position.y)
      ) {
        // console.log("upper half");
        this.gameState.ball.speed.speedY =
          Math.abs(
            this.gameState.ball.speed.speedX +
              this.gameState.ball.speed.speedX * 0.1
          ) * -1;
        this.gameState.ball.speed.speedX =
          (this.gameState.ball.speed.speedX +
            this.gameState.ball.speed.speedX * 0.1) *
          -1;
      }
    }
  }
}
