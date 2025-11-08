# Quick Start - Deploy to cPanel

## Step-by-Step Instructions

### 1. Build Your Project Locally

Open terminal in your project folder and run:

```bash
npm install
npm run build
```

This will create an `out` folder with all your static files.

### 2. Configure PHP Contact Form

Before uploading, edit the PHP file:

1. Open `public/api/contact.php`
2. Find this line: `$to = 'your-email@example.com';`
3. Replace `your-email@example.com` with your actual email address
4. Save the file

### 3. Upload to cPanel

**Option A: Using cPanel File Manager**

1. Login to cPanel
2. Open **File Manager**
3. Navigate to `public_html` (or your domain's root folder)
4. Delete any existing files (backup first if needed)
5. Upload **ALL contents** from the `out` folder to `public_html`
   - Select all files and folders in `out`
   - Upload them to `public_html`
6. Make sure `.htaccess` is uploaded (it might be hidden)

**Option B: Using FTP/SFTP (FileZilla, WinSCP, etc.)**

1. Connect to your server via FTP
2. Navigate to `public_html` folder
3. Upload all contents from the `out` folder

### 4. Set File Permissions

In cPanel File Manager:

- Files should have permission: **644**
- Folders should have permission: **755**

Right-click on files/folders → Change Permissions

### 5. Test Your Website

1. Visit your domain in a browser
2. Test all pages and navigation
3. Test the contact form
4. Check mobile view

### 6. Verify Contact Form

The contact form will automatically:

- Try Next.js API first (won't work in static export)
- Fall back to PHP endpoint automatically

Make sure `public/api/contact.php` is uploaded and email is configured.

## Troubleshooting

**Contact form not working?**

- Check that `public/api/contact.php` is in the `out/api/` folder after build
- Verify email address in PHP file is correct
- Check cPanel error logs

**404 errors on pages?**

- Make sure `.htaccess` file is uploaded
- Check file permissions

**Styles not loading?**

- Clear browser cache (Ctrl+F5)
- Check that all CSS files are uploaded

## Need to Make Changes?

1. Edit your code locally
2. Run `npm run build` again
3. Upload new `out` folder contents to replace old files

---

**That's it! Your portfolio should now be live on your domain! 🎉**
