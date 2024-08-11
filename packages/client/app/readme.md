# pages of FSD Architecture

-  use app/page.tsx or app/(withLayout)/\*/page.tsx of app router
-  the 2nd highest layer of FSD layers
-  application pages (e.g. /signin , /home)
-  can import from all layers except apps(app) (only form index files in each folder for encapsulation)

# Layer priorities

1. apps (same as app in the FSD)
2. pages ✅
3. widgets
4. features
5. entities
6. shared

# Reference

-  [FSD official docs](https://feature-sliced.design/docs)
-  [ko tech article](https://emewjin.github.io/feature-sliced-design/)
-  [example](https://nukeapp.netlify.app/)
