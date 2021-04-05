import { list } from '@keystone-next/keystone/schema'
import { text, timestamp, relationship, select, integer } from '@keystone-next/fields'
import { Language } from './Language'


export const ServiceProvider = list({
    fields: {
        name: text({ isRequired: true }),
        surname: text({ isRequired: true }),
        birth_date: text({ isRequired: true }),

        work_places: relationship({
            ref: 'WorkPlace',
            many: true
        }),
        profile_img: text({ isRequired: true }),
        bio: text({
            isRequired: true,
            ui: {
                displayMode: 'textarea'
            }
        }),
        rating: integer({
            defaultValue: 0
        })
    }
})
