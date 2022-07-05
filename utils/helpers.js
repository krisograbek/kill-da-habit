/**
 * 
 * @param {[number]} collected 
 * @param {[number]} goal 
 * @returns {[number]} ratio between collected and goal
 */

export const calculateProgress = (collected, goal) => {
  if (goal <= 0 || collected <= 0) return 0;
  if (goal <= collected) return 1;
  return collected / goal;
}