# EmailJS Setup Guide for Portfolio Contact Form

## 🚀 Quick Setup Steps

### 1. Create EmailJS Account
- Go to [https://emailjs.com](https://emailjs.com)
- Sign up for a free account (allows 200 emails/month)

### 2. Create Email Service
- Go to "Email Services" in your dashboard
- Click "Add New Service"
- **Recommended**: Choose **Outlook** or **Yahoo** (more reliable than Gmail)
- If using Gmail, make sure to grant ALL permissions during OAuth setup
- Follow the setup instructions carefully
- **Important**: Note down the **Service ID** (e.g., `service_abc123`)

**Gmail Alternative**: If Gmail keeps giving authentication errors, try:
1. Use Outlook.com (free Microsoft email)
2. Use Yahoo Mail 
3. These services typically have fewer authentication scope issues

### 3. Create Email Template
- Go to "Email Templates" in your dashboard
- Click "Create New Template"
- **IMPORTANT**: Use this EXACT template structure:

**Template Subject:**
```
Portfolio Contact: {{subject}}
```

**Template Content:**
```
Hi Omer,

You received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

Reply to: {{reply_to}}

---
This message was sent through your portfolio contact form.
```

**Template Settings:**
- From Name: `{{from_name}}`
- From Email: `noreply@emailjs.com` (default EmailJS)
- To Email: `omerkhan2406@gmail.com` (your email)
- Reply To: `{{reply_to}}`

- Save and copy the **Template ID** (e.g., `template_xyz789`)

### 4. Get Public Key
- Go to "Account" → "General" 
- Copy your **Public Key** (starts with user_ or similar)

### 5. Test Template Variables
Before using in your portfolio, test in EmailJS dashboard:
- Go to your template
- Click "Test it"
- Fill in sample values:
  - `from_name`: "Test User"
  - `from_email`: "test@example.com"
  - `subject`: "Test Subject"
  - `message`: "Test message content"
  - `reply_to`: "test@example.com"
- Send test email

### 6. Update Environment Variables
Your current `.env.local` should look like:
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_pz75kwf
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_7xmj3om
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=AyGk7zUPzpPE3YxNd
```

## 🔧 Template Variables Used in Code
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Message subject
- `{{message}}` - Message content
- `{{reply_to}}` - Reply-to email address

## 🚨 Common Issues & Fixes

### Issue 1: 412 Gmail_API: Request had insufficient authentication scopes
**Cause**: Gmail service lacks proper authentication scopes
**Fix**: 
1. Delete your current Gmail service in EmailJS dashboard
2. Create a new Gmail service and re-authenticate
3. Make sure to grant ALL requested permissions during OAuth
4. Alternative: Use a different email service like Outlook or Yahoo

### Issue 2: 422 Unprocessable Entity
**Cause**: Template variables mismatch
**Fix**: Ensure your EmailJS template uses EXACTLY the variables listed above

### Issue 3: Invalid Service/Template ID
**Cause**: Wrong IDs in environment variables
**Fix**: Double-check IDs in EmailJS dashboard

### Issue 4: Public Key Issues
**Cause**: Wrong or old public key
**Fix**: Get fresh public key from Account settings

## ✅ Verification Steps
1. Test template in EmailJS dashboard first
2. Check all template variables are exactly as listed
3. Verify service and template IDs are correct
4. Test with a simple form submission

## 🔗 Useful Links
- [EmailJS Dashboard](https://dashboard.emailjs.com/)
- [Template Variables Guide](https://www.emailjs.com/docs/user_guide/template-params/)
