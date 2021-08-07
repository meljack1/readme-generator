const licenses = [
    {
        name: "Apache 2.0 License",
        badge: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    },
    {
        name: "Boost Software License 1.0",
        badge: '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
    },
    {
        name: "GNU GPL v3",
        badge: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    },
    {
        name: "GNU AGPL v3",
        badge: '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)',
    },
    {
        name: "MIT License",
        badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    },
    {
        name: "Mozilla Public License 2.0",
        badge: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
    },
    {
        name: "Unlicense",
        badge: '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)',
    },
]

// https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba

const licensesOptions = licenses.map(license => license.name)
const getBadge = (license) => {
    const match = licenses.find(object => object.name == license);
    return match.badge;
}

module.exports = {
    licenses,
    licensesOptions,
    getBadge
}