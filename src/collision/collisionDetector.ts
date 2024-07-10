import { CollisionResolver } from "./collisionResolver";
import { BALL_H, BALL_V, BAT_H, BAT_V, SCALE } from "../constants";
import { GameState } from "../main";
import { Bat } from "../objects/bat";

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

  checkYAxisBatCollision(bat: Bat) {
    if (this.gameState.ball.getYHalfPosition() === bat.getYHalfPosition()) {
      return "HALF";
    } else if (
      this.gameState.ball.getYHalfPosition() > bat.getYHalfPosition() &&
      this.gameState.ball.getYTopPosition() <= bat.getYBottomPosition()
    ) {
      return "BOTTOM";
    } else if (
      this.gameState.ball.getYHalfPosition() <= bat.getYHalfPosition() &&
      this.gameState.ball.getYBottomPosition() >= bat.getYTopPosition()
    ) {
      return "TOP";
    }
  }

  checkRightBatCollision() {
    if (
      this.gameState.ball.getXRightPosition() >=
        this.gameState.rightBat.getXLeftPosition() &&
      this.gameState.ball.getXRightPosition() <=
        this.gameState.rightBat.getXRightPosition() &&
      this.gameState.ball.getXSpeed() > 0
    ) {
      return this.checkYAxisBatCollision(this.gameState.rightBat);
    } else {
      return null;
    }
  }

  checkLeftBatCollision() {
    if (
      this.gameState.ball.getXLeftPosition() <=
        this.gameState.leftBat.getXRightPosition() &&
      this.gameState.ball.getXLeftPosition() >=
        this.gameState.leftBat.getXLeftPosition() &&
      this.gameState.ball.getXSpeed() < 0
    ) {
      return this.checkYAxisBatCollision(this.gameState.leftBat);
    } else {
      return null;
    }
  }
}
