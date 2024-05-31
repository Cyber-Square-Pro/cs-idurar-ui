export interface CustomEndPoints {
    [key: string]: CustomEndPoint;
  }
  
  export interface CustomEndPoint {
    url: string;
    method: string;
    tags?: string[];
    transformErrorResponse?: (res: any) => any;
    transformResponse: (res: any) => any;
  }