module.exports = {
    title: 'Co-Vaccine-Moph',
    description: 'Just playing around.',
    base: '/co-vaccine-docs/',
    port: '4000',
    themeConfig: {
        nav: [
            { text: 'คู่มือผู้ใช้งาน', link: '/user/login' },
            { text: 'ดาวน์โหลด', link: '/download/' },
            { text: 'foo', link: '/foo/one' },
            { text: 'bar', link: '/bar/one' },
        ],
        sidebar: [
            {
                title: 'คู่มือผู้ใช้งาน',
                collapsable: false,
                children: [
                    '/user/login',
                    '/user/user-menu',
                    '/user/prepare-work',
                    '/user/working'
                ]
            },
            '/download/',
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