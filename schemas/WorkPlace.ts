import { list } from '@keystone-next/keystone/schema'
import { select, text } from '@keystone-next/fields'


export const WorkPlace = list({
    fields: {
        name: text({ isRequired: true })
    }
})