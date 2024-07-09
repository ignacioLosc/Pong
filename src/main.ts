import { Ball } from "./ball";
import { Bat } from "./bat";
import {
  BALL_H,
  BALL_SPEED,
  BALL_V,
  BAT_H,
  BAT_SPEED,
  BAT_V,
  DEBUG_BALL,
  DEBUG_LEFT_BAT,
  DEBUG_MODE,
  DEBUG_RIGHT_BAT,
  FPS,
  SCALE,
} from "./constants";
import { Position } from "./position";
import { Speed } from "./speed";
import "./style.css";

class GameState {
  leftBat: Bat;
  rightBat: Bat;
  ball: Ball;
  constructor(leftBat: Bat, rightBat: Bat, ball: Ball) {
    this.leftBat = leftBat;
    this.rightBat = rightBat;
    this.ball = ball;
  }
}

var canvas: HTMLCanvasElement;
var ctx: CanvasRenderingContext2D;

// Initialize game state
const leftBat = new Bat(new Position(0, 0));
const rightBat = new Bat(new Position(0, 0));
const ball = new Ball(new Position(0, 0), new Speed(-BALL_SPEED, 0));

var gameState: GameState = new GameState(leftBat, rightBat, ball);

const drawCanvas = (
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
  gameState: GameState
) => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Fill the background
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  leftBat.draw(ctx);
  rightBat.draw(ctx);
  ball.draw(ctx);

  if (DEBUG_MODE) {
    if (DEBUG_LEFT_BAT) {
      // Draw line at half of left bat
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(0, leftBat.position.y + BAT_V * SCALE * 0.5);
      ctx.lineTo(canvas.width, leftBat.position.y + BAT_V * SCALE * 0.5);
      ctx.strokeStyle = "#ff0000";
      ctx.stroke();
      ctx.restore();

      // Draw line at top of left bat
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(0, leftBat.position.y);
      ctx.lineTo(canvas.width, leftBat.position.y);
      ctx.strokeStyle = "#ffF000";
      ctx.stroke();
      ctx.restore();

      // Draw line at bottom of left bat
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(0, leftBat.position.y + BAT_V * SCALE);
      ctx.lineTo(canvas.width, leftBat.position.y + BAT_V * SCALE);
      ctx.strokeStyle = "lightgreen";
      ctx.stroke();
      ctx.restore();

      // Draw x axis at left bat left
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(leftBat.position.x, 0);
      ctx.lineTo(leftBat.position.x, canvas.height);
      ctx.strokeStyle = "#ffF000";
      ctx.stroke();
      ctx.restore();

      // Draw x axis at left bat right
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(leftBat.position.x + BAT_H * SCALE, 0);
      ctx.lineTo(leftBat.position.x + BAT_H * SCALE, canvas.height);
      ctx.strokeStyle = "blue";
      ctx.stroke();
      ctx.restore();
    }

    if (DEBUG_RIGHT_BAT) {
      // Draw x axis at right bat right
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(rightBat.position.x + BAT_H * SCALE, 0);
      ctx.lineTo(rightBat.position.x + BAT_H * SCALE, canvas.height);
      ctx.strokeStyle = "blue";
      ctx.stroke();
      ctx.restore();

      // Draw x axis at right bat left
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(rightBat.position.x, 0);
      ctx.lineTo(rightBat.position.x, canvas.height);
      ctx.strokeStyle = "#ffF000";
      ctx.stroke();
      ctx.restore();

      // Draw line at top of right bat
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(0, rightBat.position.y);
      ctx.lineTo(canvas.width, rightBat.position.y);
      ctx.strokeStyle = "#ffF000";
      ctx.stroke();
      ctx.restore();

      // Draw line at bottom of right bat
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(0, rightBat.position.y + BAT_V * SCALE);
      ctx.lineTo(canvas.width, rightBat.position.y + BAT_V * SCALE);
      ctx.strokeStyle = "lightgreen";
      ctx.stroke();
      ctx.restore();
    }

    if (DEBUG_BALL) {
      // Draw y axis at ball top
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(0, ball.position.y);
      ctx.lineTo(canvas.width, ball.position.y);
      ctx.strokeStyle = "lightblue";
      ctx.stroke();
      ctx.restore();

      // Draw x axis at ball left
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(ball.position.x, 0);
      ctx.lineTo(ball.position.x, canvas.height);
      ctx.strokeStyle = "lightgreen";
      ctx.stroke();
      ctx.restore();

      // Draw y axis at ball bottom
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(0, ball.position.y + BALL_V * SCALE);
      ctx.lineTo(canvas.width, ball.position.y + BALL_V * SCALE);
      ctx.strokeStyle = "red";
      ctx.stroke();
      ctx.restore();

      // Draw x axis at ball right
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(ball.position.x + BALL_H * SCALE, 0);
      ctx.lineTo(ball.position.x + BALL_H * SCALE, canvas.height);
      ctx.strokeStyle = "yellow";
      ctx.stroke();
      ctx.restore();
    }
  }
};

window.addEventListener("resize", () => drawCanvas(canvas, ctx, gameState));
window.onload = () => {
  let container = document.createElement("div");
  container.id = "container";
  container.className = "container";
  canvas = document.createElement("canvas");
  canvas.id = "game";
  const width = window.innerWidth;
  const height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
  container.appendChild(canvas);
  document.body.appendChild(container);
  ctx = canvas.getContext("2d");
  // Initialize objects position now that canvas
  // is defined

  const LEFT_BAT_STARTING_H = 0 + canvas.width / 6;
  const LEFT_BAT_STARTING_V = 0 + canvas.height / 2;

  const RIGHT_BAT_STARTING_H = canvas.width - canvas.width / 6;
  const RIGHT_BAT_STARTING_V = 0 + canvas.height / 2;

  leftBat.position.x = LEFT_BAT_STARTING_H;
  leftBat.position.y = LEFT_BAT_STARTING_V;

  rightBat.position.x = RIGHT_BAT_STARTING_H;
  rightBat.position.y = RIGHT_BAT_STARTING_V;

  const BALL_STARTING_H = canvas.width / 2;
  const BALL_STARTING_V = canvas.height / 2;

  ball.position.x = BALL_STARTING_H;
  ball.position.y = BALL_STARTING_V;
  ball.setInitialPosition(new Position(BALL_STARTING_H, BALL_STARTING_V));
  gameLoop();
  setInterval(gameLoop, 1000 / FPS);
};

const update = (
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
  gameState: GameState
) => {
  ball.moveProcess(canvas.width, canvas.height);
  executeBatMoves();
  ball.checkBatCollision(leftBat.position, rightBat.position);
};

const gameLoop = () => {
  update(canvas, ctx, gameState);
  drawCanvas(canvas, ctx, gameState);
};
const executeBatMoves = () => {
  Object.keys(controller).forEach((key) => {
    controller[key].pressed && controller[key].func();
  });
};
var controller: { [keyName: string]: { pressed: boolean; func: () => void } } =
  {
    KeyW: {
      pressed: false,
      func: () => {
        if (leftBat.position.y - BAT_SPEED <= 0) {
          leftBat.position.y = 0;
        } else {
          leftBat.position.y -= BAT_SPEED;
        }
      },
    },
    KeyS: {
      pressed: false,
      func: () => {
        if (leftBat.position.y + BAT_SPEED + BAT_V * SCALE >= canvas.height) {
          leftBat.position.y = canvas.height - BAT_V * SCALE;
        } else {
          leftBat.position.y += BAT_SPEED;
        }
      },
    },
    ArrowUp: {
      pressed: false,
      func: () => {
        if (rightBat.position.y - BAT_SPEED <= 0) {
          rightBat.position.y = 0;
        } else {
          rightBat.position.y -= BAT_SPEED;
        }
      },
    },
    ArrowDown: {
      pressed: false,
      func: () => {
        if (rightBat.position.y + BAT_SPEED + BAT_V * SCALE >= canvas.height) {
          rightBat.position.y = canvas.height - BAT_V * SCALE;
        } else {
          rightBat.position.y += BAT_SPEED;
        }
      },
    },
  };
window.addEventListener("keydown", (event) => {
  if (controller[event.code]) {
    controller[event.code].pressed = true;
  }
});
window.addEventListener("keyup", (e) => {
  if (controller[e.code]) {
    controller[e.code].pressed = false;
  }
});
