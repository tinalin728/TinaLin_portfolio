import { prototype } from "postcss/lib/previous-map";
import { Tab } from "react-tabs";

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

            content: "Tim Horton\'s is a beloved Canadian icon, but its app experience wasn't living up to its reputation. As a loyal customer, I often found the offer redemption flow clunky and unintuitive. This project became my opportunity to reimagine the app\’s user experience, focusing on simplifying the offer redemption process and refreshing the overall design.",

            deliverables: 'Redesigned offer flow, refreshed homepage, improved food detail pages',
            role: 'UX research, UX/UI design',
            duration: '42 hours - Jul 2024',

        },

        process: {
            image: {
                src: '/assets/tims/process.svg',
                altText: 'design process'
            }
        },

        stickyNav: [
            {
                id: "research",
                step: "01",
                label: "Research",
                color: "text-orange", // Add custom color classes if needed
            },
            {
                id: "define",
                step: "02",
                label: "Define",
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
                id: "reflection",
                step: "05",
                label: "Reflection",
                color: "text-orange",
            },
        ],

        research: {
            description: 'To better understand the Tim Hortons app, the user experience around redeeming offers, and the competitive landscape, I started my research with these goals in mind:',

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
                image: {
                    src: "/assets/tims/research-CA.png",
                    altText: "competitor analysis",
                    caption: 'Click to view competitor analysis'
                }
            },
        },

        define: {
            header: 'Introducing Jane and her Journey',
            content: 'Through my research, Jane’s story began to take shape. Like many of us, she’s always on the go and needs an app that works as efficiently as she does. She often feels frustrated by the manual process of selecting offers and navigating the app. To dive deeper, I created a user journey map to outline her experience redeeming offers, highlighting specific pain points and uncovering opportunities for improvement. These tools were critical in shaping a solution tailored to Jane’s needs.',
            images: [
                {
                    tab: 'Persona',
                    src: "/assets/tims/define-persona.jpg",
                    altText: "User Persona Image"

                },
                {
                    tab: 'Empathy Map',
                    src: "/assets/tims/define-em.png",
                    altText: "Empathy Map Image",
                },
                {
                    tab: 'User Journey',
                    src: "/assets/tims/define-journey.jpg",
                    altText: "User Journey Image"
                },
            ]
        },

        design: {
            sketch: {
                description: "With Jane’s pain points in mind, I began by sketching low-fidelity wireframes to explore ideas for a simplified offer flow. These early concepts allowed me to experiment with layouts and navigation.",
                image: {
                    src: "/assets/tims/design-sketch.jpg",
                    altText: "wireframe sketches",
                    caption: 'Jogging down ideas on paper'
                }
            },
            flow: {
                description: "I mapped Jane's steps and choices when redeeming offers to better understand her experience and identify areas for improvement.",
                image:
                {
                    src: '/assets/tims/design-flow.jpg',
                    altText: 'user flow',
                    caption: 'user flow'
                },
            },

            wireframes: {
                header: 'Bringing Jane’s Experience to Life',
                description: "After mapping Jane’s journey, I created medium-fidelity wireframes to visualize a seamless offer redemption process. These wireframes allowed me to test how the new design addressed her frustrations, such as navigating unclear menus and identifying eligible items.",

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
            id: 'testing',
            goals: [
                'Evaluate the new flow\'s effectiveness',
                'Determine if users notice the removal of the "Activate" button',
                'Uncover desired changes users may prefer',
                'Identify users\' challenges within the new flow'
            ],

            description: 'To validate the new design, I conducted usability testing with 3 participants. Each participant was tasked with <span> redeeming a Farmer\'s Breakfast Wrap and a Classic Donut </span>, replicating common user scenarios. Their feedback, gathered through surveys and brief interviews, revealed valuable insights into what worked well and areas for improvement. Observing their interactions helped uncover subtle usability issues, leading to a more refined design.',


            problemImg: {
                src: '/assets/tims/testing-problems.svg',
                altText: 'usability testing results',
            },

            iteration: {
                title: 'Iteration',
                content: 'Testing revealed a few areas needing improvement, including clearer visual cues for navigation and improved feedback for redeemed offers. While the core flow performed well, the feedback highlighted opportunities to enhance the UI for better clarity and usability. Using these insights, I updated the layouts and refined the visual hierarchy to create a smoother, more intuitive experience.',

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
                '<span>The Impact of User Testing</span>: Testing revealed overlooked issues, like unclear visual cues and the need for better feedback during offer redemption. This feedback was critical in refining the final design.',

                '<span>Balancing Flow and UI</span>: While streamlining the flow was my initial focus, I learned that small UI tweaks are essential for a seamless and user-friendly experience.'

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
            header: 'Your Fit, Your Way',
            image: {
                src: '/assets/pm/banner.png',
                altText: 'my personalized model',
                classes: "scale-125"
            },
        },

        overview: {
            content: "Shopping for pants online can be a challenge. Sizing varies across brands, fit visualization is limited, and returns are a hassle. As someone who’s experienced these frustrations firsthand, I designed a plugin that uses user measurements to provide personalized fit recommendations. This tool not only simplifies shopping for users but also helps retailers reduce return rates and build customer confidence.",

            deliverables: 'User interviews, wireframes, prototypes',
            role: 'UX research, UX/UI design',
            duration: '55 hours - May 2024',
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
                label: "Define",
            },
            {
                id: "design",
                step: "03",
                label: "Design",
            },
            {
                id: "prototype",
                step: "04",
                label: "Prototype",
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
                title: 'Validating Market Gaps',
                description: "I analyzed four brands—Uniqlo, Aritzia, Levi’s, and Abercrombie—to understand how they assist users with sizing. Uniqlo and Aritzia offer interactive tools but lack detailed visuals, while Levi’s and Abercrombie rely on traditional charts with minimal personalization. This highlighted the need for <span>combining tailored recommendations with enhanced visual representation.</span>",
                image: {
                    src: '/assets/pm/research-brand.svg',
                    altText: 'Competitor Analysis',
                    caption: 'Click to view analysis'
                }
            }
        },

        define: {
            insights: {
                content: "User research revealed several key opportunities to improve the online pants shopping experience. By addressing inconsistent sizing, reliance on reviews, and the lack of interactive tools, I identified three core solutions to create a user-friendly and effective plugin:",

                solution: [
                    {
                        title: "Interactive Sizing Tool",
                        icon: "📏",
                        description: "Provide tailored size recommendations that works for both experienced and first-time online shoppers."

                    },
                    {
                        title: "Fit Visualization",
                        icon: "👀",
                        description: "Introduce realistic 3D AI avatars to help users visualize how pants fit specific areas like the waist, hips, and inseam."

                    },
                    {
                        title: "Clear Guide",
                        icon: "📃",
                        description: "Offer size recommendations with clear explanations and visual indicators"
                    }
                ],
            },

            ca: {
                content: "Exploring existing plugins revealed that <span> most focus on whole-body recommendations, not pants-specific needs </span>. While effective for general sizing, these tools lack features to show how pants fit key areas like the waist, hips, and inseam. This presented an opportunity to <span> create a plugin focused on pants sizing, combining accurate size recommendations with dynamic 3D visualizations. </span>",

                img: {
                    src: '/assets/pm/define-ca.svg',
                    altText: 'competitor analysis',
                    caption: 'Existing Plugin Analysis'
                }

            },


            features: {
                header: 'Prioritizing Features',
                content: 'I mapped out and prioritized key features for the personalized sizing plugin to ensure a seamless user experience. The features focus on simplifying the pants-sizing process, providing dynamic visualizations, and empowering users to make confident purchase decisions.',
                img: {
                    src: '/assets/pm/define-productmap.svg',
                    altText: 'Product mapping',
                    caption: 'features included'
                }

            },


            header: 'Introducing Liz and Her Journey',
            content: "Through my research, Liz’s story came to life. She’s a casual online shopper who loves the convenience of buying most things online. But when it comes to pants, she hesitates. Liz worries about the fit, comfort, and the hassle of returns—challenges many online shoppers face. To better understand her experience, I developed a user journey map that outlines each step she takes when using My Personalized Model plugin. This helped pinpoint her pain points and identify opportunities to improve her confidence and overall experience.",

            images: [
                {
                    tab: 'Persona',
                    src: "/assets/pm/define-persona.svg",
                    altText: "User Persona Image",
                },
                {
                    tab: 'User Journey',
                    src: "/assets/pm/define-journey.jpg",
                    altText: "User Journey Image",
                },
            ],


        },

        design: {
            sketch: {
                description: "I began with some quick sketches to get my ideas flowing and explore different possibilities. I chose to focus on a desktop plugin for the initial scope, as it aligns with the behavior of users shopping for pants online. The design was tailored to integrate seamlessly into existing e-commerce websites.",
                image: {
                    src: "/assets/pm/design-sketch.svg",
                    altText: "wireframe sketches",
                    caption: 'Rough screen sketches'
                }
            },
            flow: {
                description: "I created a user flow that follows the steps the user would encounter upon clicking the plugin button on the product page, narrowing down solutions. Features like measurement input, brand-based size recommendations, and interactive 3D models became central elements of the plugin.",
                image:
                {
                    src: '/assets/pm/design-userflow.svg',
                    altText: 'user flow',
                    caption: 'user flow for entering information'
                },
            },

            wireframes: {
                header: 'From Sketches to Wireframes',
                description: "The sketches and flow chart evolved into medium-fidelity wireframes where I centralized my ideas, using Liz as a reference, to address the following pain points identified during the research phase:",

                medfi: {
                    input: {
                        header: 'Simplify size selection',
                        content: 'Instead of dealing with complicated size charts, users can simply input their basic info and measurements if they know them. It’s a quicker, easier way to figure out the best size without the guesswork.',
                        img: {
                            src: '/assets/pm/wireframe1.svg',
                            altText: 'wireframe'
                        }
                    },
                    visualInput: {
                        header: 'Visual Size Adjustment for a Tailored Fit',
                        content: 'If users are unsure about their size, they can adjust the 3D model to match their body shape, making it easier to visualize the fit without relying on size charts',
                        img: {
                            src: '/assets/pm/wireframe2.svg',
                            altText: 'wireframe'
                        }
                    },
                    sizeRec: {
                        header: 'Confident Size Recommendation',
                        content: 'By providing two size recommendations with confidence scores, users no longer need to rely solely on ambiguous size charts.',
                        img: {
                            src: '/assets/pm/wireframe3.svg',
                            altText: 'wireframe'
                        }
                    },
                    avatar: {
                        header: 'Interactive 3D Model',
                        content: "A realistic customizable 3D model lets users switch between half-body and full-body views. Users can rotate and view the model from all angles to see how the pants fit key areas like the waist, hips, and inseam.",
                        img: {
                            src: '/assets/pm/wireframe4.svg',
                            altText: 'wireframe'
                        }
                    },
                }
            },
        },

        prototype: {
            id: 'prototype'

        },

        reflection: {
            content: [
                '<span>User-Centered Design</span>: Without the ability to build and test the plugin, I relied heavily on user interviews and competitor analysis. This constraint pushed me to focus on deeply understanding user needs, ensuring the design was tailored to solve real-world problems.',

                '<span>Leveraging Competitor Insights</span>: Analyzing competitors revealed gaps in existing solutions, highlighting opportunities for innovation. This approach ensured the plugin addressed unique pain points and provided a competitive edge.',

                '<span>Balancing Constraints and Creativity</span>: While technical limitations prevented real-world testing, they encouraged me to think creatively about solutions and prioritize a seamless, user-friendly experience.'
            ]
        }

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

            content: "For the Basics project, I worked with four other teammates to create an e-commerce website that focuses on selling minimalist T-shirts. The objective was to simulate a real-world team environment and implement Agile methodologies to manage the project efficiently. We handled all aspects of the project, from coding the website to designing the visuals, crafting the layout, and writing the content.",

            role: 'Product Owner, Front-End Developer',
            duration: '50 hours - May 2024',

            challenge: "One of the main challenges was <span> managing our five-week timeline as a part-time team, crafting the project from scratch to finish. </span> Since I was both the Product Owner and the only developer, I had to balance overseeing the project’s progress while handling all the development tasks.",

            accomplish: [
                "Guided the project timeline and helped ensure the team stayed aligned with the goals",
                "Developed the website's structure from scratch using HTML, TailwindCSS, and JavaScript",
                "Mobile Responsive",
            ]
        },

        contribution: {
            backlog: {
                title: 'Project Backlog Creation',
                content: 'In the Basics project, the product backlog served as the foundation for our Agile workflow. As the Product Owner, I was responsible for <span> creating and maintaining the backlog </span>. The backlog included all key tasks, such as wireframe development, front-end implementation, content creation, and stakeholder reviews. Each item was prioritized based on its importance to the project timeline and deliverables. I worked closely with my teammates to refine the backlog weekly to ensure it aligned with our sprint goals. By breaking down large tasks into smaller, manageable pieces, we were able to tackle development and design incrementally while staying flexible to adjustments.',
                image: {
                    src: '/assets/basics/backlog.png',
                    altText: 'backlog',
                    caption: 'backlog on Figma'
                }
            },
            wireframe: {
                title: 'Wireframe Creation',
                content: "Wireframes were created during the initial planning phase to establish the structure and layout of the website. As part of the design process, I collaborated closely with the design team to ensure that the wireframes aligned with the project's goals and prioritized users' goals.",
                image: {
                    src: '/assets/basics/wireframe.png',
                    altText: 'wireframe',
                    caption: 'click to view wireframes'
                }
            }
        },

        dev: {
            header: "Technical Approach",

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

            toggle: {
                header: 'Toggle Favorite',
                content: "I implemented a favorite button feature that allows users to mark products as favorites by clicking on a heart icon. This interactive functionality dynamically updates the icon’s color to indicate whether a product has been favorited or unfavorited."
            },

            slick: {
                header: "Slick Plugin Integration",
                content: "I integrated the Slick plugin to create a responsive and visually appealing product carousel for the Basics website. This feature was used to showcase featured products and promotions, allowing users to browse through multiple items in a smooth, interactive manner.",
            },
        }
    },
    {
        id: 4,
        type: 'coding',
        status: 'completed',
        title: 'Zen Matcha',


        banner: {
            subHeader: 'Branding',
            header: 'Defining Identity for online dessert store',
            image: {
                src: '/assets/zm/logoname.svg',
                alt: 'tim horton\'s app redesign',
                classes: "scale-[.50] w-fit h-fit"

            },
        },
        overview: {
            tagline: 'Branding',
            companyOverview: 'An online-exclusive dessert shop specializing in matcha desserts',

            content: "The goal of this project is to create a cohesive and impactful brand identity for Zen Matcha, a brand focused on offering premium matcha desserts. The design will capture the essence of the brand—natural, elegant, and inviting—while ensuring it stands out in a competitive market.",

            role: 'Product Owner, Front-End Developer',
            duration: '3 Weeks - April 2024',

            challenge: "The biggest challenge in designing Zen Matcha's brand identity is <span> finding the right balance between elegance and approachability </span>. The brand needs to feel high-quality and sophisticated while still being warm and relatable. Plus, it has to capture matcha's unique vibe—honoring its traditional roots while highlighting its modern, creative side.",

            accomplish: [
                "Logo Design",
                "Brand Guideline",
                "Application",
            ]
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

