export interface BlogFAQ {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  publishDate: string;
  readTime: string;
  heroImage: string;
  content: string;
  faqs: BlogFAQ[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-much-sun-does-a-prayer-plant-need",
    title: "How Much Sun Does a Prayer Plant Need?",
    metaTitle: "How Much Sun Does a Prayer Plant Need? | Light Guide 2026",
    metaDescription: "Learn exactly how much sunlight your prayer plant needs, the best placement indoors, signs of too much or too little light, and expert tips for optimal growth.",
    excerpt: "Discover the perfect lighting conditions for your prayer plant, from ideal placement to troubleshooting light-related issues.",
    publishDate: "2026-02-20",
    readTime: "8 min read",
    heroImage: "/images/green-prayer-plant.jpg",
    content: `
## Understanding Prayer Plant Light Requirements

Prayer plants (*Maranta leuconeura*) are native to the tropical rainforests of Brazil, where they grow on the forest floor beneath a dense canopy of taller trees. This natural habitat tells us everything we need to know about their light preferences: **bright, indirect light** is the sweet spot.

In the wild, prayer plants rarely receive direct sunlight. Instead, they thrive in the dappled, filtered light that passes through layers of foliage above them. Replicating these conditions in your home is the key to keeping your prayer plant healthy and vibrant.

## The Ideal Light Conditions

### Bright Indirect Light
The gold standard for prayer plants is **bright indirect light** — the kind of soft, ambient illumination you'd find a few feet away from a sunny window. This provides enough energy for photosynthesis and strong leaf coloration without the intensity that causes damage.

Aim for approximately **10,000 to 20,000 lux** of light intensity. In practical terms, this means a spot where you can comfortably read a book without straining your eyes, but where direct sun rays never touch the leaves.

### Best Window Placement
- **North-facing windows**: Excellent year-round. They provide consistent, gentle light without any risk of direct sun exposure.
- **East-facing windows**: Ideal placement. Morning sun is soft and won't scorch leaves, while providing ample brightness for the rest of the day.
- **West-facing windows**: Acceptable if the plant is set back 3–5 feet from the window or if sheer curtains filter the afternoon light.
- **South-facing windows**: Use with caution. Place the plant at least 5–8 feet from the window, or use sheer curtains to diffuse the intense light.

## Signs Your Prayer Plant Is Getting Too Much Light

When a prayer plant receives excessive light, you'll notice several telltale symptoms:

1. **Faded or bleached leaves** — The vibrant greens, reds, and purples lose their richness and appear washed out.
2. **Curling leaves** — Leaves curl inward as a defense mechanism to reduce the surface area exposed to light.
3. **Brown, crispy edges or tips** — Particularly on leaves facing the light source.
4. **Yellowing leaves** — Especially on the side closest to the window.
5. **Soil drying out rapidly** — Intense light accelerates evaporation, leading to chronic underwatering.

If you spot these signs, move your plant further from the window or add a sheer curtain between the plant and the light source.

## Signs Your Prayer Plant Isn't Getting Enough Light

Low-light conditions cause a different set of problems:

1. **Leggy, stretched growth** — The plant reaches toward the light source, producing elongated stems with sparse leaves.
2. **Loss of variegation** — The stunning leaf patterns fade as the plant produces more chlorophyll to compensate for low light.
3. **Slow or stalled growth** — Insufficient light means insufficient energy for new leaf production.
4. **Small, undersized leaves** — New growth appears noticeably smaller than existing foliage.
5. **Leaf drooping** — While prayer plants naturally fold their leaves at night, persistent drooping during the day suggests low energy.

## Seasonal Light Adjustments

Prayer plants benefit from seasonal awareness:

- **Spring and Summer**: Brighter ambient light is readily available. Keep the plant in its preferred spot but monitor for any direct sun exposure that increases as the sun's angle changes.
- **Autumn and Winter**: As daylight hours decrease and intensity drops, consider moving your plant closer to windows. Supplemental **grow lights** can be extremely helpful during these months — aim for 12–14 hours of artificial light daily using a full-spectrum LED grow light placed 12–18 inches above the plant.

## Can Prayer Plants Survive in Low Light?

Prayer plants can *survive* in low light, but they won't *thrive*. In consistently dim conditions, expect:
- Minimal new growth
- Fading leaf patterns
- A generally lackluster appearance

If your space doesn't offer much natural light, investing in a quality grow light is the best solution. Even a small desk lamp with a full-spectrum bulb can make a significant difference.

## Expert Tips for Optimal Lighting

1. **Rotate your plant** every 1–2 weeks to ensure even light distribution and prevent lopsided growth.
2. **Clean the leaves** regularly — dust blocks light absorption. Wipe gently with a damp cloth every 2 weeks.
3. **Use sheer curtains** to transform harsh direct light into ideal diffused light.
4. **Monitor light with an app** — free lux meter apps on your smartphone can help you find the perfect spot.
5. **Group plants together** — this creates a micro-humidity environment that complements proper lighting.
    `,
    faqs: [
      {
        question: "Can prayer plants grow in artificial light only?",
        answer: "Yes, prayer plants can grow entirely under artificial light. Use a full-spectrum LED grow light placed 12–18 inches above the plant for 12–14 hours daily. This mimics natural indirect sunlight and supports healthy growth and vibrant leaf coloration."
      },
      {
        question: "Will direct sunlight kill my prayer plant?",
        answer: "Direct sunlight won't immediately kill a prayer plant, but prolonged exposure causes leaf scorching, fading patterns, and brown crispy edges. If accidentally exposed, move the plant to indirect light — most plants recover within a few weeks with proper care."
      },
      {
        question: "How far from a window should a prayer plant be?",
        answer: "For south or west-facing windows, place your prayer plant 5–8 feet away or behind sheer curtains. For east-facing windows, 2–3 feet is sufficient. North-facing windows are gentle enough for the plant to sit directly on the windowsill."
      },
      {
        question: "Do prayer plants need darkness at night?",
        answer: "Yes, prayer plants benefit from a natural day-night cycle. They fold their leaves upward at night as part of their circadian rhythm (nyctinasty). Providing 8–10 hours of darkness helps maintain this natural behavior and overall plant health."
      },
    ],
  },
  {
    slug: "how-to-propagate-prayer-plant",
    title: "How to Propagate Prayer Plant: Complete Step-by-Step Guide",
    metaTitle: "How to Propagate Prayer Plant | Step-by-Step Guide 2026",
    metaDescription: "Master prayer plant propagation with our detailed guide. Learn stem cuttings, water propagation, division methods, and expert tips for success.",
    excerpt: "Learn the best methods to propagate your prayer plant, from stem cuttings to division, with detailed instructions and troubleshooting tips.",
    publishDate: "2026-02-18",
    readTime: "10 min read",
    heroImage: "/images/red-prayer-plant.jpg",
    content: `
## Why Propagate Your Prayer Plant?

Propagation is one of the most rewarding aspects of plant parenthood. With prayer plants, it's also surprisingly straightforward. Whether you want to expand your collection, share plants with friends, or rejuvenate an overgrown specimen, understanding propagation techniques will serve you well.

Prayer plants (*Maranta leuconeura*) can be propagated through two primary methods: **stem cuttings** and **division**. Both have high success rates when done correctly, and the best time to propagate is during the active growing season — **spring through early summer**.

## Method 1: Stem Cutting Propagation

Stem cuttings are the most popular propagation method for prayer plants because they're simple and effective.

### What You'll Need
- Sharp, sterilized scissors or pruning shears
- A healthy, mature prayer plant with multiple stems
- A clean glass jar or container for water propagation
- Fresh potting mix (if soil propagating)
- Small pot with drainage holes
- Optional: rooting hormone powder

### Step-by-Step Instructions

**Step 1: Identify the Right Stem**
Look for a healthy stem with at least 2–3 leaves and visible nodes. Nodes are the small bumps or joints on the stem where leaves emerge — this is where new roots will develop. Choose stems that are actively growing and free from disease or damage.

**Step 2: Make the Cut**
Using sterilized scissors, cut the stem approximately 1/4 inch below a node. The cutting should be 4–6 inches long with at least one node below where you'll submerge it in water or soil. Clean cuts heal faster and reduce the risk of infection.

**Step 3: Prepare the Cutting**
Remove any leaves from the lower portion of the cutting — any foliage that would be submerged in water or buried in soil should be removed to prevent rot. If using rooting hormone, dip the cut end lightly into the powder and tap off excess.

**Step 4a: Water Propagation**
Place the cutting in a clear glass jar filled with room-temperature filtered water. Ensure at least one node is submerged. Position the jar in a spot with bright, indirect light and change the water every 3–5 days to prevent bacterial growth. You should see roots beginning to emerge within **1–3 weeks**.

**Step 4b: Soil Propagation**
Alternatively, plant the cutting directly into moist, well-draining potting mix. Insert the stem about 1–2 inches deep, ensuring the node is buried. Keep the soil consistently moist (but not waterlogged) and maintain high humidity by covering with a clear plastic bag or humidity dome.

**Step 5: Transplanting (Water Method)**
Once roots are 2–3 inches long (typically 3–5 weeks), transplant the cutting into a small pot with well-draining potting mix. Water thoroughly and keep in a warm, humid environment as the plant adjusts to soil.

## Method 2: Division

Division is ideal for mature, bushy prayer plants that have outgrown their containers.

### Step-by-Step Instructions

**Step 1: Water Thoroughly**
Water your prayer plant generously 24 hours before dividing. This makes the roots more pliable and reduces transplant shock.

**Step 2: Remove from Pot**
Gently tip the pot and ease the plant out. If it's stuck, run a knife around the inside edge of the pot or squeeze a flexible container to loosen the root ball.

**Step 3: Separate the Sections**
Carefully untangle the root ball by hand, teasing apart natural divisions. Each section should have its own set of roots and at least 2–3 stems with leaves. For stubbornly tangled roots, use a clean, sharp knife to make clean cuts.

**Step 4: Plant the Divisions**
Plant each division in its own pot with fresh, well-draining potting mix. The pot should be only slightly larger than the root ball. Water thoroughly and place in a warm spot with bright, indirect light.

**Step 5: Aftercare**
Keep newly divided plants in higher humidity for 2–3 weeks as they establish. Avoid fertilizing for the first month. New growth should appear within 3–6 weeks, indicating successful establishment.

## Best Potting Mix for Prayer Plants

The ideal propagation mix should be:
- **Well-draining** to prevent root rot
- **Moisture-retentive** to keep roots hydrated
- **Slightly acidic** (pH 5.5–6.5)

A great recipe: 2 parts peat moss (or coco coir), 1 part perlite, 1 part coarse sand or orchid bark. This provides the drainage and moisture balance prayer plants love.

## Common Propagation Mistakes to Avoid

1. **Cutting below the node** — Always ensure at least one node is on the cutting; roots grow from nodes, not from random stem tissue.
2. **Using dull scissors** — Ragged cuts invite infection. Always sterilize with rubbing alcohol before cutting.
3. **Neglecting water changes** — Stagnant water breeds bacteria that can rot cuttings within days.
4. **Too much direct light** — Cuttings are vulnerable. Keep them in gentle, indirect light during rooting.
5. **Overwatering soil cuttings** — Moist, not soggy. Root rot is the number one killer of new propagations.
6. **Propagating in winter** — Growth hormones are less active in dormancy, dramatically reducing success rates.

## Timeline: What to Expect

| Stage | Water Method | Soil Method | Division |
|-------|-------------|------------|----------|
| Root emergence | 1–3 weeks | 2–4 weeks | Already rooted |
| Established roots | 3–5 weeks | 4–6 weeks | 2–3 weeks |
| New leaf growth | 4–8 weeks | 5–8 weeks | 3–6 weeks |
| Mature plant | 3–6 months | 3–6 months | 1–3 months |
    `,
    faqs: [
      {
        question: "What is the best time to propagate a prayer plant?",
        answer: "The best time is spring through early summer (March–June) when the plant is in its active growing phase. Growth hormones are most active during this period, resulting in faster root development and higher success rates."
      },
      {
        question: "Can I propagate a prayer plant from a single leaf?",
        answer: "No, a single leaf without a node will not produce roots. You need a stem cutting with at least one node — the point where leaves attach to the stem. Nodes contain the meristematic tissue necessary for root development."
      },
      {
        question: "How long does it take for prayer plant cuttings to root?",
        answer: "In water, roots typically appear within 1–3 weeks. In soil, expect 2–4 weeks. The roots should be 2–3 inches long before transplanting water-propagated cuttings to soil, which usually takes 3–5 weeks total."
      },
      {
        question: "Why is my prayer plant cutting turning mushy?",
        answer: "Mushy stems indicate rot, usually from bacteria in stagnant water or overly wet soil. Change propagation water every 3–5 days, ensure the container is clean, and remove any leaves that would be submerged. If rot has started, cut above the affected area and start fresh."
      },
    ],
  },
  {
    slug: "why-is-it-called-a-prayer-plant",
    title: "Why Is It Called a Prayer Plant? The Fascinating Science Behind the Name",
    metaTitle: "Why Is It Called a Prayer Plant? | The Science Explained",
    metaDescription: "Discover why the prayer plant got its name, the science of nyctinasty, how its leaves move, and the cultural significance of this fascinating houseplant.",
    excerpt: "Explore the captivating science behind why prayer plants fold their leaves at night and the cultural history that inspired their iconic name.",
    publishDate: "2026-02-15",
    readTime: "7 min read",
    heroImage: "/images/prayer-movement.jpg",
    content: `
## The Origin of the Name

The prayer plant earns its evocative name from a remarkable nightly ritual: as darkness falls, its leaves fold upward and press together, resembling a pair of hands clasped in prayer. When morning light returns, the leaves unfold and spread flat once more. This mesmerizing daily movement has captivated plant enthusiasts for centuries and given the *Maranta leuconeura* its beloved common name.

The comparison to praying hands isn't just poetic — it's strikingly accurate. If you watch a time-lapse of a prayer plant over 24 hours, the resemblance is unmistakable. The leaves rise steadily as evening approaches, reaching their most upright position around midnight, then gradually descend as dawn breaks.

## The Science: Nyctinasty Explained

The leaf movement in prayer plants is a phenomenon called **nyctinasty** — from the Greek words *nyktos* (night) and *nastos* (pressed close). It's a type of plant movement triggered by changes in light and governed by the plant's internal circadian clock.

### How It Works: The Pulvinus

The mechanism behind this movement lies in a specialized structure called the **pulvinus** — a swollen joint at the base of each leaf where it connects to the stem. The pulvinus contains motor cells that respond to changes in turgor pressure (the water pressure inside cells).

Here's the process:

1. **During the day**: Light signals cause potassium ions to flow into cells on the lower side of the pulvinus. Water follows by osmosis, making these cells swell. The upper cells simultaneously lose water and shrink. This imbalance pushes the leaf into its open, horizontal position.

2. **At night**: The process reverses. Potassium ions shift to the upper cells, water follows, and the upper cells swell while the lower cells shrink. This pulls the leaf upward into the "praying" position.

3. **The circadian clock**: Even in constant darkness, prayer plants will continue their leaf movements for several days, demonstrating that an internal biological clock — not just light response — drives the behavior.

### Phytochrome: The Light Sensor

Prayer plants detect light changes through **phytochrome** proteins — photoreceptors that sense the ratio of red to far-red light. During the day, sunlight is rich in red light, keeping phytochrome in its active form. At sunset, the ratio shifts toward far-red, triggering the signaling cascade that leads to leaf folding.

## Why Do Prayer Plants Move Their Leaves?

Scientists have proposed several theories for why this behavior evolved:

### 1. Water Conservation
By folding their leaves vertically at night, prayer plants may reduce the surface area exposed to potential water loss through transpiration. While stomata (leaf pores) are mostly closed at night, folded leaves may offer additional protection in humid tropical environments where nighttime condensation could pool on flat leaves.

### 2. Protection from Herbivores
Folded leaves present a smaller target for nocturnal herbivores. Some researchers suggest this movement may also reveal the plant's often colorful undersides, which could startle or deter insects.

### 3. Temperature Regulation
Folding leaves upward may help trap a thin layer of warm air close to the leaf surface, providing marginal insulation during cooler tropical nights.

### 4. Fungal Prevention
Perhaps the most compelling theory: by tilting leaves vertically, water droplets from nighttime condensation or rain slide off rather than pooling on flat leaf surfaces. Standing water on leaves promotes fungal growth — a significant threat in the humid tropics where prayer plants originate.

### 5. Light Optimization
Some researchers suggest that the movement helps optimize light capture. By opening fully during the day, leaves maximize photosynthesis. The nighttime folding may simply be the "resting state" of a mechanism primarily designed for daytime light tracking.

## Cultural and Historical Significance

### Religious and Spiritual Connections
The prayer plant's movements have held spiritual significance across cultures. In Christian tradition, the folding leaves are sometimes seen as a symbol of evening prayer and gratitude. In Brazilian folk culture, where the plant originates, *Maranta* species are associated with protection and peace.

### Botanical History
The genus *Maranta* was named in honor of **Bartolomeo Maranta**, a 16th-century Italian physician and botanist. The species name *leuconeura* means "white-veined," referring to the prominent leaf markings. European plant collectors first documented prayer plants in the 18th century, and they became popular houseplants by the Victorian era.

### Modern Popularity
Today, prayer plants are among the most beloved houseplants worldwide, prized not only for their stunning leaf patterns but for the daily drama of their movements. Social media has amplified their popularity, with time-lapse videos of their nightly "prayers" garnering millions of views.

## Other Plants That "Pray"

Prayer plants aren't the only species that exhibit nyctinasty:

- **Calathea** (now reclassified as *Goeppertia*) — Close relatives that also fold leaves at night
- **Oxalis (Shamrock plant)** — Folds both leaves and flowers at night
- **Mimosa pudica (Sensitive plant)** — Folds when touched (thigmonasty) and at night
- **Legumes (beans, peas)** — Many species fold leaves at night

However, prayer plants remain the most dramatic and visually striking practitioners of this botanical behavior.
    `,
    faqs: [
      {
        question: "Is it normal for prayer plant leaves to move during the day?",
        answer: "Yes, prayer plant leaves make subtle adjustments throughout the day, tracking light sources to optimize photosynthesis. The dramatic folding occurs at night, but gentle daytime movements are completely normal and indicate a healthy, responsive plant."
      },
      {
        question: "What does it mean if my prayer plant stops moving its leaves?",
        answer: "If your prayer plant stops its nightly folding, it may be stressed. Common causes include overwatering, underwatering, insufficient light, or extreme temperatures. Address environmental issues and the movement should resume within a few days as the plant recovers."
      },
      {
        question: "Can I watch my prayer plant move in real time?",
        answer: "The movement is too slow to observe in real time with the naked eye. However, you can set up a time-lapse camera or simply check your plant at different times of day to see the difference. The change from flat to folded typically occurs over 1–2 hours at dusk."
      },
      {
        question: "Do all Maranta varieties fold their leaves the same way?",
        answer: "All Maranta leuconeura varieties exhibit nyctinasty, but the degree and speed of movement can vary between cultivars. Some varieties, like the Red Maranta, tend to show more dramatic folding than others. Environmental conditions also affect the intensity of the movement."
      },
    ],
  },
  {
    slug: "why-is-my-prayer-plant-turning-yellow",
    title: "Why Is My Prayer Plant Turning Yellow? Causes & Solutions",
    metaTitle: "Why Is My Prayer Plant Turning Yellow? | 9 Causes & Fixes",
    metaDescription: "Diagnose why your prayer plant leaves are turning yellow. Learn the top 9 causes including overwatering, light issues, and nutrient deficiency, plus how to fix each one.",
    excerpt: "Identify the exact cause of yellowing leaves on your prayer plant and learn proven solutions to restore it to full health.",
    publishDate: "2026-02-12",
    readTime: "9 min read",
    heroImage: "/images/lemon-lime-prayer-plant.jpg",
    content: `
## Don't Panic — Yellowing Is Common

Yellow leaves on a prayer plant are one of the most common concerns among plant owners, but the good news is that it's almost always fixable once you identify the cause. Prayer plants (*Maranta leuconeura*) are expressive communicators — yellowing leaves are their way of telling you something needs to change.

Let's walk through the **9 most common causes** of yellowing prayer plant leaves, from most to least likely, along with targeted solutions for each.

## 1. Overwatering — The #1 Culprit

**What's happening**: Overwatering suffocates roots by filling air pockets in the soil with water. Without oxygen, roots begin to rot, losing their ability to absorb nutrients. The result? Yellow, mushy leaves.

**How to identify it**:
- Soil feels soggy or waterlogged days after watering
- A musty or sour smell coming from the soil
- Yellowing starts on lower, older leaves first
- Stems may feel soft or mushy at the base
- Possible visible mold on soil surface

**The fix**:
1. Stop watering immediately and let the top 1–2 inches of soil dry out
2. Check drainage — ensure your pot has drainage holes and isn't sitting in standing water
3. If root rot is suspected, unpot the plant, trim any brown/mushy roots with sterilized scissors, and repot in fresh, well-draining soil
4. Going forward, water only when the top inch of soil is dry

## 2. Underwatering

**What's happening**: Chronic underwatering causes cells to lose turgor pressure. The plant sacrifices older leaves to conserve water for new growth.

**How to identify it**:
- Soil is bone dry and pulling away from pot edges
- Leaves feel crispy or papery, not mushy
- Yellowing may be accompanied by brown, crispy edges
- Leaf curling is present

**The fix**:
1. Water thoroughly until it drains from the bottom
2. If soil is severely dried out, bottom-water by placing the pot in a tray of water for 20–30 minutes
3. Establish a consistent watering schedule — check every 3–4 days
4. Consider using a moisture meter for more accuracy

## 3. Too Much Direct Sunlight

**What's happening**: Direct sun bleaches chlorophyll and causes photodamage, leading to yellowing and eventual scorching.

**How to identify it**:
- Yellowing is most pronounced on leaves facing the light source
- Leaf patterns appear faded or washed out
- Brown, crispy patches may develop (sunburn)
- Overall leaf color looks bleached rather than vibrant

**The fix**:
1. Move the plant away from direct sunlight
2. Use sheer curtains to filter intense light
3. Relocate to a north or east-facing window
4. Damaged leaves won't recover their color, but new growth will be healthy

## 4. Water Quality Issues

**What's happening**: Prayer plants are notoriously sensitive to fluoride, chlorine, and mineral salts commonly found in tap water. These chemicals accumulate in the soil and damage leaf tissue.

**How to identify it**:
- Yellowing appears at leaf tips and edges first
- Brown tips accompany the yellowing
- White mineral deposits visible on soil surface
- Problem persists despite correct watering habits

**The fix**:
1. Switch to **filtered water, rainwater, or distilled water**
2. If using tap water, let it sit uncovered for 24 hours to allow chlorine to evaporate (note: this doesn't remove fluoride or chloramine)
3. Flush the soil occasionally by running generous amounts of filtered water through it
4. Repot with fresh soil if mineral buildup is severe

## 5. Nutrient Deficiency

**What's happening**: Prayer plants are moderate feeders. Without adequate nutrients — particularly nitrogen, iron, and magnesium — chlorophyll production decreases, causing yellowing.

**How to identify it**:
- **Nitrogen deficiency**: Older, lower leaves turn uniformly yellow first
- **Iron deficiency (chlorosis)**: New leaves turn yellow while veins remain green
- **Magnesium deficiency**: Yellowing between veins on older leaves
- Plant growth has slowed significantly

**The fix**:
1. Feed with a **balanced liquid fertilizer** (10-10-10 or 20-20-20) diluted to half strength
2. Fertilize every 2–4 weeks during the growing season (spring and summer)
3. For iron chlorosis, use a fertilizer containing chelated iron
4. Stop fertilizing in autumn and winter when growth slows

## 6. Low Humidity

**What's happening**: Prayer plants are tropical species that thrive in 50–60% humidity. Dry indoor air (common in heated or air-conditioned homes) stresses the plant, causing yellowing and browning.

**How to identify it**:
- Yellow leaves with brown, crispy edges
- Leaf curling alongside yellowing
- Indoor humidity consistently below 40%
- Symptoms worsen in winter when heating is on

**The fix**:
1. Use a **humidifier** near the plant — the most effective solution
2. Create a **pebble tray**: fill a tray with pebbles and water, place the pot on top (not touching the water)
3. Group tropical plants together to create a humid microclimate
4. Mist leaves — though this provides only temporary relief
5. Move to naturally humid rooms like bathrooms or kitchens (if they have adequate light)

## 7. Temperature Stress

**What's happening**: Prayer plants prefer temperatures between 65–80°F (18–27°C). Cold drafts, sudden temperature changes, or proximity to heating/cooling vents can cause yellowing.

**How to identify it**:
- Sudden onset of yellowing after a cold snap or environmental change
- Plant is located near a window, exterior door, or HVAC vent
- Yellowing appears on the side facing the draft source

**The fix**:
1. Move away from cold drafts, air conditioning vents, and radiators
2. Maintain consistent room temperature between 65–80°F
3. Never place near single-pane windows in winter
4. Avoid locations where temperatures fluctuate more than 10°F within a day

## 8. Root Bound Stress

**What's happening**: When roots have nowhere to grow, they circle the pot and become compacted. The plant can no longer absorb water and nutrients efficiently, leading to yellowing.

**How to identify it**:
- Roots growing out of drainage holes
- Plant dries out unusually quickly after watering
- Visible root mass when you remove the plant from its pot
- Stunted growth despite proper care

**The fix**:
1. Repot into a container **1–2 inches larger** in diameter
2. Gently loosen the root ball and trim any circling roots
3. Use fresh, well-draining potting mix
4. Water thoroughly after repotting and keep in a stable environment

## 9. Natural Aging

**What's happening**: Sometimes yellowing is simply part of the plant's natural lifecycle. As prayer plants grow, older leaves at the base yellow and drop to redirect energy to new growth.

**How to identify it**:
- Only 1–2 of the oldest, lowest leaves are yellowing
- The rest of the plant looks healthy and vibrant
- New growth is emerging normally
- No other symptoms present

**The fix**:
No action needed! Simply remove the yellow leaves with clean scissors to keep the plant looking tidy and prevent any potential fungal issues from decaying foliage.

## Prevention: Keeping Leaves Green and Healthy

The best approach is preventive care:
- Water with filtered water when the top inch of soil is dry
- Provide bright, indirect light
- Maintain 50–60% humidity
- Fertilize regularly during the growing season
- Keep temperatures stable between 65–80°F
- Repot every 1–2 years
- Inspect regularly for pests (spider mites, mealybugs, and scale can also cause yellowing)
    `,
    faqs: [
      {
        question: "Will yellow prayer plant leaves turn green again?",
        answer: "Unfortunately, once a prayer plant leaf has turned yellow, it won't revert to green. The chlorophyll has been broken down permanently. However, you can trim yellow leaves and focus on providing optimal conditions so that new growth emerges healthy and vibrant."
      },
      {
        question: "Should I cut off yellow leaves from my prayer plant?",
        answer: "Yes, it's best to remove fully yellow leaves with clean, sterilized scissors. They won't recover and may attract pests or fungal infections. Cutting them also redirects the plant's energy to new, healthy growth. Cut at the base of the leaf stem where it meets the main stem."
      },
      {
        question: "How can I tell if yellowing is from overwatering or underwatering?",
        answer: "Check the soil: if it's soggy and the leaves feel soft or mushy, it's overwatering. If the soil is dry and the leaves feel crispy or papery with curling, it's underwatering. The texture of the yellow leaves is the most reliable indicator between the two."
      },
      {
        question: "Can tap water cause yellow leaves on prayer plants?",
        answer: "Yes, prayer plants are very sensitive to chemicals in tap water, particularly fluoride and chlorine. These can accumulate in the soil and cause yellowing, especially at leaf tips and edges. Switch to filtered, distilled, or rainwater for best results."
      },
    ],
  },
  {
    slug: "what-is-a-prayer-plant",
    title: "What Is a Prayer Plant? The Ultimate Beginner's Guide",
    metaTitle: "What Is a Prayer Plant? | Complete Beginner's Guide 2026",
    metaDescription: "Learn everything about prayer plants: what they are, popular varieties, care basics, and why they're one of the most fascinating houseplants you can grow.",
    excerpt: "Everything you need to know about prayer plants — from their tropical origins and stunning varieties to basic care and why they've become a houseplant sensation.",
    publishDate: "2026-02-10",
    readTime: "9 min read",
    heroImage: "/images/hero-prayer-plant.jpg",
    content: `
## Introduction to Prayer Plants

The prayer plant is one of the most visually captivating houseplants you can grow. Known scientifically as *Maranta leuconeura*, this tropical beauty is celebrated for its strikingly patterned leaves and a remarkable nightly ritual: as darkness falls, its leaves fold upward like hands clasped in prayer, only to unfold again each morning.

Native to the **tropical rainforests of Brazil**, prayer plants belong to the family **Marantaceae**, which includes over 30 species. They grow as low-spreading ground cover on the forest floor, rarely exceeding 12 inches in height, making them perfectly suited for indoor cultivation.

## Key Characteristics

### Stunning Foliage
The hallmark of any prayer plant is its extraordinary leaves. Depending on the variety, you'll find:
- **Oval to oblong-shaped leaves** measuring 4–6 inches long
- **Intricate patterns** featuring spots, stripes, and herringbone markings
- **Color palettes** ranging from deep green to light green, with accents of red, pink, purple, silver, and cream
- **Velvety texture** on some varieties, with contrasting colors on the upper and lower leaf surfaces

### The "Prayer" Movement
The most fascinating feature is **nyctinasty** — the daily leaf movement driven by changes in light and the plant's circadian rhythm. During the day, leaves lie flat to maximize light absorption. At night, they fold upward, resembling hands in prayer. This movement is controlled by a specialized joint called the **pulvinus** at the base of each leaf.

### Growth Habit
Prayer plants are **low-growing, spreading plants** that naturally trail as they mature. They typically reach:
- **Height**: 6–12 inches (15–30 cm)
- **Spread**: 12–18 inches (30–45 cm)
- **Growth rate**: Moderate, producing several new leaves per month during the growing season

## Popular Prayer Plant Varieties

### 1. Red Prayer Plant (*Maranta leuconeura* var. *erythroneura*)
The most popular variety, featuring deep green leaves with prominent **red veins** that create a dramatic herringbone pattern. The leaf undersides are a rich burgundy-purple. This is the classic "prayer plant" most people recognize.

### 2. Green Prayer Plant (*Maranta leuconeura* var. *kerchoveana*)
Also called the "Rabbit Tracks" prayer plant because of the dark green or brown **oval spots** along the midrib that resemble rabbit footprints. The background color is a lighter, silvery green. This variety is considered the easiest to grow.

### 3. Lemon Lime Prayer Plant (*Maranta leuconeura* 'Lemon Lime')
A vibrant variety with **bright lime green and dark green** herringbone patterning. It lacks the red veins of the erythroneura variety, replaced instead with a striking yellow-green contrast that brightens any space.

### 4. Kim Prayer Plant (*Maranta leuconeura* 'Kim')
A rarer variety featuring **purple-spotted leaves** with a silvery-green background and white streaks. It's a collector's variety that commands attention with its unique coloration.

### 5. Silver Feather Prayer Plant
This variety showcases **silvery-white markings** along the leaf veins against a dark green background, creating a delicate, feathery appearance.

## Prayer Plant vs. Calathea: What's the Difference?

One of the most common points of confusion is the relationship between prayer plants and calatheas. Here's the clarification:

| Feature | Prayer Plant (Maranta) | Calathea (Goeppertia) |
|---------|----------------------|----------------------|
| **Leaf movement** | Very pronounced | Moderate to subtle |
| **Growth habit** | Low, trailing/spreading | Upright, bushy |
| **Leaf shape** | Oval, rounded | Varied (elongated, round, lance-shaped) |
| **Difficulty** | Moderate (more forgiving) | Moderate to difficult |
| **Size** | 6–12 inches tall | 12–36 inches tall |
| **Family** | Marantaceae | Marantaceae |

Both belong to the same family and share the "prayer plant" nickname due to their leaf movements, but true *Maranta* species are generally considered **easier to care for** than calatheas.

## Basic Care Overview

### Light
**Bright, indirect light** is ideal. Prayer plants evolved on the forest floor under dense canopy, so they thrive in filtered light. Avoid direct sunlight, which scorches their delicate leaves.

### Water
Keep soil **consistently moist but not waterlogged**. Water when the top inch of soil feels dry, typically every 1–2 weeks. Use **filtered or distilled water** — prayer plants are sensitive to chlorine and fluoride in tap water.

### Humidity
As tropical plants, prayer plants love humidity levels of **50–60%**. Use a humidifier, pebble tray, or group plants together to maintain adequate moisture in the air.

### Temperature
Maintain temperatures between **65–80°F (18–27°C)**. Avoid cold drafts, sudden temperature changes, and placement near heating or cooling vents.

### Soil
Use a **well-draining, slightly acidic potting mix** (pH 5.5–6.5). A blend of peat moss (or coco coir), perlite, and coarse sand works excellently.

### Fertilizer
Feed with a **balanced liquid fertilizer** diluted to half strength every 2–4 weeks during the growing season (spring through summer). No fertilizing in fall and winter.

## Why Prayer Plants Make Great Houseplants

### 1. Pet-Friendly
Prayer plants are **non-toxic to cats and dogs**, making them one of the safest decorative plants for pet owners. This alone makes them a standout choice in a world where many popular houseplants are toxic.

### 2. Air-Purifying Qualities
Like many tropical houseplants, prayer plants contribute to indoor air quality by absorbing carbon dioxide and releasing oxygen. While no houseplant is a substitute for proper ventilation, they add a beneficial presence to your indoor environment.

### 3. Living Art
With their intricate patterns and daily movement, prayer plants are essentially **living sculptures** that change throughout the day. No two leaves are exactly alike, and watching them "pray" each evening never gets old.

### 4. Compact Size
Their low-growing habit makes them perfect for **shelves, desks, tabletops, and terrariums**. They don't need a lot of space to make a big visual impact.

### 5. Conversation Starters
Few houseplants capture attention quite like a prayer plant. The leaf movement alone generates curiosity and conversation, making them perfect for offices, living rooms, and shared spaces.

## Where to Buy Prayer Plants

Prayer plants are widely available at:
- **Local nurseries and garden centers** — Best for inspecting plant health in person
- **Big-box hardware stores** — Often carry the common varieties at affordable prices
- **Online specialty shops** — Best selection, including rare varieties
- **Plant swaps and community groups** — Great for obtaining cuttings and less common cultivars

When purchasing, look for plants with:
- Vibrant, undamaged leaves
- No signs of pests (check undersides of leaves)
- Healthy root system (not root-bound)
- New growth emerging from the center

## Common Misconceptions

1. **"Prayer plants are hard to grow"** — They're actually moderate difficulty. With consistent watering and proper humidity, most people succeed.
2. **"They need constant misting"** — Misting provides temporary humidity at best. A humidifier or pebble tray is far more effective.
3. **"They only come in one variety"** — There are numerous cultivars with wildly different patterns and colors.
4. **"They don't flower"** — Prayer plants do produce small, delicate white or purple flowers, though they're subtle compared to the dramatic foliage.
    `,
    faqs: [
      {
        question: "Are prayer plants easy to care for?",
        answer: "Prayer plants are moderately easy to care for. They're more forgiving than their close relatives, calatheas, but do require consistent moisture, humidity above 50%, and indirect light. Beginners who maintain these three conditions will find them quite manageable."
      },
      {
        question: "How big do prayer plants get?",
        answer: "Prayer plants typically grow 6–12 inches tall and spread 12–18 inches wide. They're low-growing, trailing plants that stay compact, making them ideal for shelves, desks, and small spaces. They won't outgrow their location like many other houseplants."
      },
      {
        question: "Do prayer plants bloom?",
        answer: "Yes, prayer plants can produce small, delicate flowers — usually white or light purple — on thin stems above the foliage. However, indoor blooming is uncommon and the flowers are subtle. Most growers appreciate prayer plants primarily for their stunning foliage."
      },
      {
        question: "Are prayer plants toxic to cats and dogs?",
        answer: "No, prayer plants (Maranta leuconeura) are completely non-toxic to cats, dogs, and other household pets according to the ASPCA. This makes them one of the safest decorative houseplants for homes with animals."
      },
    ],
  },
];

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.slug === slug);
};
