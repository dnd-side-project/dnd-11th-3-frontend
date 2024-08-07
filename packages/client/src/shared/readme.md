# shared of FSD Architecture

-  the lowest layer of FSD layers
-  common ui / model(data) / api only exist without domain
-  ui, entity and axios setting which are not related to business logic
-  e.g. util, box, useDisclosure, useConfimModal, color, useDebounce, useNotification, server(setting for axios)
-  can import from shared (only form index files in each folder for encapsulation)

# Layer priorities

1. apps (same as app in the FSD)
2. pages
3. widgets
4. features
5. entities
6. shared ✅

# Reference

-  [FSD official docs](https://feature-sliced.design/docs)
-  [ko tech article](https://emewjin.github.io/feature-sliced-design/)
-  [example](https://nukeapp.netlify.app/)
