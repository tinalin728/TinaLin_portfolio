export const craftsData = [
    {
        id: 1,
        type: 'UXUI',
        status: 'completed',
        title: 'Tim Horton\'s',

        banner: {
            subHeader: 'Tim horton\'s App Redesign',
            header: 'Perfecting the flow of redeeming offers',
            image: {
                src: '/assets/tims/banner.png',
                altText: 'tim horton\'s app redesign',
                classes: "scale-125"
            },
        },

        overview: {
            tagline: 'Mobile App Redesign',
            companyOverview: 'Tim Horton\'s is a Canada icon, known for its coffee, donuts, and tasty breakfast and lunch options. Their app makes it super easy to order, earn rewards, and manage user account on the go!',

            content: "As a regular customer, I often find certain flows on the app challenging. This project focuses on redesigning the app to create a smoother, more user-friendly experience. My main goal is to <span> simplify offer redemption </span> while refreshing the homepage and product detail pages, making the app more enjoyable and intuitive for everyone.",

            role: 'Researcher, UXUI Designer',
            duration: '5 Weeks - Jul 2024',

            challenge: `My biggest challenge was <span> simplifying offer item's eligibility </span>. The criteria are often long, so breaking it into clear, easy-to-read sections without overwhelming users took some creative thinking.`,

            accomplish: ['Researched using different methods, including google surveys, user interviews,heuristic evaluation, and competitor analysis.',

                'Designed a new flow for redeeming offers']
        },

        process: {
            image: {
                src: '/assets/tims/intro-process.png',
                altText: 'design process'
            }
        },


        research: {
            description: 'To better understand the Tim Hortons app, the user experience around redeeming offers, and the competitive landscape, I started my research with these goals in mind:',

            goals: [
                'Understand user expectations and identify pain points with redeeming offers.',
                'Evaluate usability on the app, especially around offer redemption.',
                'Compare how competitors handle similar processes.',
                'Gather insights to make the offer redemption process more intuitive and efficient.'
            ],

            quoteImg: {
                src: '/assets/tims/research-quotes.svg',
                altText: 'interview quotes',
            },

            interview: {
                description: "To get a better understanding of the problem, I conducted 3 user interviews in person. The participants are regular monthly Tim Horton's app users. During the interview, I asked participants to complete a task — redeeming an offer, and followed up with questions to dig deeper. Here is what I discovered:",


                results: [
                    {
                        title: 'User Pain Point A',
                        subtitle: 'Complex redemption process',
                        description: 'Users felt that being directed to the full menu page after activating offers was an awkward flow. They had to sift through the entire menu to find what they needed.',

                    },
                    {
                        title: 'User Pain Point B',
                        subtitle: 'Memory Challenge',
                        description: 'Remembering all the items included in an offer can be tricky, especially with multiple items. Some users mentioned needing to go back to the offer section to double-check.',

                    }
                ]
            },

            flowAnalysis: {
                title: 'Current Flow Analysis- Heuristic Evaluation',
                description: 'Next, I assessed the offer redemption process and interface of the Tim Hortons app through heuristic evaluation. This process revealed both the issues raised during interviews and some additional ones that hadn’t been discussed. I also suggested solutions for the areas requiring improvement. The most critical issues include:',

                image: {
                    src: "/assets/tims/research-HE.png",
                    altText: "heuristic evaluation",
                    caption: 'Heuristic evaluation of redeeming offers',
                },

                issues: [
                    'Awkward flow after clicking the offer',
                    'No editing allowed after selected',
                    'No error message when users try to redeem more than one offer'
                ]
            },

            competitor: {
                title: 'Competitor Research',
                description: "To wrap up my research, I analyzed how Starbucks and McDonald's handle offer redemption. <span className:font-aleo> Their flows are super simple </span> —users can order right after clicking an offer. This comparison gave me great insights into best practices and areas where the Tim Horton\`s app could improve.",
                image: {
                    src: "/assets/tims/research-CA.png",
                    altText: "competitor analysis",
                    caption: 'Click to view competitor analysis'
                }
            },
        },

        define: {
            em: {
                content: "After gathering insights from my research, I put everything together in one clear view and created an empathy map that included the user's says, thinks, does, and feels",
                image: {
                    src: "/assets/tims/define-em.png",
                    altText: "Empathy Map Image",
                    caption: 'Click to view Empathy Map'
                }
            },

            persona: {
                title: "Meet Jane, A Busy Professional",
                content: "My research and insights gave life to Jane, who like many of us - busy and always on the go - <span> relies on ordering for pickup to save time and simplify her routine </span>. Jane often feels frustrated by the manual process of selecting offers and is looking for a quick and efficient ordering process to match her fast-paced work life.",
                image: {
                    src: "/assets/tims/define-persona.jpg",
                    altText: "User Persona Image"
                }
            },

            journey: {
                content: "A user journey map was developed to provide a detailed overview of Jane's experience during the enhanced offer redemption process. This visual representation outlines each step the user takes, pinpointing specific pain points and identifying opportunities for improvement.",
                image: {
                    src: "/assets/tims/define-journey.jpg",
                    altText: "User Journey Image"
                }
            },
        },

        design: {
            sketch: {
                description: "After understanding and identifying my users’ needs and challenges, I started brainstorming by sketching the flow down on paper. This approach provided a broad view of the process and layout.",
                image: {
                    src: "/assets/tims/design-sketch.jpg",
                    altText: "wireframe sketches",
                    caption: 'Jogging down ideas on paper'
                }
            },
            flow: {
                description: "I mapped out the scenarios users might encounter and the different steps and choices they have when trying to redeem their offers. By visualizing this process, I can better understand their experience and identify areas for improvement.",
                image:
                {
                    src: '/assets/tims/design-flow.jpg',
                    altText: 'user flow',
                    caption: 'user flow'
                },
            },

            wireframes: {
                description: "After completing the sketches and user flow, I created clickable medium-fidelity wireframes to test and refine the design flow. Building on this, I redesigned the homepage to enhance usability. Finally, I turned everything into high-fidelity wireframes to ensure that users had a full view for user testing and validating the new design.",

                image: [
                    {
                        src: '/assets/tims/design-midFi.png',
                        altText: 'user flow 1',
                    },
                    {
                        src: '/assets/tims/design-highFi.png',
                        altText: 'user flow 2',
                    }
                ]
            },
        },

        testing: {
            goals: [
                'Evaluate the new flow\'s effectiveness',
                'Determine if users notice the removal of the "Activate" button',
                'Uncover desired changes users may prefer',
                'Identify users\' challenges within the new flow'
            ],

            description: 'For usability testing, I created a Google survey with targeted questions and asked four participants to complete a task: ordering a specific offer. Afterward, they provided feedback through the survey and a brief interview. Observing them in person allowed me to capture their reactions and identify areas for improvement in the design.',

            problemImg: {
                src: '/assets/tims/testing-problems.png',
                altText: 'usability testing results',
            },

            iteration: {
                title: 'Iteration',
                content: 'To address the issues based on user usability feedback, I went back to refine my designs. I also realized that while I had focused on streamlining the flow, I hadn\'t paid enough attention to the UI elements. Therefore, I also refined the design layouts on certain pages to enhance their visual appeal.',

                image: [
                    {
                        src: '/assets/tims/test-iteration1.png',
                        altText: 'iteration1',
                    },
                    {
                        src: '/assets/tims/test-iteration2.png',
                        altText: 'iteration2',
                    },
                ]

            },

            final: {
                title: 'Final Look',
                figma: `
                <iframe
                  style="border: 1px solid rgba(0, 0, 0, 0.1);"
                  class="w-full h-[800px]"
                  src="https://embed.figma.com/proto/b1qsKrJYgq3JSl2vzSoljY/UIUX-Tim-hortons?page-id=128%3A756&node-id=1256-6914&node-type=frame&viewport=534%2C-322%2C0.1&scaling=scale-down&content-scaling=responsive&starting-point-node-id=1256%3A6914&show-proto-sidebar=1&embed-host=share"
                  allowFullScreen
                  title="Figma Prototype"
                ></iframe>
              `,
                btn: 'button'
            },
        },

        reflection: {
            content: [
                '<span>The Power of UX Research</span>: I realized how important it is to really understand what users need. Exploring different research methods gave me insights that helped shape designs that truly connect with users.',

                '<span>The Value of User Testing</span>: Testing my designs with actual users was a game-changer. It not only pushed me to rethink some of my ideas but also revealed some things I had overlooked, helping me design from the user\'s perspective.',

                '<span>Blending UI and Flow Design</span>: At first, I focused mainly on improving the flow, but I soon saw how combining UI tweaks made everything more seamless and user-friendly. It’s all about that balance!'
            ],
            nextSteps: [
                'Conduct usability testing on the updated wireframes to gather user feedback and refine the design based on their input.',

                'Work on refining the visual design to ensure a consistent, user-friendly experience across the app.',

                'Improving rewards points redemption process.'
            ],
        },
    },

    {
        id: 3,
        type: 'UXUI',
        status: 'completed',
        title: 'My Personalized Model Plugin',

        banner: {
            subHeader: 'My Personalized Model Plugin',
            header: 'cracking the code for the perfect pants',
            image: {
                src: '/assets/pm/banner.png',
                altText: 'my personalized model',
                classes: "scale-125"
            },
        },

        overview: {
            tagline: 'Web plugin design',
            companyOverview: 'A fictional plugin proposed to help users find the perfect fit for pants and reduce return rates for e-commerce sites',

            content: "Finding the perfect pair of pants can feel like a real challenge, especially when shopping online. With sizes often varying between different brands and styles, it can be hard to know what will actually fit. As someone who's only 5' tall, I totally get the struggle of wondering if the pants will be the right length or fit just right — especially when most product photos feature models who are much taller. That's where my plugin comes in! It’s designed to make finding the perfect fit easy by considering users' unique measurements and preferences, so they can shop confidently and say goodbye to the guesswork.",

            role: 'Researcher, UXUI Designer',
            duration: '4 Weeks - May 2024',
            overviewImage: {
                src: '/assets/tims/mockup.gif',
                altText: "Image",
                width: 700,
            },

            challenge: "One of the main challenges was <span> brainstorming how the plugin can help users visualize how products would look on them REALISTICALLY. </span> However, since this project was more about exploring possibilities and we weren’t limited by actual tools or technical constraints, I relied heavily on research, user interviews, and competitor analysis to guide my design decisions. This freedom allowed me to think creatively and focus on addressing user needs while predicting the plugin's potential performance.",

            accomplish: [
                'Conducted user interviews to identify pain points in online clothing shopping.',
                'Analyzed competitors\’ solutions for fit recommendations.',
                'Defined the opportunity for a personalized model plugin for size recommendations.',
                'Built necessary screens for user testing.'
            ]

        },

        process: {
            image: {
                src: '/assets/pm/design-process.png',
                altText: 'design process'
            }
        },

        research: {
            description: 'I started my research by setting some goals in mind:',

            goals: [
                'Understand user pain points when shopping for pants online',
                'Identify key factors for accurate fit',
                'Identify opportunities',
                'Compare how competitors handle similar processes.',
            ],

            interview: {
                description: "To get a better understanding of user challenges and preferences when shopping for pants online, I conducted in-depth interviews with 6 individuals. The primary goal was to understand shoppers behavior, uncover key pain points and identify features that could improve the online pants-shopping experience. Here is what I discovered:",

                image: {
                    src: '/assets/pm/research-interview.jpg',
                    altText: 'Interview Notes'
                },

                results: [
                    {
                        title: 'User Behavior',
                        subtitle: 'Dislike Shopping for Pants Online',
                        description: 'All 6 participants expressed a dislike for shopping for pants online, even though some reported shopping online frequently for other items.'
                    },
                    {
                        title: 'User Pain Point',
                        subtitle: 'Sizing Challenges',
                        description: 'All 6 participants reported frustrations with sizing challenges due to confusing size charts, unclear measurements, and inconsistent sizing.'
                    },
                    {
                        title: 'User Need',
                        subtitle: 'Visual Representation',
                        description: '4 / 6 participants emphasize the importance of seeing how pants would look on their body type (customer reviews, model with similar body type reference)',
                    },
                    {
                        title: 'Features Users Want',
                        subtitle: 'Interactive sizing tool',
                        description: '5 / 6 participants suggested adding interactive size recommendation tools or questionnaires to simplify the sizing process.',
                    },
                ]
            },

            competitor: {
                title: 'Market Research',
                description: "I wanted to know how other brands help customers find the right fit for pants, so I looked into four brands that were mentioned in the interviews: <span> Uniqlo, Aritzia, Levi's and Abercrombie</span>. This analysis focused on tools and features that are used on the websites to assist shoppers in selecting the right size.  I found that Uniqlo and Aritzia offer interactive size tools that recommend sizes based on user input, such as height, weight, and fit preferences. However, these tools lack detailed visuals to help customers better understand the fit. In contrast, Levi's and Abercrombie do not offer interactive tools and instead rely on traditional size charts and fit guides, providing less personalized assistance for selecting the right size.",
                image: {
                    src: "/assets/pm/research-CA.jpg",
                    altText: "competitor analysis",
                    caption: 'Click to view competitor analysis'
                }
            },
        },

        define: {
            insights: {
                content: "Through user interviews and market research, I consolidated key insights into a clear summary. Participants shared concerns about inconsistent size charts, difficulty predicting fit, and a strong preference for seeing clothes on real models. These findings revealed an opportunity for an eCommerce solution:",

                solution: "A personalized model plugin that recommends sizes based on users’ body types and shows how the clothes fit on real models with similar builds.",

                image: [
                    {
                        src: '/assets/pm/define-notes.jpg',
                        altText: 'research notes',
                        caption: 'Summary of Insights'
                    },
                    {
                        src: '/assets/pm/define-features.jpg',
                        altText: 'brainstorming features',
                        caption: 'Brainstorming for plugin features'
                    },
                ],
            },

            ca: {
                content: "After identifying the opportunity for a personalized model plugin, I conducted further competitor analysis to better <span> understand existing solutions </span> in the market. This helped me refine the concept of the plugin by exploring how other plugins tackle fit prediction and size recommendations. I realized that <span> most existing plugins rely solely on size recommendations and don’t use visual models to show how clothes fit </span>. This insight led to the opportunity to create a personalized model plugin that displays how clothes fit on real models with similar body types.",
                img: {
                    src: '/assets/pm/define-CA2.jpg',
                    altText: 'competitor analysis',
                    caption: 'Summary of Insights'
                }

            },


            persona: {
                title: "Meet Liz, A Casual Online Shopper",
                content: "My research and insights brought Liz to life—a shopper who loves the convenience of buying most things online. But when it comes to pants, she’s a bit more hesitant. Like many of us, Liz <span> worries about the fit, comfort, and the hassle of returns </span>. She just wants to feel confident that what she orders will work perfectly for her. Liz is a relatable, everyday user who appreciates easy online shopping but could use a little extra reassurance when it comes to those trickier purchases.",
                image: {
                    src: "/assets/pm/define-persona.jpg",
                    altText: "User Persona Image"
                }
            },

            journey: {
                content: "A user journey map was developed to provide a detailed overview of Liz's experience using My Personalized Model plugin. This visual representation outlines each step the user takes, pinpointing specific pain points and identifying opportunities for improvement.",
                image: {
                    src: "/assets/pm/define-journey.jpg",
                    altText: "User Journey Image"
                }
            },
        },

        design: {
            sketch: {
                description: "To start the design process, I did some quick sketches to help me get ideas on paper",
                image: {
                    src: "/assets/pm/design-sketch.png",
                    altText: "wireframe sketches",
                    caption: 'Rough screen sketches'
                }
            },
            flow: {
                description: "I created a user flow that follows the steps the user would encounter upon clicking the plugin button on the e-commerce product page.",
                image:
                {
                    src: '/assets/pm/design-flow.jpg',
                    altText: 'user flow',
                    caption: 'user flow for entering information'
                },
            },

            wireframes: {
                description: "After completing the sketches and user flow, I created clickable medium-fidelity wireframes for initial user testing",

                image: [
                    {
                        src: '/assets/pm/design-midFi.png',
                        altText: 'user flow 1',
                    },
                ]
            },
        },

        testing: {
            goals: [
                'Determine if appearance preferences are crucial for the plugin\'s effectiveness.',
                'Identify any gaps in the information-gathering process during user input.',
            ],

            description: "Since this was an initial testing phase, I conducted quick user testing to evaluate my proposal. I asked six participants to test the accessibility of the user flow by interacting with linked screens.",

            result: {
                title: "Results",
                content: "<span> 5 out of 6 </span> participants found the appearance input fields were unnecessary because they felt these details were not directly related to determining size or improving their shopping experience. <span> 3 out of 6 </span> suggested adding labels to the icons on the model page for better clarity and understanding of their purpose."
            },


            iteration: {
                title: 'Iteration',
                content: 'I made some adjustments based on the user feedback and then updated the screens into high-fidelity wireframes, making sure to include the improvements for a smoother user experience. Here are some of the screens after iteration:',
            },

            screens: {
                first: {
                    image: {
                        src: '/assets/pm/final1.jpg',
                        altText: 'screen1',
                    },
                    content: 'Plug-in can be found on product pages'
                },
                second: {
                    image: {
                        src: '/assets/pm/final2.jpg',
                        altText: 'screen3',
                    },
                    content: 'Users will be asked to input general information, including gender age, height, weight, and measurements if they know it'
                },
                third: {
                    image: {
                        src: '/assets/pm/final3.jpg',
                        altText: 'screen3',
                    },
                    content: 'For users who don\'t their measurements.'
                },
                fourth: {
                    image: {
                        src: '/assets/pm/final4.jpg',
                        altText: 'screen4',
                    },
                    content: 'Users can get personalized size recommendations and see how the product fits on a real model with a body type similar to theirs. They can even view the model in 360 degrees for a complete look. The cart and wishlist are seamlessly synced, allowing users to save items for later and move them to the cart when ready to purchase. To make confident decisions, users can also explore customer reviews and photos to see how the product looks in real life. These features make shopping smarter and more convenient!'
                },
            },

            limitation: {
                title: "Is This Project Possible?",
                content: 'While this project introduces innovative features like personalized size recommendations, real models for visualizing fit, and synced cart and wishlist functionality, there are key limitations that make it not possible to be executed :',
                points: [
                    '<span> Large Model Database Requirements</span> : Requires a diverse database of models for various body types and sizes.',
                    '<span>Data Management and Processing </span>: Advanced algorithms are needed to map user data to models accurately.',
                    '<span>High Initial Costs </span>: Developing 360-degree views and dynamic product swaps is resource-intensive',
                ],

                conclusion: 'To better address users’ need for clear and accurate visuals, we could explore using AI-generated models that are realistic in the future. This would make it easier to show how products look on different body types while keeping things cost-effective and inclusive.'
            }
        },

        reflection: {
            content: [
                '<span>User-Centered Focus</span>:  The lack of tools to build and test the plugin pushed me to focus more on understanding user needs. Without the ability to validate with real-world testing, I had to rely on user interviews and competitor analysis, which helped refine the design and prioritize the user experience.',

                '<span>Competitor Insights</span>: Competitor insights are invaluable for identifying gaps in the market and refining the direction of a project, especially when there are constraints within a project',

                '<span>Early User Testing</span>: Conducting early user testing helped me identify potential pain points and refine the design before progressing too far. I realized that reaching out to users when I wanted to know more about certain aspects is really helpful! Their feedback gave me a clearer understanding of what’s working and what’s not, which allowed me to make informed decisions and adjust the design accordingly.'
            ],
        },
    },





    {
        id: 2,
        type: 'coding',
        status: 'completed',
        title: 'Basics',

        banner: {
            subHeader: 'Basics',
            header: 'Front-End Development for Basics E-Commerce',
            image: {
                src: '/assets/basics/banner.png',
                altText: 'my personalized model',
                classes: "scale-150"
            },
        },
        overview: {
            tagline: 'Front-End Development',
            companyOverview: 'A fictional online clothing retailer that sells closet essentials, which can be mixed and matched in a variety of styles',

            content: "For the Basics project, I worked with four other teammates to create an e-commerce website that focuses on selling minimalist T-shirts. The objective was to simulate a real-world team environment and implement Agile methodologies to manage the project efficiently. We handled all aspects of the project, from coding the website to designing the visuals, crafting the layout, and writing the content. Each of us took on a specific role, which made the process feel like a real-world project and helped us learn how to rely on each other’s strengths.",

            role: 'Product Owner, Front-End Developer',
            duration: '5 Weeks - May 2024',

            challenge: "One of the main challenges was <span> managing our five-week timeline as a part-time team, crafting the project from scratch to finish. </span> Since I was both the Product Owner and the only developer, I had to balance overseeing the project’s progress while handling all the development tasks. After the project ended, I took the opportunity to continue refining my development skills by optimizing the pages and enhancing the mobile view, turning the challenges I faced into a valuable learning experience.",

            accomplish: [
                "As the Product Owner, I guided the project timeline and helped ensure the team stayed aligned with the goals",
                "As a developer, I developed the website's structure from scratch using HTML, TailwindCSS, and JavaScript",
                "I further refined the website by optimizing it for mobile view, improving accessibility and responsiveness",
            ]
        },

        contribution: {
            backlog: {
                title: 'Project Backlog Creation',
                content: 'In the Basics project, the product backlog served as the foundation for our Agile workflow. As the Product Owner, I was responsible for <span> creating and maintaining the backlog </span>. The backlog included all key tasks, such as wireframe development, front-end implementation, content creation, and stakeholder reviews. Each item was prioritized based on its importance to the project timeline and deliverables. I worked closely with my teammates to refine the backlog weekly to ensure it aligned with our sprint goals. By breaking down large tasks into smaller, manageable pieces, we were able to tackle development and design incrementally while staying flexible to adjustments.',
                image: {
                    src: '/assets/basics/backlog.png',
                    altText: 'backlog',
                }
            },
            wireframe: {
                title: 'Wireframe Creation',
                content: "Wireframes were created during the initial planning phase to establish the structure and layout of the website. As part of the design process, I collaborated closely with the design team to ensure that the wireframes aligned with the project's goals and prioritized users' goals.",
                image: {
                    src: '/assets/basics/wireframe.png',
                    altText: 'wireframe',
                }
            }
        },

        dev: {
            header: "Front-End Development",

            tailwind: {
                title: "Tailwind CSS Integration",
                content: "To develop the essential pages for this project, I leverage Tailwind CSS to create a clean, responsive website. I find that traditional CSS can sometimes get messy and hard to manage, especially for big websites that this that contain multiple pages. With Tailwind CSS, I can apply styles directly to the elements I’m working on, so <span> I don’t have to deal with complicated selectors or too many global styles </span>. This makes my code easier to read and fix. ",

                content2: "I also customize Tailwind’s utility classes to build components that fit my design needs. This helps keep the design consistent across the site while still allowing for flexibility and avoiding style conflicts. It’s a simple and efficient way to create clean and tailored designs.",

                image: {
                    src: '/assets/basics/tailwind.png',
                    altText: 'tailwind utility class',
                }
            },

            mobile: {
                title: "Mobile Responsive Design",
                content: "<span> Creating a mobile-responsive website </span> was a priority I set for myself after the initial project deliverables were completed, as the original requirements did not include a mobile design. Using Tailwind CSS, I implemented <span> a mobile-first approach </span>, starting with optimizing the website for smaller screens and then progressively enhancing it for tablet and desktop views. This additional effort allowed me to ensure a seamless and polished experience across all devices, going beyond the initial scope of the project.",
                image: {
                    src: '/assets/basics/responsive.png',
                    altText: 'responsive desgin',
                }
            },

            component: {
                header: "Dynamic Component Creation",
                content: "When working on the Basics project, I noticed that many UI elements were repetitive, which made the HTML files unnecessarily long and harder to read. To address this, I looked into better ways to organize and reuse code efficiently.",
                json: {
                    title: "1. JSON Data Management",
                    content: "To simplify the organization of product data for the Basics project, I <span> stored all product details in a JSON file.</span> This approach kept the product information separate from the code, making it easier to manage and update. Each product entry in the JSON file included details like the product name, price, image URL.",
                    image: {
                        src: '/assets/basics/json.png',
                        altText: 'json file',
                    }
                },

                web: {
                    title: "2. Web Components",
                    content: "I used <span> Web Components for the header and footer </span> because they are global elements that appear across all pages. Using <span> connectedCallback() method </span>, I dynamically added the HTML structure, styles, and interactivity when the elements were added to the page. This ensured that the header and footer were properly initialized in the DOM, providing a clean and efficient way to manage global components. This approach kept the elements reusable, consistent, and independent.",
                    image: {
                        src: '/assets/basics/webcomponent.png',
                        altText: 'web component',
                    }
                },
                modular: {
                    title: "3. Modular JavaScript",
                    content: "For the product cards and other page-specific components, I opted for modular JavaScript to maintain flexibility and scalability. <span> Modular JS allowed me to pass data dynamically (such as JSON for product details) and integrate seamlessly with the page logic </span>. This was especially beneficial for components that needed frequent interaction or customization based on the page context.",
                    content2: 'For example, I created a reusable Product Card component and a Fetch Listing component to handle the retrieval of product data from JSON files. These two components were then integrated across multiple pages, such as the home page, product listing page, and featured products section. This approach ensured consistency, scalability, and efficient management of dynamic content throughout the site without having to write so many code on HTML files',

                    image: [
                        {
                            src: '/assets/basics/card.png',
                            altText: 'product card example',
                        },
                        {
                            src: '/assets/basics/fetch.png',
                            altText: 'fetch data example',
                        },
                    ]

                },
            },

            functionality: {
                header: 'Functionality',
                fav: {
                    title: "1. Toggle Favorite",
                    content: "I implemented a favorite button feature that allows users to mark products as favorites by clicking on a heart icon. This interactive functionality dynamically updates the icon’s color to indicate whether a product has been favorited or unfavorited.",
                    image: {
                        src: '/assets/basics/fav.png',
                        altText: 'favorite',
                    }
                },

                slick: {
                    title: "2. Slick Plugin Integration",
                    content: "I integrated the Slick plugin to create a responsive and visually appealing product carousel for the Basics website. This feature was used to showcase featured products and promotions, allowing users to browse through multiple items in a smooth, interactive manner.",
                    image: {
                        src: '/assets/basics/slick.png',
                        altText: 'favorite',
                    }
                }
            }
        }
    },



    {
        id: 4,
        type: 'coding',
        status: 'in-progress',

        banner: {
            subHeader: 'Tim horton\'s App Redesign',
            header: 'Perfecting the flow of redeeming offers',
            image: {
                src: '../assets/crafts/tims/banner.png',
                alt: 'tim horton\'s app redesign',
                classes: "scale-150"

            },
        },
    },
]

