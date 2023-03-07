import { fireEvent, render, screen, waitFor } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import { ToastProvider } from '@zendeskgarden/react-notifications';
import { ThemeProvider } from '@zendeskgarden/react-theming';
// import { act } from 'react-dom/test-utils';
import RecipeApp from '..';
import { searchRecipe } from '../../services/recipeService';

// Mock response data for the Spoonacular API
const mockApiResponse = {
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
};

// Mock the axios library
jest.mock('axios');
jest.mock('../../services/recipeService');

describe('Recipe App', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the search form', () => {
    render(
      <ThemeProvider>
        <ToastProvider>
          <RecipeApp />
        </ToastProvider>
      </ThemeProvider>
    );
    expect(screen.getByPlaceholderText('Enter a recipe')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument();
  });

  it('searches for recipes when the form is submitted', async () => {
    // Mock the api call
   (searchRecipe as any).mockResolvedValue(mockApiResponse);

    render(
      <ThemeProvider>
        <ToastProvider>
          <RecipeApp />
        </ToastProvider>
      </ThemeProvider>
    );
    const searchInput = screen.getByPlaceholderText('Enter a recipe');
    const searchButton = screen.getByRole('button', { name: 'Search' });

    fireEvent.change(searchInput, { target: { value: 'chicken' } });
    fireEvent.click(searchButton);

    await waitFor(() => expect(searchRecipe).toHaveBeenCalledTimes(1));
    expect(searchRecipe).toHaveBeenCalledWith({
      query: 'chicken',
    });
    // await waitFor(()=> expect(screen.getByText('Recipe 1')).toBeInTheDocument())

  });

  // it('displays the search results', async () => {
  //   render(
  //     <ThemeProvider>
  //       <ToastProvider>
  //         <RecipeApp />
  //       </ToastProvider>
  //     </ThemeProvider>
  //   );
  //   const searchInput = screen.getByPlaceholderText('Enter a recipe');
  //   const searchButton = screen.getByRole('button', { name: 'Search' });

  //   await act(async () => {
  //     userEvent.type(searchInput, 'chicken');
  //     userEvent.click(searchButton);
  //     await waitFor(() => expect(screen.getByText('Recipe 1')).toBeInTheDocument());
  //   });

  //   expect(screen.getByText('Recipe 1')).toBeInTheDocument();
  //   expect(screen.getByText('Recipe 2')).toBeInTheDocument();
  //   expect(screen.getByText('Recipe 3')).toBeInTheDocument();
  // });
});
