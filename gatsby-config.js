module.exports = {
  siteMetadata: {
    title: `oit`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-layout",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    //{
    //   resolve: 'gatsby-source-contentful',
    //   options: {
    //     "accessToken": "LZ3CXfP8czz93PcghoHSMPWtJPJ6Y-N7Bz4aZlaiv54",
    //     "spaceId": "b7qunzg4xq2r"
    //   }
    // }
  ],
};
