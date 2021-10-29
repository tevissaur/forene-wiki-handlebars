const { Article } = require('../models')

const articleData = [
    {
        title: 'The Geography of Forene',
        articleText: `The ancient continent of Forene is vast, and contains a large variety of creatures. At the center of the continent lies an immense volcano with mountain ranges jutting out from it like veins, carving out the kingdoms themselves. Three large peninsulas line the southern region. The Western Plains and the regions north of it, up until the Kragdrench Canal, consist of four human kingdoms, who have been warring and quarrelling with one another for as long as history. The Western Deserts are occupied by bestial creatures, such as Orcs, Goblins, Hobgoblins, Bugbears, and others. The two southern peninsulas are where the elves, and halflings live, a relatively peaceful region as the elves prefer a more diplomatic approach to conflicts. In the frigid and harsh northern regions live the Dwarves, master craftsmen and stubborn as the metal they bend.`,
        authorAlias: 'Historian #1',
        pageId: 1,

    },
    {
        title: 'Featured Article',
        articleText: "The swampy regions of Durglagh lie just beyond the Sea of Passwell, named after the city that connects Durglagh to Eleron. Durglagh has a bloody history. Switching between being a vassal of Eleron and The Torwoods, the people have had enough and just recently found a shaky peace and an unstable independence. The only reason their state exists is by the sanction of the Dragon's Moot, a meeting of the great nations on the continent. The Lord of these lands, [to be named] is a proud son of a bitch. Lots of secrets bubble underneath these bogs.",
        authorAlias: 'Historian #1',
        pageId: 1,
    },
    {
        title: "News of the Realm!",
        articleText: "Newly declared King of Durglagh, Wendrake Addington, to feast with the Lords of the Torwoods this Festifmar! In a stunning move for the newly crowned statesmen he opts for diplomacy, rather than rile up a ruckus; a peacekeeper, he is. The Emperor has sent his most trusted diplomat, Emile Brack, to aid the green King in his attempt to cool the tensions between him and his former sovereigns, The Lords of the Torwoods. The Treaty of Alderwick will initiate an indefinite truce between the Empire and the Nordlings. Godspeed to Emile, and as always, Godspeed to The Empire!",
        authorAlias: "Historian #1",
        pageId: 1
    },
    {
        title: 'Humans',
        articleText: "With their penchant for migration and conquest, humans are more physically diverse than other common races. There is no typical human. An individual can stand from 5 feet to a little over 6 feet tall and weigh from 125 to 250 pounds. Human skin shades range from nearly black to very pale, and hair colors from black to blond (curly, kinky, or straight);    males might sport facial hair that is sparse or thick. A lot of humans have a dash of nonhuman blood, revealing hints of elf, orc, or other lineages. Humans reach adulthood in their late teens and rarely live even a single century.",
        authorAlias: 'Historian #1',
        pageId: 2
    },
    {
        title: 'Elves',
        articleText: "With their unearthly grace and fine features, elves appear hauntingly beautiful to humans and members of many other races. They are slightly shorter than humans on average, ranging from well under 5 feet tall to just over 6 feet. They are more slender than humans, weighing only 100 to 145 pounds. Males and females are about the same height, and males are only marginally heavier than females. Elves’ coloration encompasses the normal human range and also includes skin in shades of copper, bronze, and almost bluish-white, hair of green or blue, and eyes like pools of liquid gold or silver. Elves have no facial and little body hair. They favor elegant clothing in bright colors, and they enjoy simple yet lovely jewelry.",
        authorAlias: 'Historian #1',
        pageId: 2
    },
    {
        title: 'Dwarves',
        articleText: "Bold and hardy, dwarves are known as skilled warriors, miners, and workers of stone and metal. Though they stand well under 5 feet tall, dwarves are so broad and compact that they can weigh as much as a human standing nearly two feet taller. Their courage and endurance are also easily a match for any of the larger folk. Dwarven skin ranges from deep brown to a paler hue tinged with red, but the most common shades are light brown or deep tan, like certain tones of earth. Their hair, worn long but in simple styles, is usually black, gray, or brown, though paler dwarves often have red hair. Male dwarves value their beards highly and groom them carefully.",
        authorAlias: 'Historian #1',
        pageId: 2
    },
    {
        title: 'Half-Orcs',
        articleText: "Half-orcs’ grayish pigmentation, sloping foreheads, jutting jaws, prominent teeth, and towering builds make their orcish heritage plain for all to see. Half-orcs stand between 5 and 7 feet tall and usually weigh between 180 and 250 pounds. Orcs regard battle scars as tokens of pride and ornamental scars as things of beauty. Other scars, though, mark an orc or half-orc as a former slave or a disgraced exile. Any half-orc who has lived among or near orcs has scars, whether they are marks of humiliation or of pride, recounting their past exploits and injuries. Such a half-orc living among humans might display these scars proudly or hide them in shame.",
        authorAlias: 'Historian #1',
        pageId: 2
    },
    {
        title: 'Gnomes',
        articleText: "A gnome’s energy and enthusiasm for living shines through every inch of his or her tiny body. Gnomes average slightly over 3 feet tall and weigh 40 to 45 pounds. Their tan or brown faces are usually adorned with broad smiles (beneath their prodigious noses), and their bright eyes shine with excitement. Their fair hair has a tendency to stick out in every direction, as if expressing the gnome’s insatiable interest in everything around. A gnome’s personality is writ large in his or her appearance. A male gnome’s beard, in contrast to his wild hair, is kept carefully trimmed but often styled into curious forks or neat points. A gnome’s clothing, though usually made in modest earth tones, is elaborately decorated with embroidery, embossing, or gleaming jewels.",
        authorAlias: 'Historian #1',
        pageId: 2
    },
    {
      title: "Halflings",
      articleText: "The diminutive halflings survive in a world full of larger creatures by avoiding notice or, barring that, avoiding offense. Standing about 3 feet tall, they appear relatively harmless and so have managed to survive for centuries in the shadow of empires and on the edges of wars and political strife. They are inclined to be stout, weighing between 40 and 45 pounds. Halflings’ skin ranges from tan to pale with a ruddy cast, and their hair is usually brown or sandy brown and wavy. They have brown or hazel eyes. Halfling men often sport long sideburns, but beards are rare among them and mustaches even more so. They like to wear simple, comfortable, and practical clothes, favoring bright colors. Halfling practicality extends beyond their clothing. They’re concerned with basic needs and simple pleasures and have little use for ostentation. Even the wealthiest of halflings keep their treasures locked in a cellar rather than on display for all to see. They have a knack for finding the most straightforward solution to a problem, and have little patience for dithering.",
      authorAlias: 'Historian #1',
      pageId: 2  
    }
]

const seedArticles = () => Article.bulkCreate(articleData)

module.exports = seedArticles