export const heightWeight = (totalHeroes) => {
  /* Obtencion de peso y altura promedio */
  let totalHeight = 0;
  let totalWeight = 0;

  totalHeroes.map((hero) => {
    return (totalHeight = totalHeight + parseInt(hero.appearance.height[1]));
  });

  let promedioHeight = totalHeight / totalHeroes.length;
  promedioHeight = parseInt(promedioHeight);

  totalHeroes.map((hero) => {
    return (totalWeight = totalWeight + parseInt(hero.appearance.weight[1]));
  });

  let promedioWeight = totalWeight / totalHeroes.length;
  promedioWeight = parseInt(promedioWeight);

  return {
    promedioHeight,
    promedioWeight,
  };
};
