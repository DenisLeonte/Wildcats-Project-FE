export interface SearchQuery {
    to_id: number;
    from_id: number;
    startDate: string;
    endDate?: string | null;
    maxPrice?: number | null;
    directOnly: boolean;
    maxStops?: number | null;
  }