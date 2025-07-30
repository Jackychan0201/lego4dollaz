E-commerce Website – Tech Stack & Functional Overview

Tech Stack:
1. Frontend Framework: Next.js
2. Styling: Tailwind CSS, ShadCN UI components
3. CMS: Storyblok (Headless)
4. Deployment: Vercel
5. Email Service: MailerSend

Core Features:
1. Product catalog managed via Storyblok, allowing non-technical users to easily add, edit, or remove products.
2. E-commerce flow is request-based (not direct checkout):
3. Each product has a “Request” form instead of a “Buy Now” button.
4. Users can specify the desired quantity and submit their request.
5. Upon submission, an email is sent to the business via MailerSend, confirming the request and informing the user that the team will respond as soon as possible.

Additional Notes:
1. No payment integration – the site acts as a product inquiry portal rather than a transactional store.
2. All emails include product details, requested quantity, and customer contact information.