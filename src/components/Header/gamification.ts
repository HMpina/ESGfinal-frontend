let HEART_POINTS = 128;
let LIGHTNING_POINTS = 35;
let STAR_POINTS = 74;

export const addPoints = (points: number, type: string) => {
    switch (type) {
      case 'HEART_POINTS':
        HEART_POINTS += points;
        break;
      case 'STAR_POINTS':
        STAR_POINTS += points;
        break;
      case 'LIGHTNING_POINTS':
        LIGHTNING_POINTS += points;
        break;
      default:
        break;
    }
  };
  
  export { HEART_POINTS, STAR_POINTS, LIGHTNING_POINTS };