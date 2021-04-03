import { list } from '@keystone-next/keystone/schema'
import { text } from '@keystone-next/fields'
// import { cloudinaryImage } from '@keystone-next/cloudinary';


// image: cloudinaryImage({
//     isRequired: true,
//     cloudinary: {
//         cloudName: process.env.CLOUDINARY_CLOUD_NAME,
//         apiKey: process.env.CLOUDINARY_KEY,
//         apiSecret: process.env.CLOUDINARY_SECRET,
//         folder: process.env.CLOUDINARY_API_FOLDER,
//     },
// }),


export const Service = list({
    fields: {
        title: text({ isRequired: true }),
        slug: text({ isRequired: true }),
        description: text({
            isRequired: true,
            ui: {
                displayMode: 'textarea'
            }
        }),
        image: text({ isRequired: true })
    }
})

