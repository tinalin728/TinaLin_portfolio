import { prototype } from "postcss/lib/previous-map";
import { Tab } from "react-tabs";

export const craftsData = [
    {
        id: 1,
        type: 'UXUI',
        status: 'completed',
        title: 'Tim Horton\'s App Redesign',
        media: "video",
        cover: "/assets/homepage/tims/cover.mp4",
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
            user: {
                title: 'Target Audience',
                content: 'Tim Horton\'s app users (first-timers, regular users)'
            },
            process: 'Research → Ideation → Design → Testing → Iteration → Reflection',
            role: 'Researcher , UX/UI designer',
            duration: '4 weeks - July 2024',
            headline: 'Tim Horton\'s is a beloved Canadian icon, but its app experience wasn\'t living up to its reputation...',
            content: "As a loyal customer, I often found the offer redemption flow clunky and unintuitive. This project became my opportunity to reimagine the app\’s user experience, focusing on simplifying the offer redemption process and refreshing the overall design.",
            challenge: 'Redesigning the mobile app’s offer redemption flow to improve usability and satisfaction.',
            solution: 'A streamlined process that eliminates confusion and enables users to redeem offers effortlessly.',
            img: {
                src: 'https://media.giphy.com/media/ANHQbr9QPNcSE0puDW/giphy.gif',
                altText: 'Tim Horton\'s',
                caption: 'Sneak Peak'
            },
            link: 'skip to prototype'

        },

        stickyNav: [
            {
                id: "research",
                step: "01",
                label: "Research",
                color: "text-orange",
            },
            {
                id: "define",
                step: "02",
                label: "Ideation",
                color: "text-orange",
            },
            {
                id: "design",
                step: "03",
                label: "Design",
                color: "text-orange",
            },
            {
                id: "testing",
                step: "04",
                label: "Testing",
                color: "text-orange",
            },
            {
                id: "iteration",
                step: "05",
                label: "Iteration",
                color: "text-orange",
            },
            {
                id: "reflection",
                step: "05",
                label: "Reflection",
                color: "text-orange",
            },
        ],

        research: {
            description: 'To better understand the Tim Hortons app and the user experience around redeeming offers, I started my research with these goals in mind:',

            goals: [
                'Understand user expectations and identify pain points with redeeming offers.',
                'Evaluate usability on the app, especially around offer redemption.',
                'Compare how competitors handle similar processes.',
                'Gather insights to make the offer redemption process more intuitive and efficient.'
            ],

            interview: {
                description: "Three users were interviewed: one weekly app user who uses offers most of the times; the other two are monthly app users, but do not really use offers. During the interview, I asked participants to complete a task — <span>redeeming a '$7 Breakfast Combo' offer </span>, and followed up with questions to dig deeper. All interviews were conducted in person, and the insights were organized using <span>affinity mapping</span>.",

                map: {
                    src: "/assets/tims/research-interview.svg",
                    alt: 'affinity mapping',
                },


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
                title: 'Heuristic Evaluation',
                description: 'I dived deeper into the research by analyzing the flow and design of the Tim Hortons app using heuristic evaluation. This approach confirmed the issues raised during the interviews and uncovered additional problems that hadn’t been mentioned.',

                image: {
                    src: "/assets/tims/research-HE.png",
                    altText: "heuristic evaluation",
                    caption: 'Heuristic evaluation of redeeming offers',
                },
            },

            problems: {
                title: 'Prioritized Problems',
                content: 'Combining my research, I prioritized the problems based on their impact on user experience and the frequency they were mentioned during interviews.',

                icons: [
                    {
                        src: "/assets/tims/issue1.svg",
                        altText: "icon",
                        header: 'Interrupted flow after clicking the offer',
                        caption: 'Users are directed to the full menu page after activating an offer, with no clear guidance on what to do next.'
                    },
                    {
                        src: "/assets/tims/issue2.svg",
                        altText: "issue icon",
                        header: 'No Sign of Eligible Items',
                        caption: 'The menu provides no indication of which items are eligible for the activated offer, leaving users to guess.'
                    },
                    {
                        src: "/assets/tims/issue3.svg",
                        altText: "issue icon",
                        header: 'Lack of Error Messages',
                        caption: 'No feedback is provided when users attempt to select multiple offers, making the process unclear.'
                    },
                    {
                        src: "/assets/tims/issue4.svg",
                        altText: "issue icon",
                        header: 'Inability to Edit Offers',
                        caption: 'Users cannot make changes to an offer once it has been selected.'
                    },
                ]

            },
            competitor: {
                title: 'Competitor Research',
                description: "After identifying key issues with the Tim Hortons app, I turned to competitor research to explore how similar brands handle offer redemption. I analyzed the flows of Starbucks and McDonald's, which stood out for their simplicity— <span> users can order immediately after clicking an offer. </span> This comparison provided valuable insights into best practices and highlighted opportunities where the Tim Hortons app could improve its user experience.",
                img: {
                    src: "/assets/tims/research-CA.png",
                    altText: "competitor analysis",
                    caption: 'Click to view competitor analysis'
                }
            },
        },

        define: {
            header: 'Into Jane\'s Perspective',
            content: 'Through my research, Jane’s story began to take shape. Like many of us, she’s always on the go and needs an app that works as efficiently as she does. She often feels frustrated by the manual process of selecting offers and navigating the app. A journey map was also created to outline her experience redeeming the offer. These tools are critical in shaping solutions to Jane\'s needs',
            tabData: [
                {
                    tab: 'Empathy Map',
                    src: "/assets/tims/define-em.jpg",
                    altText: "User Persona Image"
                },
                {
                    tab: 'Persona',
                    src: "/assets/tims/define-persona.jpg",
                    altText: "User Persona Image"
                },
                {
                    tab: 'Journey Map',
                    src: "/assets/tims/define-journey.jpg",
                    altText: "User Persona Image"
                }
            ],
        },

        design: {

            flow: {
                description: "Building on the user stories, I mapped Jane's steps and decisions when redeeming offers to gain deeper insight into her experience. This process helped identify key pain points and opportunities for improvement.",
                image:
                {
                    src: '/assets/tims/design-flow.jpg',
                    altText: 'user flow',
                    caption: 'user flow'
                },
            },

            wireframes: {
                header: 'Bringing Jane’s Experience to Life',
                description: "After mapping Jane’s journey, I created wireframes and a prototype to visualize a seamless offer redemption process. Reimagining the offer details screen was a bit tricky since some offers include a lot of items. I decided to stick with the original overlay but reorganized the items into point form to make them clearer and easier to read. I didn’t change Tim Hortons’ original color palette because I wanted to keep the design consistent with the company's brand identity.",

                medfiProto: [
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
            description: 'To validate the new design, I conducted usability testing with 3 participants. Each participant was tasked with <span> redeeming a Farmer\'s Breakfast Wrap and a Classic Donut </span>, replicating common user scenarios. Their feedback, gathered through surveys and brief interviews, revealed valuable insights into what worked well and areas for improvement. Observing their interactions helped uncover subtle usability issues, leading to a more refined design.',

            task: 'Redeem an offer- a Farmer\'s Breakfast Wrap and a Classic Donut',

            goals: [
                'Evaluate the new flow\'s effectiveness',
                'Determine if users notice the removal of the "Activate" button',
                'Uncover desired changes users may prefer',
                'Identify users\' challenges within the new flow'
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
                        header: "Personalized and Engaging Homepage",
                        content: "I redesigned the homepage as the main access point for features, focusing on personalization and usability. Rewards (key feature) are now prominently displayed in their own card, with advertising banners and recent orders moved to separate sections for clarity. Offers are consolidated into one section, creating a more organized layout that helps users quickly find what they need and encourages purchases.",
                        original: '/assets/tims/home_original.png',
                        ori_caption: 'Original',
                        new: '/assets/tims/home_new.png',
                        new_caption: 'Redesign',
                    },
                    {
                        header: "Removal of Activate Button",
                        content: "The original activate button caused confusion since only one offer could be redeemed. I removed it, letting users redeem offers directly for a simpler experience.",
                        original: '/assets/tims/button_original.png',
                        ori_caption: 'Original',
                        new: '/assets/tims/button_new.png',
                        new_caption: 'Redesign',
                    },
                    {
                        header: "Consolidation of Offer Detail Screen",
                        content: "The original offer details were displayed in an overlay screen that was too text-heavy and difficult to read. I redesigned it by pulling the details out into its own dedicated screen and organizing the information into tabs. This structure makes the content easier to navigate and helps users quickly find the information they need.",
                        original: '/assets/tims/detail_original.png',
                        ori_caption: 'Original',
                        new: '/assets/tims/detail_new.png',
                        new_caption: 'Redesign',
                    },
                    {
                        header: "Direct Access to Offer Menu",
                        content: "The original flow was a big problem because it forced users to manually search for offer items in the full menu, which was both frustrating and time-consuming. The new flow directs users to the selected offer menu, making it easier for them to find what they need and complete their order faster. The order menu also includes a default choice based on users' past order history and preferences, so users can place an order with a single click.",
                        original: '/assets/tims/menu_original.png',
                        ori_caption: 'Original',
                        new: '/assets/tims/menu_new.png',
                        new_caption: 'Redesign',
                    },
                    {
                        header: "Implementation of Error Message",
                        content: "When users try to redeem multiple offers, a message will pop up informing them that only one offer can be applied per purchase. This ensures clarity and helps users make an informed decision about which offer they want to use.",
                        original: '/assets/tims/home_original.png',
                        ori_caption: 'Original: No error message',
                        new: '/assets/tims/message.png',
                        new_caption: 'Redesign',
                    },
                ],
            },
            figma: 'https://embed.figma.com/proto/b1qsKrJYgq3JSl2vzSoljY/UIUX-Tim-hortons?page-id=128%3A756&node-id=1256-6914&p=f&viewport=1213%2C-1202%2C0.19&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1256%3A6914&show-proto-sidebar=1&embed-host=share',
        },

        reflection: {
            content: [
                '<span>The Impact of User Testing</span>: Testing revealed overlooked issues, like unclear visual cues and the need for better feedback during offer redemption. This feedback was critical in refining the final design.',

                '<span>Balancing Flow and UI</span>: While streamlining the flow was my initial focus, I learned that small UI tweaks are essential for a seamless and user-friendly experience.'
            ],
        },
    },

    {
        id: 3,
        type: 'UXUI',
        status: 'completed',
        title: 'FitBot- App for Perfect Jeans',
        media: "image",
        cover: "/assets/homepage/pm/cover.jpg",
        banner: {
            subHeader: 'FitBot- App for Perfect Pants',
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
            process: 'Research → Ideation → Design → Testing → Iteration → Reflection',
            role: 'Researcher , UX/UI designer',
            duration: '4 weeks - May 2024',
            headline: 'While online shopping has made it easy and convenient for people, finding pants that fit online has remained a challenge...',
            content: "For many shoppers, inconsistent sizing charts and the inability to try on pants lead to frustration, wasted time, and frequent returns. Despite technological advancements, the lack of a personalized approach to sizing leaves users feeling uncertain and less confident about their purchase decisions, making online shopping for pants a challenging experience.",
            challenge: 'Creating solutions that help users find perfect pants online',
            solution: 'An app that features an AI chat assistant for personalized size recommendations, paired with a 3D model that aligns with the user\'s size for accurate visualization.',
            img: {
                src: 'https://media.giphy.com/media/oxh7p9D3ATA04KsiCs/giphy.gif',
                altText: 'Fitbot',
                caption: 'Sneak Peak'
            },
            link: 'skip to prototype'

        },


        process: {
            image: {
                src: '/assets/pm/design-process.svg',
                altText: 'design process'
            }
        },

        stickyNav: [
            {
                id: "research",
                step: "01",
                label: "Research",
            },
            {
                id: "define",
                step: "02",
                label: "Ideation",
            },
            {
                id: "design",
                step: "03",
                label: "Design",
            },
            {
                id: "testing",
                step: "04",
                label: "Testing",
            },
            {
                id: "iteration",
                step: "04",
                label: "Iteration",
            },
            {
                id: "reflection",
                step: "05",
                label: "Reflection",
            },
        ],

        research: {
            description: "My research aimed to address the challenges of online shopping for pants, focusing on user needs, fit accuracy, and opportunities for innovation. Key objectives included:",

            goals: [
                'Identify user pain points when shopping for pants online.',
                'Explore key factors for accurate fit recommendations.',
                'Analyze competitor solutions to identify gaps and opportunities.'
            ],

            interview: {
                description: "To get a better understanding of user challenges and preferences when shopping for pants online, I spoke with 6 individuals: 3 of them are frequent online shoppers whereas the other 3 shop online less often. I organized the insights into an affinity map, grouping pain points, behaviors to identify key themes and patterns.",

                map: {
                    src: '/assets/pm/mapping.svg',
                    altText: 'affinity map'
                },
            },

            problems: {
                title: 'Key Findings',
                content: "Insights from user interviews revealed several key challenges in the online pants shopping experience:",

                icons: [
                    {
                        src: "/assets/pm/icon1.svg",
                        altText: "issue icon",
                        header: 'Unsatisfying Pants Shopping Experiences',
                        caption: 'All 6 participants disliked shopping for pants online, even if they frequently shop for other items.'
                    },
                    {
                        src: "/assets/pm/icon2.svg",
                        altText: "issue icon",
                        header: 'Sizing Challenges',
                        caption: 'All participants were frustrated with inconsistent sizing, unclear measurements, and confusing size charts.'
                    },
                    {
                        src: "/assets/pm/icon3.svg",
                        altText: "issue icon",
                        header: 'Heavy Reliance on Reviews and References',
                        caption: 'Participants often rely on reviews, but many struggle to find reliable references for their body type.'
                    },
                    {
                        src: "/assets/pm/icon4.svg",
                        altText: "issue icon",
                        header: 'Demand for Interactive Sizing Tools',
                        caption: '5 out of 6 participants wanted interactive tools or quizzes to simplify the sizing process.'
                    },
                ]

            },

            competitor: {
                title: 'Competitor Analysis',

                description: "I went on a search for existing apps and discovered that <span> most focus on general clothing or whole-body recommendations, often neglecting the specific challenges of pants shopping. </span> Tools like WEARFITS and Wrobe.ai excel in providing virtual try-ons and full-body visualization, but they lack conversational AI or a focus on pants-specific needs. Similarly, Stylee prioritizes styling advice over practical fit solutions. This gap motivated me to <span> create an app that bridge these gaps.",

                img: {
                    src: '/assets/pm/research-brand.svg',
                    altText: 'competitor analysis',
                    caption: 'Existing Plugin Analysis'
                }
            }
        },

        define: {
            insights: {
                content: "As AI chat and 3D modeling technology continue to advance, I saw an opportunity to combine and leverage these tools to enhance the online pants shopping experience. User research revealed several key challenges, including inconsistent sizing, reliance on reviews, and a lack of interactive tools. To address these issues and create a user-friendly, effective app, I identified three core solutions:",

                solution: [
                    {
                        title: "Sizing AI Assistant",
                        icon: "💬",
                        description: " A smart chatbot that guides users with personalized size recommendations through conversational and intuitive interactions."

                    },
                    {
                        title: "3D FitModel",
                        icon: "👀",
                        description: "Realistic 3D models that dynamically adjust based on user inputs, allowing users to visualize how pants fit specific areas like the waist, hips, and inseam."
                    },
                    {
                        title: "Interactive Sizing Tool",
                        icon: "📃",
                        description: "A step-by-step guide that helps users select their measurements, fit preferences, and length, complete with real-time visual feedback."
                    }
                ],
            },

            ca: {
                content: "I went on a search for existing plugins and realized that <span> most focus on whole-body recommendations and overlook pants-specific needs. </span> While these tools work well for general sizing, they fail to address how pants fit key areas like the waist, hips, and inseam. This gap inspired me to <span> create a solution tailored specifically for pants shoppers, combining precise size recommendations, an interactive onboarding process, and dynamic 3D visualizations. </span>",

                img: {
                    src: '/assets/pm/define-ca.svg',
                    altText: 'competitor analysis',
                    caption: 'Existing Plugin Analysis'
                }

            },


            features: {
                header: 'Prioritizing Features',
                content: 'I started brainstorming and prioritized key features for the app to ensure it meets Liz and Jamie\'s needs.These features focus on simplifying the pants- sizing process, providing dynamic visualizations, and empowering users to make confident purchase decisions.',
                img: {
                    src: '/assets/pm/define-productmap.svg',
                    altText: 'Product mapping',
                    caption: 'features included'
                }

            },


            header: 'Meet Liz and Jamie',
            content: "Through my research, Liz and Jamie’s stories came to life. Liz is a casual online shopper who enjoys the convenience of buying most things online but hesitates when it comes to pants due to concerns about fit, comfort, and the hassle of returns. Jamie, on the other hand, is unsure of her size and often feels uncertain about what will actually fit. Both users share 2 common goals : <span> to have visuals that show how pants could fit and to purchase confidently.</span> To better understand their experiences, I developed a user journey map outlining each step they take, highlighting their pain points, and identifying opportunities to improve their confidence and create a seamless shopping experience.",

            tabData: [
                {
                    tab: 'Liz',
                    src: "/assets/pm/persona1.png",
                    altText: "User Persona Image"
                },
                {
                    tab: 'Jamie',
                    src: "/assets/pm/persona2.png",
                    altText: "User Persona Image"
                },
                {
                    tab: 'Journey Map',
                    src: "/assets/pm/define-journey.png",
                    altText: "User Persona Image"
                }
            ],
        },

        design: {
            flow: {
                description: "I chose to focus on a IOS mobile app for the initial scope, as it aligns with the behavior of users shopping for pants on the go. A user flow was created to illustrate the steps the user would encounter. Features like measurement input, AI-driven size recommendations, and interactive 3D models became central elements of the app.",
                image:
                {
                    src: '/assets/pm/design-userflow.png',
                    altText: 'user flow',
                    caption: 'user flow for entering information'
                },
            },

            wireframes: {
                header: 'From Sketches to Wireframes',
                description: "I transferred my ideas to medium-fidelity wireframes nad prototype for initial user testing.",
                medfiProto: [{
                    src: '/assets/pm/wireframe.png',
                    altText: 'user flow',
                }],
            },
        },

        testing: {
            description: 'I conducted early user testing with 5 participants to gather initial feedback on the app\'s usability and identify any pain points or areas of confusion. This helped me understand how users interacted with key features, like FitBot, FitModel, and onboarding, and provided insights for refining the design to better meet user needs.',

            task: 'Imagine you\’re shopping for pants online. Use the app to find pants in your size, visualize the fit using the 3D FitModel, and save your favorite to your Wishlist. Then, revisit your FitBot history to check a previous recommendation.',

            goals: [
                'Evaluate onboarding clarity',
                'Test Navigation and Feature Accessibility',
            ],

            problemImg: {
                src: '/assets/pm/testing.png',
                altText: 'usability testing results',
            },
        },

        iteration: {
            title: 'Iteration',
            content: 'Testing revealed that the main problems included 80% of users finding the navigation unclear, particularly around understanding FitModel as part of FitBot. Users wanted improved clarity on homepage labels and enhancements to the FitModel page, such as full-body views and better product details. Based on this feedback, I moved on to designing high-fidelity prototypes to refine the experience.',

            system: [
                {
                    header: 'Color Palette',
                    content: "For the color palette, I’m using gradients made of purple and blue to convey a sense of trust, modernity, and technology. These colors provide a futuristic feel while remaining approachable and calming.",
                    src: "/assets/pm/color.png",
                    alt: 'color palette'
                },
                {
                    header: 'Typography',
                    content: "For the fonts, I chose Nunito Sans for headers to create a modern and approachable feel, and Lato for body text to ensure clarity and professionalism. Together, they keep the design clean, readable, and contemporary.",
                    src: "/assets/pm/font.png",
                    alt: 'font'
                }
            ],

            finalScreen: {
                onboarding: {
                    img: {
                        src: "/assets/pm/onboarding.png",
                        alt: 'onboarding'
                    }
                },
                home: {
                    img: {
                        src: "/assets/pm/home.png",
                        alt: 'homepage'
                    }
                },
                fitbot: {
                    img: {
                        src: "https://media.giphy.com/media/hzgu2YnvENnGvMle8G/giphy.gif",
                        alt: 'chat'
                    }
                },
                model: {
                    img: {
                        src: "https://media.giphy.com/media/SFYyBsO1zQZtk3FIWu/giphy.gif",
                        alt: 'model'
                    }
                },

            },

            figma: 'https://embed.figma.com/proto/ZpCd26RV2lSW6tLaogLtTC/pants?page-id=46%3A1668&node-id=84-1743&p=f&viewport=336%2C508%2C0.17&scaling=scale-down&content-scaling=fixed&starting-point-node-id=84%3A1743&embed-host=share',
        },



        reflection: {
            content: [
                '<span>Early User Testing</span>:  I learned that early user testing is invaluable for uncovering areas of improvement, even if the initial feedback is tough to hear. It helped me identify issues with navigation and feature clarity, leading to a more intuitive design.',

                '<span>Learning to Accept Criticism </span>: I realized that constructive criticism, while difficult at first, is a vital part of the design process. Embracing feedback allowed me to grow and create a product that better meets users\' needs.',

            ]
        }

    },


    {
        id: 2,
        type: 'coding',
        status: 'completed',
        title: 'Basics - Online Apparel Store',
        media: "image",
        cover: "/assets/homepage/basics/cover.jpg",
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
            user: {
                title: 'Tools',
                content: 'Figma , HTML , TailwindCSS , Javascript'
            },
            process: 'Research & Planning → Design → Develop → Reflection',
            role: 'Product Owner, Front-end developers',
            duration: '5 weeks - May, 2024 (Project itself) , 3 weeks - Oct, 2024 (Revision)',
            headline: 'Creating a minimalist e-commerce experience that blends style and functionality...',
            content: "For the Basics project, I worked with a team of four to design and develop an e-commerce platform for minimalist apparels. The project aimed to simulate a real-world team environment while implementing Agile methodologies for efficient project management. As both the Product Owner and Front-End Developer, I oversaw the project timeline while building the website from scratch.",
            challenge: 'Developing a five-page website from scratch that aligned with user stories, all within a 5-week timeline and part-time schedule.',
            solution: 'Delivered a responsive five-page website built with HTML, TailwindCSS, and JavaScript, designed to align with user stories and provide a seamless user experience.',
            img: {
                src: '/assets/basics/intro.png',
                altText: 'ProAlign',
                caption: 'Sneak Peak'
            },
            link: 'skip to results'
        },

        contribution: {
            backlog: {
                title: 'Project Backlog Creation',
                content: 'In the Basics project, the product backlog served as the foundation for our Agile workflow. As the Product Owner, I was responsible for <span> creating and maintaining the backlog </span>. The backlog included all key tasks, such as wireframe development, front-end implementation, content creation, and stakeholder reviews. Each item was prioritized based on its importance to the project timeline and deliverables.',
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
    {
        id: 4,
        type: 'coding',
        status: 'incomplete',
        title: 'Zen Matcha',
        media: "image",
        cover: "/assets/homepage/zenmatcha/cover.jpg",

        banner: {
            subHeader: 'Branding',
            header: 'Defining Identity for online dessert store',
            image: {
                src: '/assets/zm/logoname.svg',
                alt: 'tim horton\'s app redesign',
                classes: "scale-[.50] w-fit h-fit"

            },
        },

        // overview: {
        //     tagline: 'Branding',
        //     companyOverview: 'An online-exclusive dessert shop specializing in matcha desserts',

        //     content: "The goal of this project is to create a cohesive and impactful brand identity for Zen Matcha, a brand focused on offering premium matcha desserts. The design will capture the essence of the brand—natural, elegant, and inviting—while ensuring it stands out in a competitive market.",

        //     role: 'Product Owner, Front-End Developer',
        //     duration: '3 Weeks - April 2024',

        //     challenge: "The biggest challenge in designing Zen Matcha's brand identity is <span> finding the right balance between elegance and approachability </span>. The brand needs to feel high-quality and sophisticated while still being warm and relatable. Plus, it has to capture matcha's unique vibe—honoring its traditional roots while highlighting its modern, creative side.",

        //     accomplish: [
        //         "Logo Design",
        //         "Brand Guideline",
        //         "Application",
        //     ]
        // },

        overview: {
            user: 'Tim Horton\'s app users (first-timers, regular users)',
            process: 'Research → Ideation → Design → Testing → Iteration → Reflection',
            role: 'Researcher , UX/UI designer',
            duration: '4 weeks - July 2024',
            headline: 'Tim Horton\'s is a beloved Canadian icon, but its app experience wasn\'t living up to its reputation...',
            content: "As a loyal customer, I often found the offer redemption flow clunky and unintuitive. This project became my opportunity to reimagine the app\’s user experience, focusing on simplifying the offer redemption process and refreshing the overall design.",
            challenge: 'Redesigning the mobile app’s offer redemption flow to improve usability and satisfaction.',
            solution: 'A streamlined process that eliminates confusion and enables users to redeem offers effortlessly.',
            img: {
                src: '/assets/tims/detail_new.png',
                altText: 'ProAlign',
                caption: 'Sneak Peak'
            }
        },

        featImg: {
            src: '/assets/zm/foodbag.jpg',
            alt: 'crepe cake',
        },

        color: {
            header: 'Color Palette',
            content: "The palette is thoughtfully designed, with greens representing nature and freshness, while warm browns add depth and comfort. Together, the colors create a calm, inviting look that perfectly captures the brand's personality and makes it stand out.",
            image: {
                src: '/assets/zm/color.png',
                alt: 'color palette',
            },
        },

        logo: {
            content: "The logo design combines the initials, ZM with a whisk and a matcha leaf, symbolizing the artistry and natural essence of matcha. The whisk represents craftsmanship, while the leaf ties back to the organic and refreshing qualities of matcha, creating a design that is both meaningful and visually unique.",
            image: {
                src: '/assets/zm/logoname.svg',
                alt: 'primary logo',
            },
            imageSec: {
                src: '/assets/zm/secondarylogo.png',
                alt: 'secondary logo',
            },
        },

        font: {
            content: "<span> Didot </span> is the headline font for its elegance and boldness, making it perfect for grabbing attention. <span> Avenir </span> complements it as the body font with its clean and easy-to-read design, creating a balanced and polished look. Together, they give the brand a professional and cohesive feel",
            images: [
                {
                    src: '/assets/zm/headfont.png',
                    alt: 'header font',
                },
                {
                    src: '/assets/zm/bodyfont.png',
                    alt: 'body font',
                },
            ],
        },

        mockup: {
            image: [
                {
                    src: '/assets/zm/window-signage.jpg',
                    alt: 'window signage',
                },
                {
                    src: '/assets/zm/businesscard.jpg',
                    alt: 'packaging',
                },
                {
                    src: '/assets/zm/box.jpg',
                    alt: 'packaging',
                },
                {
                    src: '/assets/zm/blackboard.jpg',
                    alt: 'blackboard',
                },

            ]
        }

    },
]

