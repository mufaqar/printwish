import React from 'react'
import { AiOutlineMinus } from 'react-icons/ai'
import { AiOutlinePlus } from 'react-icons/ai'
import { useState } from 'react'
import Image from 'next/image'
import Head from 'next/head'
const Data = [

    {
        id: '1',
        title: 'What are the delivery days & hours?',
        content: 'Dispatches are made from Monday to Friday between 9:00 and 19:00. But if you’re in need of delivery outside of this schedule, we also offer special out-of-hours services. Please, contact us to find out more.'
    },
    {
        id: '2',
        title: 'How much does delivery cost?',
        content: 'It is hard to give you an exact price as this entirely depends on how heavy the package is. The more garments you order, the more the price varies. Materials also affect the end result as these have different weights; it will always cost more to transport a hoodie than a vest, for example. But just to give you an idea, a next day delivery of 20 tees will be around £7.99.'
    },
    {
        id: '3',
        title: 'Do you deliver outside the UK?',
        content: 'Yes. Garments can be dispatched internationally to a certain number of territories. Keep in mind that pricing for this type of orders are on a case by case basis and import taxes (plus any other cost related to offshore deliveries) are the customer’s responsibility.'
    },
    {
        id: '4',
        title: 'Do you require a signature on delivery?',
        content: 'Yes. In order for garments to arrive safely, all packages are sent via tracked courier services which require someone’s signature upon delivery.'
    },
    {
        id: '5',
        title: 'My package came in damaged. What do I do?',
        content: 'As soon as possible, take some pictures of the damage and submit a claim using the Contact form or get in touch directly with your account manager. Keep in mind that our customers’ orders travel in quite resilient double-walled boxes. This means that even if they get bumped during transit, it will probably be just cosmetic and won’t affect the contents.'
    },
    {
        id: '6',
        title: 'Is the delivery 100% guaranteed to arrive on time?',
        content: 'Trust us when we say that we do everything in our power to make sure all packages arrive on time. Unfortunately, there are still rare cases where unexpected issues with courier services may cause delays'
    }
]

const Data2 = [

    {
        id: '1',
        Name: 'Turnaround Times',
        description: 'Choose the delivery service that best adapts to your situation:',
        Day: 'Standard: 5-10 days',
        Varenty: 'Express: 2-4 days'
    },

    {
        id: '2',
        Name: 'Order Tracking',
        description: 'Stay on top of your order thanks to notification emails and tracking systems for the chosen courier as soon as your garments leave our warehouses.',
    },

    {
        id: '3',
        Name: 'Delivery Hours',
        description: 'Deliveries are made during weekdays from 9:00 to 19:00, but flexibility &amp; Saturday delivery can be possible depending on order details.',
    }
]

type Item = {
    title: string;
    content: string;
};

type YourComponentProps = {
    Data: Item[];
};
export default function Delivery_information() {
    const [openItemIndex, setOpenItemIndex] = useState<number | null>(0);

    const handleToggleContent = (index: number) => {
        if (openItemIndex === index) {
            // Clicking on the same item again, so close it
            setOpenItemIndex(-1);
        } else {
            // Clicking on a different item, toggle it and close the previously open item
            setOpenItemIndex(index);
        }
    }

    return (
        <>
            <Head>
                <title>Privacy Policy  | Printwish</title>
                <meta name="description" content="Looking for a Bulk T shirt printing service in London, UK? get custom t shirts at wholesale price? We can guarantee cheap prices on bulk orders. ✔️ Cheap T Shirt Printing from £2.90" />
                <link rel="canonical" href={`https://www.printwish.co.uk/privacy-policy`} />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="privacy-policy" />
                <meta property="og:description" content="Looking for a Bulk T shirt printing service in London, UK? get custom t shirts at wholesale price? We can guarantee cheap prices on bulk orders. ✔️ Cheap T Shirt Printing from £2.90" />
                <meta property="og:url" content={`https://printwish.co.uk/privacy-policy`} />
                <meta property="og:site_name" content="PrintWish T-Shirt Printing" />
                <meta property="article:publisher" content="https://www.facebook.com/printwishuk" />
                <meta property="article:modified_time" content="2023-07-06T22:58:46+00:00" />
                <meta property="og:image" content="https://backend.printwish.co.uk/wp-content/uploads/2023/10/trust.png" />
                <meta property="og:image:width" content="700" />
                <meta property="og:image:height" content="467" />
                <meta property="og:image:type" content="image/jpeg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@PrintwishUk" />
                <meta name="twitter:label1" content="Est. reading time" />
                <meta name="twitter:data1" content="15 minutes" />
            </Head>
            <main className='items-center mx-auto max-w-screen-xl px-6 md:px-6'>
                <div className="container mx-auto">
                    <div className="text-center mt-12">
                        <h2 className='text-[#0088cc] font-[400] leading-[40px] text-[30px] pb-[32px]'>COOKIE POLICY</h2>
                        <p className='text-[#7b858a] pb-[1.25rem] font-[400] '>

                            This Cookie Policy outlines what cookies are, how we employ cookies and related technologies on its platforms, and the options you have regarding their use. We prioritize the protection of your personal data when you engage with our platforms and services. Here’s an in-depth look at the topics covered in this policy:
                        </p>
                    </div>
                </div>
                <div className="cont">
                    <div className="lg:flex">
                        <div className="hea">
                            <h2 className='font-[400] text-[30px] text-[#1d2127] pb-[32px]'>Understanding Cookies</h2>
                            <p className='text-[#1e2d35] pb-[1.25rem]'>A cookie is a tiny text file that's dispatched to your computer or mobile device (henceforth mentioned as a “device”) by a web server. Its purpose is to let the website remember certain details about your online activity on that site. Cookies gather details about your website interactions, specifics about your device like its IP address and the browser being used, demographic information, and, if you landed on our platform via a link from another website, that website’s URL. For users who are registered or subscribed, cookies might also capture your name and email, which can then be shared with data processors for verification.</p>
                            <p className='text-[#1e2d35] pb-[1.25rem]'>Cookies enable a more tailored online experience by noting your preferences. The insights they provide allow us to refine how you engage with our platform, ultimately enhancing your overall experience.</p>
                            <p className='text-[#1e2d35] pb-[1.25rem]'>Depending on their longevity, cookies can be:</p>
                            <p className='text-[#1e2d35] pb-[1.25rem]'>
                                <strong>Session Cookies: </strong> These are temporary and only stay on your device while you're browsing. They're removed once you shut down your browser.</p>
                            <p className='text-[#1e2d35] pb-[1.25rem]'> 
                            <strong> Persistent Cookies: </strong>These cookies remain on your device for a set period after you've closed your browser and are reactivated each time you revisit the originating website.
                            </p>

                            <h3 className='font-[400] text-[30px] text-[#1d2127] pb-[32px]'>Different Cookie Categories</h3>

                            <h3 className='font-[400] text-[30px] text-[#1d2127] pb-[32px]'>Essential Cookies</h3>
                            <p className='text-[#1e2d35] pb-[1.25rem]'>These are fundamental for our platform's operation. Without them, certain functionalities would be inoperable. They don’t trace your online journey elsewhere and steer clear of collecting marketing-oriented data.
                                Functional Cookies </p>
                            <p className='text-[#1e2d35] pb-[1.25rem]'>

                                Their purpose is to recollect your settings on our platform and deliver an enhanced, personalized user experience. The data they assemble is typically anonymous, meaning it won’t identify you. While these cookies don’t monitor your broader internet activities or gather ad-selling data, they do play a role in ad presentation.
                            </p>

                            <h3 className='font-[400] text-[30px] text-[#1d2127] pb-[32px]'>Analytical Performance Cookies</h3>
                            <p className='text-[#1e2d35] pb-[1.25rem]'>
                                These cookies keep track of our platform's efficacy, like tallying page views or determining unique visitor counts. Some might be set up and managed by external parties. They offer insights into user interaction trends, allowing us to refine the user experience or spotlight parts of the website needing improvement. Importantly, this data is impersonal (i.e., it doesn’t hold personal identifiers like names or email addresses) and is leveraged solely for statistical evaluation.
                            </p>
                            <h3 className='font-[400] text-[30px] text-[#1d2127] pb-[32px]'>MARKETING COOKIES POLICY</h3>

                            <h3 className='font-[400] text-[30px] text-[#1d2127] pb-[32px]'>Understanding Marketing Cookies</h3>
                            <p className='text-[#1e2d35] pb-[1.25rem]'>
                                Marketing cookies, either set by us or our vetted external partners, take note of your website visits. They utilize this data to offer you advertisements curated to match your interests. This method, frequently termed as online behavioural advertising (OBA), segments interests based on your online browsing patterns. Insights from your browsing can infer specific attributes about you (like age, gender, etc.), refining the relevance of ads across the web. Though these cookies track online behavior, they don’t personally identify you, even if logged into our site. Without them, the ads you stumble upon online may not align with your preferences. To get more insights on OBA and opting out of these cookies, please explore: www.youronlinechoices.com.

                            </p>

                            <h3 className='font-[400] text-[30px] text-[#1d2127] pb-[32px]'>  Our Application of Cookies</h3>

                            In association with our reputable partners, we employ cookies for several reasons:

                            <h3 className='font-[400] text-[30px] text-[#1d2127] pb-[32px]'>Essential and Functional Cookies</h3>

                            Recognize repeat visitors and present them with a site customized to their liking.
                            Forego the need for regulars to input login data repeatedly.
                            Facilitate commentary on our platforms.

                            <h3 className='font-[400] text-[30px] text-[#1d2127] pb-[32px]'>Analytical Performance Cookies</h3>

                            <p className='text-[#1e2d35] pb-[1.25rem]'>  Through tools like Google Analytics and comScore Digital Analytix, we gauge user interactions. This helps us discern which content resonates most, aiding in enhancing our offerings and reporting our accomplishments.
                                Marketing Cookies</p>

                            <p className='text-[#1e2d35] pb-[1.25rem]'> Assess universal user behavior on our and partner sites to draft a profile. This ensures advertising is aptly directed based on user inclinations. For instance, if a user explores a camera review, the cookie captures this, potentially resulting in targeted advertising related to that camera.
                            </p>
                            <p className='text-[#1e2d35] pb-[1.25rem]'>
                                Compile profiles that reliable third parties can leverage to better focus their ads.</p>
                            <p className='text-[#1e2d35] pb-[1.25rem]'>


                                Our emails might include web beacons (clear GIFs or web bugs) to monitor our marketing endeavors' efficacy. If you access an email from us, we can trace your subsequent interactions on our site.
                            </p>
                            <p className='text-[#1e2d35] pb-[1.25rem]'>
                                The data gathered by the cookies concerning your site interactions (inclusive of your IP address) might be sent to and stored on servers located in the U.S. or U.K. This data may also be shared with third parties under legal obligations or if they process data on their behalf. Engaging with this site means you acquiesce to the data processing executed by these service providers, as detailed above.
                            </p>
                            <p className='text-[#1e2d35] pb-[1.25rem]'>
                                Note: We don’t have oversight or access capabilities to cookies deployed on your device by third-party advertisers or sponsors.
                            </p>
                            <p className='text-[#1e2d35] pb-[1.25rem]'>
                                OTHER THIRD-PARTY COOKIES EXPLAINED
                            </p>

                            <h3 className='font-[400] text-[30px] text-[#1d2127] pb-[32px]'>Third-Party Cookies on Our Platforms</h3>
                            <p className='text-[#1e2d35] pb-[1.25rem]'>
                                While browsing our website, you might discover cookies not directly associated with us. If a page embeds content from external platforms like YouTube or Facebook, they may place their unique cookies on your device. We don't dictate or access these cookies since they are retrievable only by their originator. For detailed information, refer to the third-party websites.
                            </p>

                            <h3 className='font-[400] text-[30px] text-[#1d2127] pb-[32px]'>Printwish UK’s Cookie Oversight</h3>
                            <p className='text-[#1e2d35] pb-[1.25rem]'>  How do we monitor cookies on our platforms, and how can you manage or opt out? </p>
                            <p className='text-[#1e2d35] pb-[1.25rem]'>
                                The concept of websites storing data on users' devices can be unsettling for some, especially when third parties utilize this information. For instance, receiving ads tailored to your interests based on your online history might not be welcome. If you choose to opt out of cookies:
                            </p>
                            <p className='text-[#1e2d35] pb-[1.25rem]'>
                                Existing cookies can be eradicated from your device.
                            </p>   <p className='text-[#1e2d35] pb-[1.25rem]'>
                                Modify your browser settings to manage cookies. Some settings enable primary site cookies while blocking third-party cookies. Others restrict cookies from specific advertisers or erase all cookies. However, doing so may limit site functionality. For more guidance, visit www.allaboutcookies.org or your browser's help section.
                            </p>
                            <h3 className='font-[400] text-[30px] text-[#1d2127] pb-[32px]'>Opt-out Options</h3>

                            <h3 className='font-[400] text-[30px] text-[#1d2127] pb-[32px]'>Analytical Performance Cookies: </h3>To withdraw from Analytics cookies, use the following:
                            <p className='text-[#1e2d35] pb-[1.25rem]'>
                                Google Analytics: Google Analytics Opt-out </p>  <p className='text-[#1e2d35] pb-[1.25rem]'>
                                Behavioural Advertising Cookies: To disable cookies from advertisers or ad service providers:
                            </p>
                            <p className='text-[#1e2d35] pb-[1.25rem]'>
                                Google Ads Preferences</p>
                            <p className='text-[#1e2d35] pb-[1.25rem]'> Audience Science Consumer Options    </p>
                            <p className='text-[#1e2d35] pb-[1.25rem]'>  Admeld Privacy Policy    </p>
                            <p className='text-[#1e2d35] pb-[1.25rem]'>  For other online behavioural ad opt-outs, refer to:    </p>

                            <p className='text-[#1e2d35] pb-[1.25rem]'>  Network Advertising Initiative Opt-out Page</p>

                            <h3 className='font-[400] text-[30px] text-[#1d2127] pb-[32px]'>Additional Information and Contact</h3>
                            <p className='text-[#1e2d35] pb-[1.25rem]'>
                                For inquiries or more on our cookies, reach out to Printwish UK’s Data Protection team:</p>


                            <p className='text-[#1e2d35] pb-[1.25rem]'> Email: enquiries@printwish.co.uk</p>
                            <p className='text-[#1e2d35] pb-[1.25rem]'> Phone: 0800-051-0821</p>










                        </div>

                    </div>
                </div>


            </main>
        </>
    )
}






