export const heightWeight = (totalHeroes) => {
  /* Obtencion de peso y altura promedio */
  let totalHeight = 0;
  let totalWeight = 0;

  let promedioHeight = 0;
  let promedioWeight = 0;

  if (totalHeroes.length > 1) {
    totalHeroes.map((hero) => {
      return (totalHeight = totalHeight + parseInt(hero.appearance.height[1]));
    });

    promedioHeight = parseInt(totalHeight / totalHeroes.length);

    totalHeroes.map((hero) => {
      return (totalWeight = totalWeight + parseInt(hero.appearance.weight[1]));
    });

    promedioWeight = parseInt(totalWeight / totalHeroes.length);
  }

  return {
    promedioHeight,
    promedioWeight,
  };
};
