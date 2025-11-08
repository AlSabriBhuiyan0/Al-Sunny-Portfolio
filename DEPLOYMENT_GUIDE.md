# cPanel Deployment Guide for Next.js Portfolio

This guide will help you deploy your Next.js portfolio to cPanel hosting.

## Prerequisites

- cPanel hosting account with Node.js support (check with your host)
- FTP/SFTP access or cPanel File Manager
- Domain name configured in cPanel

## Option 1: Static Export (Recommended for cPanel)

This option exports your Next.js app as static HTML files, which works on any cPanel hosting.

### Step 1: Configure Next.js for Static Export

The `next.config.js` has been updated to support static export.

### Step 2: Build the Project

On your local machine, run:

```bash
npm install
npm run build
```

This will create a `out` folder with all static files.

### Step 3: Upload to cPanel

1. **Login to cPanel**
2. **Open File Manager** (or use FTP/SFTP client like FileZilla)
3. **Navigate to `public_html`** (or your domain's root folder)
4. **Upload all contents** from the `out` folder to `public_html`
   - Select all files in the `out` folder
   - Upload them to `public_html`

### Step 4: Configure .htaccess

The `.htaccess` file has been created to handle routing. Make sure it's uploaded to `public_html`.

### Step 5: Handle Contact Form

Since static export doesn't support API routes, you have two options:

#### Option A: Use EmailJS (Recommended - No Backend Needed)

1. Sign up at https://www.emailjs.com/
2. Create an email service
3. Update `ContactForm.tsx` to use EmailJS (see instructions below)

#### Option B: Create PHP Endpoint

A `contact.php` file has been created. Upload it to `public_html/api/contact.php` and update the contact form to use it.

## Option 2: Node.js on cPanel (If Your Host Supports It)

Some cPanel hosts support Node.js applications. Check if your host has "Node.js Selector" in cPanel.

### Step 1: Build for Production

```bash
npm install
npm run build
```

### Step 2: Upload Files

1. Upload **all project files** (except `node_modules`) to your domain folder
2. In cPanel, go to **Node.js Selector**
3. Create a new application:
   - Application root: `/home/username/public_html` (or your domain folder)
   - Application URL: your domain
   - Application startup file: `server.js` (we'll create this)

### Step 3: Install Dependencies

In Node.js Selector, click "Run NPM Install" or SSH into your server and run:

```bash
cd public_html
npm install --production
```

### Step 4: Set Environment Variables

In cPanel Node.js Selector, add environment variables:

- `NEXT_EMAIL`: Your Gmail address
- `NEXT_PASSWORD`: Your Gmail app password
- `NEXT_RECEPIENT`: Recipient email address
- `NODE_ENV`: production

### Step 5: Start Application

In Node.js Selector, click "Start App"

## Environment Variables Setup

For the contact form to work, you need these environment variables:

1. **NEXT_EMAIL**: Your Gmail address (e.g., yourname@gmail.com)
2. **NEXT_PASSWORD**: Gmail App Password (not your regular password)
   - Go to Google Account → Security → 2-Step Verification → App Passwords
   - Generate an app password for "Mail"
3. **NEXT_RECEPIENT**: Email address where you want to receive contact form messages

### For Static Export:

Create a `.env.local` file during build (but note: these won't work in static export - use EmailJS or PHP instead)

### For Node.js:

Set these in cPanel Node.js Selector environment variables section.

## Troubleshooting

### Issue: 404 Errors on Routes

- Make sure `.htaccess` is uploaded correctly
- Check that all files from `out` folder are in `public_html`

### Issue: Contact Form Not Working

- For static export: Use EmailJS or PHP endpoint
- For Node.js: Check environment variables are set correctly
- Check browser console for errors

### Issue: Images Not Loading

- Ensure all files in `public` folder are uploaded
- Check image paths are correct

### Issue: Styles Not Loading

- Clear browser cache
- Check that CSS files are uploaded correctly

## Post-Deployment Checklist

- [ ] All files uploaded to `public_html`
- [ ] `.htaccess` file is in place
- [ ] Contact form is configured (EmailJS or PHP)
- [ ] Test all pages and navigation
- [ ] Test contact form submission
- [ ] Check mobile responsiveness
- [ ] Verify all images load correctly
- [ ] Test dark/light theme switching

## Need Help?

If you encounter issues:

1. Check cPanel error logs
2. Check browser console for errors
3. Verify file permissions (should be 644 for files, 755 for folders)
4. Contact your hosting provider if Node.js support is needed
