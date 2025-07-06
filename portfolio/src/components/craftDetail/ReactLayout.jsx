import React, { useEffect, useRef } from 'react'
import BackToTop from '../buttons/BackToTop'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import lightMode from '../../../public/assets/nomly/light-mode.png'
import darkMode from '../../../public/assets/nomly/dark-mode.png'
import api from '../../../public/assets/nomly/api.png'
import api2 from '../../../public/assets/nomly/api2.png'
import data from '../../../public/assets/nomly/data.png'


function ReactLayout() {
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

    const apiRef = useRef(null);

    useGSAP(() => {
        let mm = gsap.matchMedia();

        mm.add("(min-width: 1024px)", () => {
            // Animations for large screens
            const tl1 = gsap.fromTo('.api-img',
                { translateY: '0%', rotate: 0 },
                {
                    translateY: '-25%',
                    duration: 1,
                    scrollTrigger: {
                        trigger: apiRef.current,
                        start: 'top 50%',
                        end: 'bottom top',
                        toggleActions: 'play none none none'
                    },
                }
            );

            const tl2 = gsap.fromTo('.api-img-front',
                { translateY: '0%', translateX: '0%', rotate: 0 },
                {
                    translateY: '20%',
                    translateX: '-25%',
                    duration: 1,
                    scrollTrigger: {
                        trigger: apiRef.current,
                        start: 'top 50%',
                        end: 'bottom top',
                        toggleActions: 'play none none none'
                    },
                }
            );

            // Cleanup function to reset position when screen shrinks
            return () => {
                tl1.kill();
                tl2.kill();
                gsap.set('.api-img', { translateY: '0%', rotate: 0 });
                gsap.set('.api-img-front', { translateY: '0%', translateX: '0%', rotate: 0 });
            };
        });

        return () => mm.revert(); // Clean up when component unmounts
    }, []);


    return (
        <>
            <BackToTop />

            <section className='content-w'>
                <div className=''>
                    <div className='py-10 border-b-2 border-light-grey border-dashed'>
                        <h1 className=''>API Integration</h1>
                    </div>

                    <div className='flex flex-col items-center gap-10 lg:flex-row h-full pt-10 lg:pt-16'>
                        <div ref={apiRef} className='flex-1 relative flex flex-col gap-4 justify-center items-center h-full lg:flex-row'>
                            <img src={api} alt="" className='p-2 bg-white bg-opacity-40 rounded-xl w-full api-img' />
                            <img src={api2} alt="" className='lg:absolute p-2 bg-white bg-opacity-40 rounded-xl h-auto w-full z-10 api-img-front ' />
                        </div>

                        <div className=' flex-1'>
                            <p>I used <a href="https://spoonacular.com/food-api" target='__blank' className='font-bold normal-case tracking-normal underline text-orange underline-offset-2'> Spoonacular API </a>to fetch real-time recipe data, which was the key to make Nomly functional. It enables users to explore recipes, save favorites, and create grocery lists easily. Using asynchronous functions to fetch data allows the code to wait for responses without blocking other tasks. </p>
                            <p className='mt-4'>
                                I used <span className='bg-yellow-light'> different endpoints during the first fetch</span> , but some may not include all the needed details, such as <span className='italic font-roundo'>extended ingredients</span>. To make sure the data is complete, <span className='bg-yellow-light'>a second fetch is required </span>, but only when important details are missing. This helps keep the data accurate while using the API efficiently and avoiding extra requests.</p>
                        </div>
                    </div>


                    <Accordion open={open === 1} icon={<Icon id={1} open={open} />} className='border rounded-xl px-4 py-1 mt-10 lg:mt-20 shadow-md'>
                        <AccordionHeader onClick={() => handleOpen(1)} className='border-0 font-roundo-medium text-[18px] text-black capitalize tracking-wide'> {`< API fetch >`} </AccordionHeader>
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
                        <div className='flex gap-4 justify-center items-center'>
                            <div>
                                <img src={lightMode} alt="" className='p-2 bg-white bg-opacity-40 rounded-xl max-w-full' />
                            </div>
                            <div>
                                <img src={darkMode} alt="" className='p-2 bg-white bg-opacity-40 rounded-xl h-auto z-10' />
                            </div>
                        </div>
                        <div className='mt-10'>
                            <p>Since the free Spoonacular API has limits, I had to think of <span>strategies to optimize its use by reducing unnecessary calls</span>. LocalStorage is the key to achieving this by <span className='bg-yellow-light'> storing daily fetched data </span>, such as homepage displays, favorites, filters, and search results. It helps minimize API requests and improve performance by retrieving stored data first. It also helps maintain consistency for users across sessions, storing saved recipes, grocery lists, and even dark/light mode preferences so they don't have to start over every time they visit.
                            </p>
                        </div>
                    </div>


                    <Accordion open={open === 4} icon={<Icon id={4} open={open} />} className='border rounded-xl px-4 py-1 mt-6 shadow-md'>
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
                                    width: '100%',
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

            <section className='content-w'>
                <div className='content-gap'>
                    <div className='py-10 border-b-2 border-light-grey border-dashed'>
                        <h1 className=''>Data Flow Management</h1>
                    </div>
                    <div className='flex flex-col gap-10 mt-10 items-center lg:flex-row'>
                        <div className='lg:basis-[40%]'>
                            <img src={data} alt="" className='object-cover' />
                            <p className='text-gray-600 text-center italic mt-2 leading-normal max-w-[20rem] mx-auto text-sm'>Ingredients can be added directly to shopping list while viewing the recipe </p>
                        </div>
                        <div className='lg:basis-[60%]'>
                            <p> <span className='bg-yellow-light'>Managing data flow across multiple components</span> was an important part of the project, making sure that state changes were handled smoothly throughout the app. To do this, I lifted the state to the root component and passed down important functions, like toggleFav and savedFavs, as props to key pages, including Browse, Favorites, and Recipe Detail.</p>

                            <p className='mt-4'> The grocery list is also managed in the root component and shared with recipe detailed page and grocery list. This allowed users to add ingredients to their shopping list directly from the recipe detail page, with updates automatically showing on the list page.
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



            <section className='content-w pb-20 md:pb-[10rem]'>
                <div className='content-gap'>
                    <div className='py-10 border-b-2 border-light-grey border-dashed'>
                        <h1 className=''>Reflection</h1>
                    </div>
                    <div className='mt-10'>
                        <p>
                            Working with the API challenged my critical thinking skills as I had to find an efficient way to balance data accuracy with limited API requests. Initially, dealing with incomplete data from different endpoints required implementing a second fetch, which made me rethink my approach to optimize API usage. By leveraging localStorage, refining fetch logic, and strategically planning requests, I was able to reduce unnecessary calls and improve performance. This experience enhanced my problem-solving abilities and strengthened my understanding of state management and performance optimization in real-world applications.

                        </p>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ReactLayout
