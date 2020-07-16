export interface Ability {
  effect_changes: JSON[];
  effect_entries: JSON[];
  flavor_text_entries: JSON[];
  generation: {
    name: string;
    url: string;
  };
  id: number;
  is_main_series: boolean;
  name: string;
  names: JSON[];
  pokemon: Pokemon[];
}

export interface Pokemon {
  is_hidden: boolean;
  pokemon: {
    name: string;
    url: string;
  };
  slot: number;
}
