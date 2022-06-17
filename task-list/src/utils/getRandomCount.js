export default function getRandomCount(min = 0, max = 100) {
  return Math.floor(Math.random() * (max - min) + min);
}
