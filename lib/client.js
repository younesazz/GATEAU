import sanityClient from '@sanity/client'
import ImageUrlBuilder from '@sanity/image-url'


export const client = sanityClient({
    projectId :  'lxpxp3eg',
    dataset : 'gateau',
    apiVersion : '2022-07-21',
    useCdn : false,
    token : process.env.NEXT_PUBLIC_SANITY_TOKEN,
    ignoreBrowserTokenWarning: true,
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

