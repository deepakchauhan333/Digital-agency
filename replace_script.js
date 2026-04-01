const fs = require('fs');
const path = require('path');

const DIRECTORIES = ['src', 'public'];
const FILES_TO_CHECK = ['package.json', 'next.config.ts', 'tsconfig.json'];

function replaceInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // 1. Logo
    content = content.replace(/all%20india%20marketing%20solution%20\(1\)\.webp/g, 'DGP logo.webp');
    content = content.replace(/all india marketing solution \(1\)\.webp/g, 'DGP logo.webp');

    // 2. Email
    content = content.replace(/hello@allindiamarketingsolution\.com/g, 'allindiamarketingsolution1@gmail.com');
    
    // 3. Domain
    content = content.replace(/allindiamarketingsolution\.com/g, 'digitalgrowpedia.com');

    // 4. Exact text
    content = content.replace(/All India Marketing Solution/g, 'DigitalGrowPedia');
    content = content.replace(/All India Marketing/g, 'DigitalGrowPedia'); // Just in case it's broken up
    
    // 5. URL handles / text
    content = content.replace(/@allindiamarketingsolution/g, '@digitalgrowpedia');

    // 6. Address
    content = content.replace(/New Delhi, India/g, 'Ashish Nagar, Murlipura Scheme, Jaipur, Rajasthan, 302039');
    
    // 7. IndexNow
    if (content.includes('allindiamarketingsolution')) {
        // Only replace allindiamarketingsolution if it's not part of the favicon!
        // So we split by "allindiamarketingsolution" and selectively replace.
        const pieces = content.split('allindiamarketingsolution');
        let newContent = pieces[0];
        for (let i = 1; i < pieces.length; i++) {
            const nextPart = pieces[i];
            const prevPart = newContent.slice(-10); // look behind
            // If it's the favicon or old email, ignore
            if (nextPart.startsWith(' fevicon') || nextPart.startsWith('1@gmail.com') || nextPart.startsWith('.webp')) {
                newContent += 'allindiamarketingsolution' + nextPart;
            } else {
                newContent += 'digitalgrowpedia' + nextPart;
            }
        }
        content = newContent;
    }

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Updated:', filePath);
    }
}

function processDirectory(dirPath) {
    if(!fs.existsSync(dirPath)) return;
    const files = fs.readdirSync(dirPath);
    for (const file of files) {
        const fullPath = path.join(dirPath, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            if(file !== 'node_modules' && file !== '.next') {
                processDirectory(fullPath);
            }
        } else {
            // Only process common text files to avoid corrupting images
            if (/\.(ts|tsx|js|jsx|json|md|txt|css|html)$/.test(file)) {
                try {
                    replaceInFile(fullPath);
                } catch(e) {
                    console.error('Error in', fullPath);
                }
            }
        }
    }
}

for (const dir of DIRECTORIES) {
    processDirectory(dir);
}
for (const file of [...FILES_TO_CHECK]) {
    if(fs.existsSync(file)) {
        replaceInFile(file);
    }
}
