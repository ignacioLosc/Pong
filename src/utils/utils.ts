import {
  BALL_H,
  BALL_V,
  BAT_H,
  BAT_V,
  DEBUG_BALL,
  DEBUG_LEFT_BAT,
  DEBUG_MODE,
  DEBUG_RIGHT_BAT,
  SCALE,
} from "../constants";
import { GameState } from "../main";

export const drawDebugLines = (
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  gameState: GameState
) => {
  if (DEBUG_MODE) {
    if (DEBUG_LEFT_BAT) {
      // Draw line at half of left bat
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(0, gameState.leftBat.position.y + BAT_V * SCALE * 0.5);
      ctx.lineTo(
        canvas.width,
        gameState.leftBat.position.y + BAT_V * SCALE * 0.5
      );
      ctx.strokeStyle = "#ff0000";
      ctx.stroke();
      ctx.restore();

      // Draw line at top of left bat
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(0, gameState.leftBat.position.y);
      ctx.lineTo(canvas.width, gameState.leftBat.position.y);
      ctx.strokeStyle = "#ffF000";
      ctx.stroke();
      ctx.restore();

      // Draw line at bottom of left bat
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(0, gameState.leftBat.position.y + BAT_V * SCALE);
      ctx.lineTo(canvas.width, gameState.leftBat.position.y + BAT_V * SCALE);
      ctx.strokeStyle = "lightgreen";
      ctx.stroke();
      ctx.restore();

      // Draw x axis at left bat left
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(gameState.leftBat.position.x, 0);
      ctx.lineTo(gameState.leftBat.position.x, canvas.height);
      ctx.strokeStyle = "#ffF000";
      ctx.stroke();
      ctx.restore();

      // Draw x axis at left bat right
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(gameState.leftBat.position.x + BAT_H * SCALE, 0);
      ctx.lineTo(gameState.leftBat.position.x + BAT_H * SCALE, canvas.height);
      ctx.strokeStyle = "blue";
      ctx.stroke();
      ctx.restore();
    }

    if (DEBUG_RIGHT_BAT) {
      // Draw x axis at right bat right
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(gameState.rightBat.position.x + BAT_H * SCALE, 0);
      ctx.lineTo(gameState.rightBat.position.x + BAT_H * SCALE, canvas.height);
      ctx.strokeStyle = "blue";
      ctx.stroke();
      ctx.restore();

      // Draw x axis at right bat left
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(gameState.rightBat.position.x, 0);
      ctx.lineTo(gameState.rightBat.position.x, canvas.height);
      ctx.strokeStyle = "#ffF000";
      ctx.stroke();
      ctx.restore();

      // Draw line at top of right bat
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(0, gameState.rightBat.position.y);
      ctx.lineTo(canvas.width, gameState.rightBat.position.y);
      ctx.strokeStyle = "#ffF000";
      ctx.stroke();
      ctx.restore();

      // Draw line at bottom of right bat
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(0, gameState.rightBat.position.y + BAT_V * SCALE);
      ctx.lineTo(canvas.width, gameState.rightBat.position.y + BAT_V * SCALE);
      ctx.strokeStyle = "lightgreen";
      ctx.stroke();
      ctx.restore();
    }

    if (DEBUG_BALL) {
      // Draw y axis at ball top
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(0, gameState.ball.position.y);
      ctx.lineTo(canvas.width, gameState.ball.position.y);
      ctx.strokeStyle = "lightblue";
      ctx.stroke();
      ctx.restore();

      // Draw x axis at ball left
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(gameState.ball.position.x, 0);
      ctx.lineTo(gameState.ball.position.x, canvas.height);
      ctx.strokeStyle = "lightgreen";
      ctx.stroke();
      ctx.restore();

      // Draw y axis at ball bottom
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(0, gameState.ball.position.y + BALL_V * SCALE);
      ctx.lineTo(canvas.width, gameState.ball.position.y + BALL_V * SCALE);
      ctx.strokeStyle = "red";
      ctx.stroke();
      ctx.restore();

      // Draw x axis at ball right
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(gameState.ball.position.x + BALL_H * SCALE, 0);
      ctx.lineTo(gameState.ball.position.x + BALL_H * SCALE, canvas.height);
      ctx.strokeStyle = "yellow";
      ctx.stroke();
      ctx.restore();
    }
  }
};
