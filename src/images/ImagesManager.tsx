import grass1 from '../images/overworld/light/grass1.png';
import bigRock00 from '../images/overworld/light/rock-0-0.png';
import bigRock01 from '../images/overworld/light/rock-0-1.png';
import bigRock10 from '../images/overworld/light/rock-1-0.png';
import bigRock11 from '../images/overworld/light/rock-1-1.png';


type option = {
  [key: string]: string
}
export const IMAGE_MANAGER: option = {
  "grass1": grass1,
  "rock-0-0": bigRock00,
  "rock-0-1": bigRock01,
  "rock-1-0": bigRock10,
  "rock-1-1": bigRock11,
}
