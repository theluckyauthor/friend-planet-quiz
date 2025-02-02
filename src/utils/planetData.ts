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
        "title": "Family-Like Bonds",
        "description": "This friend is like the center of your universe—whether they are actual family or someone you've chosen as family, they're always there. Your connection is built on a deep foundation of trust, loyalty, and unconditional support. No matter what happens, you can count on each other.",
        "traits": ["Unbreakable", "Lifelong", "Deeply Caring"],
        "nurture": "Keep showing up for each other, even when life gets busy. Prioritize important moments—big or small—and express gratitude for their presence in your life.",
        "emoji": "☀️"
    },
    "mercury": {
        "title": "Rapid, Intense Recent Connections",
        "description": "This is a new and exciting connection—one that feels instant and effortless. Whether it's a short-lived spark or the beginning of something lasting, it's full of energy and curiosity, like a shooting star.",
        "traits": ["Fast-growing", "Spontaneous", "Engaging"],
        "nurture": "Keep exploring shared interests and see where it leads. Be open to deepening the connection, but don't force longevity—enjoy it for what it is.",
        "emoji": "☿️"
    },
    "venus": {
        "title": "Deep, One-on-One Nurturing Friendships",
        "description": "This is a deeply personal, one-on-one connection. You support and uplift each other, sharing thoughts, feelings, and dreams. It's an emotionally fulfilling bond built on trust and vulnerability.",
        "traits": ["Deep Trust", "Emotional Closeness", "Supportive"],
        "nurture": "Make space for open conversations and emotional check-ins. Celebrate each other's successes and be a safe space during struggles.",
        "emoji": "♀️"
    },
    "earth": {
        "title": "Constant, Dependable Best Friends",
        "description": "This is the center of your social world—your ride-or-die, the friend you always turn to. You talk regularly and share life's ups and downs, making this a solid, essential bond.",
        "traits": ["Loyal", "Deeply Involved", "Always Present"],
        "nurture": "Keep communication flowing and be present in each other's lives. Support each other's growth while maintaining your strong foundation.",
        "emoji": "🌍"
    },
    "mars": {
        "title": "Energetic, Adventurous, Action-Oriented Friendships",
        "description": "This friend is all about doing things together—whether it's sports, travel, challenges, or shared goals. Your bond thrives on action and adventure.",
        "traits": ["High-Energy", "Fun-Loving", "Daring"],
        "nurture": "Plan exciting outings, challenges, and activities together. Keep the energy alive by finding new experiences to share.",
        "emoji": "♂️"
    },
    "jupiter": {
        "title": "Friends Who Shine in Groups",
        "description": "This friendship thrives in crowds—whether it's group outings, events, or social gatherings. This friend makes your world feel bigger and more exciting.",
        "traits": ["Outgoing", "Fun", "Social Connector"],
        "nurture": "Keep inviting each other to group events and shared experiences. Make sure to check in outside of group settings too.",
        "emoji": "⚡"
    },
    "saturn": {
        "title": "Casual, Circumstantial, Work/School Friendships",
        "description": "This is a low-maintenance, circumstantial friendship—you may work, study, or share a space together. You get along well but don't go too deep.",
        "traits": ["Friendly", "Situational", "Easygoing"],
        "nurture": "Keep the friendly connection alive, and let it develop naturally. Appreciate them for the role they play in your life.",
        "emoji": "🪐"
    },
    "uranus": {
        "title": "Quirky, Unpredictable, Offbeat Friendships",
        "description": "This is a unique and unconventional friendship—you might have weird inside jokes, unexpected conversations, or a dynamic that doesn't fit into a box.",
        "traits": ["Unpredictable", "Eccentric", "Free-Spirited"],
        "nurture": "Embrace the weirdness and let the friendship evolve freely. Enjoy the unconventional nature of your bond.",
        "emoji": "⚛️"
    },
    "neptune": {
        "title": "Long-Distance, Digital Friendships",
        "description": "Even if you're far apart, this friendship remains strong through texts, calls, and online chats. No matter how much time passes, you always pick up where you left off.",
        "traits": ["Loyal", "Sentimental", "Tech-Driven"],
        "nurture": "Check in, even if it's just a quick message. Schedule occasional deep conversations to keep the bond alive.",
        "emoji": "🌊"
    },
    "pluto": {
        "title": "Friendships That Have Faded Over Time",
        "description": "You were once close, but life has taken you in different directions. Maybe you'll reconnect, or maybe this is a friendship you'll always remember fondly.",
        "traits": ["Nostalgic", "Distant", "Meaningful Past"],
        "nurture": "If you want to reconnect, take the first step. If not, appreciate what it was and cherish the good memories.",
        "emoji": "❄️"
    },
    "moon": {
        "title": "Low-Maintenance Yet Meaningful Connections",
        "description": "This is a steady, reliable friendship that doesn't need constant attention. Whether you talk every week or once a year, the connection never fades.",
        "traits": ["Independent", "Secure", "Time-Proof"],
        "nurture": "Just be there when it matters most. Reach out occasionally and trust that the friendship is strong.",
        "emoji": "🌙"
    },
    "comet": {
        "title": "Friendships That Come in Phases",
        "description": "This friendship has cycles—sometimes you're super close, other times you drift apart. But when you reconnect, it's like no time has passed.",
        "traits": ["Unpredictable", "High-Intensity Phases", "Deep Connection When Active"],
        "nurture": "Accept the ebb and flow, and enjoy the bursts of connection when they happen.",
        "emoji": "☄️"
    },
    "cluster": {
        "title": "Group-Based Friendships",
        "description": "Your friendship thrives in a group setting—you're part of a close-knit community, squad, or friend group where the connections are just as important as the individuals. This dynamic is built on shared experiences and collective memories.",
        "traits": ["Community-Oriented", "Interconnected", "Shared Experiences"],
        "nurture": "Keep the group energy alive by organizing meetups, staying engaged in group chats, and supporting each other as a collective.",
        "emoji": "🌌"
    },
    "satellite": {
        "title": "Comfortable Acquaintances",
        "description": "These are the friendly faces you see regularly with whom you share pleasant, light-hearted exchanges. There's no need for deep connection—both of you are content to keep things casual and uncomplicated. You appreciate each other's presence without the pressure of closeness.",
        "traits": ["Casual", "Low-Key", "Respectful"],
        "nurture": "Keep it simple—share greetings, occasional chats, and enjoy the effortless, uncomplicated connection.",
        "emoji": "🛰️"
    }
};

// Update the type definition to allow optional properties
export const combinations: Record<PlanetType, Partial<Record<PlanetType, { description: string; tip: string }>>> = {
    sun: {
        sun: {
            description: "A Radiant Bond ☀️☀️ - Two kindred souls whose friendship is like the sun—constant, warm, and illuminating every dark corner of life with trust and unwavering support.",
            tip: "Nurture your bond by celebrating each other's successes and providing unwavering encouragement during tough times."
        },
        moon: {
            description: "Cosmic Balance ☀️🌙 - The brilliance of the sun meets the reflective calm of the moon, creating a harmonious blend of energy and introspection.",
            tip: "Give space for deeper conversations and quiet moments; your balance thrives on both energy and reflection."
        },
        venus: {
            description: "Warm Embrace ☀️💖 - Sun's vibrant energy complements Venus's nurturing heart, forming a bond that not only lights up your world but also fosters growth, care, and emotional depth.",
            tip: "Express appreciation for the kindness and emotional depth that makes your bond so special."
        },
        mercury: {
            description: "Dynamic Duo ☀️💫 - The radiant energy of the sun paired with Mercury's quick wit sparks lively, engaging conversations that keep your friendship fresh and ever-evolving.",
            tip: "Keep challenging each other with new ideas and spontaneous adventures to keep the excitement alive."
        },
        mars: {
            description: "Power Pair ☀️🔥 - The unstoppable drive of Mars fuels the sun's brilliant light, resulting in a high-energy, action-packed friendship that motivates and inspires both of you.",
            tip: "Channel your shared energy into fun projects, workouts, or adventures to keep your momentum strong."
        },
        jupiter: {
            description: "Expansive Joy ☀️🌟 - With the sun's warmth and Jupiter's expansive optimism, your friendship blossoms into a universe of shared opportunities, growth, and boundless possibilities.",
            tip: "Dream big together—plan trips, projects, or learning experiences that expand both your horizons."
        },
        saturn: {
            description: "Timeless Bond ☀️⭐ - Sun's constant radiance combined with Saturn's enduring stability creates a friendship that stands the test of time—a steadfast light in both your lives.",
            tip: "Balance fun with responsibility; appreciate Saturn's wisdom while offering warmth in return."
        },
        uranus: {
            description: "Unexpected Sparks ☀️🌀 - The sun's steady brightness meets Uranus's unpredictable energy, leading to a friendship full of exciting surprises and unconventional ideas.",
            tip: "Embrace the unexpected and support each other's quirks—your best moments come from spontaneity."
        },
        neptune: {
            description: "Dream Weavers ☀️🌊 - Sun's clarity pairs with Neptune's imagination, creating a friendship built on inspiration, creativity, and a shared sense of wonder.",
            tip: "Encourage each other's dreams and creative pursuits; remind Neptune to stay grounded when needed."
        },
        pluto: {
            description: "Eclipsed Connection ☀️🌑 - A friendship of deep transformation, where Pluto's intensity and the sun's light help each other grow through life's major changes.",
            tip: "Stay patient during emotional shifts; your bond thrives when built on trust and mutual evolution."
        },
        comet: {
            description: "Cyclical Magic ☀️☄️ - The steady glow of the sun is enlivened by Comet's unpredictable brilliance, bringing delightful bursts of reconnection that keep your friendship sparkling.",
            tip: "Accept the ebb and flow—your friendship may have gaps, but every reunion is just as bright."
        },
        cluster: {
            description: "Galactic Radiance ☀️🌌 - The sun's energy fuels a whole cluster of connections, making you the social center that keeps your shared friendships shining brightly.",
            tip: "Use your warmth to bring people together, but make sure to nurture one-on-one connections too."
        },
        earth: {
            description: "Roots & Rays ☀️🌍 - Earth's grounding presence balances the sun's passionate energy, making this a friendship of steady support and shared growth.",
            tip: "Help each other stay balanced—Earth reminds you to slow down, and you remind them to dream big."
        },
        satellite: {
            description: "Orbiting Trust ☀️🛰️ - The sun's steady warmth provides guidance, while the satellite offers perspective from a unique vantage point, creating a friendship that orbits around trust and reliability.",
            tip: "Value each other's differing viewpoints—your friendship thrives when you acknowledge each other's strengths."
        }
    },
    moon: {
        sun: {
            description: "Cosmic Balance ☀️🌙 - The brilliance of the sun meets the reflective calm of the moon, creating a harmonious blend of energy and introspection.",
            tip: "Give space for deeper conversations and quiet moments; your balance thrives on both energy and reflection."
        },
        moon: {
            description: "Lunar Symphony 🌙🌙 - Two souls in quiet harmony, your friendship is like a gentle nocturne—a deep, intuitive connection where unspoken understanding flows effortlessly.",
            tip: "Lean into your natural understanding, but remember to communicate openly to avoid unspoken tensions."
        },
        venus: {
            description: "Gentle Tides 🌙💖 - Moon's serene, reflective nature mingles with Venus's warm tenderness, creating a soothing bond that ebbs and flows with a natural, nurturing rhythm.",
            tip: "Make time for heartfelt conversations and small gestures of care—they mean the world to both of you."
        },
        mercury: {
            description: "Night Whispers 🌙💫 - The soft glow of the moon and the swift insights of Mercury come together in a friendship marked by subtle communication and heartfelt exchanges.",
            tip: "Encourage each other's thoughts and creativity—your best ideas come in quiet moments together."
        },
        mars: {
            description: "Moonlit Adventures 🌙🔥 - The calm of the moon inspires bold ventures with Mars's fiery energy, leading to moments of quiet excitement and meaningful, shared explorations.",
            tip: "Balance action with reflection—Mars pushes you forward, while you provide perspective."
        },
        jupiter: {
            description: "Cosmic Growth 🌙🌟 - Moon's introspection coupled with Jupiter's expansive vision nurtures a friendship that encourages personal evolution and the blossoming of shared dreams.",
            tip: "Dream big together, but also ground each other's ideas in reality to make them happen."
        },
        saturn: {
            description: "Steady Reflection 🌙⭐ - The contemplative nature of the moon, balanced by Saturn's grounding presence, creates a reliable, reflective bond that offers comfort and wise counsel.",
            tip: "Lean on each other for wisdom and stability—this friendship thrives when built on mutual trust."
        },
        uranus: {
            description: "Eccentric Harmony 🌙🌀 - The moon's deep emotional tides mix with Uranus's unexpected energy, forming a friendship that is both comforting and delightfully unpredictable.",
            tip: "Let each other be unique—your differences make your bond exciting and refreshing."
        },
        neptune: {
            description: "Mystic Connection 🌙🌊 - A dreamlike friendship where emotions and intuition intertwine, making every conversation feel like an unspoken understanding of each other's soul.",
            tip: "Ground your connection with real-world actions—fantasy is beautiful, but memories are made in reality."
        },
        pluto: {
            description: "Hidden Depths 🌙🌑 - A powerful friendship rooted in deep emotions, transformations, and silent understanding, where trust is built over time through life's phases.",
            tip: "Don't be afraid to share your emotions fully—Pluto understands the depths of your heart."
        },
        comet: {
            description: "Phases of Wonder 🌙☄️ - Like the ever-changing phases of the moon, your friendship experiences cycles of intensity and calm, each reunion filled with renewed awe and connection.",
            tip: "Appreciate the natural ebb and flow—distance never weakens your bond, it just makes reunions sweeter."
        },
        cluster: {
            description: "Celestial Ties 🌙🌌 - Moon's quiet presence brings a gentle unity to a wider group, making this a friendship where emotions flow naturally within a shared space.",
            tip: "Help the group stay connected by creating deep, personal moments within the collective dynamic."
        },
        earth: {
            description: "Grounded Dreams 🌙🌍 - Earth's stability provides a safe haven for the moon's emotions, creating a friendship of deep trust, patience, and steady support.",
            tip: "Balance your emotions with action—Earth helps you stay present, while you remind them to feel deeply."
        },
        satellite: {
            description: "Orbiting Support 🌙🛰️ - A bond of quiet companionship where the moon's steady presence gives warmth, and the satellite provides thoughtful perspective from afar.",
            tip: "Check in on each other even from a distance—your quiet support means more than words."
        }
    },
    venus: {
        venus: {
            description: "Kindred Hearts 💖💖 - A friendship full of love, warmth, and deep emotional connection, where mutual care and understanding create a bond that feels like home.",
            tip: "Express your appreciation often—your bond thrives on love, support, and small acts of kindness."
        },
        mercury: {
            description: "Charming Chemistry 💖💫 - Venus's warmth meets Mercury's quick wit, creating a friendship full of engaging conversations, laughter, and intellectual connection.",
            tip: "Keep the conversations flowing, but also make space for emotional depth—words are powerful, but feelings matter too."
        },
        mars: {
            description: "Magnetic Bond 💖🔥 - Opposites attract in this passionate friendship—Venus's heart softens Mars's fire, while Mars pushes Venus toward adventure and excitement.",
            tip: "Balance passion with patience—your energy together is electric, but remember to appreciate the quiet moments too."
        },
        jupiter: {
            description: "Joyful Expansion 💖🌟 - A friendship that grows effortlessly, full of shared dreams, laughter, and big-picture thinking, making every moment feel full of possibility.",
            tip: "Encourage each other's dreams, but also bring them to life through action—your optimism can move mountains."
        },
        saturn: {
            description: "Loyal Devotion 💖⭐ - Venus's warmth softens Saturn's serious nature, creating a deep, lasting friendship built on trust, responsibility, and unwavering support.",
            tip: "Cherish Saturn's reliability, and remind them to enjoy life's beauty—you balance each other perfectly."
        },
        uranus: {
            description: "Unconventional Harmony 💖🌀 - Venus's affection meets Uranus's spontaneity, forming a friendship that's as surprising as it is heartwarming, always evolving in unique ways.",
            tip: "Embrace the unexpected—your best memories come from breaking routine and enjoying life's surprises together."
        },
        neptune: {
            description: "Ethereal Connection 💖🌊 - A dreamy, deeply emotional friendship where intuition, creativity, and shared imagination make every interaction feel magical.",
            tip: "Ground your connection with real-world actions—your bond is beautiful, but make sure to nurture it outside of dreams too."
        },
        pluto: {
            description: "Intense Devotion 💖🌑 - A powerful, transformative friendship where Venus's love meets Pluto's depth, creating an unbreakable, soul-level bond.",
            tip: "Allow each other space to evolve—your friendship is strong enough to withstand change and come out even deeper."
        },
        comet: {
            description: "Fleeting Romance 💖☄️ - A friendship of passionate, unforgettable moments, where Venus's affection meets Comet's unpredictable energy in a bond that may come and go but never fades.",
            tip: "Enjoy the intensity of your connection, but don't hold on too tightly—some friendships are meant to shine brightly, even if briefly."
        },
        cluster: {
            description: "Heart of the Group 💖🌌 - Venus's loving nature brings warmth and unity to a larger friendship circle, making everyone feel included and valued.",
            tip: "Keep bringing people together, but don't forget to nurture one-on-one connections too—your warmth is a gift to all."
        },
        earth: {
            description: "Rooted Affection 💖🌍 - A nurturing friendship where Venus's love blends with Earth's stability, creating a bond full of trust, comfort, and consistent support.",
            tip: "Appreciate Earth's steady presence—it may not always be flashy, but it's the foundation of something truly lasting."
        },
        satellite: {
            description: "Distant Affection 💖🛰️ - A friendship that may be separated by time or space, yet remains full of love and care, always returning to warmth and connection.",
            tip: "Check in often—distance doesn't weaken your bond, but small gestures keep it strong over time."
        }
    },
    mercury: {
        mercury: {
            description: "Witty Sparring 💫💫 - A friendship built on rapid-fire conversation, playful debates, and endless curiosity—two minds that thrive on learning and laughter.",
            tip: "Keep challenging each other's ideas—it keeps your connection fresh and intellectually stimulating."
        },
        mars: {
            description: "Energetic Exchange 💫🔥 - Mercury's quick wit and Mars's action-oriented energy create a dynamic, fast-paced friendship full of exciting ideas and bold execution.",
            tip: "Balance thinking with doing—Mars pushes you to act, while you help refine their plans."
        },
        jupiter: {
            description: "Big Ideas, Big Laughs 💫🌟 - A friendship fueled by expansive thinking and boundless optimism, where deep discussions turn into grand adventures.",
            tip: "Dream big together, but also follow through—your ideas can become reality with the right action."
        },
        saturn: {
            description: "Grounded Wisdom 💫⭐ - Mercury's agility meets Saturn's patience, creating a friendship that blends quick thinking with structured wisdom for the best of both worlds.",
            tip: "Learn from Saturn's stability while helping them stay open to new perspectives."
        },
        uranus: {
            description: "Revolutionary Minds 💫🌀 - Two free spirits who challenge the norm, bringing rebellious innovation and unexpected surprises into each other's lives.",
            tip: "Embrace the unconventional—your best ideas come from pushing past limits together."
        },
        neptune: {
            description: "Mystical Musings 💫🌊 - A friendship where Mercury's logic meets Neptune's dreamy intuition, leading to deep, philosophical conversations and imaginative storytelling.",
            tip: "Balance facts with feelings—your different approaches create a unique and enriching perspective."
        },
        pluto: {
            description: "Strategic Depth 💫🌑 - Mercury's intellect meets Pluto's intensity, forming a friendship built on deep, transformative discussions and a shared love of uncovering hidden truths.",
            tip: "Use your insight wisely—together, you can navigate life's complexities like no one else."
        },
        comet: {
            description: "Spontaneous Sparks 💫☄️ - A fast-moving, exhilarating friendship full of unexpected reunions, witty exchanges, and bursts of shared excitement.",
            tip: "Make an effort to stay in touch—your quick connection is incredible, but consistency will deepen it."
        },
        cluster: {
            description: "Social Catalyst 💫🌌 - Mercury's lively energy thrives in a group setting, bringing people together through shared jokes, intriguing discussions, and endless curiosity.",
            tip: "Use your gift of connection to foster deeper bonds within the group."
        },
        earth: {
            description: "Mind & Heart 💫🌍 - A balanced friendship where Mercury's logic blends with Earth's steady care, creating a relationship that's both intellectually stimulating and emotionally supportive.",
            tip: "Appreciate Earth's patience—it helps ground your fast-moving mind in meaningful ways."
        },
        satellite: {
            description: "Long-Distance Laughter 💫🛰️ - A friendship that may span distances but never loses its charm, always picking up right where it left off with ease and excitement.",
            tip: "Keep the connection alive with spontaneous check-ins—your friendship is too fun to fade."
        }
    },
    mars: {
        mars: {
            description: "Brothers in Arms 🔥🔥 - A high-energy, competitive, and adventure-filled friendship where passion and drive fuel an unstoppable duo.",
            tip: "Turn competition into motivation—support each other's ambitions rather than seeing them as rivalries."
        },
        jupiter: {
            description: "The Powerhouse Duo 🔥🌟 - Mars's boldness meets Jupiter's grand vision, creating a friendship that thrives on big dreams, risk-taking, and pushing boundaries together.",
            tip: "Encourage each other's ambitions, but also stay grounded—big plans need solid execution."
        },
        saturn: {
            description: "Strength & Discipline 🔥⭐ - Mars's fiery energy is tempered by Saturn's patience and wisdom, creating a balanced friendship where action meets strategy.",
            tip: "Listen to Saturn's advice—they help you pace your energy and avoid burnout."
        },
        uranus: {
            description: "Rebellious Allies 🔥🌀 - A thrilling, unpredictable friendship where both of you challenge the rules, embrace change, and seek the next great adventure.",
            tip: "Channel your rebellious streak into creative innovation rather than reckless impulses."
        },
        neptune: {
            description: "Dreams & Drive 🔥🌊 - Mars's intense energy meets Neptune's depth, forming a unique friendship where passion fuels creativity, and action brings dreams to life.",
            tip: "Let Neptune inspire your imagination while you help them turn visions into reality."
        },
        pluto: {
            description: "Unbreakable Bond 🔥🌑 - A deep, transformative friendship where Mars's raw intensity and Pluto's emotional depth create an unshakable, ride-or-die connection.",
            tip: "Use your shared intensity for good—support each other through life's biggest transformations."
        },
        comet: {
            description: "Explosive Chemistry 🔥☄️ - A friendship full of exciting bursts of energy, spontaneous adventures, and thrilling reunions that never fail to leave a lasting impact.",
            tip: "While spontaneity is great, a little consistency can turn this into a lifelong connection."
        },
        cluster: {
            description: "The Life of the Party 🔥🌌 - Mars's confidence shines in a group setting, leading the charge with boldness, enthusiasm, and a contagious sense of fun.",
            tip: "Make sure to uplift others in the group—your energy can either inspire or overpower."
        },
        earth: {
            description: "Grounded Fire 🔥🌍 - Mars's passion is kept steady by Earth's nurturing presence, creating a friendship that balances ambition with care and stability.",
            tip: "Appreciate Earth's patience—it keeps you from burning out in your relentless pursuits."
        },
        satellite: {
            description: "Distant Flames 🔥🛰️ - Even when apart, the intensity of this friendship never fades, with each reconnection reigniting the same spark as before.",
            tip: "Check in regularly—a simple message can keep the fire alive across any distance."
        }
    },
    jupiter: {
        jupiter: {
            description: "Endless Horizons 🌟🌟 - Two adventurous souls who thrive on big dreams, philosophical discussions, and pushing each other to expand their limits.",
            tip: "Embrace each other's grand ideas, but remember to ground them with actionable steps."
        },
        saturn: {
            description: "Wisdom & Wonder 🌟⭐ - Jupiter's optimism meets Saturn's discipline, creating a friendship that balances big dreams with practical execution.",
            tip: "Saturn's realism isn't negativity—it's the structure that helps your dreams take flight."
        },
        uranus: {
            description: "Visionary Minds 🌟🌀 - An electrifying friendship where innovation meets expansion, leading to groundbreaking ideas and out-of-the-box adventures.",
            tip: "Support each other's wild ideas—together, you can redefine what's possible."
        },
        neptune: {
            description: "Dream Weavers 🌟🌊 - Jupiter's boundless curiosity pairs with Neptune's creativity, forming a friendship that dives deep into imagination and shared ideals.",
            tip: "Balance inspiration with action—turn dreams into reality together."
        },
        pluto: {
            description: "Transformation & Growth 🌟🌑 - Jupiter's optimism encourages Pluto through deep personal changes, making this a friendship of profound evolution.",
            tip: "Be patient with Pluto's intensity—your light helps them through their darkest moments."
        },
        comet: {
            description: "Epic Encounters 🌟☄️ - A friendship full of grand reunions, spontaneous trips, and moments that feel like fate bringing you together again and again.",
            tip: "Embrace the unpredictable nature of this bond—each reunion is an opportunity for new adventures."
        },
        cluster: {
            description: "The Ultimate Social Duo 🌟🌌 - Jupiter's charisma shines in group dynamics, making this friendship one of leadership, connection, and shared joy.",
            tip: "Use your influence to uplift others—your energy can inspire entire communities."
        },
        earth: {
            description: "Grounded Growth 🌟🌍 - Jupiter's expansion meets Earth's steady presence, forming a friendship that encourages both adventure and emotional security.",
            tip: "Appreciate Earth's grounding nature—they help you stay connected to what truly matters."
        },
        satellite: {
            description: "Boundless Bonds 🌟🛰️ - A long-distance friendship where no amount of space can dim the light of your connection, always picking up where you left off.",
            tip: "Stay in touch—your encouragement means the world, even from afar."
        },
    },
    saturn: {
        saturn: {
            description: "Unbreakable Bond ⭐⭐ - A friendship built on loyalty, patience, and mutual respect—your connection may take time to form, but once it does, it's rock-solid.",
            tip: "Consistency is key—nurture your friendship with steady effort and understanding."
        },
        uranus: {
            description: "Order & Chaos ⭐🌀 - Saturn's structure meets Uranus's rebellion, creating a friendship that challenges norms and reshapes perspectives.",
            tip: "Embrace your differences—Saturn provides stability, while Uranus brings excitement."
        },
        neptune: {
            description: "Depth & Discipline ⭐🌊 - Saturn grounds Neptune's dreamy nature, offering practical wisdom while also being inspired by Neptune's boundless imagination.",
            tip: "Balance is everything—let Saturn provide structure without dimming Neptune's creativity."
        },
        pluto: {
            description: "Silent Strength ⭐🌑 - A deeply transformative bond where Saturn's endurance helps Pluto navigate intense personal changes with unwavering support.",
            tip: "Patience is key—Pluto's changes take time, and your steadiness is invaluable."
        },
        comet: {
            description: "Fleeting Yet Familiar ⭐☄️ - A rare but meaningful friendship that may come and go, yet always leaves a lasting impact.",
            tip: "Even if your paths cross sporadically, the wisdom you share stays forever."
        },
        cluster: {
            description: "The Backbone of the Group ⭐🌌 - Saturn's loyalty and structure keep the friendship circle stable, providing support when things get chaotic.",
            tip: "Don't always play the responsible one—let yourself enjoy the fun, too."
        },
        earth: {
            description: "Steady Foundations ⭐🌍 - Saturn and Earth share a grounded, practical friendship built on trust, responsibility, and deep mutual respect.",
            tip: "Make time to appreciate each other—your friendship is a rare and valuable anchor."
        },
        satellite: {
            description: "Distant Yet Devoted ⭐🛰️ - A friendship where space and time never weaken the bond—Saturn's reliability keeps the connection intact.",
            tip: "Check in once in a while—your steady presence provides comfort, even from afar."
        },
    },
    uranus: {
        uranus: {
            description: "Rebels at Heart 🌀🌀 - A friendship full of surprises, innovation, and unconventional ideas—together, you shake things up and challenge the norm.",
            tip: "Embrace the chaos—your bond thrives on freedom and unpredictability."
        },
        neptune: {
            description: "Dreamers & Visionaries 🌀🌊 - Uranus's bold ideas mix with Neptune's deep imagination, creating a friendship full of creative breakthroughs and spiritual exploration.",
            tip: "Ground your ideas in reality—dream big, but also take action together."
        },
        pluto: {
            description: "Revolution & Transformation 🌀🌑 - A deep, intense bond where Uranus's radical changes fuel Pluto's need for transformation, leading to profound personal growth.",
            tip: "Change is your strength—help each other embrace the unknown fearlessly."
        },
        comet: {
            description: "Cosmic Sparks 🌀☄️ - A high-energy friendship filled with unexpected reunions and wild, exhilarating experiences that leave a lasting impact.",
            tip: "Cherish the spontaneous moments—some friendships don't need routine to thrive."
        },
        cluster: {
            description: "The Eccentric Crew 🌀🌌 - Your shared uniqueness makes you the life of any group, bringing fresh perspectives and shaking things up in the best way possible.",
            tip: "Stay connected—your presence keeps your group dynamic and full of new ideas."
        },
        earth: {
            description: "Groundbreaker Duo 🌀🌍 - Uranus's innovation pushes Earth's steady nature to embrace change, while Earth helps Uranus bring wild ideas into reality.",
            tip: "Find balance—Uranus inspires, and Earth builds upon those inspirations."
        },
        satellite: {
            description: "Distant Signals 🌀🛰️ - A friendship built on intellectual curiosity, where deep discussions and shared discoveries keep you connected no matter the distance.",
            tip: "Keep the conversation going—your bond grows through thought-provoking talks."
        },
    },
    neptune: {
        neptune: {
            description: "Soul Connection 🌊🌊 - A friendship built on intuition, deep emotions, and shared dreams, where words are often unnecessary to understand each other.",
            tip: "Trust your bond—your connection runs deeper than the surface."
        },
        pluto: {
            description: "Mystical Depths 🌊🌑 - Neptune's dreamy nature merges with Pluto's transformative energy, creating a friendship full of deep talks and spiritual growth.",
            tip: "Embrace the depth—your friendship is a rare blend of mystery and meaning."
        },
        comet: {
            description: "Drifting Tides 🌊☄️ - Sometimes close, sometimes distant, but always meaningful—your friendship flows like the ocean, reconnecting when the time is right.",
            tip: "Cherish the moments you share—every reconnection brings new wisdom."
        },
        cluster: {
            description: "Creative Collective 🌊🌌 - A group dynamic where Neptune's imagination blends with others' energy, inspiring artistic expression, philosophy, and dreamy conversations.",
            tip: "Keep sharing your dreams—your vision brings magic to the group."
        },
        earth: {
            description: "Dreamer & Doer 🌊🌍 - Neptune's idealism meets Earth's practicality, turning dreams into reality while keeping the magic alive.",
            tip: "Ground your dreams—Earth helps make them real, so embrace their stability."
        },
        satellite: {
            description: "Long-Distance Daydreamers 🌊🛰️ - A connection that thrives on emotional depth and shared ideals, even if you're miles apart.",
            tip: "Keep the inspiration alive—small gestures maintain your emotional closeness."
        },
    },
    pluto: {
        pluto: {
            description: "Eternal Bond 🌑🌑 - A friendship rooted in transformation, resilience, and unspoken understanding, surviving time, distance, and life's changes.",
            tip: "Embrace the evolution—your friendship grows stronger through every phase."
        },
        comet: {
            description: "Fated Encounters 🌑☄️ - Your paths cross in unpredictable yet meaningful ways, each meeting bringing new perspectives and deep conversations.",
            tip: "Appreciate the mystery—each reunion carries a purpose."
        },
        cluster: {
            description: "Hidden Depths 🌑🌌 - In a group, you may be the quiet observer, but with the right people, your insights and loyalty shine through.",
            tip: "Don't be afraid to open up—your presence holds power in your circle."
        },
        earth: {
            description: "Old Roots 🌑🌍 - A friendship with deep history, where even if life takes you in different directions, the connection remains unshaken.",
            tip: "Reconnect when you can—the foundation of your friendship is unbreakable."
        },
        satellite: {
            description: "Distant but Unforgotten 🌑🛰️ - Time and space may separate you, but when you do talk, it feels like nothing has changed.",
            tip: "A simple message can reignite the bond—don't hesitate to reach out."
        },
    },
    comet: {
        comet: {
            description: "Celestial Wanderers ☄️☄️ - Two free spirits who drift in and out of each other's lives, but every encounter feels just as magical as the last.",
            tip: "Enjoy the spontaneity—your bond doesn't need constant contact to be meaningful."
        },
        cluster: {
            description: "Orbiting Together ☄️🌌 - You thrive in shared spaces, weaving in and out of the same social circles while keeping your unique spark alive.",
            tip: "Even in a group, make time for one-on-one moments to strengthen your bond."
        },
        earth: {
            description: "Gravity & Motion ☄️🌍 - Earth's stability gives Comet a place to return to, while Comet brings excitement and change to Earth's steady world.",
            tip: "Balance spontaneity with consistency—check in, even when life pulls you away."
        },
        satellite: {
            description: "Cosmic Signals ☄️🛰️ - You may drift far apart, but when you reconnect, it's like picking up an ongoing cosmic conversation.",
            tip: "Leave small messages—random check-ins can mean the world to both of you."
        },
    },
    cluster: {
        cluster: {
            description: "Galactic Bond 🌌🌌 - A vibrant web of connections where friendships thrive within a shared space, creating a dynamic and ever-expanding universe of camaraderie.",
            tip: "Celebrate the group energy, but nurture individual friendships within it to deepen your bonds."
        },
        earth: {
            description: "Rooted in Community 🌌🌍 - Earth's deep connection stabilizes Cluster's expansive nature, ensuring that even within a vast social circle, a strong personal bond remains.",
            tip: "Find time for meaningful one-on-one moments amidst the group dynamic."
        },
        satellite: {
            description: "Orbiting Together 🌌🛰️ - Satellite stays on the fringes of Cluster's bustling connections, always part of the network but sometimes watching from a distance.",
            tip: "A simple reach-out can pull a drifting friend back into the heart of the group."
        }
    },
    earth: {
        earth: {
            description: "Unshakable Roots 🌍🌍 - A bond built on trust, care, and deep understanding—Earth friends support each other through every season of life, always nurturing their connection.",
            tip: "Consistency is key—check in regularly and show up for each other in both big and small ways."
        },
        satellite: {
            description: "Grounded Orbit 🌍🛰️ - Earth's steady presence gives Satellite a place to return to, offering a comforting, dependable friendship even when distance or time creates gaps.",
            tip: "Even if they drift, a gentle reminder of your presence can keep the bond strong."
        }
    },
    satellite: {
        satellite: {
            description: "Parallel Paths 🛰️🛰️ - Two satellites in motion, your friendship flows in and out of sync, always orbiting but never truly lost. When you reconnect, it feels as if no time has passed.",
            tip: "Embrace the ebb and flow—sporadic check-ins and thoughtful messages will keep your bond alive."
        }
    }    
    
};


// Function to get comparison description
export const getComparisonDescription = (myPlanet: PlanetType, friendPlanet: PlanetType): string => {
    // Example logic for generating a description based on the planets
    return `Comparing ${myPlanet} and ${friendPlanet}: ${planetData[myPlanet].title} vs ${planetData[friendPlanet].title}`;
};
