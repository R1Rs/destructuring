export default destructuring;

let hero = {
  name: "Лучник",
  type: "Bowman",
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: "Двойной выстрел",
      icon: "http://...",
      description: "Двойной выстрел наносит двойной урон"
    },
    {
      id: 9,
      name: "Нокаутирующий удар",
      icon: "http://..."
      // <- обратите внимание, описание "засекречено"
    }
  ]
};

function destructuring (object) {
  let {special} = object;
  return special.map(el => {
    let {id, name, icon, description = "Описание недоступно"} = el;
    return {id, name, icon, description};
  }) 
}

destructuring(hero)