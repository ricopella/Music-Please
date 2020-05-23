const activeEnv =
    process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"

console.log(`Using environment config: '${activeEnv}'`)

require("dotenv").config({
    path: `.env.${activeEnv}`,
})

module.exports = {
    siteMetadata: {
        title: `MUSIC PLEASE TECH. DEPT. 2020`,
        description: `   CREATIVE CURATION | TECHNOLOGICAL SOLUTIONS | DIGITAL DESIGN   `,
        author: `RICOPELLA   C/O  THE MUSIC PLEASE TECHNOLOGICAL`,
        lang: `en`,
        siteUrl: `https://themusicplease.com`,
        keywords: [
            `music please`,
            `dj`,
            `deejay`,
            `radio`,
            `recording`,
            `live performance`,
            `production`,
            `mixes`,
            `show`,
            "web development",
            "podcast",
            "live stream",
            "creative",
            "technology",
            "design",
        ],
        twitterUserName: `@themusicplease`,
        image: `/images/PLEASE.png`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
                exclude: `${__dirname}/src/images/svg`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `THE MUSIC PLEASE APP`,
                short_name: `MUSIC PLEASE`,
                start_url: `/`,
                background_color: `#000000`,
                display: "minimal-ui",
                icon: `src/images/favicon/favicon.ico`,
            },
        },
        `gatsby-plugin-emotion`,
        {
            resolve: "gatsby-plugin-react-svg",
            options: {
                rule: {
                    include: `${__dirname}/src/images/svg`,
                },
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: process.env.GOOGLE_ANALYTICS_ID,
            },
        },
        `gatsby-plugin-sitemap`,
        {
            resolve: "gatsby-plugin-robots-txt",
            options: {
                host: "https://www.themusicplease.com",
                sitemap: "https://www.themusicplease.com/sitemap.xml",
                env: {
                    development: {
                        policy: [{ userAgent: "*", disallow: ["/"] }],
                    },
                    production: {
                        policy: [{ userAgent: "*", allow: "/" }],
                    },
                },
            },
        },
        {
            resolve: `gatsby-source-cloudinary`,
            options: {
                cloudName: process.env.CLOUDINARY_CLOUD_NAME,
                apiKey: process.env.CLOUDINARY_API_KEY,
                apiSecret: process.env.CLOUDINARY_API_SECRET,
                resourceType: `image`,
            },
        },
        {
            resolve: "gatsby-plugin-typography",
            options: {
                pathToConfigModule: "src/utils/typography.ts",
            },
        },
        {
            resolve: `gatsby-source-shopify`,
            options: {
                shopName: `musicpleaseshop`,
                accessToken: process.env.SHOPIFY_ACCESS_TOKEN,
            },
        },
        `gatsby-plugin-typescript`,
        {
            resolve: `gatsby-plugin-alias-imports`,
            options: {
                alias: {
                    "@styled": "src/styled.ts",
                    "@containers": "src/containers",
                    "@components": "src/components",
                    "@hooks": "src/hooks",
                    "@images": "src/images",
                    "@styles": "src/styles",
                    "@utils": "src/utils",
                },
                extensions: ["js", "ts"],
            },
        },
    ],
}