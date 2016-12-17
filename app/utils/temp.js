export default function formatTemp(temp){
  return Math.round((temp * (9/5)) - 459.67);
}