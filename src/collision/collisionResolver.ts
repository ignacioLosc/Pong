import { BALL_SPEED_PERCENTAGE_INCREASE_ON_COLLISION } from "../constants";
import { GameState } from "../main";

export class CollisionResolver {
  gameState: GameState;
  constructor(gameState: GameState) {
    this.gameState = gameState;
  }

  private increasedBallYSpeed() {
    return Math.abs(
      this.gameState.ball.speed.speedX +
        this.gameState.ball.speed.speedX *
          (BALL_SPEED_PERCENTAGE_INCREASE_ON_COLLISION * 0.01)
    );
  }

  private increasedAndMirroredBallXSpeed() {
    return (
      (this.gameState.ball.speed.speedX +
        this.gameState.ball.speed.speedX *
          (BALL_SPEED_PERCENTAGE_INCREASE_ON_COLLISION * 0.01)) *
      -1
    );
  }

  resolveBallBatCollision(collisionType: string) {
    switch (collisionType) {
      case "HALF":
        this.gameState.ball.speed.speedY = 0;
        this.gameState.ball.speed.speedX =
          this.gameState.ball.speed.speedX * -1;
        break;
      case "TOP":
        this.gameState.ball.speed.speedY = this.increasedBallYSpeed() * -1;
        this.gameState.ball.speed.speedX =
          this.increasedAndMirroredBallXSpeed();
        break;
      case "BOTTOM":
        this.gameState.ball.speed.speedY = this.increasedBallYSpeed();
        this.gameState.ball.speed.speedX =
          this.increasedAndMirroredBallXSpeed();
        break;
      default:
    }
  }
}
