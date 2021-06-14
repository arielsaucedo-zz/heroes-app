export const powerstats = (totalHeroes) => {
  let totalCombat = 0;
  let totalDurability = 0;
  let totalIntelligence = 0;
  let totalPower = 0;
  let totalSpeed = 0;
  let totalStrength = 0;

  /* Obtencion de sumatoria de powerstats */

  totalHeroes.map((hero) => {
    if (hero.powerstats.combat !== "null") {
      totalCombat = totalCombat + parseInt(hero.powerstats.combat);
    } else {
      totalCombat = totalCombat + 0;
    }
    return totalCombat;
  });

  totalHeroes.map((hero) => {
    if (hero.powerstats.durability !== "null") {
      totalDurability = totalDurability + parseInt(hero.powerstats.durability);
    } else {
      totalDurability = totalDurability + 0;
    }
    return totalDurability;
  });

  totalHeroes.map((hero) => {
    if (hero.powerstats.intelligence !== "null") {
      totalIntelligence =
        totalIntelligence + parseInt(hero.powerstats.intelligence);
    } else {
      totalIntelligence = totalIntelligence + 0;
    }
    return totalIntelligence;
  });

  totalHeroes.map((hero) => {
    if (hero.powerstats.power !== "null") {
      totalPower = totalPower + parseInt(hero.powerstats.power);
    } else {
      totalPower = totalPower + 0;
    }
    return totalPower;
  });

  totalHeroes.map((hero) => {
    if (hero.powerstats.speed !== "null") {
      totalSpeed = totalSpeed + parseInt(hero.powerstats.speed);
    } else {
      totalSpeed = totalSpeed + 0;
    }
    return totalSpeed;
  });

  totalHeroes.map((hero) => {
    if (hero.powerstats.strength !== "null") {
      totalStrength = totalStrength + parseInt(hero.powerstats.strength);
    } else {
      totalStrength = totalStrength + 0;
    }
    return totalStrength;
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
