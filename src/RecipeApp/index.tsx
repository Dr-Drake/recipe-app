import { Formik } from 'formik';
import React from 'react';
import { RecipeFormSchema, RecipeFormState } from './schema';
import { CustomLabel, FormButton, FormContainer, HeaderSection, InputRow, NotFoundContainer, QueryInput, RecipeResultContainer, ResultRow } from './styles';
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Field, Message } from '@zendeskgarden/react-forms';
import { Dropdown, Menu, Item, Select, Field as DropdownField } from '@zendeskgarden/react-dropdowns';
import { cuisineOptions, dietOptions, IItem } from './data';
import { ImSad2 } from "react-icons/im";
import RecipeCard from '../components/RecipeCard';
import CustomSkeleton from '../components/CustomSkeleton';
import {
    Notification,
    Title,
    Close,
    useToast
  } from '@zendeskgarden/react-notifications';
import { searchRecipe } from '../services/recipeService';
import { RecipeResultData } from '../types/RecipeResponse';


const RecipeApp: React.FC<any> = ()=>{

    // State
    const [submitted, setSubmitted] = React.useState<boolean>(false);
    const [loading, setLoading] = React.useState<boolean>(false);
    const [results, setResults] = React.useState<RecipeResultData[]>();

    // Variables
    let initialValues: RecipeFormState = {
        query: ''
    }

    // Hooks
    const { addToast } = useToast();

    // Handlers
    const notifyError = (message: string)=>{
        addToast(
            ({ close }) => (
              <Notification type="error" style={{ maxWidth: 450 }}>
                <Title>Error</Title>
                    { message }
                <Close aria-label="Close" onClick={close} />
              </Notification>
            ),
            { placement: 'top-end' }
          );
    }
    const handleFormSubmit = async (values: RecipeFormState)=>{
        setLoading(true);

        const { data, error } = await searchRecipe(values);

        if (data) {
            setResults(data.results);
            setLoading(false);
        }

        if (error) {
            setLoading(false);
            notifyError(error.response?.data.message || "An unexpected error occured while searching");
            console.log(error.response?.data);
        }
    }

    return(
        <>
        <HeaderSection>
            <h1>Recipe Search</h1>
            <p>Search recipes from all over the world</p>
        </HeaderSection>

        {/** Form */}
        <Formik
            initialValues={initialValues}
            validationSchema={RecipeFormSchema}
            onSubmit={(values, actions)=>{
                setSubmitted(false);
                handleFormSubmit(values);
            }}
        >
            {
                (props)=>
                <FormContainer>
                    <form>
                        <Field>
                            <QueryInput
                                placeholder='Enter a recipe'
                                onChange={(e)=>{
                                    props.setFieldValue('query', e.target.value);
                                }}
                            />
                            { 
                                props.errors.query && submitted &&
                                <Message validation='error'>Please enter a recipe</Message>
                            }
                        </Field>
                        
                        {/** Filters */}
                        <InputRow>
                            <Dropdown
                                // selectedItem={props.values.diet}
                                onSelect={(item: IItem)=> props.setFieldValue('diet', item.value)}
                                downshiftProps={{ itemToString: (item: IItem) => item && item.label }}
                                >
                                <DropdownField>
                                    <CustomLabel>Diet</CustomLabel>
                                    <Select>{props.values.diet}</Select>
                                </DropdownField>
                                <Menu>
                                    {dietOptions.map(option => (
                                        <Item key={option.value} value={option}>
                                            {option.label}
                                        </Item>
                                    ))}
                                </Menu>
                            </Dropdown>
                            <Dropdown
                                // selectedItem={props.values.diet}
                                onSelect={(item: IItem)=> props.setFieldValue('cuisine', item.value)}
                                downshiftProps={{ itemToString: (item: IItem) => item && item.label }}
                                >
                                <DropdownField>
                                    <CustomLabel>Cuisine</CustomLabel>
                                    <Select>{props.values.cuisine}</Select>
                                </DropdownField>
                                <Menu>
                                    {cuisineOptions.map(option => (
                                        <Item key={option.value} value={option}>
                                            {option.label}
                                        </Item>
                                    ))}
                                </Menu>
                            </Dropdown> 
                                
                        </InputRow>
                        
                        <FormButton
                            isStretched
                            disabled={loading}
                            onClick={()=>{
                                props.submitForm();
                                setSubmitted(true);
                            }}
                        >
                            { loading ? "Searching..." : "Search" }
                        </FormButton>

                    </form>
                </FormContainer>
            }
        </Formik>

        {/** Results */}
        <RecipeResultContainer>
            {
                !loading && results && results.length === 0 &&
                <NotFoundContainer>
                    <ImSad2 color='#BD3B5F' size={100}/>
                    <p>Sorry, we couldn't find your recipe</p>
                </NotFoundContainer>
            }

            <ResultRow>
                {
                    !loading &&
                    results?.map((item, i)=>(
                        <RecipeCard key={i} {...item} />
                    ))
                }
                {
                    loading &&
                    [1,2,3, 4].map((i)=>(
                        <CustomSkeleton key={i} loading>
                            <RecipeCard
                                title='Steak with lemon and capers'
                                image="https://spoonacular.com/recipeImages/661531-312x231.jpg"
                                imageType='jpg'
                                id={23}
                                sourceUrl="#"
                            />
                        </CustomSkeleton>
                    ))
                }
            </ResultRow>
        </RecipeResultContainer>
        </>
       
    )
}

export default RecipeApp;
