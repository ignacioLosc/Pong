import { CollisionResolver } from "./collisionResolver";
import { BALL_H, BALL_V, BAT_H, BAT_V, SCALE } from "../constants";
import { GameState } from "../main";

export class CollisionDetector {
  gameState: GameState;
  collisionResolver: CollisionResolver;
  constructor(gameState: GameState, collisionResolver: CollisionResolver) {
    this.gameState = gameState;
    this.collisionResolver = collisionResolver;
  }

  detectCollisions() {
    const rightBatCollision = this.checkRightBatCollision();
    if (rightBatCollision) {
      this.collisionResolver.resolveBallBatCollision(rightBatCollision);
    }
    const leftBatCollision = this.checkLeftBatCollision();
    if (leftBatCollision) {
      this.collisionResolver.resolveBallBatCollision(leftBatCollision);
    }
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
        return "HALF";
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
        return "BOTTOM";
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
        return "TOP";
      }
    } else {
      return null;
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
        return "HALF";
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
        return "BOTTOM";
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
        return "TOP";
      }
    } else {
      return null;
    }
  }
}
