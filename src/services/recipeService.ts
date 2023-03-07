import axios, { AxiosError, AxiosResponse } from "axios";
import { RecipeFormState } from "../RecipeApp/schema";
import { GeneralResponse } from "../types/GeneralResponse";
import { RecipeResponse } from "../types/RecipeResponse";

const BASE_URL = "https://api.spoonacular.com/recipes";
const API_KEY = process.env.REACT_APP_API_KEY

function buildQuery(data: RecipeFormState) {
    let string = '';

    for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
            const value = data[key as keyof RecipeFormState];

            string += `&${key}=${value}`
            
        }
    }

    return string;
}

export function searchRecipe(data: RecipeFormState) {
    const apiUrl = `${BASE_URL}/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true${buildQuery(data)}`;

    const willSearchRecipe: Promise<GeneralResponse<RecipeResponse>> = new Promise((resolve)=>{
        axios.get(apiUrl).then((response: AxiosResponse<RecipeResponse>)=>{
            console.log(response.data);
            resolve({ data: response.data })

        }).catch((err: AxiosError<any>)=>{
            console.log(JSON.stringify(err));
            resolve({ error: err })
        })
    });

    return willSearchRecipe;
}