export default {
    lang: 'en-US',
    title: 'mkoelle.com',
    description:'The awesome coder MKoelle',

    themeConfig: {
        docsDir: 'docs',
        nav: [
            { text: 'Home', link: '/', activeMatch: '^/$|^/' },
            { text: 'Coding', link: '/coding/', activeMatch: '^/coding/' },
        ],
        sidebar: {
            '/coding/': getCodingSidebar()
        }
    }
}

function getCodingSidebar() {
    return [
        {
            text: 'Coding',
            link: '/coding/',
            children: [
                { text: 'Project Initialization', link: '/coding/getting-started/project-init' },
                { text: 'Visual Studio Code', link: '/coding/getting-started/vscode' },
                { text: 'Clean Code', link: '/coding/getting-started/clean-code' },
                { text: 'Logging', link: '/coding/getting-started/logging' },
            ]
        }
    ];
}
