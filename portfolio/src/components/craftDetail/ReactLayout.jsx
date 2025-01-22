import React from 'react'
import BackToTop from '../buttons/BackToTop'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

import lightMode from '../../../public/assets/nomly/light-mode.png'
import darkMode from '../../../public/assets/nomly/dark-mode.png'
import api from '../../../public/assets/nomly/api.png'
import data from '../../../public/assets/nomly/data.png'

function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}

function ReactLayout() {

    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <>
            <BackToTop />

            <section className='content-w'>
                <div className=''>
                    <div className='py-10 border-b-2 border-light-grey border-dashed'>
                        <h1 className=''>API Integration</h1>
                    </div>


                    <div className='p-2 bg-white bg-opacity-40 rounded-xl h-auto mt-10 w-full mx-auto lg:w-[80%]'>
                        <img src={api} alt="" className='rounded-xl w-full' />
                    </div>

                    <div className='mt-10'>
                        <p>For Nomly, I integrated the <a href="https://spoonacular.com/food-api" target='__blank' className='font-bold normal-case tracking-normal underline'> Spoonacular API </a>to fetch real-time recipe data. It was the key to making Nomly functional. It allows users to explore recipes, save favorites, and create grocery lists easily. Since the free version of the Spoonacular API has a limited number of requests,<span className='text-blue-gray-500'> I optimized its usage by implementing strategies to minimize unnecessary calls:</span>  </p>
                        <ul className='list-disc px-10'>
                            <li>
                                Recipes fetched for the homepage are stored in localStorage and only refreshed once per day to reduce redundant API requests.
                            </li>
                            <li>
                                For the saved recipe's page, I ensured that API calls are only made when necessary by checking the saved favorites list and avoiding duplicate fetches
                            </li>
                        </ul>
                    </div>

                    <Accordion open={open === 1} icon={<Icon id={1} open={open} />} className='border rounded-xl px-4 py-1 mt-6 shadow-md'>
                        <AccordionHeader onClick={() => handleOpen(1)} className='border-0 font-roundo-medium text-[18px] text-black capitalize tracking-wide'> {`< Data Fetching >`} </AccordionHeader>
                        <AccordionBody>
                            <SyntaxHighlighter
                                language="javascript"
                                style={tomorrow}
                                showLineNumbers
                                wrapLongLines
                                customStyle={{
                                    letterSpacing: '.8px',
                                    borderRadius: '10px',
                                    width: '100%',
                                    maxHeight: "600px",
                                    height: '100%',
                                }}
                            >
                                {` //function to search for recipes based on the entered search term
    const searchRecipes = () => {
        //fetch random recipes from API
        fetch(\`https://api.spoonacular.com/recipes/random?apiKey=\${apiKey}&number=12\`)
            .then(response => response.json())
            .then(data => {
                //filter recipes based on the search term entered by the user
                const filteredRecipes = data.recipes.filter((recipe) =>
                    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
                );
                setRecipes(filteredRecipes);
            })
            .catch((error) => console.error("Error fetching recipes:", error));
    };

    //fetch 12 random recipes
    useEffect(() => {
        if (!selectedCuisine) {
            fetch(\`https://api.spoonacular.com/recipes/random?apiKey=\${apiKey}&number=12\`)
                .then(response => response.json())
                .then(data => setRecipes(data.recipes))
                .catch((error) => console.error("Error fetching recipes:", error));
        }
    }, [selectedCuisine]);

    //fetch based on cuisines
    const handleFilter = (cuisine) => {
        setSelectedCuisine(cuisine);

        fetch(\`https://api.spoonacular.com/recipes/complexSearch?apiKey=\${apiKey}&cuisine=\${cuisine}&number=12\`)
            .then(response => response.json())
            .then(data => {
                if (data.results) {
                    setRecipes(data.results);
                } else {
                    console.error("No recipes found for this cuisine.");
                }
            })
            .catch((error) => console.error("Error fetching recipes:", error));
    }
`}
                            </SyntaxHighlighter>
                        </AccordionBody>
                    </Accordion>
                </div>
            </section>

            <section className='content-w'>
                <div className='content-gap'>
                    <div className='py-10 border-b-2 border-light-grey border-dashed'>
                        <h1 className=''>Data Flow Management</h1>
                    </div>
                    <div className='flex flex-col gap-10 mt-10 items-center lg:flex-row'>
                        <div className='flex-1'>
                            <img src={data} alt="" className='object-cover' />
                            <p className='text-gray-600 text-center italic mt-2 leading-normal max-w-[20rem] mx-auto text-sm'>Ingredients can be added directly to shopping list while viewing the recipe </p>
                        </div>
                        <div className='flex-1'>
                            <p>Managing data flow across multiple components was a key aspect of the project, ensuring that state changes were efficiently propagated and maintained throughout the app. To achieve this, I lifted state up to the root component and passed down relevant state and functions as props to child components.</p>
                            <p className='mt-4'>
                                The saved recipes and grocery list were managed in the root component and shared across pages via its functions. This allowed users to favorite recipes and add ingredients to their shopping list directly from the recipe detail page, with changes reflected across all relevant pages.
                            </p>
                        </div>
                    </div>

                    <Accordion open={open === 2} icon={<Icon id={2} open={open} />} className='border rounded-xl px-4 py-1 mt-10 shadow-md'>
                        <AccordionHeader onClick={() => handleOpen(2)} className='border-0 font-roundo-medium text-[18px] text-black capitalize tracking-wide'> {`< App . JSX  >`} </AccordionHeader>
                        <AccordionBody>
                            <SyntaxHighlighter
                                language="javascript"
                                style={tomorrow}
                                showLineNumbers
                                wrapLongLines
                                customStyle={{
                                    letterSpacing: '.8px',
                                    borderRadius: '10px',
                                    width: '100%',
                                    maxHeight: "600px",
                                    height: '100%',
                                }}
                            >
                                {`function App( ) {

  const [savedFavs, setSavedFavs] = useState(() => {
    const saved = localStorage.getItem('favs');
    return saved ? JSON.parse(saved) : [];
  });

  const toggleFav = (recipeID) => {
    const updatedFavs = savedFavs.includes(recipeID)
      ? savedFavs.filter((favId) => favId !== recipeID)
      : [...savedFavs, recipeID];

    //console.log("Updated Favs:", updatedFavs); 
    localStorage.setItem('favs', JSON.stringify(updatedFavs.map(id => id)));
    setSavedFavs(updatedFavs);
  };

  const [groceryList, setGroceryList] = useState(() => {
    // Load saved list from localStorage
    const storedList = localStorage.getItem('groceryList');
    return storedList ? JSON.parse(storedList) : [];
  });

  // Function to add ingredients to the list (avoiding duplicates)
  const addIngredients = (ingredients) => {
    setGroceryList((prevList) => {
      const uniqueIngredients = [...new Set([...prevList, ...ingredients])];
      return uniqueIngredients;
    });
  };

  // Function to remove an ingredient from the list
  const removeIngredient = (item) => {
    setGroceryList((prevList) => prevList.filter((i) => i !== item));
  };

  // Persist grocery list to local storage
  useEffect(() => {
    localStorage.setItem('groceryList', JSON.stringify(groceryList));
  }, [groceryList]);


  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home savedFavs={savedFavs} toggleFav={toggleFav} />} />
        <Route path='/browse' element={<Browse savedFavs={savedFavs} toggleFav={toggleFav} />} />
        <Route path='/list' element={<List groceryList={groceryList} removeIngredient={removeIngredient} />} />
        <Route path='/favorite' element={<Fav savedFavs={savedFavs} toggleFav={toggleFav} />} />
        <Route path='/recipe/:id' element={<Detail addIngredients={addIngredients} />} />
      </Routes>
    </Router>
  )
}

export default App
`}
                            </SyntaxHighlighter>
                        </AccordionBody>
                    </Accordion>
                </div>

            </section>

            <section className='content-w'>
                <div className='content-gap'>
                    <div className='py-10 border-b-2 border-light-grey border-dashed'>
                        <h1 className=''>Local Storage</h1>
                    </div>
                    <div className='mt-10'>
                        <p>I used local storage to keep things consistent for users across sessions. It stores saved recipes, grocery lists, and even the dark/light mode preference, so users don’t have to start over every time they visit. By syncing local storage with React state, I make sure the app loads the right data quickly and efficiently. This also helps reduce unnecessary API calls by caching recipes for the day. It’s a simple way to improve the user experience and keep everything running smoothly.
                        </p>
                    </div>

                    <Accordion open={open === 3} icon={<Icon id={3} open={open} />} className='border rounded-xl px-4 py-1 mt-6 shadow-md'>
                        <AccordionHeader onClick={() => handleOpen(3)} className='border-0 font-roundo-medium text-[18px] text-black capitalize tracking-wide'> {`< Local Storage For Dark / Light Mode >`} </AccordionHeader>
                        <AccordionBody>
                            <SyntaxHighlighter
                                language="javascript"
                                style={tomorrow}
                                showLineNumbers
                                wrapLongLines
                                customStyle={{
                                    letterSpacing: '.8px',
                                    borderRadius: '10px',
                                    width: '100%',
                                    maxHeight: "600px",
                                    height: '100%',
                                }}
                            >
                                {`const [darkMode, setDarkMode] = useState(localStorage.getItem('theme') === 'dark');

useEffect(() => {
    if (darkMode) {
        document.documentElement.setAttribute('data-mode', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.removeAttribute('data-mode');
        localStorage.setItem('theme', 'light');
    }
}, [darkMode]);
`}
                            </SyntaxHighlighter>
                        </AccordionBody>
                    </Accordion>
                </div>
            </section>

            <section className='content-w pb-20 md:pb-[10rem]'>
                <div className='content-gap'>
                    <div className='py-10 border-b-2 border-light-grey border-dashed'>
                        <h1 className=''>Reflection</h1>
                    </div>
                    <div className='mt-10'>
                        <p>
                            Nomly was my first React project using an external API, and it was challenging at first. Getting used to React’s state management and passing data between components took some time. Handling API calls efficiently, especially with rate limits, was something I had to figure out. I also learned how to optimize performance by caching data and managing state effectively. Overall, this project gave me a solid understanding of React and working with APIs.
                        </p>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ReactLayout
