* SIG-SLUD

** 必要なもの

- ruby
- ruby-gems
- jekyll
-- jekyll-paginate, redcarpet, pygments.rb, (as of 2017/05/25 funakoshi)
- git

** セットアップ・更新方法
github からもろもろをダウンロードし，gemで必要なパッケージをインストールします．

jekyll build すると ../docs 下に html ファイルが作成されます．
githubは jsai-slud/sig-slud/docs を sig-sludのサイトコンテンツとして認識するように設定してあるので，
git pushすればそれでwebページが更新されます．

: $ cd && git clone https://github.com/jsai-slud/sig-slud.git
: $ cd sig-slud/src
: $ (editting)
: $ jekyll build
: $ git commit -a && git push

~jekyll build~の際は，必ず sig-slud/src で実行するように注意してください．
sig-slud/ で実行すると，生成には見かけ上成功しますが，Warningが大量にでた不良サイトが sig-slud/_site に生成されてしまいます．
間違ってsig-slud/_site を生成してしまった場合は削除して，sig-slud/src でビルドをやり直してください．

ローカルマシンで更新結果を確認したいときは，ローカルでWebサーバを立ち上げてください．
macOSの場合：
$ cd /Library/WebServer/Documents
$ sudo ln -s <path to sig-slud/docs> sig-slud
$ sudo apachectl start
$ open http://localhost/sig-slud/


** スケジュールの追加・編集
スケジュール関連は _post 以下に置いてあります．

ファイル名を YYYY-MM-dd-タイトル.md のようにします．

ファイルの中身は，以下のようにしてください．
本文はバッククオート3つでくくります．バッククオート3つの間にスペースはいりません．

: $ vim _post/2014-12-25-Christmas.md

: ---
: layout: post
: title: "第XX回研究会 クリスマス特別編"
: place: "○○大学"
: time:  "2014年12月25日(木)"
: state: "終了"
: ---
: 
: ```
: ここに本文を書く．
: ```

以上の作業が終わったら， ~jekyll build~ して，commit & push します．

** _config.yml について
_config.yml には，ちょっとした設定が書いてあります．

*** baseurl
baseurl: /sig-slud で，ドキュメントルート以下の sig-slud というディレクトリに html ファイルを置く，という意味．

ドキュメントルート直下に置く場合，/ のみで良い．

*** paginate
トップページに表示されるスケジュールの数．

