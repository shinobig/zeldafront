import grass1 from '../images/overworld/light/grass1.png';

interface imagesManagerInterface {
    grass1: String
}


type option = {
    [key: string]: string
}
export const IMAGE_MANAGER: option = {
    grass1 : grass1
}
