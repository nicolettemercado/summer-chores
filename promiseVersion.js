function isAwake() {
  return Math.random() > 0.2;
}

function mowYard(name) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${name} mowed the yard.`);
      resolve(name);
    }, 2000);
  });
}

function weedEat(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isAwake()) {
        console.log(`${name} finished using the weed eater.`);
        resolve(name);
      } else {
        reject(`${name} fell asleep after mowing the yard.`);
      }
    }, 1500);
  });
}

function trimHedges(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isAwake()) {
        console.log(`${name} finished trimming the hedges.`);
        resolve(name);
      } else {
        reject(`${name} fell asleep after weed eating the yard.`);
      }
    }, 1000);
  });
}

function collectWood(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isAwake()) {
        console.log(`${name} finished collecting wood.`);
        resolve(name);
      } else {
        reject(`${name} fell asleep after trimming the hedges.`);
      }
    }, 2500);
  });
}

function waterGarden(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isAwake()) {
        console.log(`${name} finished watering the garden.`);
        resolve(`${name} finished all their chores!`);
      } else {
        reject(`${name} fell asleep after collecting wood.`);
      }
    }, 500);
  });
}

function doSummerChores(name) {
  mowYard(name)
    .then((result) => {
      return weedEat(result);
    })
    .then((result) => {
      return trimHedges(result);
    })
    .then((result) => {
      return collectWood(result);
    })
    .then((result) => {
      return waterGarden(result);
    })
    .then((finalMessage) => {
      console.log(finalMessage);
    })
    .catch((error) => {
      console.log( error);
    });
}

doSummerChores("PERSON'S NAME");
