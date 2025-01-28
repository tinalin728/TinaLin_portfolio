import { prototype } from "postcss/lib/previous-map";
import { Tab } from "react-tabs";

export const craftsData = [
    {
        id: 1,
        type: 'UXUI',
        status: 'completed',
        title: 'Tim Horton\'s App Redesign',
        media: "image",
        cover: "/assets/homepage/tims/cover.jpg",
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
            process: {
                header: 'process',
                content: 'Research → Ideation → Design → Testing → Iteration → Reflection'
            },
            role: 'Researcher , UX/UI designer',
            duration: '4 weeks - July 2024',
            headline: 'Tim Horton\'s is a Canadian favorite, but its app wasn’t as easy to use as its coffee is to enjoy.',
            content: "As a loyal customer, I found it frustrating to redeem offers on the app. The process felt clunky and confusing, which inspired me to rethink the design. My goal was to simplify the offer redemption flow and make the experience smoother for everyone.",
            challenge: 'Redesigning the mobile app’s offer redemption flow to improve usability and satisfaction.',
            solution: 'A simple and clear process that removes confusion, making it effortless to redeem offers.',

            media: {
                type: 'video',
                src: '/assets/tims/intro.mp4',
                altText: "Tim Horton's",
                caption: 'Sneak Peek',
            },
            protoLink: 'skip to prototype'

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
            survey: {
                content: "Before diving into the offer redemption flow, I conducted a survey with 19 participants to get a broad understanding of how users interact with the Tim Horton's app. The survey covered ordering habits, usability issues, and overall frustrations with the app. Key insights include :",
                img: {
                    src: '/assets/tims/survey.png',
                    alt: 'survey'
                },
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
                description: "I conducted in-person user interviews with a task-based approach to understand how users redeem offers. One participant uses the app weekly and often redeems offers, while the other two use the app monthly but rarely use offers. <span> They were asked to redeem a '$7 Breakfast Combo' offer while I observed their experience, similar to a small usability test </span>. After completing the task, I followed up with questions to understand their challenges, expectations, and frustrations. The insights were then organized using affinity mapping to identify key patterns.",

                map: {
                    src: "/assets/tims/research-interview.svg",
                    alt: 'affinity mapping',
                },
            },

            flowAnalysis: {
                classes: 'content-gap',
                title: 'Heuristic Evaluation',
                description: 'I dived deeper into the research by analyzing the flow and design of the Tim Hortons app using heuristic evaluation. This approach confirmed the issues raised during the interviews and uncovered additional problems that hadn’t been mentioned.',

                image: {
                    src: "/assets/tims/research-HE.png",
                    altText: "heuristic evaluation",
                    caption: 'Heuristic evaluation of redeeming offers',
                },
            },

            problems: {
                classes: 'content-gap',
                title: 'Prioritized Problems',
                content: 'By combining user interviews and heuristic evaluation, I identified the most critical issues affecting the user experience. I prioritized these problems based on How often they were mentioned by users and how much they impacted the experience.',

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
            description: 'To validate the new design, I conducted usability testing with 4 participants. Each participant was tasked with <span> redeeming a Farmer\'s Breakfast Wrap and a Classic Donut </span>, to match common user actions. The goal was to see how well the new flow worked, check if they noticed the "Activate" button was gone, find out what changes they wanted, and spot any problems they faced. <span> While all participants liked the simpler flow to the offers menu, some issues remained </span>:',

            findings: [
                'User preferred being directed to the cart instead of the full menu after adding offers',
                'Lengthy and dense offer descriptions',
                'Users had trouble understanding the filtered menu and didn’t always know what they were selecting.',
                'The dropdown menus were hard to read and frustrating to use'
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
        cover: "/assets/homepage/pm/cover2.jpg",
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
            process: {
                header: 'Process',
                content: 'Research → Ideation → Design → Testing → Iteration → Reflection'
            },
            role: 'Researcher , UX/UI designer',
            duration: '4 weeks - May 2024',
            headline: 'Finding pants that fit online is always a struggle, especially for someone like me—petite and often stuck between sizes.',
            content: "As a petite shopper, I know how frustrating it is to buy pants online. Size charts are confusing, and trying to guess the right fit leads to wasted time and returns. Even with so many options, there’s no easy way to see how pants will actually fit before buying. This experience inspired me to create a solution that helps people find the perfect fit with confidence.",
            challenge: 'Making it easier for people to find pants that fit well when shopping online.',
            solution: 'An app that features an AI chat assistant for personalized size recommendations, paired with a 3D model that aligns with the user\'s size for accurate visualization.',
            media: {
                type: 'video',
                src: '/assets/pm/intro.mp4',
                altText: "fitbot",
                caption: 'Sneak Peek',
            },

            protoLink: 'skip to prototype'

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
            header: 'Research Goals',

            description: "I wanted to see how other users shop for pants online and what makes the experience frustrating or easy. To better understand this, I focused my research on user needs, fit accuracy, and ways to improve the process.:",

            goals: [
                'Find out what frustrates people when buying pants online.',
                'Learn what helps users feel confident about fit recommendations.',
                'Look at competitor apps to see what’s missing and where improvements can be made.'
            ],

            interview: {
                description: "To understand different shopping habits, I talked to 6 people— <span> 3 who shop online often and 3 who rarely do </span>. I grouped their feedback into an affinity map to find common struggles and patterns in how they shop for pants.",

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
                        caption: 'All 6 participants disliked it, even if they regularly buy other items online.'
                    },
                    {
                        src: "/assets/pm/icon2.svg",
                        altText: "issue icon",
                        header: 'Sizing Challenges',
                        caption: 'Everyone struggled with inconsistent sizes, unclear measurements, and confusing size charts.'
                    },
                    {
                        src: "/assets/pm/icon3.svg",
                        altText: "issue icon",
                        header: 'Heavy Reliance on Reviews and References',
                        caption: 'Many check reviews for guidance, but they often can’t find references that match their body type.'
                    },
                    {
                        src: "/assets/pm/icon4.svg",
                        altText: "issue icon",
                        header: 'Demand for Interactive Sizing Tools',
                        caption: '5 out of 6 participants said they would like interactive tools or quizzes to make finding the right size easier.'
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
                content: "With AI chat and 3D modeling technology evolving, I saw an opportunity to combine these tools to improve the online pants shopping experience. User research revealed several key challenges, including inconsistent sizing, reliance on reviews, and a lack of interactive tools.  To tackle these, I envisioned three key features that could revolutionize online pants shopping:",

                solution: [
                    {
                        title: "Sizing AI Assistant",
                        icon: "💬",
                        description: " A chatbot that doesn’t just answer questions but provides personalized size recommendations tailored to each user"
                    },
                    {
                        title: "3D FitModel",
                        icon: "👀",
                        description: "A realistic model of the user that changes based on their size inputs. It lets users see how the pants fit on their waist, hips, and legs before buying."
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
            content: "Through my research, Liz and Jamie’s stories stood out. Liz, a casual online shopper, enjoys the convenience of buying most things online but avoids pants because of concerns about fit, comfort, and the hassle of returns. Jamie often feels unsure about her size and struggles to know what will actually fit. Both share two common goals: <span> to have visuals that show how pants could fit and to purchase confidently.</span> To better understand their experiences, I developed a user journey map outlining each step they take, highlighting their pain points, and identifying opportunities to improve their confidence and create a seamless shopping experience.",

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
            description: 'I conducted early user testing with the med-fi prototype with 5 participants to gather initial feedback on the app\'s usability and identify any pain points or areas of confusion. They were asked <span> to find pants in their size, check the fit with the 3D FitModel, save a favorite to the Wishlist, and review a past FitBot recommendation </span>.',

            findings: [
                '80% of the users didn’t know FitModel was part of FitBot. Some thought they could open it from the homepage, but it only updates their size.',
                'Users wanted FitBot to remember their last chat when they came back',
                ' Users wanted to see the full-body view, item photos, and customer ratings. They also wanted fit ratings to show on the model.',
            ],

            problemImg: {
                src: '/assets/pm/testing.png',
                altText: 'usability testing results',
            },
        },

        iteration: {
            title: 'iteration',
            content: 'Based on the feedback, I improved homepage labels for clarity and enhanced the FitModel page with full-body views and better product details. After making these changes, I moved on to designing high-fidelity prototypes to further refine the experience.',

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
        type: 'html',
        status: 'completed',
        title: 'Basics. - Online Apparel Store',
        media: "image",
        cover: "/assets/homepage/basics/cover.jpg",
        banner: {
            subHeader: 'Basics. - E-commerce ',
            header: 'Developed an online apparel store',
            image: {
                src: '/assets/basics/banner.png',
                altText: 'Basics banner',
                classes: "scale-150"
            },
        },
        stickyNav: [
            {
                id: "planning",
                step: "01",
                label: "Planning",
                color: "text-orange",
            },
            {
                id: "design",
                step: "02",
                label: "Design",
                color: "text-orange",
            },
            {
                id: "develop",
                step: "03",
                label: "Develop",
                color: "text-orange",
            },
            {
                id: "prototype",
                step: "04",
                label: "Final",
                color: "text-orange",
            },
        ],

        overview: {
            user: {
                title: 'Tools',
                content: 'Figma , HTML , TailwindCSS , Javascript'
            },
            process: {
                header: 'Process',
                content: 'Planning → Design → Develop → Final'
            },
            role: 'Product Owner, Front-end developer',
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
        type: 'react',
        status: 'completed',
        title: 'Nomly: Recipe Finder & Grocery List Web App',
        media: "image",
        cover: "/assets/nomly/banner.png",
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
            role: 'Web Designer, Front-end developer',
            duration: '2 weeks - Dec, 2024',
            headline: 'Leveraging Spoonacular API to develop an web app that streamlines recipe discovery and grocery management.',
            content: "Nomly is a web app designed to provide users with an intuitive platform for discovering recipes, managing saved favorites, and generating grocery lists. Built with React and TailwindCSS, the app integrates the Spoonacular API to fetch real-time recipe data.",

            challenge: 'Fetching data was the most challenging as different endpoints in the initial fetch often lacked key details like ingredients and instructions, requiring a second fetch. Balancing data accuracy while optimizing API calls was difficult due to the free API\'s request limits.',

            solution: 'I utilized localStorage to store fetched data, reducing unnecessary API calls and improving performance. The initial fetch used different endpoints, and a second fetch was triggered only when key details were missing. By refining the fetch logic and reviewing API documentation, I balanced data accuracy while staying within the free API limits.',
            media: {
                type: 'image',
                src: '/assets/nomly/intro.png',
                altText: "Nomly",
                caption: 'Sneak Peek',
            },
            webLink: {
                text: 'Live Demo',
                link: "https://nomly.tinalin.ca/"
            },
        },

    },
    {
        id: 5,
        type: 'corevault',
        status: 'completed',
        title: 'CoreVault: SaaS Promotional landing page',
        media: "image",
        cover: "/assets/homepage/corevault/cover.jpg",
        banner: {
            subHeader: 'CoreVault - Fictional SaaS Company',
            header: 'Designed and Developed Promotional Landing Page',
            image: {
                src: '/assets/corevault/banner.png',
                altText: 'Nomly banner',
                classes: ''
            },
        },


        overview: {
            user: {
                title: 'Tools',
                content: 'Figma , illustrator, React.JS , TailwindCSS, GSAP, Lottie'
            },
            process: {
                header: 'Deliverable',
                content: 'A responsive SaaS platform landing page with key product features and call-to-action elements'
            },
            role: 'Web Designer, Front-end developer',
            duration: '2 week (30 hours) - Jan, 2025',
            headline: 'Taking my React skills further with CoreVault that refines my focus on design and user experience.',

            content: "After building Nomly, I wanted to keep practicing and challenge myself with a project that emphasized design and user experience. CoreVault is a SaaS platform that offers digital banking solutions, expense tracking, and payment management. I used React and TailwindCSS to create a clean, responsive interface that balances aesthetics with functionality.",
            challenge: "Combining neomorphic and claymorphic design elements while maintaining usability and visual balance was challenging.",
            solution: "Experimented with different shadow depths and contrasts to blend the styles effectively.",


            media: {
                type: 'image',
                src: '/assets/corevault/intro.png',
                altText: "corevault",
                caption: 'Sneak Peek',
            },
            webLink: {
                text: 'Live Demo',
                link: "https://corevault.tinalin.ca/"
            },
        },

    },

]

