This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## STEPS

1. copy git url from the green 'code' button dropdown (url is https://github.com/mattbrc/falstrike.git)
2. in your terminal, run `cd Desktop` then `mkdir [directory-name]` (directory name can be anything you want, this is where we'll store the project)
3. run `cd [directory-name]`
4. run `git clone https://github.com/mattbrc/falstrike.git`
5. run `cd falstrike`
6. run `npm install`
7. run `npm run dev` - then open localhost:3000 in your browser to make sure it works
8. you can then close the browser and type ctrl+c in your terminal to stop the server
9. open vercel, make sure you're logged in with your github
10. go back to github, in the top right click the '+' icon and click 'New repository'
11. call it the same thing as the directory name (e.g. if you called it 'falstrike' then call it 'falstrike')
12. click 'Create repository'
13. follow the steps to push the repo you cloned to github (in the same terminal):
    - `git init`
    - `git add .`
    - `git commit -m "first commit"`
    - `git branch -M main`
    - `git remote add origin https://github.com/[your-github-username]/falstrike.git`
    - `git push -u origin main`
14. go back to vercel, click 'New' then 'Project'
15. select the repository you just created
16. click 'Deploy'
17. pretty much done. lmk if you any issues.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
