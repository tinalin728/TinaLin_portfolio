import { prototype } from "postcss/lib/previous-map";

export const projectData = [
    {
        id: "tim-hortons-redesign",
        type: 'UXUI',
        skills: [
            "UX/UI",
        ],
        status: 'completed',
        title: 'Tim Horton\'s App Redesign: Perfecting the offer redemption process',
        media: "image",
        cover: "/assets/tims/cover.jpg",
        banner: {
            subHeader: 'Tim horton\'s App Redesign',
            header: 'Perfecting the flow of redeeming offers',
            image: {
                src: '/assets/tims/banner.png',
                altText: 'tim horton\'s app redesign',
                classes: "scale-[1.1]"
            },
        },


        overview: {
            user: {
                title: 'Target Audience',
                content: 'Tim Horton\'s app users (first-timers, regular users)'
            },
            process: {
                header: 'process',
                content: 'Research → Ideation → Design → Testing → Iteration → Reflection'
            },
            role: ['Researcher , UX/UI designer'],
            duration: '4 weeks - July 2024',
            headline: 'Tim Horton\'s is a Canadian favorite, but its app wasn’t as easy to use as its coffee is to enjoy.',
            content: "As a weekly Tim Horton's app user, I expected a smooth and easy experience. But even after the app’s redesign, small usability issues persisted.  I kept running into small frustrations that made me always wonder - <span> Why isn’t this simpler? </span> That’s when I decided to take a closer look.",
            challenge: 'How can we make redeeming offers as smooth and intuitive as ordering in-store, without the extra steps and confusion?',
            solution: 'I introduced a more intuitive, step-by-step process that allows users to browse, customize, and apply offers without confusion.',

            media: {
                src: '/assets/tims/intro.png',
                altText: "Tim Horton's",
                caption: 'Sneak Peek',
            },
            protoLink: 'skip to prototype'

        },

        research: {
            survey: {
                question: "I know something wasn't working. Where were users getting stuck?",
                content: "I used Google Forms to survey 19 participants and understand how they interact with the Tim Horton's app. What were the commons? <br/> <span class='font-patrick text-lg text-orange'> Ordering was easy, but offers weren’t. </span>",
                imgRow1: [
                    {
                        src: '/assets/tims/survey1.png',
                        alt: 'Survey Image 1'
                    },
                    {
                        src: '/assets/tims/survey3.png',
                        alt: 'Survey Image 3'

                    }
                ],

                imgRow2: [
                    {
                        src: '/assets/tims/survey2.png',
                        alt: 'Survey Image 2'
                    },
                    {
                        src: '/assets/tims/survey4.png',
                        alt: 'Survey Image 4'
                    }
                ]

            },
            header: 'Defining the Research Focus',

            description: 'To dive deeper into the offer redemption experience, I focused my research on the following goals:',

            goals: [
                'Understand user expectations and identify pain points with redeeming offers.',
                'Evaluate usability on the app, especially around offer redemption.',
                'Compare how competitors handle similar processes.',
                'Gather insights to make the offer redemption process more intuitive and efficient.'
            ],

            interview: {
                title: "User Interviews: Real Stories, Real Struggles",
                description: "I began my process with 3 user interviews to understand how users redeem offers. <span> They were asked to redeem a '$7 Breakfast Combo' offer while I observed their experience, similar to a small usability test </span>. After completing the task, I followed up with questions to understand their challenges, expectations, and frustrations.",

                users: [
                    {
                        img: "/assets/tims/user1.png",
                        type: "Frequent User",
                        name: "Suin, 18",
                        complete: "<span class=''> Task Success:</span> ✓",
                        time: "<span class='mr-1 '> Time:</span> 0:48",
                        description: "weekly app user and redeems offer regularly",
                        quote: "It takes too many steps to redeem the offer. It forced me to memorize the menu"
                    },
                    {
                        img: "/assets/tims/user2.png",
                        type: "Occasional User",
                        name: "Teddy, 32",
                        complete: "<span class='mr-2 '> Task Complete:</span> ❌",
                        time: "<span class='mr-1 '> Time:</span>3:12",
                        description: "Orders through the app monthly but rarely redeems offers.",
                        quote: "Why am I at the full menu page? Is the offer applied?",
                        note: "failed to complete the task after picking the wrong item"
                    },
                    {
                        img: "/assets/tims/user3.png",
                        type: "New or Infrequent User",
                        complete: "<span class=''> Task Complete:</span> ✓",
                        time: "<span class='mr-1 '> Time: </span>1:55",
                        name: "Gary, 32",
                        description: "Uses the app only when necessary, only used offers once.",
                        quote: "What do I do after I activated the button?"
                    }
                ],
                map: {
                    src: "/assets/tims/research-interview.svg",
                    alt: 'affinity mapping',
                },
            },

            flowAnalysis: {
                title: 'Breaking down UX barriers with Heuristic Evaluation',
                description: 'I conducted a heuristic evaluation to analyze the flow and usability of the Tim Hortons app During this process, I also jotted down my initial solutions to address these challenges, helping shape the direction of my redesign.',

                image: {
                    src: "/assets/tims/research-HE.png",
                    altText: "heuristic evaluation",
                    caption: 'Heuristic evaluation of redeeming offers',
                },
            },

            problems: {
                title: 'Prioritized Problems: What Needs Fixing First?',
                issue1: {
                    screenSrc: '/assets/tims/menu_original.png',
                    screenSrc2: '/assets/tims/original-donut.png',
                    iconSrc: "/assets/tims/issue1.svg",
                    altText: "icon",
                    header: 'Time-Consuming Offer Selection Process',
                    caption: 'Users are redirected to the full menu with no guidance. No labels or filters to indicate which items qualify for the offer.'
                },

                issue2: {
                    screenSrc: "/assets/tims/offer_original.png",
                    screenSrc2: "/assets/tims/original-detail.png",
                    iconSrc: "/assets/tims/issue3.svg",
                    altText: "issue icon",
                    header: 'No Warnings for Offer Conflicts',
                    caption: 'The Activate button is meant to let users select offers, applying the one with the highest discount at checkout. However, it creates confusion by making it seem like multiple offers can be used at once. No message clarifies that only one discount applies, leaving users unaware until checkout.'
                },

                issue3: {
                    screenSrc: "/assets/tims/cart-original.png",
                    iconSrc: "/assets/tims/issue4.svg",
                    altText: "issue icon",
                    header: 'No Option to Edit Offers & Disorganized Offer Display',
                    caption: 'Once an offer is selected, users can’t swap or edit items, forcing them to restart the order. Additionally, offer combos appear as separate items in the cart instead of being grouped together, making it harder to track applied discounts.'
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
                header: 'Into Jane\'s Perspective',
                content: 'Through my research, Jane’s story began to take shape. Like many of us, she’s always on the go and needs an app that works as efficiently as she does. She often feels frustrated by the manual process of selecting offers and navigating the app.',
                src: "/assets/tims/persona.jpg",
                altText: "User Persona Image"
            },

            journey: {
                header: 'Journey Map: Brainstorming Solutions',
                content: 'I created a journey map to visualize how Jane navigates the current app to achieve her goals. By identifying pain points at different stages, I brainstormed potential solutions for improvement that aligned with the user\'s goal and needs.',
                src: "/assets/tims/journey-map.jpg",
                altText: "User Persona Image"
            }
        },

        design: {
            flow: {
                description: "After mapping out the journey, I narrowed down the solutions and created two user flows to improve the offer redemption process. The offer order flow shows the steps Jane takes to redeem an offer smoothly. I also made an error message flow that proposes clear guidance when users reach offer limits.",
                tabData: [
                    {
                        tab: "Offer Order Flow",
                        src: "/assets/tims/flow1.jpg",
                        altText: "Offer Order Flow Diagram"
                    },
                    {
                        tab: "Error Message Handling Flow",
                        src: "/assets/tims/flow2.jpg",
                        altText: "Error Message Handling Flow Diagram"
                    }
                ]
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

        testing: {
            header: "Does This Work?",

            description: 'To validate the new design, I conducted usability testing with 4 participants. Each participant was tasked with <span> redeeming a Farmer\'s Breakfast Wrap and a Classic Donut </span>, to match common user actions. The goal was to see how well the new flow worked, check if they noticed the "Activate" button was gone, find out what changes they wanted, and spot any problems they faced. <span> While all participants liked the simpler flow to the offers menu, some issues remained </span>:',

            findings: [
                '<span class="text-green-500 text-xl mr-1">☺</span> <span>Offer redemption was easier</span> : 75% liked the new process, 25% found it easier but needed some time to adjust, and 0% had trouble using it.',
                '<span class="text-red-500 text-xl mr-1">☹</span> <span>Offer details needed improvement</span> : 50% found them clear, 25% didn’t.',
                '<span class="text-red-500 text-xl mr-1">☹</span> <span>Users felt lost after adding offers</span> : They preferred going to the cart instead of the menu.',
                '<span class="text-red-500 text-xl mr-1">☹</span> <span>Tracking selected offers</span> :Users had trouble understanding the filtered menu and didn’t always know what they were prompted to select.',
            ],

            problemImg: {
                src: '/assets/tims/testing-problems.svg',
                altText: 'usability testing results',
            },
        },

        iteration: {
            title: 'Iteration',
            content: 'Testing revealed a few areas that needed improvement, like clearer visual cues for navigation and better feedback for redeemed offers. While the core flow worked well, the legibility of the offer details and offer clarity were still an issue. Based on this, I redesigned these screens, updating the layout and visual hierarchy to make it clearer and easier to use.',

            image: [
                {
                    src: '/assets/tims/test-iteration1.png',
                    altText: 'iteration1',
                }
            ],

            final: {
                screens: [
                    {
                        header: "Redesigned Homepage: Just Tap and Go",
                        content: "Rewards are now prominent, offers are in one section for faster ordering, and banners and recent orders are separated for clarity. The Activate button is removed, letting users redeem offers instantly for a faster, smoother experience.",
                        original: '/assets/tims/home_new.png',
                        ori_caption: 'Homepage',
                        new: '/assets/tims/button_new.png',
                        new_caption: 'Offer Screen',
                    },
                    {
                        header: "Less Searching, Faster Checkout: Clear Offer Menu & Details",
                        content: "<span>Users can go directly to the offer menu, see eligible items instantly, and customize their order in fewer steps.</span> Offer details are now displayed on a dedicated screen with tabs, making it easier to scan terms, eligible items, and redemption options. The system also <span>pre-selects a default choice</span> based on past orders, making checkout quicker and more intuitive.",
                        original: '/assets/tims/detail_new.png',
                        ori_caption: 'Offer Details',
                        new: '/assets/tims/menu_new.png',
                        new_caption: 'Offer Menu with default selection based on user\'s preference ',
                    },
                    {
                        header: "New Features: Edit Button & Error Message for Offers",
                        content: "Users can now <span> edit their order  </span> directly in the cart instead of restarting the process. To prevent confusion, an <span>error message pops up when trying to apply multiple offers </span>, letting users choose whether to replace the existing offer. This ensures a smoother ordering experience with more flexibility and fewer mistakes.",
                        original: '/assets/tims/cart.png',
                        ori_caption: 'cart page - edit button',
                        new: '/assets/tims/message.png',
                        new_caption: 'error message',
                    },
                ],
            },
            figma: 'https://embed.figma.com/proto/b1qsKrJYgq3JSl2vzSoljY/UIUX-Tim-hortons?page-id=128%3A756&node-id=1256-6914&viewport=1095%2C-674%2C0.14&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1256%3A6914&show-proto-sidebar=1&embed-host=share',
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
        type: 'react',
        status: 'completed',
        title: 'Nomly: Recipe Finder & Grocery List Web App',
        media: "image",
        skills: [
            "React.JS",
            "TailwindCSS",
            "Api"
        ],
        cover: "/assets/nomly/cover1.jpg",
        banner: {
            subHeader: 'Nomly - Web App',
            header: 'Recipe Discovery & Grocery Planning',
            image: {
                src: '/assets/nomly/banner.png',
                altText: 'Nomly banner',
                classes: 'scale-125'
            },
        },


        overview: {
            user: {
                title: 'Tools',
                content: 'Figma , React.JS , TailwindCSS, Spoonacular API'
            },
            process: {
                header: 'Features',
                content: 'Explore Recipes, Add to Favorites, Create shopping list, dark mode'
            },
            role: ['Web Designer, Front-end developer'],
            duration: '2 weeks - Dec, 2024',

            media: {
                type: 'image',
                src: '/assets/nomly/intro.png',
                altText: "Nomly",
                caption: 'Sneak Peek',
            },

        },

    },

    {
        id: "furry-tales",
        status: 'completed',
        title: 'Furrytales Pet- Website Redesign',
        media: "image",
        skills: [
            "UXUI",
            "Hackathon"
        ],
        cover: "/assets/furry/cover.jpg",
        banner: {
            subHeader: 'FLUI Hackathon',
            header: 'Furrytales Pet - Website Redesign',
            image: {
                src: '/assets/furry/banner.png',
                altText: 'banner',
                classes: 'scale-125'
            },
        },


        overview: {
            user: {
                title: 'Tools',
                content: 'Figma, illustrator, photoshop'
            },
            process: {
                header: 'Process',
                content: 'Research → UX Audit → Wireframes → UI Design → Prototype → Iteration '
            },
            role: ['🐾 UX/UI Designer - Me & Suin', '🐾 Project Manager - Yungi', '🐾 Researcher - Kritika',],

            duration: '72 hours - Feb, 2025',

            media: {
                type: 'image',
                src: '/assets/nomly/intro.png',
                altText: "Nomly",
                caption: 'Sneak Peek',
            },

        },

    },



    {
        id: "fitme",
        type: 'pant',
        status: 'completed',
        skills: [
            "UX/UI",
        ],
        title: 'FitMe- App for Perfect Jeans',
        media: "image",
        cover: "/assets/pm/cover.jpg",
        banner: {
            subHeader: 'FitMe- App for Perfect Pants',
            header: 'Finding the perfect fit for Jeans',
            image: {
                src: '/assets/pm/banner.png',
                altText: 'fit',
                classes: "scale-125"
            },
        },

        overview: {
            user: {
                title: 'Target Audience',
                content: 'Shoppers struggling to find pants that fit perfectly.'
            },
            process: {
                header: 'Process',
                content: 'Research → Ideation → Design → Testing → Iteration → Reflection'
            },
            role: ['Researcher , UX/UI designer'],
            duration: '4 weeks - May 2024',
            headline: 'Finding pants that fit online is always a struggle..',
            content: "As a petite shopper, I know how frustrating it is to buy pants online. Size charts are confusing, and trying to guess the right fit leads to wasted time and returns. Even with so many options, there’s no easy way to see how pants will actually fit before buying.",
            challenge: 'How can we make it easier for people to find pants that fit well when shopping online?',

            media: {
                type: 'image',
                src: '/assets/pm/intro.png',
                altText: "fitme",
                caption: 'Sneak Peek',
            },

            protoLink: 'skip to prototype'

        },


        research: {
            header: 'Research Goals',

            description: "I wanted to understand the whole shopping experience of other users. My research focused on:",

            goals: [
                'What makes online shopping for pants frustrating? (Fit, sizing, returns, guessing the right size)',
                'Learn what helps users feel confident about fit recommendations.',
                'How do other brands help with fit, and what’s still missing?'
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
                title: "Common Pain Points in Finding the Right Fit",
                content: "Insights from user interviews revealed several key challenges in the online pants shopping experience:",

                icons: [
                    {
                        src: "/assets/pm/issue1.svg",
                        altText: "issue icon",
                        header: 'Frustrating Shopping Experience',
                        caption: 'Everyone disliked shopping for pants online, even those who regularly shop for other items. Most people find it time-consuming.'
                    },
                    {
                        src: "/assets/pm/issue2.svg",
                        altText: "issue icon",
                        header: 'Sizing is a Guessing Game',
                        caption: 'Sizes were all over the place. Users struggled with inconsistent sizing, unclear measurements, and confusing size charts.'
                    },
                    {
                        src: "/assets/pm/issue3.svg",
                        altText: "issue icon",
                        header: 'Reviews Aren’t Enough ',
                        caption: 'Many check reviews for guidance, but they often can’t find references that match their body type.'
                    },
                    {
                        src: "/assets/pm/issue4.svg",
                        altText: "issue icon",
                        header: 'Want Better Sizing Tools',
                        caption: '83% of participants said they would love to have interactive tools or quizzes to make finding the right size easier.'
                    },
                ]

            },

            competitor: {
                img: {
                    src: '/assets/pm/market.png',
                    altText: 'competitor analysis',
                    caption: 'click to view analysis'
                }
            }
        },

        define: {

            insights: {

                solution: [
                    {
                        "title": "Personalized Product Recommendations",
                        "icon": "👖",
                        "description": "Instead of endless scrolling, the app only shows pants that fit your measurements, so there’s no need to compare size charts or guess."
                    },
                    {
                        "title": "Smart Reviews Based on Body Type",
                        "icon": "🧍",
                        "description": " No more vague reviews. Users see fit feedback from people with similar measurements, making it easier to trust recommendations."
                    },

                ]
            },

            liz: {
                src: "/assets/pm/liz.png",
                altText: "User Persona Image"
            },
            jamie: {
                src: "/assets/pm/jamie.png",
                altText: "User Persona Image"
            },

            arc: {
                src: "/assets/pm/narrative.png",
                altText: "narrative arc"
            }

        },

        design: {
            flow: {
                image:
                {
                    src: '/assets/pm/userflow.jpg',
                    altText: 'user flow',
                },
            },

            wireframes: {
                header: 'From Sketches to Wireframes',
                description: "I transferred my ideas to medium-fidelity wireframes and prototype for initial user testing.",
                medfiProto: [{
                    src: '/assets/pm/wireframe.png',
                    altText: 'user flow',
                }],
            },

            change1: {
                src: '/assets/pm/change1.png',
                altText: 'iteration',
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

            finalScreen: {
                onboarding: {
                    img: {
                        src: "/assets/pm/onboarding.png",
                        alt: 'onboarding'
                    }
                },
                home: [
                    {
                        src: "/assets/pm/1.home.png",
                        alt: 'homepage'
                    },
                    {
                        src: "/assets/pm/chat2.png",
                        alt: 'chatbot'
                    },
                ],

                fitbot: {
                    img: {
                        src: "/assets/pm/chatresult.png",
                        alt: 'chat'
                    }
                },
                model: {
                    img: {
                        src: "/assets/pm/modelnew.png",
                        alt: 'model'
                    }
                },
                fullview: [
                    {
                        src: "/assets/pm/360model.png",
                        alt: '360 view model'
                    }
                ],

            },

            figma: 'https://embed.figma.com/proto/ZpCd26RV2lSW6tLaogLtTC/pants?page-id=46%3A1668&node-id=84-1743&p=f&viewport=336%2C508%2C0.17&scaling=scale-down&content-scaling=fixed&starting-point-node-id=84%3A1743&embed-host=share',
        },



        reflection: {
            content: [
                '<span>Early User Testing Matters</span>: Testing early, even when things weren’t perfect, helped me find problems I didn’t notice before. Some users got confused by certain features, and their feedback helped me make things clearer and easier to use. Even when feedback was tough to hear, it made the design better. This experience showed me that good design isn’t about making things perfect right away — it’s about learning, improving, and making sure everything works smoothly for the people using it.',

                '<span>Feedback is Growth </span>: At first, getting criticism on something I worked hard on felt overwhelming. But I realized that every comment, even the harsh ones, pushed me toward a stronger product. Listening to users and iterating on their needs helped me create something more useful, not just something that looks good.',

            ]
        }

    },

    {
        id: "basics",
        type: 'html',
        status: 'completed',
        skills: [
            "HTML",
            "TailwindCSS",
            "JS",
            "Project Management",
        ],
        title: 'Basics. - Online Apparel Store',
        media: "image",
        cover: "/assets/basics/cover.jpg",
        banner: {
            subHeader: 'Basics. - E-commerce ',
            header: 'Developed an online apparel store',
            image: {
                src: '/assets/basics/banner.png',
                altText: 'Basics banner',
                classes: "scale-150"
            },
        },


        overview: {
            user: {
                title: 'Tools',
                content: 'Figma , HTML , TailwindCSS , Javascript'
            },
            process: {
                header: 'Process',
                content: 'Planning → Design → Develop → Final'
            },
            role: [
                '⇝ Web Developer/Product Owner - Me',
                '⇝ UX writer/Scrum Master - Rana',
                '⇝ Web Designer - Kurtis',
                '⇝ Visual Designer - Vahan',
            ],
            duration: '5 weeks - May, 2024 (Project itself) , 3 weeks - Oct, 2024 (Revision)',
            headline: 'Creating a minimalist e-commerce experience that blends style and functionality...',
            content: "For the Basics project, I worked with a team of four to design and develop an e-commerce platform for minimalist apparels. The project aimed to simulate a real-world team environment while implementing Agile methodologies for efficient project management. As both the Product Owner and Front-End Developer, I oversaw the project timeline while building the website from scratch.",
            challenge: 'Developing a five-page website from scratch that aligned with user stories, all within a 5-week timeline and part-time schedule.',
            solution: 'Delivered a responsive five-page website built with HTML, TailwindCSS, and JavaScript, designed to align with user stories and provide a seamless user experience.',
            media: {
                type: 'image',
                src: '/assets/basics/intro.png',
                altText: "basics",
                caption: 'Sneak Peek',
            },
            webLink: {
                text: 'Live Demo',
                link: "https://basics.tinalin.ca/"
            },
        },

        contribution: {
            backlog: {
                image: {
                    src: '/assets/basics/backlog.png',
                    altText: 'backlog',
                    caption: 'backlog on Figma'
                }
            },

            stories: {
                content: 'User stories were key to guiding the project. As a group, we created several user stories and selected the most important ones. We broke each one down into its related page categories and set the order of page development priorities.',
                image: {
                    src: '/assets/basics/stories.png',
                    altText: 'user stories',
                    caption: ''
                }
            },

            sitemap: {
                title: 'Sitemap',
                content: "We created a sitemap to organize the website’s basic navigation, ensuring users can easily browse categories like Men, Women, and Promotions.",
                image: {
                    src: '/assets/basics/sitemap.png',
                    altText: 'sitemap',
                    caption: 'click to view sitemap'
                }
            },
            wireframe: {
                title: 'Wireframes',
                content: "Wireframes were also created to establish the structure and layout of the website. As part of the design process, I collaborated closely with the design team to ensure that the wireframes aligned with the project's goals and prioritized users' goals.",
                image: {
                    src: '/assets/basics/wireframe.png',
                    altText: 'wireframe',
                    caption: 'click to view wireframes'
                }
            }
        },

        dev: {
            screens: [
                {
                    src: '/assets/basics/home.png',
                    altText: 'wireframe',
                    caption: 'homepage'
                },
                {
                    src: '/assets/basics/men.png',
                    altText: 'wireframe',
                    caption: 'men\'s homepage'
                },
                {
                    src: '/assets/basics/listing.png',
                    altText: 'wireframe',
                    caption: 'listing page'
                },
                {
                    src: '/assets/basics/detail.png',
                    altText: 'wireframe',
                    caption: 'product detail page'
                },
                {
                    src: '/assets/basics/about.png',
                    altText: 'wireframe',
                    caption: 'about page'
                },

            ],

            tailwind: {
                title: "Mobile Responsive Design",
                content: "Although mobile responsiveness wasn’t part of the original scope, I <span> prioritized creating a mobile-first design </span> after the initial deliverables. Tailwind CSS made it easy to optimize for smaller screens and progressively enhance for larger devices, ensuring a seamless experience across all platforms.",

                image: {
                    src: '/assets/basics/phone.png',
                    altText: 'mobile responsive',
                }
            },

            component: {
                header: "Dynamic Component Creation",
                content: "I stored product details in a JSON file to keep data separate from the code, making updates easier and the codebase cleaner. For global elements like the header and footer, I used Web Components to dynamically add HTML and styles, ensuring consistency across pages. For components like Product Cards, I used modular JavaScript to fetch data from the JSON file and reuse it across pages, streamlining development and maintenance.",

                snippets: [{
                    tab: 'productCard.js',
                    code: `export function productCard(product) {
        return \`
            <div class="relative group cursor-pointer">
                <div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-10"></div>
                <button class="heart-btn absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-20 cursor-pointer">
                    <i class="fa fa-heart text-3xl" style="color:white"></i>
                </button>
                <img src="\${product.image}" alt="\${product.alt}" class="w-full">
            </div>
            <a href="\${product.link}" class="cursor-pointer">
                <h4 class="my-2 hover:text-gray-600">\${product.name}</h4>
                <p class="price">\${product.price}</p>
            </a>
        \`;
    }`,
                },
                {
                    tab: 'fetchProductList.js',
                    code: `import { productCard } from "../productCard.js";
    
export function fetchProductList(dataPath, containerId, productType, callback) {
        fetch(dataPath)
            .then(res => res.json())
            .then(data => {
                const productContainer = document.querySelector(containerId);
                productContainer.innerHTML = '';

                data[productType].forEach(product => {

                    const productCardHTML = productCard(product);
                    const productCardWrapper = document.createElement('div');
                    productCardWrapper.innerHTML = productCardHTML;

                    productContainer.appendChild(productCardWrapper);
                });

                if (callback) {
                    console.log('calling back');
                    callback();
                }
            })
            .catch((error) => console.error('Error fetching product list:', error));
        }`,
                }

                ],

            },
        },

        final: [
            {
                src: '/assets/basics/home.mp4',
                altText: 'Homepage',
                caption: 'Homepage'
            },
            {
                src: '/assets/basics/about.mp4',
                altText: 'About Page',
                caption: 'About Page'
            },
            {
                src: '/assets/basics/product.mp4',
                altText: 'Product Home and Listing Page',
                caption: 'Product Home and Listing Page'
            },
            {
                src: '/assets/basics/detail.mp4',
                altText: 'Product detail Page',
                caption: 'Product detail Page'
            },
        ]
    },


]

