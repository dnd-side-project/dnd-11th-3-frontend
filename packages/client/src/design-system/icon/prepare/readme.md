# icons

Folder for icons

rules

- for /asset and /prepare svg name should be "icon-name.svg"
- after adding svg to "prepare" use script auto-icon to add new icon to /icon/default files
- after script success fix new Icon000.tsx with fill={'#000} or stroke={'#000} to fill={color} and stroke={color}

### structure

```
   ── icon
      ├── asset
      │   └── icon-0000.svg      // [new icon svg] 새로 추가할 아이콘(.svg)여기에 추가한 후 npm auto-icon 실행
      ├── asset
      │   └── icon-bookmark.svg  // [do not edit] naming rules for auto generate and not to be duplicated by other components "icon-000.svg"
      ├── default
      │   ├── IconBookmark.tsx   // can be auto generated from template
      │   └── index.ts           // export icons from default
      ├── index.ts               // [do not edit] export all icons
      ├── readme.md
      └── shared
          └── props.ts            // shared files for icon
```
