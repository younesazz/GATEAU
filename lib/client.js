import sanityClient from '@sanity/client'
import ImageUrlBuilder from '@sanity/image-url'


export const client = sanityClient({
    projectId :  'lxpxp3eg',
    dataset : 'gateau',
    apiVersion : '2022-07-21',
    useCdn : false,
    token : 'skqEe5b5n0NOuqaMMQZGx16CsTcwi7yWfXDUMUToe0A2SFf3cA144AoEhGvz0BNnXAMbTQzYzCv1DOqJuJhJxon84exht2NuOjRt6NhQ0JUyMFXBT5vBDgjovqysiFv39iKsJleGsqQ9tzN3PcIyEeFpPxUj7JHeKpm78j6sbrAed4ZP6B3x',
    ignoreBrowserTokenWarning: true,
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

