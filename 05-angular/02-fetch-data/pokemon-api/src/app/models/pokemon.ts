export interface Pokemon {
  name: string;
  id: number;
  height: number;
  weight: number;
  sprites: Sprite;
  abilities: Ability [];
}

export interface Ability {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}
export interface Sprite {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
}
