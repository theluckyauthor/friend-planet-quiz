import { PlanetType } from './analytics';

interface PlanetInfo {
    title: string;
    description: string;
    traits: string[];
    nurture: string;
    emoji: string;
}

export const planetData: Record<PlanetType, PlanetInfo> = {

    "sun": {
        "title": "Your Chosen Family",
        "description": "This friend is the anchor of your universe—the one you trust with everything. Whether they're actual family or someone who feels like it, they're always there, offering unwavering love and support. Through every high and low, you know they'll never leave your orbit.",
        "traits": ["Unbreakable", "Lifelong", "Deeply Caring"],
        "nurture": "Never take this bond for granted. Show appreciation in small ways—send a heartfelt message, plan a catch-up, or simply remind them how much they mean to you.",
        "emoji": "☀️"
    },
    "mercury": {
        "title": "Fast-Paced, Exciting Friendships",
        "description": "This is a high-energy, rapidly growing connection. Maybe you just met, but it feels like you've known each other forever. Conversations flow effortlessly, and there's always something new to discover about each other.",
        "traits": ["Fast-growing", "Spontaneous", "Engaging"],
        "nurture": "Keep up the momentum! Plan spontaneous outings, share fun experiences, and enjoy the thrill of getting to know each other. But don’t rush—let the bond deepen naturally.",
        "emoji": "☿️"
    },
    "venus": {
        "title": "Your Heart-to-Heart Friend",
        "description": "This is the friend who truly sees you. You confide in each other, share dreams, and support each other through life's emotional ups and downs. They bring warmth, comfort, and a deep sense of belonging.",
        "traits": ["Deep Trust", "Emotional Closeness", "Supportive"],
        "nurture": "Make time for real conversations, not just surface-level chats. Show up for each other emotionally, whether it’s celebrating wins or holding space during tough times.",
        "emoji": "♀️"
    },
    "earth": {
        "title": "Your Constant, Unshakable Best Friend",
        "description": "This friend is your home base—the one who knows everything about you and still sticks around. They’re the person you call first with good or bad news, and no matter what, they always have your back.",
        "traits": ["Loyal", "Deeply Involved", "Always Present"],
        "nurture": "Don’t let routine take over. Keep making memories together, check in regularly, and never let distance (physical or emotional) create a gap.",
        "emoji": "🌍"
    },
    "mars": {
        "title": "Your Partner-in-Crime",
        "description": "This is your adventure buddy, your hype person, your ‘let’s do it!’ friend. You thrive on shared experiences, adrenaline rushes, and pushing each other to try new things.",
        "traits": ["High-Energy", "Fun-Loving", "Daring"],
        "nurture": "Keep the energy alive! Plan activities that challenge and excite you both. But also remember to slow down and check in emotionally once in a while.",
        "emoji": "♂️"
    },
    "jupiter": {
        "title": "Your Social Star",
        "description": "This is the friend who makes every gathering better. They bring people together, create unforgettable moments, and make socializing effortless and fun.",
        "traits": ["Outgoing", "Fun", "Social Connector"],
        "nurture": "Celebrate this connection by inviting them to social events and finding time to hang out outside of groups, too. Deepen the bond beyond shared circles.",
        "emoji": "⚡"
    },
    "saturn": {
        "title": "Your Steady, Reliable Friend",
        "description": "This is a friendship built on shared environments—whether it’s work, school, or another setting. While not the deepest bond, there’s a sense of mutual respect and camaraderie.",
        "traits": ["Friendly", "Situational", "Easygoing"],
        "nurture": "Enjoy the connection for what it is, but don’t be afraid to deepen it if the opportunity arises. Sometimes, the best friendships start in the most casual ways.",
        "emoji": "🪐"
    },
    "uranus": {
        "title": "Your Quirky, Unpredictable Friend",
        "description": "This is a friendship full of unexpected twists. Inside jokes that make no sense, unconventional hangouts, and a dynamic that doesn’t follow the norm—it's weird, wonderful, and perfect in its own way.",
        "traits": ["Unpredictable", "Eccentric", "Free-Spirited"],
        "nurture": "Lean into the chaos! Let the friendship be as spontaneous and unconventional as it wants to be. It’s the unpredictability that makes it special.",
        "emoji": "⚛️"
    },
    "neptune": {
        "title": "Your Soulful, Distant Friend",
        "description": "This is a friendship that transcends distance. Whether it's long-distance or just less frequent contact, you always pick up where you left off—no awkwardness, no expectations, just pure understanding.",
        "traits": ["Loyal", "Sentimental", "Tech-Driven"],
        "nurture": "A simple ‘thinking of you’ message goes a long way. Make time for deep conversations when you can, and let them know they matter.",
        "emoji": "🌊"
    },
    "pluto": {
        "title": "Your Once-Close, Now-Distant Friend",
        "description": "This is a friendship that was once everything, but time and life have taken you in different directions. The memories remain, and maybe the connection will spark again one day.",
        "traits": ["Nostalgic", "Distant", "Meaningful Past"],
        "nurture": "If they cross your mind, reach out. Even if you don’t reconnect, cherish what you had—it shaped you in ways you may not even realize.",
        "emoji": "❄️"
    },
    "comet": {
        "title": "Your On-and-Off Friend",
        "description": "This is a friendship that comes in waves—sometimes you’re inseparable, other times you drift apart. But when you reconnect, it’s like nothing changed.",
        "traits": ["Unpredictable", "High-Intensity Phases", "Deep Connection When Active"],
        "nurture": "Don’t overthink the distance. Enjoy the connection when it’s strong, and trust that if it’s meant to last, it will always return.",
        "emoji": "☄️"
    },
    "moon": {
        "title": "Low-Maintenance Yet Meaningful Connections",
        "description": "This friend is like the moon—always there, even when you don’t see them. You might go weeks or months without talking, but when you reconnect, it feels like no time has passed. There’s no pressure, just a quiet, steady presence that provides comfort and familiarity.",
        "traits": ["Independent", "Secure", "Time-Proof"],
        "nurture": "Don’t stress about constant communication—just check in every once in a while. A simple message, meme, or 'thinking of you' moment keeps the connection strong. Trust that your bond doesn’t need daily tending to stay meaningful.",
        "emoji": "🌙"
    },
    "cluster": {
        "title": "Group-Based Friendships",
        "description": "Your friendship thrives within a group—it could be your college crew, gaming squad, work besties, or a long-standing friend circle. You’re connected not just by individual friendships but by a shared history, inside jokes, and a sense of belonging that makes every group hangout special.",
        "traits": ["Community-Oriented", "Interconnected", "Shared Experiences"],
        "nurture": "Keep the group dynamic alive! Plan occasional get-togethers, engage in group chats, and make sure everyone stays included. Individual friendships may fluctuate, but the collective bond can remain strong with effort.",
        "emoji": "🌌"
    },
    "satellite": {
        "title": "Comfortable Acquaintances",
        "description": "This is the friendly face you always enjoy seeing but don’t necessarily have a deep bond with. Maybe it’s a gym buddy, a neighbor you exchange small talk with, or a colleague you always joke around with at work. There’s mutual respect and kindness, but no need for constant interaction.",
        "traits": ["Casual", "Low-Key", "Respectful"],
        "nurture": "No pressure—just keep it light and easy. A quick smile, a friendly greeting, or a shared joke now and then maintains this simple but valuable connection.",
        "emoji": "🛰️"
    }
};

// Update the type definition to allow optional properties
export const combinations: Record<PlanetType, Partial<Record<PlanetType, { title: string; description: string; tip: string }>>> = {
    sun: {
            sun: {
                title: "A Radiant Bond ☀️☀️",
                description: "This friendship is built on mutual warmth, reliability, and an effortless connection. Both sides see each other as a constant presence, someone they can always count on for support and celebration. The challenge is making sure the relationship doesn’t become stagnant—there’s so much trust that it’s easy to take each other for granted.",
                tip: "Be intentional about deepening the friendship. Check in even when things are going well, and find ways to keep inspiring each other."
            },
            moon: {
                title: "Cosmic Balance ☀️🌙",
                description: "One side sees this as an energizing force, while the other provides quiet reflection and emotional depth. This creates a friendship that thrives on contrast—one brings excitement, the other brings perspective. Sometimes, differences in energy levels can cause friction, but when balanced, it results in a deep and harmonious connection.",
                tip: "Respect each other’s natural rhythms. Find activities that allow for both lively conversation and meaningful silence."
            },
            venus: {
                title: "Warm Embrace ☀️💖",
                description: "One person feels like a source of joy and motivation, while the other offers deep emotional support and care. This friendship flourishes when both sides appreciate what the other brings—enthusiasm meets empathy, adventure meets understanding. The challenge is ensuring that one side doesn’t feel emotionally drained while the other doesn’t feel unheard.",
                tip: "Check in on emotional balance. Celebrate the fun moments, but also make space for honest conversations."
            },
            mercury: {
                "title": "Dynamic Duo ☀️💫",
                "description": "This friendship thrives on fast-paced conversations, shared curiosity, and a natural ability to keep up with each other’s thoughts. One side might bring more stability, while the other keeps things fresh with new ideas. The risk? Burning out or getting distracted by too many directions.",
                "tip": "Make time for follow-through. Excitement is great, but deepening the friendship requires moments of consistency too."
            },
            mars: {
                "title": "Power Pair ☀️🔥",
                "description": "A friendship full of energy, movement, and shared ambition. Whether it’s pushing each other to be better, taking on challenges together, or simply hyping each other up, this bond is built on action. However, differences in approach can sometimes lead to frustration—one might want to slow down when the other is ready to charge ahead.",
                "tip": "Use your motivation for each other wisely. Support different approaches rather than competing for control."
            },
            jupiter: {
                "title": "Expansive Joy ☀️🌟",
                "description": "A friendship that feels limitless, full of big dreams and big laughter. One side might push for new experiences, while the other sees the potential in everything. The challenge is making sure these grand ideas turn into real moments rather than just endless plans.",
                "tip": "Take action on shared goals. Whether it’s a trip, a project, or a tradition, make sure your dreams don’t just stay as ideas."
            },
            saturn: {
                "title": "Timeless Bond ☀️⭐",
                "description": "One side brings steady warmth, while the other values stability and consistency. This friendship feels solid and unshakable, even if there are long gaps in communication. The challenge is that stability can sometimes feel like distance—one side might crave more excitement, while the other prefers to keep things predictable.",
                "tip": "Balance familiarity with new experiences. A friendship that lasts doesn’t have to stay the same forever."
            },
            uranus: {
                "title": "Unexpected Sparks ☀️🌀",
                "description": "A connection that thrives on unpredictability. One side sees the friendship as a steady presence, while the other keeps it fresh with surprises and unconventional ideas. This keeps things exciting but can sometimes feel ungrounded if expectations aren’t clear.",
                "tip": "Embrace spontaneity but set some anchors. Reliable check-ins or traditions can keep things from feeling too chaotic."
            },
            neptune: {
                "title": "Dream Weavers ☀️🌊",
                "description": "A friendship built on inspiration and imagination. One side brings clarity and direction, while the other sees limitless possibilities. This makes for a deeply creative bond, but it can sometimes be frustrating if one person is more practical while the other stays lost in ideas.",
                "tip": "Encourage dreams but bring them into reality. Support each other’s creative or personal projects in tangible ways."
            },
            pluto: {
                "title": "Eclipsed Connection ☀️🌑",
                "description": "A relationship that goes through phases of deep transformation. One side may see it as a bright, steady bond, while the other experiences intense personal changes. This can create moments of distance, but it also leads to growth when both sides remain patient.",
                "tip": "Be open about how the friendship is evolving. Not every shift means losing the connection—sometimes, it just means finding a new dynamic."
            },
            comet: {
                "title": "Cyclical Magic ☀️☄️",
                "description": "A friendship that comes and goes but always reignites with the same energy. One side sees it as a constant source of warmth, while the other appears in bursts of excitement before fading out again. This works well if both people accept the rhythm, but it can be frustrating if expectations aren’t aligned.",
                "tip": "If the pattern works for both of you, embrace it. If not, be honest about what you need."
            },
            "cluster": {
                "title": "Galactic Radiance ☀️🌌",
                "description": "A friendship that thrives within a larger social group. One side sees the relationship as deeply personal, while the other views it as part of a bigger collective. This can create a dynamic where one person wants more one-on-one time, while the other is comfortable keeping things in a shared space.",
                "tip": "If one-on-one time matters, make it a priority. Friendships within groups can still have depth when nurtured individually."
            },
            "earth": {
                "title": "Roots & Rays ☀️🌍",
                "description": "A friendship that balances passion with stability. One side keeps things exciting, while the other ensures that the connection stays grounded. This creates a relationship that feels both steady and full of possibility, though it can lead to occasional friction if perspectives on pace differ.",
                "tip": "Appreciate the different speeds. The balance between adventure and steadiness is what makes this work."
            },
            "satellite": {
                "title": "Orbiting Trust ☀️🛰️",
                "description": "One side sees the friendship as a guiding light, while the other values the perspective they bring from a distance. This means trust is strong, but communication might not always be frequent. If both sides understand that the bond remains strong regardless of time apart, this works well—but if expectations differ, it can create feelings of neglect.",
                "tip": "Make time to check in. Even long-distance or low-maintenance friendships benefit from small moments of connection."
            }
        },
    moon: {

        "moon": {
            "title": "Lunar Symphony 🌙🌙",
            "description": "This friendship flows effortlessly, built on mutual understanding and unspoken connection. Both sides naturally tune into each other’s emotions, making communication feel almost intuitive. However, the risk is that unspoken thoughts can turn into assumptions—it's important to voice feelings openly.",
            "tip": "Lean into your natural understanding, but remember to communicate openly to avoid unspoken tensions."
        },
        "venus": {
            "title": "Gentle Tides 🌙💖",
            "description": "One person nurtures with warmth, while the other brings calm and emotional depth. This friendship ebbs and flows naturally, full of care and subtle gestures of affection. The challenge is making sure emotions don’t become overwhelming or one-sided.",
            "tip": "Make time for heartfelt conversations and small gestures of care—they mean the world to both of you."
        },
        "mercury": {
            "title": "Night Whispers 🌙💫",
            "description": "One side thrives on deep emotions, while the other brings quick wit and lively conversation. This creates a friendship where meaningful exchanges happen in quiet moments, often filled with insightful thoughts and late-night musings.",
            "tip": "Encourage each other’s thoughts and creativity—your best ideas come in quiet moments together."
        },
        "mars": {
            "title": "Moonlit Adventures 🌙🔥",
            "description": "One person seeks excitement and action, while the other provides a thoughtful, steady presence. This friendship thrives on contrast—one pushes forward, while the other offers perspective and emotional grounding. The challenge is finding a pace that suits both sides.",
            "tip": "Balance action with reflection—Mars pushes you forward, while you provide perspective."
        },
        "jupiter": {
            "title": "Cosmic Growth 🌙🌟",
            "description": "One side expands possibilities and seeks adventure, while the other ensures emotional depth and meaning. Together, this creates a friendship that encourages both personal growth and shared experiences. However, too much idealism without grounding can make plans feel distant.",
            "tip": "Dream big together, but also ground each other's ideas in reality to make them happen."
        },
        "saturn": {
            "title": "Steady Reflection 🌙⭐",
            "description": "One side is deeply introspective, while the other provides structure and wisdom. This friendship is built on reliability and thoughtful counsel, offering a safe space for vulnerability and trust. The challenge is making sure it doesn’t become too rigid or overly serious.",
            "tip": "Lean on each other for wisdom and stability—this friendship thrives when built on mutual trust."
        },
        "uranus": {
            "title": "Eccentric Harmony 🌙🌀",
            "description": "One side values deep emotions, while the other thrives on unpredictability and change. This makes for a dynamic, exciting friendship where comfort meets the unexpected. The challenge is making sure the bond remains stable despite shifts in energy.",
            "tip": "Let each other be unique—your differences make your bond exciting and refreshing."
        },
        "neptune": {
            "title": "Mystic Connection 🌙🌊",
            "description": "This friendship feels like a dream—full of intuition, creativity, and a deep emotional bond. Conversations flow naturally, often without the need for many words. The challenge is staying connected to reality, as both sides may get lost in their own worlds.",
            "tip": "Ground your connection with real-world actions—fantasy is beautiful, but memories are made in reality."
        },
        "pluto": {
            "title": "Hidden Depths 🌙🌑",
            "description": "A friendship rooted in transformation, deep trust, and silent understanding. One side may experience intense personal changes, while the other provides quiet support. This bond is powerful but requires patience, as emotions can run deep and unspoken.",
            "tip": "Don't be afraid to share your emotions fully—Pluto understands the depths of your heart."
        },
        "comet": {
            "title": "Phases of Wonder 🌙☄️",
            "description": "Like the moon’s phases, this friendship experiences cycles of closeness and distance. Each reunion is filled with renewed energy and deep conversations. The challenge is trusting that distance doesn’t mean disconnection.",
            "tip": "Appreciate the natural ebb and flow—distance never weakens your bond, it just makes reunions sweeter."
        },
        "cluster": {
            "title": "Celestial Ties 🌙🌌",
            "description": "One side finds comfort in deep personal connections, while the other enjoys being part of a larger shared space. This creates a friendship that blends emotional intimacy with social connection, though one person may occasionally crave more one-on-one time.",
            "tip": "Help the group stay connected by creating deep, personal moments within the collective dynamic."
        },
        "earth": {
            "title": "Grounded Dreams 🌙🌍",
            "description": "One side provides emotional depth, while the other offers stability and practicality. This makes for a supportive, trusting friendship where feelings are understood and actions are reliable. The challenge is making sure emotions don’t become overwhelming for the more grounded side.",
            "tip": "Balance your emotions with action—Earth helps you stay present, while you remind them to feel deeply."
        },
        "satellite": {
            "title": "Orbiting Support 🌙🛰️",
            "description": "One side sees the friendship as a steady presence, while the other values the perspective they bring from a distance. This means trust is strong, but communication might not always be frequent. The key is knowing the bond remains intact even through space and time apart.",
            "tip": "Check in on each other even from a distance—your quiet support means more than words."
        }
    },
    venus: {
        "venus": {
            "title": "Kindred Hearts 💖💖",
            "description": "This friendship is full of love, warmth, and deep emotional connection. Both value closeness, affection, and mutual care, creating a bond that feels like home.",
            "tip": "Express your appreciation often—your bond thrives on love, support, and small acts of kindness."
        },
        "mercury": {
            "title": "Charming Chemistry 💖💫",
            "description": "One sees the friendship as deep and emotionally rich, while the other keeps things light, witty, and full of engaging conversation. The contrast keeps things interesting, balancing heart and mind.",
            "tip": "Keep the conversations flowing, but also make space for emotional depth—words are powerful, but feelings matter too."
        },
        "mars": {
            "title": "Magnetic Bond 💖🔥",
            "description": "One brings passion and adventure, the other brings warmth and emotional depth. Together, this friendship is an exciting push-and-pull, where different energies create a dynamic and fulfilling connection.",
            "tip": "Balance passion with patience—your energy together is electric, but remember to appreciate the quiet moments too."
        },
        "jupiter": {
            "title": "Joyful Expansion 💖🌟",
            "description": "One sees the friendship as an emotionally fulfilling connection, while the other thrives on shared experiences, big dreams, and an optimistic outlook. The mix of heart and adventure makes for an inspiring duo.",
            "tip": "Encourage each other's dreams, but also bring them to life through action—your optimism can move mountains."
        },
        "saturn": {
            "title": "Loyal Devotion 💖⭐",
            "description": "One values warmth and emotional connection, while the other sees the friendship as steady, reliable, and built on deep trust. What starts as different approaches turns into an unshakable bond.",
            "tip": "Cherish reliability, and remind each other to enjoy life’s beauty—you balance each other perfectly."
        },
        "uranus": {
            "title": "Unconventional Harmony 💖🌀",
            "description": "One appreciates deep emotional bonds, while the other thrives on unpredictability and freedom. This friendship is ever-changing and full of surprises, yet somehow, it always works.",
            "tip": "Embrace the unexpected—your best memories come from breaking routine and enjoying life's surprises together."
        },
        "neptune": {
            "title": "Ethereal Connection 💖🌊",
            "description": "One sees the friendship as a dreamy, deeply emotional bond, while the other experiences it as an intuitive, almost magical connection. Reality may blur between imagination and feeling, creating a beautifully unique dynamic.",
            "tip": "Ground your connection with real-world actions—your bond is beautiful, but make sure to nurture it outside of dreams too."
        },
        "pluto": {
            "title": "Intense Devotion 💖🌑",
            "description": "One experiences this as a deep and affectionate friendship, while the other sees it as a powerful and transformative connection. The result is an unbreakable bond that evolves over time.",
            "tip": "Allow each other space to evolve—your friendship is strong enough to withstand change and come out even deeper."
        },
        "comet": {
            "title": "Fleeting Romance 💖☄️",
            "description": "One sees this as a deeply affectionate bond, while the other experiences it as fast-moving and full of excitement. Whether the connection is long-term or brief, it leaves a lasting impression.",
            "tip": "Enjoy the intensity of your connection, but don't hold on too tightly—some friendships are meant to shine brightly, even if briefly."
        },
        "cluster": {
            "title": "Heart of the Group 💖🌌",
            "description": "One experiences this as a close and personal bond, while the other sees it as part of a larger friendship circle. The mix creates a dynamic where warmth and social energy blend effortlessly.",
            "tip": "Keep bringing people together, but don’t forget to nurture one-on-one connections too—your warmth is a gift to all."
        },
        "earth": {
            "title": "Rooted Affection 💖🌍",
            "description": "One sees the friendship as deeply emotional and affectionate, while the other values its stability and grounded nature. The blend of love and reliability makes this a lasting connection.",
            "tip": "Appreciate steady presence—it may not always be flashy, but it's the foundation of something truly lasting."
        },
        "satellite": {
            "title": "Distant Affection 💖🛰️",
            "description": "One experiences this as an affectionate, close-knit bond, while the other sees it as something that can withstand distance and time apart. No matter the space between, the connection remains strong.",
            "tip": "Check in often—distance doesn’t weaken your bond, but small gestures keep it strong over time."
        }
    },
    mercury: {
        "mercury": {
            "title": "Witty Sparring 💫💫",
            "description": "This friendship thrives on rapid-fire conversation, playful debates, and endless curiosity. Both enjoy quick thinking, clever humor, and keeping each other on their toes.",
            "tip": "Keep challenging each other's ideas—it keeps your connection fresh and intellectually stimulating."
        },
        "mars": {
            "title": "Energetic Exchange 💫🔥",
            "description": "One brings quick wit and clever ideas, while the other brings action and bold energy. This friendship moves fast, full of excitement, brainstorming, and spontaneous plans.",
            "tip": "Balance thinking with doing—Mars pushes you to act, while you help refine their plans."
        },
        "jupiter": {
            "title": "Big Ideas, Big Laughs 💫🌟",
            "description": "One enjoys fast-paced, thought-provoking conversations, while the other thrives on grand ideas and boundless optimism. Together, every discussion feels like an adventure waiting to happen.",
            "tip": "Dream big together, but also follow through—your ideas can become reality with the right action."
        },
        "saturn": {
            "title": "Grounded Wisdom 💫⭐",
            "description": "One enjoys quick thinking and adaptability, while the other values structure and long-term planning. This friendship balances spontaneity with steady wisdom, keeping both grounded yet open-minded.",
            "tip": "Learn from Saturn's stability while helping them stay open to new perspectives."
        },
        "uranus": {
            "title": "Revolutionary Minds 💫🌀",
            "description": "One loves clever problem-solving, while the other craves innovation and breaking the rules. This friendship is full of wild ideas, unexpected insights, and a shared love of shaking things up.",
            "tip": "Embrace the unconventional—your best ideas come from pushing past limits together."
        },
        "neptune": {
            "title": "Mystical Musings 💫🌊",
            "description": "One sees the world through logic and curiosity, while the other views it through dreams and intuition. Together, this friendship blends imagination with intellect, creating deep and fascinating conversations.",
            "tip": "Balance facts with feelings—your different approaches create a unique and enriching perspective."
        },
        "pluto": {
            "title": "Strategic Depth 💫🌑",
            "description": "One dissects ideas with sharp intellect, while the other seeks deep, hidden truths. This friendship is built on intense discussions, uncovering layers of meaning, and seeing beyond the surface.",
            "tip": "Use your insight wisely—together, you can navigate life's complexities like no one else."
        },
        "comet": {
            "title": "Spontaneous Sparks 💫☄️",
            "description": "One thrives on quick, clever interactions, while the other embraces fleeting but exhilarating moments. This friendship is full of witty exchanges, unexpected reunions, and bursts of excitement.",
            "tip": "Make an effort to stay in touch—your quick connection is incredible, but consistency will deepen it."
        },
        "cluster": {
            "title": "Social Catalyst 💫🌌",
            "description": "One enjoys sharp, engaging conversations, while the other thrives on group dynamics and lively discussions. Together, they bring energy, humor, and connection to any social setting.",
            "tip": "Use your gift of connection to foster deeper bonds within the group."
        },
        "earth": {
            "title": "Mind & Heart 💫🌍",
            "description": "One loves intellectual stimulation, while the other values emotional stability. This friendship blends quick-witted conversations with deep, grounding support, creating a well-rounded connection.",
            "tip": "Appreciate Earth's patience—it helps ground your fast-moving mind in meaningful ways."
        },
        "satellite": {
            "title": "Long-Distance Laughter 💫🛰️",
            "description": "One keeps the friendship alive with humor and quick check-ins, while the other ensures it remains steady despite time and distance. No matter how long between conversations, it always picks up seamlessly.",
            "tip": "Keep the connection alive with spontaneous check-ins—your friendship is too fun to fade."
        }
    },
    mars: {
        "mars": {
            "title": "Brothers in Arms 🔥🔥",
            "description": "This friendship is built on high-energy adventures, competition, and an unstoppable drive. Both thrive on challenges and pushing each other to be their best.",
            "tip": "Turn competition into motivation—support each other's ambitions rather than seeing them as rivalries."
        },
        "jupiter": {
            "title": "The Powerhouse Duo 🔥🌟",
            "description": "One brings bold action, the other brings grand vision. Together, this friendship is all about big dreams, risk-taking, and pushing boundaries in pursuit of something greater.",
            "tip": "Encourage each other's ambitions, but also stay grounded—big plans need solid execution."
        },
        "saturn": {
            "title": "Strength & Discipline 🔥⭐",
            "description": "One is full of fiery energy, always ready to act, while the other takes a patient, strategic approach. This friendship thrives when passion is tempered with wisdom.",
            "tip": "Listen to Saturn's advice—they help you pace your energy and avoid burnout."
        },
        "uranus": {
            "title": "Rebellious Allies 🔥🌀",
            "description": "One thrives on action and thrill-seeking, while the other craves innovation and shaking things up. Together, this friendship is about breaking rules, embracing change, and chasing the next big adventure.",
            "tip": "Channel your rebellious streak into creative innovation rather than reckless impulses."
        },
        "neptune": {
            "title": "Dreams & Drive 🔥🌊",
            "description": "One is all about action and intensity, while the other brings deep emotions and creativity. This friendship finds balance when passion fuels imagination, and dreams turn into reality.",
            "tip": "Let Neptune inspire your imagination while you help them turn visions into reality."
        },
        "pluto": {
            "title": "Unbreakable Bond 🔥🌑",
            "description": "One thrives on raw intensity, the other seeks deep emotional transformation. This friendship is built on trust, loyalty, and the ability to navigate life's biggest challenges together.",
            "tip": "Use your shared intensity for good—support each other through life's biggest transformations."
        },
        "comet": {
            "title": "Explosive Chemistry 🔥☄️",
            "description": "One brings relentless energy, the other thrives on fast-moving connections. This friendship is all about spontaneous adventures, unexpected reunions, and unforgettable moments.",
            "tip": "While spontaneity is great, a little consistency can turn this into a lifelong connection."
        },
        "cluster": {
            "title": "The Life of the Party 🔥🌌",
            "description": "One thrives on leading the charge with boldness and enthusiasm, while the other enjoys the collective energy of a group. Together, they keep the momentum going and the fun alive.",
            "tip": "Make sure to uplift others in the group—your energy can either inspire or overpower."
        },
        "earth": {
            "title": "Grounded Fire 🔥🌍",
            "description": "One is all about ambition and drive, while the other provides steady, grounding support. This friendship balances relentless pursuit with emotional care and stability.",
            "tip": "Appreciate Earth's patience—it keeps you from burning out in your relentless pursuits."
        },
        "satellite": {
            "title": "Distant Flames 🔥🛰️",
            "description": "One is always on the move, full of energy, while the other stays connected even across distance. This friendship may go through long gaps, but every reconnection feels just as strong.",
            "tip": "Check in regularly—a simple message can keep the fire alive across any distance."
        }
    },
    jupiter: {
        "jupiter": {
            "title": "Endless Horizons 🌟🌟",
            "description": "This friendship is fueled by adventure, big dreams, and a constant push to expand limits. Both thrive on grand ideas, philosophical discussions, and an ever-growing curiosity about life.",
            "tip": "Embrace each other's grand ideas, but remember to ground them with actionable steps."
        },
        "saturn": {
            "title": "Wisdom & Wonder 🌟⭐",
            "description": "One sees limitless possibilities, the other values careful planning. This friendship works when optimism meets structure, allowing dreams to take shape with practical execution.",
            "tip": "Saturn's realism isn't negativity—it's the structure that helps your dreams take flight."
        },
        "uranus": {
            "title": "Visionary Minds 🌟🌀",
            "description": "One dreams of boundless expansion, while the other thrives on breaking norms. Together, this friendship is a whirlwind of groundbreaking ideas, unconventional adventures, and bold new perspectives.",
            "tip": "Support each other's wild ideas—together, you can redefine what's possible."
        },
        "neptune": {
            "title": "Dream Weavers 🌟🌊",
            "description": "One is driven by endless curiosity, the other by deep imagination. This friendship thrives on creative exploration, idealistic conversations, and a shared belief in limitless possibilities.",
            "tip": "Balance inspiration with action—turn dreams into reality together."
        },
        "pluto": {
            "title": "Transformation & Growth 🌟🌑",
            "description": "One encourages expansion and positivity, while the other seeks depth and transformation. This friendship pushes both to evolve, bringing light to difficult changes and meaning to grand pursuits.",
            "tip": "Be patient with Pluto's intensity—your light helps them through their darkest moments."
        },
        "comet": {
            "title": "Epic Encounters 🌟☄️",
            "description": "One thrives on movement, the other embraces serendipity. This friendship is full of chance reunions, spontaneous trips, and experiences that feel like fate keeps bringing you together.",
            "tip": "Embrace the unpredictable nature of this bond—each reunion is an opportunity for new adventures."
        },
        "cluster": {
            "title": "The Ultimate Social Duo 🌟🌌",
            "description": "One shines as the charismatic leader, the other thrives in shared group energy. This friendship is about bringing people together, spreading optimism, and creating unforgettable moments.",
            "tip": "Use your influence to uplift others—your energy can inspire entire communities."
        },
        "earth": {
            "title": "Grounded Growth 🌟🌍",
            "description": "One seeks endless adventure, the other provides steady support. This friendship balances expansion with emotional security, making room for big dreams without losing touch with reality.",
            "tip": "Appreciate Earth's grounding nature—they help you stay connected to what truly matters."
        },
        "satellite": {
            "title": "Boundless Bonds 🌟🛰️",
            "description": "One sees distance as just another challenge, the other values deep, lasting connection. This friendship remains strong no matter the miles, always picking up right where it left off.",
            "tip": "Stay in touch—your encouragement means the world, even from afar."
        }
    },
    saturn: {
        "saturn": {
            "title": "Unbreakable Bond ⭐⭐",
            "description": "This friendship is built on loyalty, patience, and mutual respect. It may take time to form, but once it does, it's rock-solid—steady, enduring, and built to last.",
            "tip": "Consistency is key—nurture your friendship with steady effort and understanding."
        },
        "uranus": {
            "title": "Order & Chaos ⭐🌀",
            "description": "One values structure, the other thrives on disruption. This friendship is a constant push-and-pull between stability and excitement, challenging norms while reshaping perspectives.",
            "tip": "Embrace your differences—Saturn provides stability, while Uranus brings excitement."
        },
        "neptune": {
            "title": "Depth & Discipline ⭐🌊",
            "description": "One seeks stability, the other drifts through imagination. This friendship balances structure with creativity, where practical wisdom meets boundless dreams.",
            "tip": "Balance is everything—let Saturn provide structure without dimming Neptune's creativity."
        },
        "pluto": {
            "title": "Silent Strength ⭐🌑",
            "description": "One provides quiet endurance, the other undergoes deep transformation. This friendship is a pillar of unwavering support, offering patience and strength through intense changes.",
            "tip": "Patience is key—Pluto's changes take time, and your steadiness is invaluable."
        },
        "comet": {
            "title": "Fleeting Yet Familiar ⭐☄️",
            "description": "One moves at a slow, steady pace, while the other comes and goes in bursts. This friendship may not be constant, but every encounter leaves a lasting impact.",
            "tip": "Even if your paths cross sporadically, the wisdom you share stays forever."
        },
        "cluster": {
            "title": "The Backbone of the Group ⭐🌌",
            "description": "One provides structure, the other thrives in community. This friendship keeps the group stable, offering reliability and support when things get chaotic.",
            "tip": "Don't always play the responsible one—let yourself enjoy the fun, too."
        },
        "earth": {
            "title": "Steady Foundations ⭐🌍",
            "description": "One builds with discipline, the other nurtures with care. This friendship is deeply rooted in trust and responsibility, providing an unshakable sense of stability.",
            "tip": "Make time to appreciate each other—your friendship is a rare and valuable anchor."
        },
        "satellite": {
            "title": "Distant Yet Devoted ⭐🛰️",
            "description": "One remains steady, the other stays connected despite the distance. This friendship proves that space and time don’t weaken bonds when reliability is at its core.",
            "tip": "Check in once in a while—your steady presence provides comfort, even from afar."
        }
    },
    uranus: {
        "uranus": {
            "title": "Rebels at Heart 🌀🌀",
            "description": "This friendship thrives on surprises, innovation, and breaking the mold. Whether challenging traditions or chasing bold new ideas, nothing about this connection is ordinary.",
            "tip": "Embrace the chaos—your bond thrives on freedom and unpredictability."
        },
        "neptune": {
            "title": "Dreamers & Visionaries 🌀🌊",
            "description": "One brings radical ideas, the other adds deep imagination. This friendship is a fusion of creativity and idealism, where dreams and innovation fuel each other.",
            "tip": "Ground your ideas in reality—dream big, but also take action together."
        },
        "pluto": {
            "title": "Revolution & Transformation 🌀🌑",
            "description": "One thrives on disruption, the other on deep transformation. This friendship pushes boundaries, constantly evolving and reshaping both people involved.",
            "tip": "Change is your strength—help each other embrace the unknown fearlessly."
        },
        "comet": {
            "title": "Cosmic Sparks 🌀☄️",
            "description": "One moves unpredictably, the other thrives in spontaneity. This friendship is full of thrilling, unexpected reunions and unforgettable moments.",
            "tip": "Cherish the spontaneous moments—some friendships don't need routine to thrive."
        },
        "cluster": {
            "title": "The Eccentric Crew 🌀🌌",
            "description": "One shakes things up, the other brings fresh perspectives. This friendship keeps the group dynamic, always introducing new ideas and exciting changes.",
            "tip": "Stay connected—your presence keeps your group vibrant and full of new ideas."
        },
        "earth": {
            "title": "Groundbreaker Duo 🌀🌍",
            "description": "One challenges the status quo, the other provides steady support. This friendship finds balance between pushing boundaries and creating something lasting.",
            "tip": "Find balance—Uranus inspires, and Earth builds upon those inspirations."
        },
        "satellite": {
            "title": "Distant Signals 🌀🛰️",
            "description": "One thrives on discovery, the other values deep discussions. This friendship stays strong across any distance through thought-provoking ideas and shared curiosity.",
            "tip": "Keep the conversation going—your bond grows through thought-provoking talks."
        }
    },
    neptune: {
        "neptune": {
            "title": "Soul Connection 🌊🌊",
            "description": "This friendship is built on intuition, deep emotions, and shared dreams. Conversations flow effortlessly, and even in silence, there’s an unspoken understanding.",
            "tip": "Trust your bond—your connection runs deeper than the surface."
        },
        "pluto": {
            "title": "Mystical Depths 🌊🌑",
            "description": "One brings dreamy idealism, the other deep transformation. This friendship thrives on intense conversations, personal growth, and exploring life’s mysteries together.",
            "tip": "Embrace the depth—your friendship is a rare blend of mystery and meaning."
        },
        "comet": {
            "title": "Drifting Tides 🌊☄️",
            "description": "One flows with emotion, the other moves unpredictably. This friendship ebbs and flows, sometimes close, sometimes distant, yet always meaningful when paths cross again.",
            "tip": "Cherish the moments you share—every reconnection brings new wisdom."
        },
        "cluster": {
            "title": "Creative Collective 🌊🌌",
            "description": "One brings imagination, the other amplifies it. This friendship thrives in a group where artistic ideas, deep conversations, and dreamy perspectives inspire everyone.",
            "tip": "Keep sharing your dreams—your vision brings magic to the group."
        },
        "earth": {
            "title": "Dreamer & Doer 🌊🌍",
            "description": "One dreams big, the other makes things happen. This friendship finds harmony in turning ideals into reality, with Earth providing the grounding that Neptune needs.",
            "tip": "Ground your dreams—Earth helps make them real, so embrace their stability."
        },
        "satellite": {
            "title": "Long-Distance Daydreamers 🌊🛰️",
            "description": "One thrives on imagination, the other on emotional connection. This friendship stays strong across any distance, bonded by shared ideals and deep conversations.",
            "tip": "Keep the inspiration alive—small gestures maintain your emotional closeness."
        }
    },
    pluto: {
        "pluto": {
            "title": "Eternal Bond 🌑🌑",
            "description": "This friendship is built on transformation, resilience, and an unspoken understanding. No matter how much life changes, the connection endures, growing deeper with every challenge.",
            "tip": "Embrace the evolution—your friendship grows stronger through every phase."
        },
        "comet": {
            "title": "Fated Encounters 🌑☄️",
            "description": "One moves through life in cycles of deep change, the other appears unpredictably. This friendship isn't about constant presence but about the meaning behind each reconnection.",
            "tip": "Appreciate the mystery—each reunion carries a purpose."
        },
        "cluster": {
            "title": "Hidden Depths 🌑🌌",
            "description": "One prefers depth, the other thrives in the group. In a friendship circle, this dynamic brings quiet insight and unwavering loyalty, even if not always vocal.",
            "tip": "Don't be afraid to open up—your presence holds power in your circle."
        },
        "earth": {
            "title": "Old Roots 🌑🌍",
            "description": "One values transformation, the other stability. This friendship has deep history, proving that no matter how much things change, the foundation remains steady.",
            "tip": "Reconnect when you can—the foundation of your friendship is unbreakable."
        },
        "satellite": {
            "title": "Distant but Unforgotten 🌑🛰️",
            "description": "One moves through cycles of deep change, the other stays steady from afar. Even with time and space between you, every conversation feels like no time has passed.",
            "tip": "A simple message can reignite the bond—don't hesitate to reach out."
        }
    },
    comet: {
        "comet": {
            "title": "Celestial Wanderers ☄️☄️",
            "description": "This friendship moves in cycles—sometimes close, sometimes distant—but every time you reconnect, it feels just as magical as before. No matter how much time passes, the energy is always there.",
            "tip": "Enjoy the spontaneity—your bond doesn't need constant contact to be meaningful."
        },
        "cluster": {
            "title": "Orbiting Together ☄️🌌",
            "description": "One flows in and out, the other holds steady in a shared space. This friendship thrives in groups, where your paths keep crossing in unexpected yet familiar ways.",
            "tip": "Even in a group, make time for one-on-one moments to strengthen your bond."
        },
        "earth": {
            "title": "Gravity & Motion ☄️🌍",
            "description": "One is always on the move, the other provides steady ground. This friendship is a mix of adventure and reliability—one keeps things exciting, the other offers a place to return to.",
            "tip": "Balance spontaneity with consistency—check in, even when life pulls you away."
        },
        "satellite": {
            "title": "Cosmic Signals ☄️🛰️",
            "description": "One drifts through space, the other stays in orbit. This friendship works across time and distance, thriving on occasional yet meaningful check-ins.",
            "tip": "Leave small messages—random check-ins can mean the world to both of you."
        }
    },
    cluster: {
        "cluster": {
            "title": "Galactic Bond 🌌🌌",
            "description": "This friendship exists within a web of connections, where bonds thrive in a shared space. There's always movement, new faces, and shifting dynamics, but the core remains strong.",
            "tip": "Celebrate the group energy, but nurture individual friendships within it to deepen your bonds."
        },
        "earth": {
            "title": "Rooted in Community 🌌🌍",
            "description": "One thrives in the vastness of social circles, the other values deep, personal connections. This friendship balances expansive networks with meaningful one-on-one moments.",
            "tip": "Find time for meaningful conversations amidst the group dynamic to keep the bond strong."
        },
        "satellite": {
            "title": "Orbiting Together 🌌🛰️",
            "description": "One moves freely within the group, while the other stays on the edges, watching from a distance. This friendship remains connected even when one prefers a quieter presence.",
            "tip": "A simple reach-out can pull a drifting friend back into the heart of the group."
        }
    },
    earth: {
        "earth": {
            "title": "Unshakable Roots 🌍🌍",
            "description": "This friendship is built on trust, care, and deep understanding. Both people see the relationship as something stable and worth nurturing, making it a bond that withstands time and change.",
            "tip": "Consistency is key—check in regularly and show up for each other in both big and small ways."
        },
        "satellite": {
            "title": "Grounded Orbit 🌍🛰️",
            "description": "One remains steady and present, while the other moves in and out of reach. The connection stays strong because there is always a place to return to, even if life creates distance.",
            "tip": "Even if they drift, a gentle reminder of your presence can keep the bond strong."
        }
    },
    satellite: {
        "satellite": {
            "title": "Parallel Paths 🛰️🛰️",
            "description": "This friendship moves in and out of sync, always in motion but never truly lost. Both people understand the distance and trust that whenever they reconnect, it will feel as if no time has passed.",
            "tip": "Embrace the ebb and flow—sporadic check-ins and thoughtful messages will keep your bond alive."
        }
    }
    
};


// Function to get comparison description
export const getComparisonDescription = (myPlanet: PlanetType, friendPlanet: PlanetType): string => {
    // Example logic for generating a description based on the planets
    return `Comparing ${myPlanet} and ${friendPlanet}: ${planetData[myPlanet].title} vs ${planetData[friendPlanet].title}`;
};
