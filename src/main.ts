import { Ball } from "./ball";
import { Bat } from "./bat";
import { CollisionDetector } from "./collisionDetector";
import { CollisionResolver } from "./collisionResolver";
import { BALL_SPEED, FPS } from "./constants";
import { Position } from "./position";
import { Speed } from "./speed";
import "./style.css";
import { drawDebugLines } from "./utils";

export class GameState {
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
var collisionResolver: CollisionResolver = new CollisionResolver(gameState);
var collisionDetector: CollisionDetector = new CollisionDetector(
  gameState,
  collisionResolver
);

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
  drawDebugLines(ctx, canvas, gameState);
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
  collisionDetector.detectCollisions();
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
        return leftBat.moveUp("LEFT");
      },
    },
    KeyS: {
      pressed: false,
      func: () => {
        return leftBat.moveDown("LEFT", canvas);
      },
    },
    ArrowUp: {
      pressed: false,
      func: () => {
        return rightBat.moveUp("RIGHT");
      },
    },
    ArrowDown: {
      pressed: false,
      func: () => {
        return rightBat.moveDown("RIGHT", canvas);
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
