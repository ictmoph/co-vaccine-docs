module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around.',
    base: '/co-vaccine-docs',
    port: '4000',
    themeConfig: {
        nav: [
            { text: 'foo', link: '/foo/one' },
            { text: 'bar', link: '/bar/one' },
        ],
        sidebar: [
            {
                title: 'foo',
                collapsable: false,
                children: ['/foo/one']
            },
            {
                title: 'bar',
                collapsable: false,
                children: ['/bar/one']
            },
        ]
    }
}