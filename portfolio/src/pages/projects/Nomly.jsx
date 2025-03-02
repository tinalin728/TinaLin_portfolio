import React, { useEffect, useRef } from 'react'
import ProjectBanner from '../../components/ProjectBanner'
import { projectData } from '../../data/projectData'
import Sidebar from '../../components/Sidebar';
import PrototypeCta from '../../components/PrototypeCta';
import BackToTop from '../../components/BackToTop';
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

const project = projectData[1]


export default function Nomly() {
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

    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    const sections = [
        { id: "browse", label: "Recipe Search" },
        { id: "list", label: "Shopping List" },
        { id: "storage", label: "Local Storage" },
        { id: "reflection", label: "Reflection" },

    ];

    return (
        <>
            <BackToTop />
            <ProjectBanner project={project} />
            <div className='max-w-container md:flex md:gap-8 lg:gap-14'>
                <Sidebar sections={sections} />

                <div className='overflow-hidden'>
                    {/* overview */}
                    <section className='bg-primary'>
                        <div className=''>
                            <h2 className='mt-[5rem]'>Overview</h2>
                            <div className='content-gap flex flex-col-reverse items-start gap-10 lg:flex-row'>
                                <div className='basis-[60%]'>
                                    <h4 className='mb-10 font-patrick italic tracking-wider'>
                                        Cooking Alone Can Be a Challenge.
                                    </h4>
                                    <p className='mb-10'>
                                        Living alone, it’s hard to decide what to cook, keep track of fridge items, and manage grocery lists efficiently. I built Nomly to simplify this process—a web app that helps users discover recipes, manage grocery lists, and track fridge items seamlessly.
                                    </p>

                                    <p className='uppercase tracking-wider underline underline-offset-[4px] font-roundo-medium text-orange'>Features</p>
                                    <ul >
                                        <li> <span className='text-lg'>⤍</span> Recipe Search & Filters</li>
                                        <li> <span className='text-lg'>⤍</span> Integrated grocery & fridge lists to prevent waste</li>
                                        <li> <span className='text-lg'>⤍</span>  Save & Organize Favorites</li>
                                        <li> <span className='text-lg'>⤍</span>   Dark & Light Mode</li>
                                    </ul>

                                    <PrototypeCta webLink={{ link: "https://nomly.tinalin.ca/", text: "Visit Website" }} />

                                </div>

                                <div className='basis-[40%] w-full h-full mx-auto xl:-translate-y-10'>

                                    <div className='w-full max-w-[450px] mx-auto'>
                                        <img
                                            src={project.overview.media.src}
                                            alt={project.overview.media.altText}
                                            loading='lazy'
                                        />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>

                    {/* recipe search */}
                    <section id="browse">
                        <div className='section-gap section-gap border-t-2 border-light-grey border-dashed'>
                            <h2 className=''>Recipe Search</h2>

                            <div className='content-gap flex flex-col items-center gap-10'>
                                <div className='h-full p-2 bg-white/40 shadow-md'>
                                    <img src={api} alt="api"
                                        loading='lazy'
                                        className='object-cover h-full w-full' />
                                </div>

                                <div className=' flex-1'>
                                    <p>
                                        I built Nomly to make recipe discovery effortless. The homepage dynamically fetches Recipes of the Day, while users can search by keyword, apply filters, or browse trending categories—all powered by different API endpoints.
                                    </p>
                                    <p className='mt-4'>
                                        To make this work, I used the <a href="https://spoonacular.com/food-api" target='__blank' className='normal-case tracking-normal underline text-orange underline-offset-2'> Spoonacular API </a> to pull in real-time recipe data. Some endpoints didn’t include all the details, like ingredients, so I set up a second fetch request when needed. This way, I kept the data accurate without making unnecessary API calls.
                                    </p>
                                </div>
                            </div>


                            <Accordion open={open === 1} icon={<Icon id={1} open={open} />} className='border  px-4 py-1 shadow-md max-w-full rounded-2xl'>
                                <AccordionHeader onClick={() => handleOpen(1)} className='border-0 font-roundo-medium text-[18px] text-black capitalize tracking-wide'> {`< API fetch >`} </AccordionHeader>
                                <AccordionBody>
                                    <div className="w-full overflow-x-auto max-w-full">
                                        <SyntaxHighlighter
                                            language="javascript"
                                            style={tomorrow}
                                            showLineNumbers
                                            wrapLongLines
                                            customStyle={{
                                                letterSpacing: '.8px',
                                                borderRadius: '10px',
                                                width: "100%",
                                                maxWidth: "100%",
                                                minWidth: "300px",
                                                maxHeight: "600px",
                                                height: '100%',
                                            }}
                                        >
                                            {` import { useState, useEffect } from 'react';
import { getStoredData, storeData } from '../utils/storage';

const fetchRecipes = (key, query, apiType) => {
    const [recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRecipesData = async () => {
            const today = new Date().toISOString().split("T")[0];

            // Retrieve stored data
            const storedRecipes = getStoredData(key);
            const lastFetchDate = localStorage.getItem(\`\${key}_date\`) || "";

            let initialRecipes = [];

            // If stored data is fresh, use it
            if (storedRecipes && lastFetchDate === today && storedRecipes.length > 0) {
                setRecipes(storedRecipes);
                setIsLoading(false);
                return;
            }

            let apiUrl;
            if (apiType === "random") {
                apiUrl = \`https://api.spoonacular.com/recipes/random?apiKey=\${import.meta.env.VITE_API_KEY}&number=4\`;
            } else if (apiType === "complexSearch") {
                apiUrl = \`https://api.spoonacular.com/recipes/complexSearch?apiKey=\${import.meta.env.VITE_API_KEY}&query=\${query}&number=4\`;
            }

            try {
                const response = await fetch(apiUrl);

                // error handling
                if (!response.ok) {
                    throw new Error(\`API limit exceeded or network issue. Status: \${response.status}\`);
                }
                const data = await response.json();
                initialRecipes = data.results || data.recipes || data.menuItems || [];

                if (initialRecipes.length > 0) {
                    storeData(key, initialRecipes);
                    localStorage.setItem(\`\${key}_date\`, today);
                } else {
                    console.warn(\`No recipes found for query: \${query}\`);
                }
            } catch (err) {
                setError(err.message);
                console.error(\`Error fetching \${key}:\`, err);
                setIsLoading(false);
                return;
            }

            // Perform a second fetch if 'extendedIngredients' are missing in the first fetch
            // All recipe details are fetched in parallel instead of one by one to improve performance.
            const updatedRecipes = await Promise.all(
                initialRecipes.map(async (recipe) => {
                    // Ensure valid recipe
                    if (!recipe || !recipe.id) return null;

                    try {
                        const detailResponse = await fetch(
                            \`https://api.spoonacular.com/recipes/\${recipe.id}/information?apiKey=\${import.meta.env.VITE_API_KEY}&includeNutrition=false\`
                        );
                        if (!detailResponse.ok) {
                            throw new Error(\`Error fetching details for ID \${recipe.id}\`);
                        }
                        const detailedData = await detailResponse.json();
                        return detailedData?.extendedIngredients ? detailedData : null;
                    } catch (error) {
                        console.error(\`Error fetching details for recipe ID: \${recipe.id}\`, error);
                        return null;  // Return null to remove invalid recipes
                    }
                })
            );

            // Remove null values before updating state
            const validRecipes = updatedRecipes.filter(recipe => recipe !== null);

            setRecipes(validRecipes);
            storeData(key, validRecipes);
            setIsLoading(false);
        };

        fetchRecipesData();
    }, [key, query, apiType]);

    return { recipes, isLoading, error };
};

export default fetchRecipes;

`}
                                        </SyntaxHighlighter>
                                    </div>

                                </AccordionBody>
                            </Accordion>
                        </div>
                    </section>

                    {/* list */}
                    <section id='list'>
                        <div className='section-gap section-gap border-t-2 border-light-grey border-dashed'>
                            <h2 className=''>Shopping List</h2>

                            <div className='flex flex-col gap-10 content-gap lg:flex-row-reverse'>
                                <div className='lg:basis-[60%] p-2 bg-white/40 shadow-md '>
                                    <img src={data} alt="shopping list"
                                        loading='lazy'
                                        className='object-cover border border-dark/20' />
                                </div>

                                <div className='lg:basis-[40%]'>
                                    <p>
                                        Users can add ingredients straight from a recipe to their shopping list. The list has two sections— <span className='text-orange'>one for groceries and one for fridge items </span> —to help users keep track of what they already have and reduce food waste.
                                    </p>

                                    <p className='mt-4'>
                                        The shopping list is managed centrally, keeping data updated across the app. When users add an ingredient, it instantly appears in the list, ensuring real-time updates for easy and organized grocery planning.
                                    </p>
                                </div>
                            </div>

                            <Accordion open={open === 2} icon={<Icon id={2} open={open} />} className='border  px-4 py-1 mt-10 shadow-md max-w-full rounded-2xl'>
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
                                            width: "100%",
                                            maxHeight: "600px",
                                            height: '100%',
                                        }}
                                    >
                                        {`
function App() {
  const [savedFavs, setSavedFavs] = useState(() => {
    const saved = localStorage.getItem('favs');
    return saved ? JSON.parse(saved) : [];
  });

  const toggleFav = (recipe) => {
    let favs = JSON.parse(localStorage.getItem('favs')) || [];

    // Check if the recipe already exists
    const exists = favs.some(fav => fav.id === recipe.id);

    if (exists) {
      // Remove the recipe if already in favorites
      favs = favs.filter(fav => fav.id !== recipe.id);
    } else {
      // Add the full recipe object
      favs.push(recipe);
    }

    localStorage.setItem('favs', JSON.stringify(favs));
    setSavedFavs(favs);
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
        <Route path='/' element={<Browse savedFavs={savedFavs} toggleFav={toggleFav} />} />
        <Route path='/list' element={<List groceryList={groceryList} removeIngredient={removeIngredient} />} />
        <Route path='/favorite' element={<Fav savedFavs={savedFavs} toggleFav={toggleFav} />} />
        <Route path='/recipe/:id' element={<Detail addIngredients={addIngredients} savedFavs={savedFavs} toggleFav={toggleFav} />} />
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

                    {/* local storage */}
                    <section id='storage'>
                        <div className='section-gap section-gap border-t-2 border-light-grey border-dashed'>
                            <h2 className=''>Local Storage</h2>
                            <div className='content-gap'>
                                <div className='flex gap-4 justify-center items-center'>
                                    <div>
                                        <img src={lightMode} alt="light-mode"
                                            loading='lazy'
                                            className='p-2 bg-white/40 shadow-md max-w-full' />
                                    </div>
                                    <div>
                                        <img src={darkMode} alt="dark-mode"
                                            loading='lazy'
                                            className='p-2 bg-white/40 shadow-md  h-auto z-10' />
                                    </div>
                                </div>
                                <div className='mt-10'>
                                    <p>Since the free Spoonacular API has limits, I had to think of <span>strategies to optimize its use by reducing unnecessary calls</span>. LocalStorage is the key to achieving this by <span className='bg-yellow-light'> storing daily fetched data </span>, such as homepage displays, favorites, filters, and search results. It helps minimize API requests and improve performance by retrieving stored data first. It also helps maintain consistency for users across sessions, storing saved recipes, grocery lists, and even dark/light mode preferences so they don't have to start over every time they visit.
                                    </p>
                                </div>
                            </div>

                            <Accordion open={open === 4} icon={<Icon id={4} open={open} />} className='border  px-4 py-1 mt-6 shadow-md max-w-full rounded-2xl'>
                                <AccordionHeader onClick={() => handleOpen(4)} className='border-0 font-roundo-medium text-[18px] text-black tracking-wide'> {`< Storage.js utils >`} </AccordionHeader>
                                <AccordionBody>
                                    <SyntaxHighlighter
                                        language="javascript"
                                        style={tomorrow}
                                        showLineNumbers
                                        wrapLongLines
                                        customStyle={{
                                            letterSpacing: '.8px',
                                            borderRadius: '10px',
                                            width: "100%",
                                            maxHeight: '600px',
                                            height: '100%',
                                        }}
                                    >
                                        {`//function used to retrieve stored data from localStorage and check if it is still valid (i.e., stored today)
export const getStoredData = (key) => {
    try {
        const storedData = localStorage.getItem(key);
        const lastFetchDate = localStorage.getItem(\`\${key}_date\`);
        const today = new Date().toISOString().split("T")[0];

        // Check if there is stored data and it is from today
        if (storedData && lastFetchDate === today) {
            return JSON.parse(storedData);
        } else {
            // If data is old or not available, remove it to refresh daily
            localStorage.removeItem(key);
            localStorage.removeItem(\`\${key}_date\`);
            return null;
        }
    } catch (error) {
        console.error(\`Error accessing localStorage for key: \${key}\`, error);
        return null;
    }
};

//function used to store today's data in localStorage
export const storeData = (key, data) => {
    try {
        const today = new Date().toISOString().split("T")[0];
        localStorage.setItem(key, JSON.stringify(data));
        localStorage.setItem(\`\${key}_date\`, today);
    } catch (error) {
        console.error(\`Error storing data in localStorage for key: \${key}\`, error);
    }
};`}
                                    </SyntaxHighlighter>
                                </AccordionBody>
                            </Accordion>

                            <Accordion open={open === 3} icon={<Icon id={3} open={open} />} className='border  px-4 py-1 mt-6 shadow-md max-w-full rounded-2xl'>
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
                                            width: "100%",
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



                    {/* reflection */}
                    <section id="reflection">
                        <div className='section-gap section-gap border-t-2 border-light-grey border-dashed'>
                            <div className=''>
                                <h1 className=''>Reflection</h1>
                            </div>
                            <div className='content-gap'>
                                <p>
                                    Working with the API challenged my critical thinking skills as I had to find an efficient way to balance data accuracy with limited API requests. Initially, dealing with incomplete data from different endpoints required implementing a second fetch, which made me rethink my approach to optimize API usage. By leveraging localStorage, refining fetch logic, and strategically planning requests, I was able to reduce unnecessary calls and improve performance. This experience enhanced my problem-solving abilities and strengthened my understanding of state management and performance optimization in real-world applications.
                                </p>
                            </div>
                        </div>
                    </section>

                </div>
            </div>

        </>
    )
}
