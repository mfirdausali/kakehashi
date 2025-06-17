import type { Article } from "./types"

// Mock data for articles
const articles: Article[] = [
  {
    id: "1",
    slug: "global-economy-outlook-2023",
    title: "Global Economy Faces Uncertain Future Amid Rising Inflation",
    excerpt:
      "Central banks worldwide struggle to contain inflation as supply chain issues persist and geopolitical tensions rise.",
    content: `The global economy is at a crossroads as central banks around the world grapple with persistent inflation that has proven more stubborn than initially anticipated. The Federal Reserve, the European Central Bank, and the Bank of England have all raised interest rates significantly over the past year, yet inflation remains well above target levels in most advanced economies.

    Supply chain disruptions, which began during the COVID-19 pandemic, continue to affect global trade. While there have been improvements in some sectors, the lingering effects of these disruptions are still being felt across industries, from semiconductors to food production.

    Geopolitical tensions have added another layer of complexity to the economic outlook. The ongoing conflict in Ukraine has led to energy price volatility, particularly in Europe, where countries are working to reduce their dependence on Russian natural gas.

    Economists are divided on the prospects for a "soft landing" – the scenario where inflation is brought under control without triggering a recession. Some argue that the aggressive monetary tightening by central banks will inevitably lead to economic contraction, while others point to strong labor markets as evidence that economies can withstand higher interest rates.

    Emerging markets face their own set of challenges, including currency depreciation against the U.S. dollar and higher borrowing costs. Countries with high levels of dollar-denominated debt are particularly vulnerable in the current environment.

    Despite these challenges, there are some positive signs. Global supply chains are gradually adapting, and energy prices have stabilized in recent months. Consumer spending remains resilient in many countries, supported by savings accumulated during the pandemic and wage growth.

    The coming months will be crucial in determining whether the global economy can navigate these turbulent waters without a significant downturn. Policymakers face the difficult task of balancing inflation control with economic growth, a challenge that will require careful calibration of monetary and fiscal policies.`,
    author: "Jane Smith",
    date: "2023-05-15",
    category: "business",
    image: "/placeholder.svg?height=600&width=800",
    imageCaption: "Financial district skyline reflecting economic activity",
    featured: true,
  },
  {
    id: "2",
    slug: "ai-revolution-transforming-industries",
    title: "The AI Revolution: How Artificial Intelligence is Transforming Industries",
    excerpt:
      "From healthcare to finance, artificial intelligence is reshaping how businesses operate and creating new opportunities for innovation.",
    content: `Artificial intelligence is no longer the stuff of science fiction. It's here, it's real, and it's transforming industries at a pace that few could have predicted just a decade ago. The convergence of massive computing power, big data, and sophisticated algorithms has unleashed a wave of AI applications that are changing how businesses operate and how consumers interact with technology.

    In healthcare, AI is being used to analyze medical images, predict patient outcomes, and accelerate drug discovery. Companies like PathAI are developing machine learning algorithms that help pathologists make more accurate diagnoses, while others like Atomwise are using AI to identify potential drug candidates for diseases ranging from cancer to Ebola.

    The financial sector has embraced AI for everything from fraud detection to algorithmic trading. JPMorgan Chase's COIN (Contract Intelligence) program can review commercial loan agreements in seconds, a task that previously took legal teams thousands of hours. Meanwhile, robo-advisors like Wealthfront and Betterment are democratizing investment management by providing automated, algorithm-driven financial planning services.

    Manufacturing is being revolutionized by AI-powered robotics and predictive maintenance systems. Companies like Siemens are using AI to predict equipment failures before they happen, reducing downtime and maintenance costs. In automotive manufacturing, robots equipped with computer vision can perform quality control inspections with greater accuracy than human inspectors.

    Retail is another sector being transformed by AI. Amazon's recommendation engine, powered by machine learning, drives a significant portion of the company's sales. Brick-and-mortar retailers are fighting back with their own AI initiatives, using computer vision to track inventory and analyze customer behavior in stores.

    Transportation is perhaps one of the most visible areas of AI innovation, with autonomous vehicles from companies like Waymo and Tesla logging millions of miles on public roads. While fully autonomous vehicles are still in development, driver assistance features powered by AI are already common in new cars.

    Despite these advances, the AI revolution is not without challenges. Concerns about job displacement, algorithmic bias, and privacy have prompted calls for greater regulation and ethical guidelines for AI development and deployment. The European Union's proposed AI Act represents one of the first comprehensive attempts to regulate AI systems based on their potential risks.

    As AI continues to evolve, its impact on industries will only grow. The companies that succeed in this new era will be those that can effectively integrate AI into their operations while addressing the ethical and societal implications of this powerful technology.`,
    author: "Michael Johnson",
    date: "2023-06-02",
    category: "technology",
    image: "/placeholder.svg?height=600&width=800",
    imageCaption: "AI concept visualization with neural network representation",
    featured: true,
  },
  {
    id: "3",
    slug: "climate-change-policy-global-response",
    title: "Climate Change Policy: Assessing the Global Response to Environmental Crisis",
    excerpt:
      "As extreme weather events become more frequent, governments around the world are implementing new policies to address climate change.",
    content: `The frequency and intensity of extreme weather events in recent years have brought climate change to the forefront of global policy discussions. From devastating wildfires in Australia and California to catastrophic flooding in Germany and China, the impacts of climate change are becoming increasingly difficult to ignore. In response, governments around the world are implementing new policies aimed at reducing greenhouse gas emissions and building resilience to climate impacts.

    The Paris Agreement, adopted in 2015, remains the cornerstone of international climate policy. Under this agreement, countries have committed to limiting global warming to well below 2 degrees Celsius above pre-industrial levels, with efforts to limit the increase to 1.5 degrees. However, current national pledges are insufficient to meet these targets, according to the latest report from the Intergovernmental Panel on Climate Change (IPCC).

    The European Union has taken a leading role in climate policy with its European Green Deal, which aims to make Europe the first climate-neutral continent by 2050. The plan includes a comprehensive package of measures, from investing in renewable energy to promoting circular economy principles and sustainable agriculture.

    In the United States, climate policy has been marked by significant shifts with changing administrations. After withdrawing from the Paris Agreement under President Trump, the U.S. rejoined under President Biden, who has set a target of reducing U.S. greenhouse gas emissions by 50-52% below 2005 levels by 2030. The Inflation Reduction Act, passed in 2022, represents the largest investment in climate action in U.S. history, with $369 billion allocated for energy security and climate change programs.

    China, the world's largest emitter of greenhouse gases, has pledged to reach peak emissions before 2030 and achieve carbon neutrality by 2060. The country is investing heavily in renewable energy and has implemented the world's largest emissions trading system, covering its power sector.

    Developing countries face unique challenges in addressing climate change. Many argue that they should be allowed to continue using fossil fuels to support economic development, while developed countries, which have historically contributed more to climate change, should bear a greater burden in reducing emissions. Climate finance – financial support from developed to developing countries for climate mitigation and adaptation – remains a contentious issue in international negotiations.

    Beyond government action, there is growing pressure from civil society and the private sector for more ambitious climate policies. Youth-led movements like Fridays for Future have brought new energy to climate activism, while investors are increasingly considering climate risks in their decision-making.

    As the impacts of climate change become more severe, the urgency of effective policy responses will only increase. The challenge for policymakers is to balance immediate economic concerns with the long-term imperative of environmental sustainability – a balance that will require political courage, technological innovation, and international cooperation.`,
    author: "Sarah Chen",
    date: "2023-04-22",
    category: "world",
    image: "/placeholder.svg?height=600&width=800",
    imageCaption: "Climate activists protesting for policy change",
    featured: true,
  },
  {
    id: "4",
    slug: "malaysia-japan-trade-relations",
    title: "Malaysia and Japan Strengthen Economic Ties with New Trade Agreement",
    excerpt:
      "The new comprehensive economic partnership aims to boost bilateral trade and investment between the two nations.",
    content: `Malaysia and Japan have signed a groundbreaking new trade agreement that promises to significantly strengthen economic ties between the two nations. The Comprehensive Strategic Economic Partnership (CSEP), signed yesterday in Kuala Lumpur, builds upon decades of cooperation and aims to boost bilateral trade and investment in key sectors including manufacturing, technology, and renewable energy.

    The agreement comes at a crucial time for both economies. Malaysia is seeking to diversify its economic partnerships and attract high-quality foreign investment to drive its transition to a high-income nation. Japan, facing demographic challenges and seeking new growth markets, views Malaysia as a strategic partner in Southeast Asia with its young population and growing middle class.

    "This agreement represents a new chapter in Malaysia-Japan relations," said Malaysia's Minister of International Trade and Industry during the signing ceremony. "It goes beyond traditional trade liberalization to include cooperation in digital economy, sustainable development, and human capital development."

    Under the CSEP, tariffs will be eliminated on more than 95% of goods traded between the two countries. The agreement also includes provisions for enhanced protection of intellectual property rights, improved market access for service providers, and streamlined customs procedures.

    A key focus of the agreement is technology transfer and innovation. Japan has committed to establishing a new technology center in Cyberjaya, Malaysia's tech hub, which will facilitate collaboration between Japanese companies and Malaysian startups. The center will focus on areas such as artificial intelligence, Internet of Things, and green technology.

    The renewable energy sector is another major beneficiary of the agreement. Japanese companies will invest in Malaysia's growing solar industry, leveraging the country's abundant sunshine and strategic location. In return, Malaysian companies will gain access to Japan's advanced renewable energy technologies and expertise.

    The automotive sector, long a cornerstone of Malaysia-Japan economic relations, will see expanded cooperation. Japanese automakers have committed to increasing local content in vehicles manufactured in Malaysia and establishing more research and development facilities in the country.

    The agreement also addresses labor mobility, with provisions for skills training programs and easier movement of professionals between the two countries. This is expected to help address Malaysia's skills gaps in certain sectors while providing Japanese companies with access to a talented workforce.

    Business leaders from both countries have welcomed the agreement. "This creates new opportunities for Malaysian companies to enter the Japanese market and integrate into Japanese supply chains," said the president of the Malaysia-Japan Economic Association. "It also provides a framework for deeper collaboration in emerging industries."

    The CSEP is expected to increase bilateral trade by at least 30% over the next five years. Currently, Japan is Malaysia's fourth-largest trading partner, with bilateral trade valued at approximately $30 billion annually.

    Beyond the economic benefits, the agreement is seen as strengthening the broader relationship between Malaysia and Japan. Cultural and educational exchanges are also expected to increase, further deepening the ties between the two nations.

    The implementation of the agreement will be overseen by a joint committee that will meet annually to review progress and address any issues that arise. Both countries have expressed commitment to ensuring that the benefits of the agreement are widely shared and contribute to inclusive economic growth.`,
    author: "Ahmad Ibrahim",
    date: "2023-06-15",
    category: "business",
    image: "/placeholder.svg?height=600&width=800",
    imageCaption: "Malaysian and Japanese officials at trade agreement signing ceremony",
    featured: false,
    premium: true,
  },
  {
    id: "5",
    slug: "japanese-culinary-influence-malaysian-cuisine",
    title: "The Growing Influence of Japanese Cuisine on Malaysia's Food Scene",
    excerpt:
      "From high-end omakase restaurants to fusion street food, Japanese culinary traditions are transforming Malaysian dining.",
    content: `The aroma of freshly grilled yakitori wafts through the air at a bustling night market in Kuala Lumpur, while just a few streets away, diners at an upscale restaurant savor meticulously prepared omakase courses. Across Malaysia, the influence of Japanese cuisine has grown dramatically in recent years, transforming the country's food landscape and creating exciting new culinary fusions that reflect the deepening cultural ties between the two nations.

    Malaysia has long been known for its diverse food culture, blending Malay, Chinese, Indian, and indigenous influences. Now, Japanese culinary traditions are increasingly becoming part of this rich tapestry, appealing to Malaysian diners seeking new flavors and dining experiences.

    "Japanese cuisine resonates with Malaysians because of shared values around quality ingredients and attention to detail," explains Chef Darren Teoh, known for his innovative Malaysian cuisine at Dewakan restaurant in Kuala Lumpur. "There's also a natural affinity between certain Japanese techniques and traditional Malaysian methods."

    The Japanese culinary influence in Malaysia spans all price points and settings. At the high end, omakase restaurants where chefs prepare multi-course meals based on the freshest available ingredients have proliferated in major cities. These establishments often import seafood directly from Japan's Tsukiji or Toyosu markets and employ Japanese-trained chefs.

    In the mid-range market, ramen shops, sushi restaurants, and izakayas (Japanese pubs) have become commonplace in shopping malls and commercial districts. Chains like Sushi King and Rakuzen have made Japanese dining accessible to middle-class Malaysians, while international brands such as Ippudo and Sushiro have established significant presences.

    Perhaps most interesting is the integration of Japanese elements into Malaysian street food and casual dining. Night markets now commonly feature takoyaki (octopus balls), okonomiyaki (savory pancakes), and various skewered meats prepared with Japanese seasonings. Local entrepreneurs have created fusion dishes that combine Japanese techniques with Malaysian flavors, such as rendang sushi, laksa ramen, and matcha-infused kuih (traditional Malaysian sweets).

    The popularity of Japanese cuisine in Malaysia has been driven by several factors. Increased travel between the two countries before the pandemic exposed more Malaysians to authentic Japanese food. Japanese popular culture, including anime, manga, and television shows, has created interest in Japanese lifestyle and cuisine, particularly among younger Malaysians.

    Social media has also played a significant role, with photogenic Japanese dishes becoming Instagram favorites. "The visual appeal of Japanese cuisine makes it perfect for social media sharing," notes food blogger Sarah Tan. "A beautifully arranged sashimi platter or a perfectly crafted matcha dessert practically demands to be photographed."

    The health benefits associated with Japanese cuisine have attracted health-conscious Malaysian consumers as well. The emphasis on fresh ingredients, balanced meals, and lighter cooking methods aligns with growing interest in healthier eating habits.

    For Japanese expatriates living in Malaysia, the growing availability of authentic Japanese food provides a taste of home. "When I moved to Kuala Lumpur five years ago, it was difficult to find good Japanese ingredients," says Kenji Tanaka, who works for a Japanese manufacturing company. "Now, there are specialized Japanese supermarkets and many restaurants serving authentic dishes."

    The exchange goes both ways. Malaysian chefs are increasingly traveling to Japan for training and inspiration, while Japanese chefs in Malaysia are incorporating local ingredients and flavors into their cooking. This cross-cultural pollination is creating a distinctive Malaysian-Japanese culinary style  This cross-cultural pollination is creating a distinctive Malaysian-Japanese culinary style that honors both traditions while creating something new and exciting.

    The influence extends beyond restaurants to home cooking as well. Supermarkets in Malaysia now stock a wide range of Japanese ingredients, from premium soy sauces and miso pastes to specialized cooking tools. Cooking classes teaching Japanese techniques have become popular, and television cooking shows frequently feature Japanese recipes adapted for Malaysian kitchens.

    Food festivals celebrating Japanese cuisine have become regular events in major Malaysian cities. The annual Japan Expo in Kuala Lumpur features extensive food sections, while dedicated Japanese food festivals bring together restaurants and suppliers to showcase their offerings.

    Tourism between the two countries has been significantly boosted by culinary interests. Many Malaysians now travel to Japan specifically for food tourism, exploring different regional cuisines from Hokkaido to Okinawa. Similarly, Japanese tourists visiting Malaysia are increasingly interested in experiencing both traditional Malaysian dishes and the unique Japanese-Malaysian fusion cuisine that has developed.

    "Food has become an important diplomatic bridge between our cultures," says Dr. Melissa Wong, a cultural anthropologist at Universiti Malaya. "Through sharing culinary traditions, both Malaysians and Japanese are gaining deeper appreciation for each other's heritage and values."

    As this culinary exchange continues to evolve, it represents one of the most visible and accessible aspects of the growing relationship between Malaysia and Japan – a delicious example of how cultural bridges can be built one meal at a time.`,
    author: "Nurul Hasan",
    date: "2023-05-28",
    category: "culture",
    image: "/placeholder.svg?height=600&width=800",
    imageCaption: "Chef preparing Japanese-Malaysian fusion cuisine in Kuala Lumpur restaurant",
    featured: false,
    premium: true,
  },
  {
    id: "6",
    slug: "sustainable-technology-collaboration-malaysia-japan",
    title: "Malaysia and Japan Launch Joint Initiative for Sustainable Technology Development",
    excerpt:
      "The five-year program will focus on renewable energy, smart cities, and environmental protection technologies.",
    content: `Malaysia and Japan have announced an ambitious joint initiative aimed at accelerating the development and deployment of sustainable technologies in Southeast Asia. The Malaysia-Japan Green Technology Partnership (MJGTP), launched yesterday at a ceremony attended by officials from both countries, will bring together government agencies, research institutions, and private companies in a collaborative effort to address environmental challenges while promoting economic growth.

    The five-year program, backed by an initial investment of RM500 million (approximately ¥15 billion), will focus on three key areas: renewable energy systems, smart city technologies, and environmental protection solutions. Both countries have committed to providing funding, expertise, and resources to support joint research projects, technology demonstrations, and commercial applications.

    "This partnership represents a significant step forward in our commitment to sustainable development," said Malaysia's Minister of Environment and Water at the launch event. "By combining Japanese technological expertise with Malaysian innovation and market knowledge, we can develop solutions that are not only environmentally sound but also economically viable and socially beneficial."

    The renewable energy component of the initiative will concentrate on advancing solar power technologies, particularly those suited to tropical climates. Malaysia, with its abundant sunshine and growing energy needs, offers an ideal testing ground for next-generation solar systems. Japanese companies with expertise in high-efficiency solar panels and advanced energy storage will work with Malaysian partners to develop integrated solutions that can be deployed throughout Southeast Asia.

    In the area of smart cities, the partnership will focus on technologies that can help urban areas manage resources more efficiently while improving quality of life for residents. Projects will include intelligent transportation systems to reduce congestion and emissions, smart grid technologies for optimizing energy use, and water management systems that can help cities cope with both flooding and drought conditions.

    The environmental protection component will address pressing challenges such as plastic pollution, air quality, and biodiversity conservation. One flagship project already identified is the development of advanced recycling technologies for plastic waste, a significant environmental issue in both countries.

    "Japan and Malaysia face many common environmental challenges, despite our different geographies and development stages," noted Japan's Ambassador to Malaysia. "This partnership allows us to pool our strengths and develop solutions that can benefit not only our two countries but potentially the entire region and beyond."

    The initiative includes provisions for technology transfer and capacity building, ensuring that Malaysian institutions and companies can develop their own capabilities in sustainable technologies. Joint research laboratories will be established at universities in both countries, and exchange programs will allow researchers and students to gain international experience.

    Private sector involvement is a key aspect of the partnership. A business consortium comprising companies from both countries has been formed to commercialize technologies developed through the initiative. The consortium includes major Japanese corporations such as Mitsubishi Electric and Panasonic, as well as Malaysian companies like Tenaga Nasional Berhad and Cypark Resources.

    "This is not just about research and development; it's about creating real-world solutions that can be deployed at scale," said the chairperson of the business consortium. "We're looking to develop technologies that can create new industries and jobs while addressing environmental challenges."

    The partnership builds on decades of economic cooperation between Malaysia and Japan, but represents a new focus on sustainability and green technology. It aligns with Malaysia's Green Technology Master Plan and Japan's Green Growth Strategy, both of which aim to promote economic development through environmental innovation.

    The first projects under the initiative are expected to begin within the next six months, following a detailed planning phase. A joint secretariat has been established to coordinate activities and ensure transparent governance of the partnership.

    Environmental organizations have generally welcomed the initiative, though some have called for stronger commitments to ensuring that technologies developed are accessible to all segments of society, including lower-income communities.

    As climate change and environmental degradation become increasingly urgent global challenges, partnerships like the MJGTP may offer a model for international cooperation that combines technological innovation with practical implementation. By bringing together two countries with complementary strengths and a shared commitment to sustainability, the initiative has the potential to accelerate the transition to greener, more resilient economies in Southeast Asia.`,
    author: "Lee Mei Ling",
    date: "2023-04-05",
    category: "technology",
    image: "/placeholder.svg?height=600&width=800",
    imageCaption: "Malaysian and Japanese officials at the launch of the Green Technology Partnership",
    featured: false,
    premium: true,
  },
]

// Get all articles
export async function getArticles() {
  // In a real app, this would fetch from a database or API
  return articles
}

// Get article by slug
export async function getArticleBySlug(slug: string) {
  // In a real app, this would fetch from a database or API
  return articles.find((article) => article.slug === slug)
}

// Search articles
export async function getArticlesBySearch(query: string) {
  // In a real app, this would use a proper search index
  const lowercaseQuery = query.toLowerCase()
  return articles.filter(
    (article) =>
      article.title.toLowerCase().includes(lowercaseQuery) ||
      article.excerpt.toLowerCase().includes(lowercaseQuery) ||
      article.content.toLowerCase().includes(lowercaseQuery),
  )
}

// Check if user has access to premium content
export function userHasAccessToArticle(user: any, article: Article) {
  // If article is not premium, everyone has access
  if (!article.premium) return true

  // If no user or no subscription, no access to premium
  if (!user || !user.subscription) return false

  // Basic plan doesn't have access to premium content
  if (user.subscription.plan === "basic") return false

  // Premium and business plans have access if subscription is active
  return user.subscription.status === "active"
}
