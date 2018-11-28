
export interface Query {
  count: number;
  query: string;
  geocode: string;
  until?: string;
  max_id?: string;
  since_id?: string;
}
