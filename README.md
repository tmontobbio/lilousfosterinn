### Dependencies

```
//prep for render.com
bundle lock --add-platform x86_64-linux

bundle add active_model_serializers

npm i react-icons --save
npm i -S react-scroll
```

### Run locally

```
rails db:create
bundle i
rails s

npm i --prefix-client
npm start --prefix-client
```
