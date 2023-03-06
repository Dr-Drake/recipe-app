import { Formik } from 'formik';
import React from 'react';
import { RecipeFormSchema, RecipeFormState } from './schema';
import { CustomLabel, FormButton, FormContainer, HeaderSection, InputRow, QueryInput } from './styles';
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Field, Label, Input, Message } from '@zendeskgarden/react-forms';
import { Dropdown, Menu, Item, Select, Field as DropdownField } from '@zendeskgarden/react-dropdowns';
import { cuisineOptions, dietOptions, IItem } from './data';


const RecipeApp: React.FC<any> = ()=>{

    // State
    const [submitted, setSubmitted] = React.useState<boolean>(false);

    // Variables
    let initialValues: RecipeFormState = {
        query: ''
    }

    // Handlers
    const handleFormSubmit = (values: RecipeFormState)=>{

    }

    return(
        <ThemeProvider>
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
                                >
                                    Search
                                </FormButton>

                            </form>
                        </FormContainer>
                    }
                </Formik>
        </ThemeProvider>
    )
}

export default RecipeApp;