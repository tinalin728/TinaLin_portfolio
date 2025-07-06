import { prototype } from "postcss/lib/previous-map";

export const projectData = [
    {
        id: "tim-hortons-redesign",
        title: 'Tim Horton\'s App Redesign',
        category: "UX/UI · case study",
        cover: "/assets/tims/tims-cover.jpg",
        coverHover: "/assets/tims/tims-cover-hover.png",

        intro: {
            title: "Perfecting the flow of redeeming offers",
            subtitle: "A UX case study on Tim Horton's App",
            timeline: "4 weeks, July 2024",
            role: "UX researcher, UX/UI Designer",
            process: {
                label: 'process',
                content: "Research, Design, Iteration, Testing"
            },
            src: "/assets/tims/cover.jpg",
        },

        overview: {
            image: {
                src: "/assets/tims/intro.jpg"
            },
            final: {
                design1: {
                    title: 'Tap and Go',
                    description:
                        "Offers are now grouped in one place for faster access on the Home screen.The <span class='font-medium italic'> Activate</span> button is removed to allow users to redeem offers instantly for a smoother, more intuitive experience.",
                    images: [
                        {
                            src: '/assets/tims/home_new.png',
                            alt: 'Homepage',
                        },
                        { src: '/assets/tims/button_new.png', alt: 'original offer detail screen' },
                    ],

                },
                design2: {
                    title: 'Organized offer details',
                    description:
                        " Users go straight to eligible items, customize with fewer steps, and see offer details in one organized view. A default choice is pre-selected based on past orders to speed things up.",
                    images: [
                        {
                            src: '/assets/tims/offer.mp4',
                            alt: 'Offer Details',
                            type: 'video'
                        },
                        {
                            src: '/assets/tims/menu_new.png',
                            alt: 'Offer Menu',
                        },
                    ],
                },

                design3: {
                    title: 'Offer Editing & Conflict Alert',
                    description:
                        "Offers are visually grouped in the cart for better clarity, and users can edit offer items directly. If a second offer is selected, a popup prompts to replace the current one, helping prevent confusion and errors.",
                    images: [
                        {
                            src: '/assets/tims/cart.png',
                            alt: 'cart page - edit button',
                        },
                        {
                            src: '/assets/tims/message.png',
                            alt: 'error message',
                        },
                    ],
                },
            },
        },

        research: {
            survey: [
                {
                    src: '/assets/tims/quote1.svg',
                    alt: 'user quote'
                },
                {
                    src: '/assets/tims/quote2.svg',
                    alt: 'user quote'
                },
                {
                    src: '/assets/tims/quote3.svg',
                    alt: 'user quote'
                }
            ],

            problems: {
                issue1: {
                    title: 'Lack of clarity and feedback',
                    description:
                        "There were <span class='font-medium'>no visual cues </span>showing which items matched the offer, and no confirmation that an offer was applied. The “Activate” button added to the confusion, with no warning when offers conflicted or failed to apply.",
                    images: [
                        { src: '/assets/tims/offer_original.png', alt: 'original offer screen' },
                        { src: '/assets/tims/original-detail.png', alt: 'original offer detail screen' },
                    ],

                },
                issue2: {
                    title: 'Time-consuming process',
                    description:
                        "Users were sent to the full menu with no filters, forcing them to <span class='font-medium'>scroll and search manually </span> for eligible items.",
                    images: [
                        { src: '/assets/tims/menu_original.png', alt: 'original menu screen' },
                        { src: '/assets/tims/original-donut.png', alt: 'original menu screen 2' },
                    ],
                },

                issue3: {
                    title: 'Difficult to track and edit offers in the cart',
                    description:
                        "Users couldn’t change or remove offer items once added. <span class='font-medium'>There was no edit option. </span> When using both rewards and offers, labels like “Reward” appeared without context, making it unclear what was applied, how much was saved, or whether one replaced the other.",
                    images: [
                        { src: '/assets/tims/cart-original.png', alt: 'original cart screen' },
                        { src: '/assets/tims/cart-original.png', alt: 'original cart screen' },
                    ],
                },
            },

            competitor: {
                title: 'How Are Others Doing?',
                description: "I analyzed Starbucks, McDonald's, Breka, and A&W to compare offer visibility, redemption, and user experience. McDonald's and Starbucks make offers easy to find, but Starbucks struggles with unstable offer application. A&W requires manual selection from the offer page, while Breka lacks in-app rewards altogether.",
                img: {
                    src: "/assets/tims/c-analysis.png",
                    altText: "competitor analysis",
                    caption: 'Click to view competitor analysis'
                }
            },
        },

        define: {
            persona: {
                src: "/assets/tims/persona.jpg",
                alt: "User Persona Image"
            },

            journey: {
                src: "/assets/tims/journey-map.jpg",
                alt: "User Persona Image"
            }
        },

        design: {
            flow: {
                tabData: [
                    {
                        id: 'offer-flow',
                        label: 'Offer Order Flow',
                        image: {
                            src: '/assets/tims/flow1.jpg',
                            alt: 'Offer Order Flow Diagram',
                        },
                    },
                    {
                        id: 'error-flow',
                        label: 'Offer Conflict Flow',
                        image: {
                            src: '/assets/tims/flow2.jpg',
                            alt: 'Error Message Handling Flow Diagram',
                        },
                    },
                ],
            },


            wireframes: {
                header: 'Bringing Jane’s Experience to Life',
                description: "After mapping Jane’s journey, I created wireframes and a prototype to visualize a seamless offer redemption process. Reimagining the offer details screen was a bit tricky since some offers include a lot of items. I decided to stick with the original overlay but reorganized the items into point form to make them clearer and easier to read. I didn’t change Tim Hortons’ original color palette because I wanted to keep the design consistent with the company's brand identity.",

                medfiProto: [
                    {
                        src: '/assets/tims/design-midFi.jpg',
                        altText: 'user flow 1',
                    },
                    {
                        src: '/assets/tims/design-highFi.png',
                        altText: 'user flow 2',
                    }
                ]
            },
        },

        iteration: {
            before: {
                src: "/assets/tims/init-design.png",
                alt: 'initial design screens',
            },
            after: {
                src: "/assets/tims/iteration-screen.png",
                alt: 'iteration screens',
            },
        },

        reflection: {
            content: [
                '<span class="font-bold"> Simplicity Wins </span>: User interviews showed me how small moments of confusion can add up and make things frustrating. I realized that good design starts with listening to users and making things simple. It’s not just about how something looks—it should feel easy to use. The less people have to think, the smoother everything feels. Removing extra steps and making information clear makes a huge difference.',

                '<span  class="font-bold">User Testing Made a HUGE Difference</span>: Testing helped me catch small but important issues, like missing visual cues and unclear offer details. Without feedback, I might not have noticed them.',

                '<span  class="font-bold">Small Changes Matter </span>:  I focused a lot on improving the flow, but I realized that small UI tweaks—like clearer labels and better organization—made a big impact on how easy the app was to use.',

            ],
        },
    },

    {
        id: "nomly",
        status: 'completed',
        title: 'Nomly',
        category: "web app design · full stack development",

        media: "image",
        skills: [
            "React.JS",
            "TailwindCSS",
            "Api"
        ],
        cover: "/assets/nomly/nomly-cover.jpg",
        coverHover: "/assets/nomly/nomly-cover-hover.png",

        banner: {
            subHeader: 'Nomly - Web App',
            header: 'Recipe Discovery & Grocery Planning',
            image: {
                src: '/assets/nomly/banner.png',
                altText: 'Nomly banner',
                classes: 'scale-125'
            },
        },

        intro: {
            title: "Nomly: From Recipes to Groceries",
            subtitle: "Web app design & development",
            timeline: "4 weeks, Dec 2024",
            role: "Full-stack developer",
            process: {
                label: 'Tools',
                content: "Figma, React, TailwindCSS, Express.js, MySQL, Spoonacular API"
            },
            src: "/assets/nomly/cover-new.jpg",
        },


        overview: {
            final: {
                design1: {
                    title: 'Search and save what you like',
                    description:
                        "You can explore and save the ones you love.",
                    images: [
                        {
                            src: '/assets/nomly/home.mp4',
                            alt: 'browse and save recipes that you like',
                            type: 'video'
                        },
                    ],

                },
                design2: {
                    title: 'Add ingredients in one click',
                    description:
                        "On any recipe page, you can add the ingredients straight to your grocery shopping list. No copying or switching tabs. Select all to add and it’s there.",
                    images: [
                        {
                            src: '/assets/nomly/add.png',
                            alt: 'add ingredients to shopping list',
                        },
                    ],
                },

                design3: {
                    title: 'Grocery shopping list that works with you',
                    description:
                        "The shopping list isn’t fancy, but it’s clean and easy to use. You can check things off, edit them, and not worry about forgetting anything.",
                    images: [
                        {
                            src: '/assets/nomly/grocery-list.png',
                            alt: 'grocery list',
                        },
                    ],
                },
                design4: {
                    title: 'Keep Track of What You Already Have',
                    description:
                        "The pantry feature helps you remember what’s at home, so you don’t end up buying a second bottle of soy sauce (again).",
                    images: [
                        {
                            src: '/assets/nomly/pantry.png',
                            alt: 'Pantry list',
                        },
                    ],
                },
            },

        },

    },

    {
        id: "solar-system",
        category: "web design · development",

        status: 'completed',
        title: 'Solar System',
        cover: "/assets/solar/journey-cover.jpg",
        coverHover: "/assets/solar/solar-cover-hover.png",
        intro: {
            title: "Solar System Website",
            subtitle: "Web design & development",
            timeline: "3 weeks, Dec 2024",
            role: "Web designer & developer",
            process: {
                label: 'Tools',
                content: "Figma, React, TailwindCSS"
            },
            src: "/assets/solar/banner.jpg",
        },

        overview: {
            src: "/assets/solar/overview.jpg"
        },
        inspo: {
            src: "/assets/solar/inspo.png"
        },

        model: {
            src: "/assets/solar/earth.mp4"
        },
        scroll: {
            src: "/assets/solar/scroll.mp4"
        },
        sound: {
            src: "/assets/solar/sound.mp4"
        },


    },

    {
        id: "furrytales-pet-redesign",
        category: "web redesign · case study",
        title: 'Furrytales Pet',

        cover: "/assets/furry/furry-cover.png",
        coverHover: "/assets/furry/furry-cover-hover.png",

        banner: {
            subHeader: 'FLUI Hackathon',
            header: 'Furrytales Pet - Website Redesign',
            image: {
                src: '/assets/furry/banner.jpg',
                altText: 'banner',
                classes: 'scale-125'
            },
        },

        intro: {
            title: "Furrytales Pet: Website Redesign",
            subtitle: "FLUI Hackathon",
            timeline: "72 hours, Feb 2025",
            role: "UX/UI Designer",
            process: {
                label: 'process',
                content: "Research, Design, Iterate, Deliver"
            },
            src: "/assets/furry/banner.jpg",
        },


        overview: {
            intro: {
                src: "/assets/furry/intro.jpg",
            },
        },

        research: {
            brief: {
                src: '/assets/furry/clientbrief.png',
            },
            problems: {
                issue1: {
                    title: 'Weak Brand Presence & Visual Hierarchy',
                    description:
                        "The site lacked a clear brand identity, and inconsistent design made it easy to overlook. Important actions like CTAs didn’t stand out, and key messaging blended into the layout—making it hard for users to know where to focus or what to do next.",
                    image: { src: '/assets/furry/home.jpg', alt: 'home page before redesign', },
                },
                issue2: {
                    title: 'Disorganized information architecture',
                    description:
                        "The navigation was hard to follow, and product categories weren’t clearly defined—making it difficult for users to browse or know where to go. Key content felt scattered, slowing down the shopping experience.",
                    image: { src: '/assets/furry/product.jpg', alt: 'shop page before redesign' },
                },

                issue3: {
                    title: 'Inconsistent experience across pages',
                    description:
                        "Each page felt like a separate design, with layout, navigation, and styling shifting throughout the site. This lack of consistency made the experience feel disjointed and confusing.",
                    image: { src: '/assets/furry/about.jpg', alt: 'about page before redesign' },
                },
            },

            direction: {
                soya: {
                    src: "/assets/furry/soya.png",
                    alt: 'Soya, owner\'s dog',
                },
                tabData: [
                    {
                        id: '1',
                        label: 'Competitor Analysis',
                        image: {
                            src: "/assets/furry/competitor.png",
                            alt: 'Competitor Analysis',
                        },
                    },
                    {
                        id: '2',
                        label: 'Moodboard',
                        image: {
                            src: '/assets/furry/moodboard.webp',
                            alt: 'Moodboard',
                        },
                    },

                ],
            },
        },

        design: {
            sitemap: {
                src: '/assets/furry/sitemap.png'
            },
            lowFi: {
                src: '/assets/furry/low-fi.png'
            },
            system: {
                src: '/assets/furry/system.jpg'
            }
        },

        iteration: {
            hero: {
                src: '/assets/furry/iteration.jpg'
            },
            filter: {
                src: '/assets/furry/filter.svg'
            },
        },

        deliverable: {
            final: {
                src: '/assets/furry/final.mp4',
            },
            home: {
                src: '/assets/furry/home.png'
            },
            about: {
                src: '/assets/furry/about.png'
            },
            products: {
                src: '/assets/furry/products.jpg'
            },
            pages: {
                src: '/assets/furry/pages.mp4'
            },

        }
    },

    {
        id: "fitme",
        type: 'pant',
        category: "UX/UI · app design · case study ",

        status: 'completed',
        skills: [
            "UX/UI",
        ],
        title: 'FitMe',
        media: "image",
        cover: "/assets/pm/cover.jpg",
        coverHover: "/assets/pm/pm-cover-hover.png",

        intro: {
            title: "FitMe: Finding the perfect fit for jeans",
            subtitle: "Mobile App Design",
            timeline: "4 weeks, May 2024",
            role: "UX researcher, UX/UI Designer",
            process: {
                label: 'Process',
                content: "Research, Design, Iteration, Testing"
            },
            src: '/assets/pm/banner.png',
            banner: '/assets/pm/banner.jpg',
        },
        overview: {
            problem: { src: '/assets/pm/jeans.jpg', },
            final: {
                onboarding: {
                    title: "Easy Onboarding Fit Setup",
                    description: "Users begin with a quick, guided setup, adjusting sliders and answering short questions to define their body type. The interactive model gives instant visual feedback, helping users feel confident even without exact measurements.",
                    images: [
                        {
                            src: "/assets/pm/waist.png",
                            type: "image",
                            alt: "Onboarding, waist screen"
                        },
                        {
                            src: "/assets/pm/preference.png",
                            type: "image",
                            alt: "Onboarding, preference screen"
                        },
                    ]
                },

                design1: {
                    title: 'Smart Fit Recommendations on Browse',
                    description:
                        "Products are filtered and shown with the best-fitting size based on the user’s Fit Profile, removing guesswork and comparison.",
                    images: [
                        {
                            src: "/assets/pm/home.png",
                            alt: 'home screen',
                            type: 'image'
                        },
                        {
                            src: "/assets/pm/search.png",
                            alt: 'browse screen',
                            type: 'image'
                        },
                    ],
                },
                design2: {
                    title: 'Reviews from Similar Bodies',
                    description:
                        "Reviews are auto-filtered to show people with similar measurements, helping users see how clothing will actually fit.",
                    images: [
                        {
                            src: "/assets/pm/product-screen.mp4",
                            alt: 'product detail screen',
                            type: 'video'
                        },
                        {
                            src: "/assets/pm/review.mp4",
                            alt: 'review screen',
                            type: 'video'
                        },
                    ],
                },

                design3: {
                    title: 'Flexible Fit Management',
                    description:
                        "Users can update their profile at any time and save favorites, making future shopping easier and more tailored.",
                    images: [
                        {
                            src: "/assets/pm/fav.png",
                            alt: 'fav',
                            type: 'image'

                        },
                        {
                            src: "/assets/pm/edit.png",
                            alt: 'edit',
                            type: 'image'
                        },
                    ],
                },
            },
        },


        research: {
            reddit: [
                {
                    src: '/assets/pm/quote1.svg',
                    alt: 'user quote'
                },
                {
                    src: '/assets/pm/quote2.svg',
                    alt: 'user quote'
                },
                {
                    src: '/assets/pm/quote3.svg',
                    alt: 'user quote'
                },
                {
                    src: '/assets/pm/quote4.svg',
                    alt: 'user quote'
                }
            ],

            interview: {
                title: "Shopping Habits & Fit Struggles: What Users Say",
                description: "To understand different shopping habits, I talked to 6 people— <span> 3 who shop online often and 3 who rarely do </span>. I focused on how they think, what they worry about, and what makes them confident when picking a size. I grouped their feedback into an affinity map to find common struggles and patterns in how they shop for pants.",

                map: {
                    src: '/assets/pm/mapping.svg',
                    altText: 'affinity map'
                },
            },

            problems: {
                icons: [
                    {
                        number: '100%',
                        caption: 'Disliked shopping for pants online'
                    },
                    {
                        number: '83%',
                        caption: 'Said sizing feels like a guessing game'
                    },
                    {
                        number: '67%',
                        caption: 'couldn’t find references matching their body type'
                    },
                    {
                        number: '83%',
                        caption: 'Want better, and simplified sizing tools'
                    },
                ]

            },

            competitor: {
                img: {
                    src: '/assets/pm/market.png',
                    alt: 'competitor analysis',
                }
            }
        },

        define: {
            liz: {
                src: "/assets/pm/liz.png",
                sub: "user story 1",
                content: "As a frequent online shoppers, I want to quickly find pants that fit me without comparing size charts, so that I can shop with confidence and avoid returns."
            },

            jamie: {
                src: "/assets/pm/jamie.png",
                sub: "user story 2",
                content: "As a working professional with limited time, I want to get accurate size recommendations instantly, so that I can shop efficiently and avoid returns."
            },

            arc: {
                src: "/assets/pm/narrative.png",
            }

        },

        design: {

            flow: {
                tabData: [
                    {
                        id: '2',
                        label: 'Wireframes',
                        image: {
                            src: '/assets/pm/med-wireframe.png',
                            alt: 'med-fi wireframes',
                        },
                    },
                    {
                        id: '1',
                        label: 'User Flow',
                        image: {
                            src: '/assets/pm/userflow.jpg',
                            alt: 'user flow',
                        },
                    },

                ],
            },

            change1: {
                src: '/assets/pm/change1.png',
                alt: 'iteration',
            },
            change2: {
                src: '/assets/pm/change2.png',
                altText: 'iteration',
            }
        },

        final: {
            content: 'Based on the feedback, I improved homepage labels for clarity and enhanced the FitModel page with full-body views and better product details. After making these changes, I moved on to designing high-fidelity prototypes to further refine the experience.',

            system: {
                src: "/assets/pm/system.png",
                alt: 'design system'
            },

            onboarding: {
                src: "/assets/pm/onboarding.png",
                alt: 'onboarding'
            },
            home: {
                src: "/assets/pm/home.png",
                alt: 'homepage'
            },
            search: {
                src: "/assets/pm/search.png",
                alt: 'searchpage'
            },
            detail: {
                src: "/assets/pm/detail.png",
                alt: 'detailpage'
            },
            review: {
                src: "/assets/pm/review.png",
                alt: 'review'
            },
            fav: {
                src: "/assets/pm/fav.png",
                alt: 'fav'
            },
            edit: {
                src: "/assets/pm/edit.png",
                alt: 'edit'
            },

            all: { src: "/assets/pm/all.jpg" },
        },



        reflection: {
            content: [
                '<span>Early User Testing Matters</span>: Testing early, even when things weren’t perfect, helped me find problems I didn’t notice before. Some users got confused by certain features, and their feedback helped me make things clearer and easier to use. Even when feedback was tough to hear, it made the design better. This experience showed me that good design isn’t about making things perfect right away — it’s about learning, improving, and making sure everything works smoothly for the people using it.',

                '<span>Feedback is Growth </span>: At first, getting criticism on something I worked hard on felt overwhelming. But I realized that every comment, even the harsh ones, pushed me toward a stronger product. Listening to users and iterating on their needs helped me create something more useful, not just something that looks good.',

            ]
        }

    },


    //     {
    //         id: "basics",
    //         type: 'html',
    //         status: 'completed',
    //         skills: [
    //             "HTML",
    //             "TailwindCSS",
    //             "JS",
    //             "Team Collab",
    //         ],
    //         title: 'Basics. - Online Apparel Store',
    //         media: "image",
    //         cover: "/assets/basics/cover.jpg",
    //         banner: {
    //             subHeader: 'Basics. - E-commerce ',
    //             header: 'Developed an online apparel store',
    //             image: {
    //                 src: '/assets/basics/banner.png',
    //                 altText: 'Basics banner',
    //                 classes: "scale-150"
    //             },
    //         },
    //         stickyNav: [
    //             {
    //                 id: "planning",
    //                 step: "01",
    //                 label: "Planning",
    //                 color: "text-orange",
    //             },
    //             {
    //                 id: "design",
    //                 step: "02",
    //                 label: "Design",
    //                 color: "text-orange",
    //             },
    //             {
    //                 id: "develop",
    //                 step: "03",
    //                 label: "Develop",
    //                 color: "text-orange",
    //             },
    //             {
    //                 id: "prototype",
    //                 step: "04",
    //                 label: "Final",
    //                 color: "text-orange",
    //             },
    //         ],

    //         overview: {
    //             user: {
    //                 title: 'Tools',
    //                 content: 'Figma , HTML , TailwindCSS , Javascript'
    //             },
    //             process: {
    //                 header: 'Process',
    //                 content: 'Planning → Design → Develop → Final'
    //             },
    //             role: 'Product Owner, Front-end developer',
    //             duration: '5 weeks - May, 2024 (Project itself) , 3 weeks - Oct, 2024 (Revision)',
    //             headline: 'Creating a minimalist e-commerce experience that blends style and functionality...',
    //             content: "For the Basics project, I worked with a team of four to design and develop an e-commerce platform for minimalist apparels. The project aimed to simulate a real-world team environment while implementing Agile methodologies for efficient project management. As both the Product Owner and Front-End Developer, I oversaw the project timeline while building the website from scratch.",
    //             challenge: 'Developing a five-page website from scratch that aligned with user stories, all within a 5-week timeline and part-time schedule.',
    //             solution: 'Delivered a responsive five-page website built with HTML, TailwindCSS, and JavaScript, designed to align with user stories and provide a seamless user experience.',
    //             media: {
    //                 type: 'image',
    //                 src: '/assets/basics/intro.png',
    //                 altText: "basics",
    //                 caption: 'Sneak Peek',
    //             },
    //             webLink: {
    //                 text: 'Live Demo',
    //                 link: "https://basics.tinalin.ca/"
    //             },
    //         },

    //         contribution: {
    //             backlog: {
    //                 title: 'Project Backlog Creation',
    //                 content: 'In the Basics project, the product backlog served as the foundation for our Agile workflow. As the Product Owner, I was responsible for <span> creating and maintaining the backlog </span>. The backlog included all key tasks, such as wireframe development, front-end implementation, content creation, and stakeholder reviews. Each item was prioritized based on its importance to the project timeline and deliverables.',
    //                 image: {
    //                     src: '/assets/basics/backlog.png',
    //                     altText: 'backlog',
    //                     caption: 'backlog on Figma'
    //                 }
    //             },
    //             stories: {
    //                 content: 'User stories were key to guiding the project. As a group, we created several user stories and selected the most important ones. We broke each one down into its related page categories and set the order of page development priorities.',
    //                 image: {
    //                     src: '/assets/basics/stories.png',
    //                     altText: 'user stories',
    //                     caption: ''
    //                 }
    //             },

    //             sitemap: {
    //                 title: 'Sitemap',
    //                 content: "We created a sitemap to organize the website’s basic navigation, ensuring users can easily browse categories like Men, Women, and Promotions.",
    //                 image: {
    //                     src: '/assets/basics/sitemap.png',
    //                     altText: 'sitemap',
    //                     caption: 'click to view sitemap'
    //                 }
    //             },
    //             wireframe: {
    //                 title: 'Wireframes',
    //                 content: "Wireframes were also created to establish the structure and layout of the website. As part of the design process, I collaborated closely with the design team to ensure that the wireframes aligned with the project's goals and prioritized users' goals.",
    //                 image: {
    //                     src: '/assets/basics/wireframe.png',
    //                     altText: 'wireframe',
    //                     caption: 'click to view wireframes'
    //                 }
    //             }
    //         },

    //         dev: {
    //             screens: [
    //                 {
    //                     src: '/assets/basics/home.png',
    //                     altText: 'wireframe',
    //                     caption: 'homepage'
    //                 },
    //                 {
    //                     src: '/assets/basics/men.png',
    //                     altText: 'wireframe',
    //                     caption: 'men\'s homepage'
    //                 },
    //                 {
    //                     src: '/assets/basics/listing.png',
    //                     altText: 'wireframe',
    //                     caption: 'listing page'
    //                 },
    //                 {
    //                     src: '/assets/basics/detail.png',
    //                     altText: 'wireframe',
    //                     caption: 'product detail page'
    //                 },
    //                 {
    //                     src: '/assets/basics/about.png',
    //                     altText: 'wireframe',
    //                     caption: 'about page'
    //                 },

    //             ],

    //             tailwind: {
    //                 title: "Mobile Responsive Design",
    //                 content: "Although mobile responsiveness wasn’t part of the original scope, I <span> prioritized creating a mobile-first design </span> after the initial deliverables. Tailwind CSS made it easy to optimize for smaller screens and progressively enhance for larger devices, ensuring a seamless experience across all platforms.",

    //                 image: {
    //                     src: '/assets/basics/phone.png',
    //                     altText: 'mobile responsive',
    //                 }
    //             },

    //             component: {
    //                 header: "Dynamic Component Creation",
    //                 content: "I stored product details in a JSON file to keep data separate from the code, making updates easier and the codebase cleaner. For global elements like the header and footer, I used Web Components to dynamically add HTML and styles, ensuring consistency across pages. For components like Product Cards, I used modular JavaScript to fetch data from the JSON file and reuse it across pages, streamlining development and maintenance.",

    //                 snippets: [{
    //                     tab: 'productCard.js',
    //                     code: `export function productCard(product) {
    //         return \`
    //             <div class="relative group cursor-pointer">
    //                 <div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-10"></div>
    //                 <button class="heart-btn absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-20 cursor-pointer">
    //                     <i class="fa fa-heart text-3xl" style="color:white"></i>
    //                 </button>
    //                 <img src="\${product.image}" alt="\${product.alt}" class="w-full">
    //             </div>
    //             <a href="\${product.link}" class="cursor-pointer">
    //                 <h4 class="my-2 hover:text-gray-600">\${product.name}</h4>
    //                 <p class="price">\${product.price}</p>
    //             </a>
    //         \`;
    //     }`,
    //                 },
    //                 {
    //                     tab: 'fetchProductList.js',
    //                     code: `import { productCard } from "../productCard.js";

    // export function fetchProductList(dataPath, containerId, productType, callback) {
    //         fetch(dataPath)
    //             .then(res => res.json())
    //             .then(data => {
    //                 const productContainer = document.querySelector(containerId);
    //                 productContainer.innerHTML = '';

    //                 data[productType].forEach(product => {

    //                     const productCardHTML = productCard(product);
    //                     const productCardWrapper = document.createElement('div');
    //                     productCardWrapper.innerHTML = productCardHTML;

    //                     productContainer.appendChild(productCardWrapper);
    //                 });

    //                 if (callback) {
    //                     console.log('calling back');
    //                     callback();
    //                 }
    //             })
    //             .catch((error) => console.error('Error fetching product list:', error));
    //         }`,
    //                 }

    //                 ],

    //             },
    //         },

    //         final: [
    //             {
    //                 src: '/assets/basics/home.mp4',
    //                 altText: 'Homepage',
    //                 caption: 'Homepage'
    //             },
    //             {
    //                 src: '/assets/basics/about.mp4',
    //                 altText: 'About Page',
    //                 caption: 'About Page'
    //             },
    //             {
    //                 src: '/assets/basics/product.mp4',
    //                 altText: 'Product Home and Listing Page',
    //                 caption: 'Product Home and Listing Page'
    //             },
    //             {
    //                 src: '/assets/basics/detail.mp4',
    //                 altText: 'Product detail Page',
    //                 caption: 'Product detail Page'
    //             },
    //         ]
    //     },


]

