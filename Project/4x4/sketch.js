// Source image to chop up
let source;

// Tiles configuration
let tiles = []; // array
let cols = 4;
let rows = 4;
let w, h;

// Order of tiles
let board = [];

// Loading the image
// image를 가져옴 -> array로 바꾸기
function preload() {
  source = loadImage("ttt.png");
}

// 기본 셋업
// width = 400, height = 400
function setup() {
  createCanvas(400, 400);
  // pixel dimensions of each tiles
  // w: width / cols 해서 칸별 width로 설정
  // h: height / rows 해서 칸별 height로 설정 
  w = width / cols;
  h = height / rows;
  
  // Chop up source image into tiles
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * w;
      let y = j * h;
      let img = createImage(w, h);  // img 생성
      img.copy(source, x, y, w, h, 0, 0, w, h); 
      // copy(srcImg, sx, sy, sw, sh, dx,dy, dw, dh);
      let index = i + j * cols;
      board.push(index);
      let tile = new Tile(index, img);
      tiles.push(tile);
    }
  }
  
  // Remove the last tile
  // pop(): 배열의마지막 요소를 제거
  tiles.pop();
  board.pop();
  // -1 means empty spot
  // push(): 배열의 마지막에 새로운 요소를 추가한 후, 변경된 길이를 반환
  board.push(-1);
  
  // Shuffle the board
  simpleShuffle(board);
}

// Swap two elements of an array\
// 자리 이동 시
function swap(i, j, arr) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  // [arr[i], arr[j]] = [arr[j], arr[i]];
}

// Pick a random spot to attempt a move
// This should be improved to select from only valid moves
function randomMove(arr) {
  // floor(): 소수점 자리 수 무조건 내림
  // 자바스크립트이기에 소숫점 생기는 것 방지
  let r1 = floor(random(cols));
  let r2 = floor(random(rows));
  // move(): 
  move(r1, r2, arr);
}

// Shuffle the board
function simpleShuffle(arr) {
  for (let i = 0; i < 1000; i++) {
    // random하게 arr을 1000번 움직이기
    randomMove(arr);
  }
}

// Move based on click
function mousePressed() {
  let i = floor(mouseX / w);
  let j = floor(mouseY / h);
  move(i,j,board);
}



function draw() {
  background(0);

  // Draw the current board
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let index = i + j * cols;
      let x = i * w;
      let y = j * h;
      let tileIndex = board[index];
      if (tileIndex > -1) {
        let img = tiles[tileIndex].img;
        image(img, x, y, w, h);
      }
    }
  }
  
  // Show it as grid
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * w;
      let y = j * h;
      strokeWeight(2);
      noFill();
      rect(x, y, w, h);
    }
  }
  
  // If it is solved
  if (isSolved()) {
    console.log("SOLVED");
  }
}

// Check if solved
function isSolved() {
  for (let i = 0; i < board.length-1; i++) {
    if (board[i] !== tiles[i].index) {
      return false;
    }
  }
  return true;
}

// Swap two pieces
function move(i, j, arr) {
  let blank = findBlank();
  let blankCol = blank % cols;
  let blankRow = floor(blank / rows);
  
  // Double check valid move
  if (isNeighbor(i, j, blankCol, blankRow)) {
    // 이웃이 비어있다면, swap 함수를 사용해서 위치 변경
    swap(blank, i + j * cols, arr);
  }
}

// Check if neighbor
function isNeighbor(i, j, x, y) {
  if (i !== x && j !== y) {
    return false;
  }

  if (abs(i - x) == 1 || abs(j - y) == 1) {
    // abs: 절댓값 반환
    return true;
  }
  return false;
}


// Probably could just use a variable
// to track blank spot
function findBlank() {
  for (let i = 0; i < board.length; i++) {
    if (board[i] == -1) return i;
  }
}
