module.exports = {
    title: 'Co-Vaccine-Moph V.0.1.0 Update 26/02/2021',
    description: '',
    base: '/co-vaccine-docs/',
    port: '4000',
    sorter: true,
    themeConfig: {
        nav: [
            { text: 'คู่มือผู้ใช้งาน', link: '/user/login' },
            { text: 'ดาวน์โหลด', link: '/download/' },
            // { text: 'foo', link: '/foo/one' },
            // { text: 'bar', link: '/bar/one' },
        ],
        sidebar: [
            {
                title: 'คู่มือผู้ใช้งาน',
                collapsable: true,
                children: [
                    '/user/login',
                    '/user/user-menu',
                    'user/admin-hosp-menu',
                    'user/admin-ssj-menu',
                    '/user/prepare-work',
                    '/user/working'
                ]
            },
            '/contact/',
            '/download/',
            {
                title: 'การติดตั้งเครื่องอ่านบัตรประจำตัวประชาชนแบบ Smartcard',
                collapsable: true,
                children: [
                    '/smartcard/install',
                    '/smartcard/troubleshooting'
                ]
            },
            '/request_permission/',
            // {
            //     title: 'foo',
            //     collapsable: false,
            //     children: ['/foo/one']
            // },
            // {
            //     title: 'bar',
            //     collapsable: false,
            //     children: ['/bar/one']
            // },
        ]
    }
}