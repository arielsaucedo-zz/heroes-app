import { powerstats } from "./powerstats";

export const mayorPowerstats = (totalHeroes) => {
  const {
    totalCombat,
    totalDurability,
    totalIntelligence,
    totalPower,
    totalSpeed,
    totalStrength,
  } = powerstats(totalHeroes);

  let perfil = Math.max(
    totalCombat,
    totalDurability,
    totalIntelligence,
    totalPower,
    totalSpeed,
    totalStrength
  );

  let maxPowerstats =
    totalCombat === perfil
      ? "Combat"
      : totalDurability === perfil
      ? "Durability"
      : totalIntelligence === perfil
      ? "Intelligence"
      : totalPower === perfil
      ? "Power"
      : totalSpeed === perfil
      ? "Speed"
      : totalStrength === perfil;

  return {
    maxPowerstats,
  };
};
