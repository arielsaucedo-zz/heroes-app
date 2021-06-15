import { useSelector } from "react-redux";

export const useHeroes = () => {
  const { good } = useSelector((state) => state.team);
  const { bad } = useSelector((state) => state.team);

  const totalHeroes = [...good, ...bad];

  return {
    totalHeroes,
    good,
    bad,
  };
};
