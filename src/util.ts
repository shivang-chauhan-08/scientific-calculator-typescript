export function degToRad(deg: number): number {
  return deg * (Math.PI / 180);
}

export function factorial(n: number): number | null {
  if (n < 0 || !Number.isInteger(n)) {
    return null;
  }

  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}