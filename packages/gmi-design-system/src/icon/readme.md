# icons

Folder for icons

rules

- for /asset svg name should be "icon-name.svg"
- after adding svg to asset use script gen-icon to add new icon to /icon/default files

### structure

```
   ── icon
      ├── asset
      │   └── icon-bookmark.svg  // naming rules for auto generate and not to be duplicated by other components "icon-000.svg"
      ├── default
      │   ├── IconBookmark.tsx   // can be auto generated from template
      │   └── index.ts           // export icons from default
      ├── index.ts               // export all icons
      ├── readme.md
      └── shared
          └── props.ts            // shared files for icon
```
