# Vercel TS build error demo

This repo is to reproduce the Vercel Function TS build error. Simply run `vercel build` to test & see the error happening.

As of now, adding `node-linker=hoisted` in `.npmrc` can workaround the issue.
