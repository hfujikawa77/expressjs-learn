## このプロジェクトは
Expressのチュートリアルを実施。下記項目を完了

https://expressjs.com/en/starter/installing.html  
https://expressjs.com/en/starter/hello-world.html
https://expressjs.com/en/starter/basic-routing.html
https://expressjs.com/ja/starter/static-files.html

## 実行方法
下記コマンドで起動
```powershell
node app.js
```
ブラウザで http://localhost:3000/ を開く

### ルーティング
PUT, DELETE リクエストを送信するには下記コマンドを実行
```powershell
curl -method put http://localhost:3000/user/
curl -method delete http://localhost:3000/user/ 
```

### 静的ファイル
ブラウザで下記URLを開く  
http://localhost:3000/static/hello.html  
http://localhost:3000/static/images/quadruped.jpg