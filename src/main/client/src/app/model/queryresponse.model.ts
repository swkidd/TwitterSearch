  export interface Hashtag {
    text: string;
    indices: number[];
  }

  export interface Url {
    url: string;
    expanded_url: string;
    display_url: string;
    indices: number[];
  }

  export interface Entities {
    hashtags: Hashtag[];
    symbols: any[];
    user_mentions: any[];
    urls: Url[];
  }

  export interface Metadata {
    iso_language_code: string;
    result_type: string;
  }

  export interface Description {
    urls: any[];
  }

  export interface Entities2 {
    description: Description;
  }

  export interface User {
    id: number;
    id_str: string;
    name: string;
    screen_name: string;
    location: string;
    description: string;
    url?: any;
    entities: Entities2;
    protected: boolean;
    followers_count: number;
    friends_count: number;
    listed_count: number;
    created_at: string;
    favourites_count: number;
    utc_offset?: any;
    time_zone?: any;
    geo_enabled: boolean;
    verified: boolean;
    statuses_count: number;
    lang: string;
    contributors_enabled: boolean;
    is_translator: boolean;
    is_translation_enabled: boolean;
    profile_background_color: string;
    profile_background_image_url: string;
    profile_background_image_url_https: string;
    profile_background_tile: boolean;
    profile_image_url: string;
    profile_image_url_https: string;
    profile_banner_url: string;
    profile_link_color: string;
    profile_sidebar_border_color: string;
    profile_sidebar_fill_color: string;
    profile_text_color: string;
    profile_use_background_image: boolean;
    has_extended_profile: boolean;
    default_profile: boolean;
    default_profile_image: boolean;
    following?: any;
    follow_request_sent?: any;
    notifications?: any;
    translator_type: string;
  }

  export interface Status {
    created_at: string;
    id: number;
    id_str: string;
    text: string;
    truncated: boolean;
    entities: Entities;
    metadata: Metadata;
    source: string;
    in_reply_to_status_id: number;
    in_reply_to_status_id_str: string;
    in_reply_to_user_id: number;
    in_reply_to_user_id_str: string;
    in_reply_to_screen_name: string;
    user: User;
    geo?: any;
    coordinates?: any;
    place?: any;
    contributors?: any;
    is_quote_status: boolean;
    retweet_count: number;
    favorite_count: number;
    favorited: boolean;
    retweeted: boolean;
    lang: string;
  }

  export interface SearchMetadata {
    completed_in: number;
    max_id: number;
    max_id_str: string;
    next_results: string;
    query: string;
    refresh_url: string;
    count: number;
    since_id: number;
    since_id_str: string;
  }

  export interface QueryResponse {
    statuses: Status[];
    search_metadata: SearchMetadata;
  }

