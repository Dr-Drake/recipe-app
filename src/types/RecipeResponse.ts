export interface RecipeResultData{
    "id": number;
    "title": string;
    "image": string;
    "imageType": string;
    sourceUrl: string;

    // There's a whole bunch of other stuff, but it's these I am interested in
}

export interface RecipeResponse{
    "results": RecipeResultData[],
    "offset": 0,
    "number": 10,
    "totalResults": 0
    message?: string;
}