## React server rendering performance test

The goal is to compare React serer rendering performace with template engines like jade, dot, etc.
Each tool generates simple html page which contains 1000 div elements with some nested div elements.

Start test:
```
npm install
node lib/test.js
```

Results (NODE_ENV='production'):
```
react: 62ms
jade: 32ms
dot: 1ms
ejs: 5ms
```
