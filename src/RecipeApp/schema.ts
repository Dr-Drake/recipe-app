import * as yup from 'yup';

export const RecipeFormSchema = yup.object({
    query: yup.string().required(),
    cuisine: yup.string(),
    diet: yup.string(),
    includeIngredients: yup.string()
});

export type RecipeFormState = yup.InferType<typeof RecipeFormSchema>;