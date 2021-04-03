import { list } from '@keystone-next/keystone/schema'
import { text, select } from '@keystone-next/fields'


export const Language = list({
    fields: {
        title: text({ isRequired: true })
        // level: select({
        //     options: [
        //         { label: 'Beginner', value: 'BEGINNER' },
        //         { label: 'Elementary', value: 'ELEMENTARY' },
        //         { label: 'Intermediate', value: 'INTERMEDIATE' },
        //         { label: 'Upper Intermediate', value: 'UPPER_INTERMEDIATE' },
        //         { label: 'Advanced', value: 'ADVANCED' },
        //     ],
        //     isRequired: true,
        //     ui: { displayMode: 'select' },
        // })
    }
})