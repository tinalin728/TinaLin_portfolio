import { useState } from 'react'
import { projectData } from '../../data/projectData'
import ProjectIntro from '../../components/projects/ProjectIntro';
import ProjectLayout from '../../components/projects/ProjectLayout';
import ProjectSectionLayout from '../../components/projects/ProjectSectionLayout';
import UXDisplayCard from '../../components/projects/UXDisplayCard';

import list from '../../../public/assets/icons/list.png'
import move from '../../../public/assets/icons/move.png'
import pantry from '../../../public/assets/icons/pantry.png'
import search from '../../../public/assets/icons/search.png'

import login from '../../../public/assets/nomly/login.png'
import intro from '../../../public/assets/nomly/intro.png'
import { Globe } from 'lucide-react';

const project = projectData[1]


export default function Nomly() {

    const sections = [
        { id: "overview", label: "Overview" },
        { id: "process", label: "Process" },
        { id: "reflection", label: "Reflection" },

    ];

    // tabs
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <ProjectIntro
                title={project.intro.title}
                subtitle={project.intro.subtitle}
                timeline={project.intro.timeline}
                role={project.intro.role}
                process={project.intro.process}
                src={project.intro.src}
                buttonLink="https://nomly.tinalin.ca/"
                button="View Website"
                icon={Globe}
                iconSize='20'
            />

            <ProjectLayout sections={sections} currentId={project.id} projectData={projectData} >

                <ProjectSectionLayout id="overview" title="Overview">
                    <div className='flex flex-col md:flex-row gap-14 pb-14 lg:pb-20'>
                        <div className='basis-[60%]'>
                            <p className='subtitle-sm'> The Challenge </p>
                            <h3 className='mb-5'>Meal planning shouldn’t feel like a second job. </h3>

                            <p >
                                I’ve always found recipe apps a bit disconnected: you find something you want to cook, but then you’re on your own figuring out what you need to buy and what you already have.
                                That friction inspired me to explore ways to bring everything — discovery, pantry tracking, and grocery planning — into one flow.
                            </p>
                        </div>
                        <div className='basis-[40%]'>
                            <img src={intro} alt="Food" />
                        </div>
                    </div>

                    <hr className='divider' />

                    <div id="solution" >
                        <div className='lg:max-w-[66%] mb-10'>
                            <p className='subtitle-sm'> The Solution</p>
                            <h3 className='mb-5'>A full-stack solution that connects recipe discovery with grocery and pantry management</h3>
                            <p> What began as an API practice turned into a full-stack web app where users can search for recipes, save favorites, manage a pantry, and create grocery lists, without the usual friction.</p>
                        </div>

                        <UXDisplayCard
                            useIcon
                            iconImg={search}
                            iconSize='w-8 -translate-x-1'
                            title={project.overview.final.design1.title}
                            description={project.overview.final.design1.description}
                            images={project.overview.final.design1.images}
                            additionalClasses={'mb-14 lg:mb-20'}
                            videoClass="border  border-gray-300 rounded-2xl shadow-md"
                        />
                        <UXDisplayCard
                            useIcon
                            iconImg={move}
                            iconSize='w-8 -translate-x-1'
                            title={project.overview.final.design2.title}
                            description={project.overview.final.design2.description}
                            images={project.overview.final.design2.images}
                            additionalClasses={'mb-14 lg:mb-20'}
                            imgClass='p-2 rounded-2xl shadow-md border border-gray-300'
                            reverse
                        />

                        <UXDisplayCard
                            useIcon
                            iconImg={list}
                            iconSize='w-8 -translate-x-1'
                            title={project.overview.final.design3.title}
                            description={project.overview.final.design3.description}
                            images={project.overview.final.design3.images}
                            additionalClasses={'mb-14 lg:mb-20'}
                            imgClass='p-2 rounded-2xl shadow-md border border-gray-300'
                        />
                        <UXDisplayCard
                            useIcon
                            iconImg={pantry}
                            iconSize='w-8 -translate-x-1'
                            title={project.overview.final.design4.title}
                            description={project.overview.final.design4.description}
                            images={project.overview.final.design4.images}
                            imgClass='p-2 rounded-2xl shadow-md border border-gray-300'
                            reverse
                        />
                    </div>
                </ProjectSectionLayout>

                <hr />

                <ProjectSectionLayout id="process" title="Process">

                    <div className='pb-14 lg:pb-20'>
                        <p className='subtitle-sm'> Front-End </p>
                        <h3 className='mb-5'> Spoonacular API Integration</h3>

                        <p className='mb-5'>
                            This was the starting point of Nomly. I used the Spoonacular API to fetch recipes based on different filters and categories.

                            Some endpoints didn't include all the details (like full ingredient lists), I set up a second fetch to grab that info only when needed. This helped keep the experience fast and accurate, without flooding the app with unnecessary API calls.
                        </p>

                        <div className="w-full overflow-x-auto rounded-xl border border-gray-300 shadow-md bg-black text-white max-w-3xl xl:max-w-full">
                            <pre className="min-w-max p-4 text-sm">
                                <code className="whitespace-pre text-white ">
                                    {`if (apiType === "random") {
    apiUrl = \`https://api.spoonacular.com/recipes/random?apiKey=\${import.meta.env.VITE_API_KEY}&number=3\`;
    } else if (apiType === "complexSearch") {
    const isFilter = key.startsWith("filtered_");
    const number = isFilter ? 9 : 3;
    apiUrl = \`https://api.spoonacular.com/recipes/complexSearch?apiKey=\${import.meta.env.VITE_API_KEY}&\${query}&number=\${number}\`;
}`}
                                </code>
                            </pre>

                        </div>

                    </div>

                    <hr className='divider' />

                    <div>
                        <p className='subtitle-sm'> Back-End </p>
                        <h3 className='mb-5'> Database Integration (Express + MySQL)</h3>

                        <div className='flex gap-10 mb-10 flex-col lg:flex-row'>
                            <div className='flex-1'>
                                <p className='mb-2'>
                                    In the early version of Nomly, I stored things like saved recipes and shopping lists in local storage, just enough to make it feel functional. But as the project grew, I wanted users to come back to the app and still see their data.

                                    So I built out a backend using Express.js and connected it to a MySQL database. I created custom RESTful API routes to handle CRUD operations for:
                                </p>
                                <ul className='mb-5'>
                                    <li>User Accounts</li>
                                    <li>Favorites</li>
                                    <li>Grocery List</li>
                                    <li>Pantry List</li>
                                </ul>
                                <div>
                                    <p className='mb-2'>Each user’s data is tied to their account using a unique user_id. I used JWT for authentication, so only logged-in users can access or modify their content. The token is stored in localStorage and sent with every protected request.</p>

                                    <p>
                                        This shift from local storage to a proper backend made the app feel more like a real product, and taught me a lot about structuring endpoints, handling relational data, and keeping user data secure.


                                    </p>
                                </div>
                            </div>

                            <div className='flex-1 rounded-3xl overflow-hidden border mx-auto border-gray-300 max-w-[350px] p-2 shadow-md'>
                                <img src={login} alt="" className='w-full h-full object-cover rounded-2xl' />
                            </div>
                        </div>

                        <div className="w-full overflow-x-auto rounded-xl border border-gray-300 shadow-md bg-black text-white max-w-3xl xl:max-w-full">
                            <pre className="min-w-max p-4 text-sm">
                                <code className="whitespace-pre text-white ">
                                    {`const userRoutes = require('./routes/userRoutes');
const groceryRoutes = require('./routes/groceryRoutes');
const pantryRoutes = require('./routes/pantryRoutes');
const favRoutes = require('./routes/favRoutes');

app.use('/api/users', userRoutes);
app.use('/api/grocery', groceryRoutes);
app.use('/api/pantry', pantryRoutes);
app.use('/api/favorites', favRoutes);`}
                                </code>
                            </pre>

                        </div>


                    </div>

                </ProjectSectionLayout>

                <hr />

                <ProjectSectionLayout id="reflection" title="Reflection">
                    <h3 className='mb-5'>Where I Learned Full-Stack</h3>
                    <p className='mb-2'> Nomly started as a quick experiment with the Spoonacular API, but it ended up being the project where I truly learned how to connect frontend and backend together. I had experience with React before, but setting up the backend, from designing RESTful routes to managing user data in a database, pushed me to think beyond just the interface.
                    </p>
                    <p className='mb-2'> One of the most valuable things I learned was how to structure and connect data across the full stack. Making sure the right information flowed from the database to the frontend (and back) taught me how to think in terms of systems, not just screens.
                    </p>
                </ProjectSectionLayout>
            </ProjectLayout>

        </>
    )
}
