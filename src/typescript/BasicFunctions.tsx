export const BasicFunctions = () => {
  const sum = (a: number, b: number) : number => a + b;

  return (
    <div>
      <h3>Basic Functions</h3>
      <span>El resultado de la suma es: {sum(1, 2)}</span>
    </div>
  );
};
