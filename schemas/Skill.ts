import { list } from '@keystone-next/keystone/schema'
import { text, relationship, integer, select } from '@keystone-next/fields'


export const Skill = list({
    fields: {

        serviceProvider: relationship({
            ref: 'ServiceProvider'
        }),

        service: relationship({
            ref: 'Service'
        }),

        experience: integer({
            isRequired: true
        }),

        about_experience: text({
            isRequired: true,
            ui: {
                displayMode: 'textarea'
            }
        }),

        task_count: integer({
            isRequired: true,
            defaultValue: 0
        }),

        price_per_hour: integer({
            isRequired: true,
            defaultValue: 0
        }),

        price_currency: select({
            options: [
                { label: 'AZN', value: 'AZN' },
                { label: 'TRY', value: 'TRY' },
                { label: 'USD', value: 'USD' },
                { label: 'EURO', value: 'EURO' },
            ],
            isRequired: true,
            ui: { displayMode: 'select' }
        })
    }
})