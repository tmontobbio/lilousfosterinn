### Dependencies

```
//prep for render.com
bundle lock --add-platform x86_64-linux

bundle add active_model_serializers

npm install react-icons --save
```

### Run locally

```
rails db:create
bundle i
rails s

npm i --prefix-client
npm start --prefix-client
```
