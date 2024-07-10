import { BALL_SPEED_PERCENTAGE_INCREASE_ON_COLLISION } from "../constants";
import { GameState } from "../main";

export class CollisionResolver {
  gameState: GameState;
  constructor(gameState: GameState) {
    this.gameState = gameState;
  }

  private increasedBallYSpeed() {
    return Math.abs(
      this.gameState.ball.getXSpeed() +
        this.gameState.ball.getXSpeed() *
          (BALL_SPEED_PERCENTAGE_INCREASE_ON_COLLISION * 0.01)
    );
  }

  private increasedAndMirroredBallXSpeed() {
    return (
      (this.gameState.ball.getXSpeed() +
        this.gameState.ball.getXSpeed() *
          (BALL_SPEED_PERCENTAGE_INCREASE_ON_COLLISION * 0.01)) *
      -1
    );
  }

  resolveBallBatCollision(collisionType: string) {
    switch (collisionType) {
      case "HALF":
        this.gameState.ball.setYSpeed(0);
        this.gameState.ball.setXSpeed(this.gameState.ball.getXSpeed() * -1);
        break;
      case "TOP":
        this.gameState.ball.setYSpeed(this.increasedBallYSpeed() * -1);
        this.gameState.ball.setXSpeed(this.increasedAndMirroredBallXSpeed());
        break;
      case "BOTTOM":
        this.gameState.ball.setYSpeed(this.increasedBallYSpeed());
        this.gameState.ball.setXSpeed(this.increasedAndMirroredBallXSpeed());
        break;
      default:
    }
  }
}
