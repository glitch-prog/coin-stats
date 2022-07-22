export interface Column {
  id: 'name' | 'current_price' | 'market_cap' | 'market_cap_rank';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

export interface Data {
  name: string;
  current_price: string;
  market_cap: number;
  market_cap_rank: number;
}
