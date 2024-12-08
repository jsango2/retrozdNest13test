import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      name: 'oldImage',
      title: 'Stara fotografija za overlay prikaz',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'newImage',
      title: 'Nova fotografija za overlay prikaz',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'caption',
      title: 'Caption overlay fotografija',
      type: 'string',
    }),
    defineField({
      name: 'urlString',
      title: 'Lokacija fotografa na Retro Zadar Mapi',
      type: 'string',
      description: 'Enter a URL as a plain string',
      validation: (Rule) =>
        Rule.regex(/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i, {
          name: 'url', // Error message for invalid format
          invert: false, // Ensure the rule applies to matching URLs
        }).error('Please enter a valid URL'),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().error('Main image is required'),
    }),
    defineField({
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [{type: 'reference', to: {type: 'tag'}}],
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    {
      name: 'literatura',
      title: 'Literatura',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'type',
              title: 'Type',
              type: 'string',
            },
            {
              name: 'link',
              title: 'External Link',
              type: 'url',
              description:
                'Link to an external website with more information about this literature type.',
            },
          ],
          preview: {
            select: {
              title: 'type',
              subtitle: 'link',
            },
          },
        },
      ],
    },
    defineField({
      name: 'kratkiOpis',
      title: 'Kratki opis',
      type: 'text',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
