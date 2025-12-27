export interface Launch {
  id: string;   
  name: string;
  success: boolean | null;
  upcoming: boolean;
  date_utc: string;
  flight_number: number;
  details: string | null;
    links: {
    patch?: {
      small: string | null;
      large: string | null;
    };
    webcast?: string | null;
    wikipedia?: string | null;
    article?: string | null;
    youtube_id?: string | null;
    presskit?: string | null;

    flickr: {
      small: string[];
      original: string[];
    };
  };
}
