console.clear();
const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];
function getNames() {
    let names = [];
    weapons.filter(weapon => names.push(weapon.name));
    return names;
}

function getCountReliableWeapons(durability) {
    const countWeapons = weapons.filter(weapon => weapon.durability > durability);
    return countWeapons.length;
}
function hasReliableWeapons(durability) {
    return weapons.some(weapon => weapon.durability > durability);
}
function getReliableWeaponsNames(durability) {
    let names = [];
    const namesReliable =  weapons.filter(weapon => weapon.durability > durability);
    namesReliable.filter(weapon => names.push(weapon.name));
    return names;
}
function getTotalDamage() {
    const weaponAttack = weapons.reduce((acc, weapon)=> {
        return acc + weapon.attack;
    }, 0);
    return weaponAttack;

}

function getValuestCountToSumValues(arr, sum) {
  arr.reduce((acc, resultSum, index)=> {
      let sumInStep = acc + resultSum;
      if (sumInStep >= sum) {
        arr.splice(index + 1);
      }
      resultIndex = index + 1;
      return acc + resultSum;
  }, 0);
    return resultIndex;
}
function sleep(milliseconds)
{
    let e = new Date().getTime() + milliseconds;
    while (new Date().getTime() <= e) {}
}
function sum(...args) {
    sleep(1000);
    return args.reduce((sum, arg) => {
        return sum += +arg;
    }, 0);
}
function compareArrays(arr1, arr2) {
    if (arr1.length != arr2.length){
        return false;
    }
    return arr1.every((value, index) => value === arr2[index]);
}

function memorize(fn, limit, ...rest) {
    let memory = [];
    return function optimizedFn(...args) {
        const expected = memory.find(element => compareArrays(element.args, Array.from(arguments)));
        if (expected === undefined) {
            let obj = {};
            const fnResult = fn(...args);
            obj.args = Array.from(arguments);
            obj.result = fnResult;
            memory.push(obj);
            if (memory.length > limit){
                memory.shift();
            } else
            return fnResult;
        } else {
            return expected.result;
        }
    }
}

const nSum = memorize(sum, 5);

