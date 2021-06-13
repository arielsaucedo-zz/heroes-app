export const powerstats = (totalHeroes) => {
  let totalCombat = 0;
  let totalDurability = 0;
  let totalIntelligence = 0;
  let totalPower = 0;
  let totalSpeed = 0;
  let totalStrength = 0;

  /* Obtencion de sumatoria de powerstats */

  totalHeroes.map((hero) => {
    return (totalCombat = totalCombat + parseInt(hero.powerstats.combat));
  });

  totalHeroes.map((hero) => {
    return (totalDurability =
      totalDurability + parseInt(hero.powerstats.durability));
  });

  totalHeroes.map((hero) => {
    return (totalIntelligence =
      totalIntelligence + parseInt(hero.powerstats.intelligence));
  });

  totalHeroes.map((hero) => {
    return (totalPower = totalPower + parseInt(hero.powerstats.power));
  });

  totalHeroes.map((hero) => {
    return (totalSpeed = totalSpeed + parseInt(hero.powerstats.speed));
  });

  totalHeroes.map((hero) => {
    return (totalStrength = totalStrength + parseInt(hero.powerstats.strength));
  });

  return {
    totalCombat,
    totalDurability,
    totalIntelligence,
    totalPower,
    totalSpeed,
    totalStrength,
  };
};
