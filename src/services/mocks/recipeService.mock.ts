import { RecipeFormState } from "../../RecipeApp/schema";
import { GeneralResponse } from "../../types/GeneralResponse";
import { RecipeResponse } from "../../types/RecipeResponse";

const mockRecipeService = {
    searchRecipe: jest.fn().mockImplementation((data: RecipeFormState): Promise<GeneralResponse<Partial<RecipeResponse>>>=>{
        let response: GeneralResponse<Partial<RecipeResponse>> = {
            data:{
                results: [
                    {
                      id: 1,
                      title: 'Recipe 1',
                      image: 'recipe1.jpg',
                      imageType: "jpg",
                      sourceUrl: "http://www.foodista.com/recipe/JKGPWDDP/steak-with-lemon-and-capers"
                    },
                    {
                      id: 2,
                      title: 'Recipe 2',
                      image: 'recipe2.jpg',
                      imageType: "jpg",
                      sourceUrl: "http://www.foodista.com/recipe/JKGPWDDP/steak-with-lemon-and-capers"
                    },
                    {
                      id: 3,
                      title: 'Recipe 3',
                      image: 'recipe3.jpg',
                      imageType: "jpg",
                      sourceUrl: "http://www.foodista.com/recipe/JKGPWDDP/steak-with-lemon-and-capers"
                    },
                ],
            }
        }

       return Promise.resolve(response);
    }),
}

export default mockRecipeService;