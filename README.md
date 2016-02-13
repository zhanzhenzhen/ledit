# ledit: Edit local files via browser

Before install, make sure your Node.js version is 4.0 or higher.

```bash
npm install -g ledit
```

Configure:

```
ledit port <port>
ledit password <password>
```

Setting password is optional. If omit this step, then you won't be prompted to enter password while visiting. (To remove password, type `ledit password` and press enter.)

Then type:

```
ledit
```

Now, you can edit your code files by visiting this address in your browser:

```
http://localhost:<port>
```

Default port is 50000.
