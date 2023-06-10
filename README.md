# Prompt Lake

This is a web-application where everyone can publish useful ChatGPT prompts


## 1. Technologies Used

- React 18
- NextJS 13 (using App Router paradigm)
- MongoDB, Mongoose
- Tailwind (shipped with NextJS), PostCSS

## 2. Get started

### 2.1 Pre-requisites
1. Node.js Version 16.8 or later 
2. NextJS Version 13 or later

### 2.2 Build the app

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the required dependencies by running `npm install`.
4. Start the development server by running `npm run dev`. Alternatively, you can use `yarn dev` or `pnpm dev`.
5. Open your browser and navigate to `http://localhost:3000` to see the application in action.

### 2.3 Configure auth and database

#### 2.3.1 Setup Google Cloud. Particularly, 
- generate Client ID and Client secret 
- add Authorized JavaScript origins
    - http://localhost:3000
    - yourapp.vercel.app (if you use Vercel)
- add Authorized redirect URIs
    - http://localhost:3000
    - http://localhost:3000/api/auth/callback/google
    - if you use Vercel
        - yourapp.vercel.app
        - yourapp.vercel.app/api/auth/callback/google

#### 2.3.2. Setup MongoDB. Particularly,
- generate MongoDB URI
- add the role readWriteAnyDatabase@admin to your cluster
- add 0.0.0.0/0 to allowed IP addresses

#### 2.3.3 Configure local environment variables
1. Open .env
2. Set 
    - GOOGLE_ID
    - GOOGLE_CLIENT_SECRET
    - MONGODB_URI
    - NEXTAUTH_URL to http://localhost:3000
    - NEXTAUTH_URL_INTERNAL to http://localhost:3000 
    - NEXTAUTH_SECRET. You can quickly create a good value on the command line via this openssl command: 
    ```$ openssl rand -base64 32```


## 3. Deployment

The easiest way to deploy this Next.js application is by using the Vercel Platform, created by the makers of Next.js. Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for detailed instructions. 

If you use Vercel, please change values of `NEXTAUTH_URL`, `NEXTAUTH_URL_INTERNAL` and 'NEXT_PUBLIC_API_URL' to yourapp.vercel.app in "Environment variables" tab in the project settings on Vercel dashboard.


## 4. Possible issues

- The feed on the homepage might show stale data https://github.com/makovstanislav/prompt-lake/issues/6#issue-1751023834 
