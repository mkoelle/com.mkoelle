export default {
    lang: 'en-US',
    title: 'mkoelle.com',
    description:'The awesome coder MKoelle',

    themeConfig: {
        docsDir: 'docs',
        nav: [
            { text: 'Home', link: '/', activeMatch: '^/$|^$' },
            { text: 'Coding', link: '/coding/', activeMatch: '^/coding/' },
            { text: 'Guides', link: '/guides/', activeMatch: '^/guides/' },
        ],
        sidebar: {
            '/coding/': getCodingSidebar(),
            '/guides/': getGuidesSidebar()
        }
    }
}

function getCodingSidebar() {
    return [
        { text: 'Project Initialization', link: '/coding/getting-started/project-init' },
        { text: "IDE's", children: [
            { text: 'Visual Studio Code', link: '/coding/getting-started/ide/vscode' },
            { text: 'AWS Cloud 9', link: '/coding/getting-started/ide/cloud9' },
        ]},
        { text: 'Clean Code', link: '/coding/getting-started/clean-code' },
        { text: 'Logging', link: '/coding/getting-started/logging' },
    ];
}

function getGuidesSidebar() {
    return [
        {
            text: 'Guides',
            link: '/guides/'
        }
    ];
}
