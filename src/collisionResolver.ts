import { GameState } from "./main";

export class CollisionResolver {
  gameState: GameState;
  constructor(gameState: GameState) {
    this.gameState = gameState;
  }

  resolveRightBatCollision() {}
  resolveLeftBatCollision() {}
}
