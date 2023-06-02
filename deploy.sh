#!/bin/bash
#!/bin/bash
# graphs or staging
scp public/styles/fonts/* img:/var/www/html/$1/styles/fonts/
scp public/scripts/bundle.js img:/var/www/html/$1/scripts/bundle.js
scp public/styles/main.css img:/var/www/html/$1/styles/main.css

