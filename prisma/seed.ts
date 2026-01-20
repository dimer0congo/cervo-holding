import { PrismaClient, Status } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const categories = [
        {
            name: 'Investissement & Stratégie',
            slug: 'investissement-strategie',
            description: 'Analyses de marché, gestion d\'actifs et stratégies de croissance à long terme.',
        },
        {
            name: 'Innovation & Technologie',
            slug: 'innovation-technologie',
            description: 'Modernisation industrielle, actifs numériques et technologies de rupture.',
        },
        {
            name: 'Industrie & Opérations',
            slug: 'industrie-operations',
            description: 'Focus sur l\'excellence opérationnelle, la manufacture et la logistique.',
        },
        {
            name: 'Impact & ESG',
            slug: 'impact-esg',
            description: 'Investissement responsable, durabilité et citoyenneté d\'entreprise.',
        },
        {
            name: 'Actualités du Groupe',
            slug: 'actualites-groupe',
            description: 'Annonces officielles, événements et communiqués de presse de Cervo Holding.',
        },
        {
            name: 'Conseils & Leadership',
            slug: 'conseils-leadership',
            description: 'Management stratégique, gouvernance et visions de leadership.',
        },
    ]

    console.log('Start seeding categories...')

    const createdCategories: Record<string, string> = {}

    for (const cat of categories) {
        const category = await prisma.category.upsert({
            where: { slug: cat.slug },
            update: {},
            create: cat,
        })
        createdCategories[cat.slug] = category.id
        console.log(`Created or updated category: ${category.name}`)
    }

    console.log('Start seeding sample article...')

    const newsCategoryId = createdCategories['actualites-groupe']

    const articleContent = `
    <article>
        <p><strong>CERVO HOLDING LTD</strong> est une société spécialisée dans la facilitation des opérations d’import-export entre la République Démocratique du Congo et la Zambie. Créée en 2020, elle a pour objectif d’accompagner les entreprises et opérateurs économiques dans la gestion efficace, sécurisée et rapide de leurs échanges commerciaux transfrontaliers.</p>
        
        <h3>Notre Mission et Vision</h3>
        <p>La mission de <strong>CERVO HOLDING LTD</strong> est de simplifier les procédures d’importation et d’exportation, de réduire les délais et les coûts de transaction, de faciliter l’accès aux marchés congolais et faire la distribution et vente des produits divers tout en garantissant la conformité aux réglementations en vigueur en RDC et en Zambie.</p>
        <p>Notre vision est de devenir le partenaire de référence en facilitant l’accès aux marchés, en réduisant les barrières commerciales, en favorisant des échanges durables et en contribuant à un commerce transfrontalier fluide, sécurisé et conforme aux réglementations régionales.</p>
        
        <h3>Nos Valeurs Fondamentales</h3>
        <ul>
            <li><strong>Transparence</strong> : Clarté dans toutes nos opérations.</li>
            <li><strong>Fiabilité</strong> : Un partenaire sur lequel vous pouvez compter.</li>
            <li><strong>Rapidité</strong> : Optimisation des délais de traitement.</li>
            <li><strong>Conformité</strong> : Respect strict des réglementations en RDC et Zambie.</li>
        </ul>

        <h3>Activités Principales</h3>
        <ul>
            <li>Facilitation des opérations d’import-export RDC–Zambie</li>
            <li>Dédouanement et formalités douanières</li>
            <li>Transit et logistique transfrontalière</li>
            <li>Assistance documentaire (factures, certificats, licences)</li>
            <li>Conseil en commerce international</li>
        </ul>

        <h3>Zone d’Intervention</h3>
        <p>Nous opérons stratégiquement dans les zones clés du corridor RDC-Zambie :</p>
        <ul>
            <li><strong>RDC</strong> : Kasumbalesa, Sakanya, Kipushi, Lubumbashi et Kolwezi.</li>
            <li><strong>Zambie</strong> : Kitwe.</li>
        </ul>

        <h3>Pourquoi Choisir CERVO HOLDING LTD ?</h3>
        <p>Notre valeur ajoutée repose sur une maîtrise parfaite de la réglementation bilatérale, un réseau solide aux frontières, et un accompagnement personnalisé garantissant la réduction des coûts et la rapidité des procédures.</p>
    </article>
  `

    await prisma.article.upsert({
        where: { slug: 'presentation-cervo-holding-ltd' },
        update: {},
        create: {
            title: 'Présentation de CERVO HOLDING LTD : Votre Partenaire Import-Export',
            slug: 'presentation-cervo-holding-ltd',
            content: articleContent,
            excerpt: 'CERVO HOLDING LTD facilite vos opérations d’import-export entre la RDC et la Zambie depuis 2020. Découvrez notre mission, nos valeurs et nos services.',
            status: Status.PUBLISHED,
            categoryId: newsCategoryId,
            authorId: 'system-seed', // Global marker for seeded content
            publishedAt: new Date(),
        },
    })

    console.log('Created or updated sample article.')
    console.log('Seeding finished.')
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
