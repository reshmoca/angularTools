# angularTools

angularの勉強でなにか作ってみようかと思う。  
諸事情により、バージョンはちょっと古め。

```
angular js version 1.3.5
```



cloneしたら、

```
npm install && bower install
```


ちなみに、ジェネレーターは [generator-angular-fullstack](https://github.com/DaftMonk/generator-angular-fullstack) を利用しています。

`client`以下はこんな感じ。機能ごとにフォルダを追加していきます。

```
app/
  main/             # 各機能単位のフォルダ
    main.js                 # Router
    main.controller.js      # Controller
    main.controller.spec.js # Test spec
    main.html               # Template
    main.css                # Style
  assets/　　　      # 画像ファイルなどのリソース
    images/
  components/       # 再利用する想定のコンポーネント
  bower_components/ # bowerモジュール
```

