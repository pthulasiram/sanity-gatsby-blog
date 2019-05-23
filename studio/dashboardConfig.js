export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ce5e7f13c7b049cca08ceee',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-uddycqky',
                  apiId: '8be6e7ac-03ea-4b39-9393-c8db45318179'
                },
                {
                  buildHookId: '5ce5e7f27ae8e0aae90e281b',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-tdv1bcas',
                  apiId: '411c139a-dafb-43b4-b602-11736487b2dc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pthulasiram/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-tdv1bcas.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
