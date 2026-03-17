import { defineField, defineType } from 'sanity'

export const job = defineType({
  name: 'job',
  title: 'Job Listing',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Job Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'department',
      title: 'Department',
      type: 'string',
      options: {
        list: [
          { title: 'Technology', value: 'technology' },
          { title: 'Creative', value: 'creative' },
          { title: 'Operations', value: 'operations' },
          { title: 'Sales', value: 'sales' },
        ],
      },
    }),
    defineField({
      name: 'type',
      title: 'Job Type',
      type: 'string',
      options: {
        list: [
          { title: 'Full Time', value: 'full-time' },
          { title: 'Part Time', value: 'part-time' },
          { title: 'Contract', value: 'contract' },
          { title: 'Internship', value: 'internship' },
        ],
      },
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      initialValue: 'Monrovia, Liberia',
    }),
    defineField({
      name: 'description',
      title: 'Job Description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'applyEmail',
      title: 'Apply Email',
      type: 'string',
    }),
    defineField({
      name: 'isActive',
      title: 'Active Listing',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'postedAt',
      title: 'Posted At',
      type: 'datetime',
    }),
  ],
})