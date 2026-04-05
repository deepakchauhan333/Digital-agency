const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const htmlPath = path.join(__dirname, '../seo plan.html');
const outPath = path.join(__dirname, 'src/data/seo-pricing.ts');

const html = fs.readFileSync(htmlPath, 'utf8');
const $ = cheerio.load(html);

const services = [];

$('.service-page').each((i, el) => {
    const num = $(el).find('.service-num').text().trim();
    const title = $(el).find('h2').text().trim();
    const subtitle = $(el).find('p').first().text().trim();
    
    const tiers = [];
    $(el).find('.pricing-card').each((j, cardEl) => {
        const isPopular = $(cardEl).hasClass('popular');
        const popularBadge = $(cardEl).find('.popular-badge').text().trim();
        const tierName = $(cardEl).find('.card-tier').text().trim();
        const price = $(cardEl).find('.card-price').text().trim();
        const duration = $(cardEl).find('.card-duration').text().trim();
        const target = $(cardEl).find('.card-target').text().trim();
        
        const deliverables = [];
        $(cardEl).find('.deliverables-list li').each((k, liEl) => {
            deliverables.push($(liEl).text().trim());
        });
        
        tiers.push({
            tierName,
            price,
            duration,
            target,
            isPopular,
            popularBadge: popularBadge || null,
            deliverables
        });
    });
    
    services.push({
        num,
        title,
        subtitle,
        tiers
    });
});

const combos = [];
$('.combo-card').each((i, el) => {
    const name = $(el).find('.combo-name').text().trim();
    const priceText = $(el).find('.combo-price-main').text().trim();
    // remove /mo etc
    const priceParts = priceText.split('/');
    const price = priceParts[0].trim();
    const duration = priceParts.length > 1 ? '/' + priceParts[1].trim() : '';
    
    const isPopular = $(el).hasClass('highlight');
    const popularBadge = $(el).find('.popular-badge').text().trim();

    const features = [];
    $(el).find('.combo-features li').each((j, liEl) => {
        features.push($(liEl).text().trim());
    });
    
    combos.push({
        name,
        price,
        duration,
        isPopular,
        popularBadge: popularBadge || null,
        features
    });
});

const fileContent = `export const seoServices = ${JSON.stringify(services, null, 2)};\n\nexport const seoCombos = ${JSON.stringify(combos, null, 2)};\n`;

fs.writeFileSync(outPath, fileContent, 'utf8');
console.log('Successfully extracted SEO data to', outPath);
