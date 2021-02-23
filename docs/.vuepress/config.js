module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around.',
    base: '/co-vaccine-docs',
    port: '4000',
    themeConfig: {
        nav: [
            { text: 'คู่มือผู้ใช้งาน', link: '/user/login' },
            { text: 'foo', link: '/foo/one' },
            { text: 'bar', link: '/bar/one' },
        ],
        sidebar: [
            {
                title: 'คู่มือผู้ใช้งาน',
                collapsable: false,
                children: ['/user/login']
            },
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