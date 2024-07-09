import { GameState } from "../main";

export class CollisionResolver {
  gameState: GameState;
  constructor(gameState: GameState) {
    this.gameState = gameState;
  }

  resolveBallBatCollision(collisionType: string) {
    switch (collisionType) {
      case "HALF":
        this.gameState.ball.speed.speedY = 0;
        this.gameState.ball.speed.speedX =
          this.gameState.ball.speed.speedX * -1;
        break;
      case "TOP":
        this.gameState.ball.speed.speedY =
          Math.abs(
            this.gameState.ball.speed.speedX +
              this.gameState.ball.speed.speedX * 0.1
          ) * -1;
        this.gameState.ball.speed.speedX =
          (this.gameState.ball.speed.speedX +
            this.gameState.ball.speed.speedX * 0.1) *
          -1;
        break;
      case "BOTTOM":
        this.gameState.ball.speed.speedY = Math.abs(
          this.gameState.ball.speed.speedX +
            this.gameState.ball.speed.speedX * 0.1
        );
        this.gameState.ball.speed.speedX =
          (this.gameState.ball.speed.speedX +
            this.gameState.ball.speed.speedX * 0.1) *
          -1;
        break;
      default:
    }
  }
}
