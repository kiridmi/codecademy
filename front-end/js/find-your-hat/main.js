const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(field) {
    this._field = field;
  }
  
  get field() {
    return this._field;
  }

  print() {
    this._field.forEach(element => {
      console.log(element.join(''));
    })
  }
  
  static generateField(length, height) {
    let randField = [];
    let randInner = [];
    var randMultiplier = 3;
    for (x = 0; x < height; x++) {
      randInner = [];
      for(y = 0; y<length; y++) {
        var randNum = Math.floor(Math.random() * randMultiplier);
        switch(randNum) {
          case 0:
            randInner.push('░');
            break;
          case 1:
            randInner.push('O');
            break;
          case 2:
            randInner.push('^');
            break;
        }
        if(randInner.includes('^')) {
          randMultiplier = 2;
        }
      }
      randField[x] = randInner;
    }
    randField[0][0] = '*';
    return randField;
  }
}

// const myField = new Field([
//   ['*', '░', 'O'],
//   ['░', 'O', '░'],
//   ['░', '^', '░'],
// ]);

const myField = new Field(Field.generateField(6, 5));
var x = 0;
var y = 0;
// var playerLocation = myField.field[y][x];
game = true;
const xLength = myField.field.length;
const yLength = myField.field[0].length;


do {
  myField.print();
  const input = prompt('Which way to go? ');
  switch(input){
    case 'r':
      x++;
      if(myField.field[y][x] == 'O') {
        console.log('Game over. You fell in a hole!');
        game = false;
        break;
      } else if(myField.field[y][x] == '^') {
        console.log('Congratulations you found the hat!');
        game = false;
        break;
      } else if(x < 0 || y < 0 || x == xLength-1 || y == yLength-1) {
        console.log('Game over. You are out of bounds!');
        game = false;
        break;
      };
      myField.field[y][x] = '*';
      break;
    case 'd':
      y++;
      if(x < 0 || y < 0 || x == xLength-1 || y == yLength) {
        console.log('Game over. You are out of bounds!');
        game = false;
        break;
      } else if(myField.field[y][x] == 'O') {
        console.log('Game over. You fell in a hole!');
        game = false;
        break;
      } else if(myField.field[y][x] == '^') {
        console.log('Congratulations you found the hat!');
        game = false;
        break;
      }
      myField.field[y][x] = '*';
      break;
    case 'l':
      x--;
      if(myField.field[y][x] == 'O') {
        console.log('Game over. You fell in a hole!');
        game = false;
        break;
      } else if(myField.field[y][x] == '^') {
        console.log('Congratulations you found the hat!');
        game = false;
        break;
      } else if(x < 0 || y < 0 || x == xLength-1 || y == yLength-1) {
        console.log('Game over. You are out of bounds!');
        game = false;
        break;
      };
      myField.field[y][x] = '*';
      break;
    case 'u':
      y--;
      if(myField.field[y][x] == 'O') {
        console.log('Game over. You fell in a hole!');
        game = false;
        break;
      } else if(myField.field[y][x] == '^') {
        console.log('Congratulations you found the hat!');
        game = false;
        break;
      } else if(x < 0 || y < 0 || x == xLength-1 || y == yLength-1) {
        console.log('Game over. You are out of bounds!');
        game = false;
        break;
      };
      myField.field[y][x] = '*';
      break;
  };
} while (game != false);
