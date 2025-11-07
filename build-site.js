#!/usr/bin/env node
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';
import { marked } from 'marked';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const contentDir = path.join(__dirname, 'content');
const publicDir = path.join(__dirname, 'public');
const docsDir = path.join(contentDir, 'docs');
const productsDir = path.join(contentDir, 'products');

async function buildSite() {
    console.log('📦 Building The Coral Block site...');

    // Create public directory
    await fs.mkdir(publicDir, { recursive: true });

    // Copy static HTML files if they exist
    const staticFiles = [
        'index.html',
        'styles.css',
        'manifest.json',
        'logo.png',
        'logo.svg',
        'logo-final.svg',
        'logo-detailed.svg',
        'logo-icon.svg',
        'logo-abstract.svg',
        'logo-horizontal.svg',
        'logo-compact.svg'
    ];

    for (const file of staticFiles) {
        const src = path.join(__dirname, file);
        const dest = path.join(publicDir, file);

        try {
            await fs.copyFile(src, dest);
            console.log(`✅ Copied ${file}`);
        } catch (error) {
            // File doesn't exist, skip silently
        }
    }

    // Process markdown files from content/docs
    try {
        const docFiles = await fs.readdir(docsDir);
        for (const file of docFiles) {
            if (file.endsWith('.md')) {
                await processMarkdownFile(path.join(docsDir, file), 'docs');
            }
        }
    } catch (error) {
        console.log('⚠️  No docs directory found');
    }

    // Process markdown files from content/products
    try {
        const productFiles = await fs.readdir(productsDir);
        for (const file of productFiles) {
            if (file.endsWith('.md')) {
                await processMarkdownFile(path.join(productsDir, file), 'products');
            }
        }
    } catch (error) {
        console.log('⚠️  No products directory found');
    }

    // Create 404 page
    const notFoundHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>404 - The Coral Block</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
            background-color: #f8f8f6;
            color: #333;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 2rem;
        }
        h1 { font-size: 2rem; margin-bottom: 1rem; }
        p { font-size: 1.1rem; margin-bottom: 2rem; }
        a { color: #666; text-decoration: none; border-bottom: 1px solid #999; }
        a:hover { color: #333; }
    </style>
</head>
<body>
    <div>
        <h1>404 - Page Not Found</h1>
        <p>The page you're looking for doesn't exist.</p>
        <a href="/">← Return to The Coral Block</a>
    </div>
</body>
</html>`;

    await fs.writeFile(path.join(publicDir, '404.html'), notFoundHtml);
    console.log('✅ Created 404.html');

    console.log('✨ Build complete!');
    console.log(`📁 Output directory: ${publicDir}`);
}

async function processMarkdownFile(filePath, category) {
    const content = await fs.readFile(filePath, 'utf-8');
    const { data: frontmatter, content: markdown } = matter(content);

    // Skip if draft
    if (frontmatter.draft === true) {
        console.log(`⏭️  Skipping draft: ${path.basename(filePath)}`);
        return;
    }

    // Convert markdown to HTML
    const htmlContent = marked(markdown);

    // Generate HTML page
    const fileName = path.basename(filePath, '.md');
    const outputPath = path.join(publicDir, category, `${fileName}.html`);

    await fs.mkdir(path.dirname(outputPath), { recursive: true });

    const html = generatePage({
        title: frontmatter.title || fileName,
        description: frontmatter.description || '',
        content: htmlContent,
        category
    });

    await fs.writeFile(outputPath, html);
    console.log(`✅ Generated ${category}/${fileName}.html`);
}

function generatePage({ title, description, content, category }) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} - The Coral Block</title>
    <meta name="description" content="${description}">
    <meta name="theme-color" content="#f8f8f6">
    <link rel="stylesheet" href="/styles.css">
</head>
<body>
    <button class="theme-toggle" id="themeToggle">Dark Mode</button>
    <header class="site-header">
        <nav class="nav-container">
            <a href="/" class="logo">
                <img src="/logo.png" alt="The Coral Block Logo" class="logo-image">
                <span class="logo-text">The Coral Block</span>
            </a>
            <div class="nav-links">
                <a href="/#products">Products</a>
                <a href="/#about">About</a>
                <a href="/support.html">Support</a>
            </div>
        </nav>
    </header>

    <main class="content">
        ${content}
    </main>

    <footer class="site-footer">
        <div class="container">
            <p>&copy; ${new Date().getFullYear()} The Coral Block - Productivity and Automation Tools</p>
            <div class="footer-links">
                <a href="/docs/privacy-policy.html">Privacy Policy</a>
                <a href="/docs/terms-of-service.html">Terms of Service</a>
                <a href="/support.html">Support</a>
            </div>
        </div>
    </footer>

    <script>
        // Theme management
        const themeToggle = document.getElementById('themeToggle');
        let isDarkTheme = localStorage.getItem('theme') === 'dark' || !localStorage.getItem('theme'); // Default to dark

        function applyTheme(isDark) {
            if (isDark) {
                document.body.classList.add('dark-theme');
                themeToggle.textContent = 'Light Mode';
                document.querySelector('meta[name="theme-color"]').setAttribute('content', '#1a2f38');
            } else {
                document.body.classList.remove('dark-theme');
                themeToggle.textContent = 'Dark Mode';
                document.querySelector('meta[name="theme-color"]').setAttribute('content', '#f8f8f6');
            }
        }

        // Apply theme on page load
        applyTheme(isDarkTheme);

        // Theme toggle functionality
        themeToggle.addEventListener('click', function() {
            isDarkTheme = !isDarkTheme;
            applyTheme(isDarkTheme);
            localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
        });
    </script>
</body>
</html>`;
}

buildSite().catch(error => {
    console.error('Build failed:', error);
    process.exit(1);
});
