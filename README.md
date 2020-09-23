# hnstaticgen

HN Static Site Generator based on NodeJS.

### Build

```bash
git clone https://github.com/heiswayi/hnstaticgen.git
cd hnstaticgen
npm install
npm run build
```

This will take the source from `content/` folder, then generate a static site into `publish/` folder.

### Run

```bash
npm install -g http-server
cd public
http-server .
```

To see the live site, visit: http://localhost:8080

## Author

[Heiswayi Nrird](https://heiswayi.nrird.com)

## License

[MIT](LICENSE)
