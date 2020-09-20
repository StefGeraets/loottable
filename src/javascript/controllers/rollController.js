export const rollSingle = (sides) => {
  return Math.floor(Math.random() * sides) + 1;
}

export const rollMultiple = (amount, sides) => {
  let total = 0;
  let rolls = [];
  for (let i = 0; i < amount; i++) {
    let diceRoll = rollSingle(sides);
    rolls.push(diceRoll);
    total += diceRoll;
  }
  return { 
    total, 
    rolls 
  }
}
