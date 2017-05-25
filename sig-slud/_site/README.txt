* SIG-SLUD

** 必要なもの

- ruby
- ruby-gems
- jekyll
-- jekyll-paginate, redcarpet, pygments.rb, (as of 2017/05/25 funakoshi)
- git

** インストール方法
github からもろもろをダウンロードします．

その後， ~jekyll build~ すると _site 以下に html ファイルが作成されます．

最後に，html ファイルなど全て，ドキュメントルートへコピーします． ( =/usr/local/www/apacheXX/data/= 以下とか )

: $ cd && git clone https://github.com/mayok/sig-slud.git
: $ cd sig-slud
: $ jekyll build
: $ cp -r _site/* /path/to/document_root


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

以上の作業が終わったら， ~jekyll build~ して，_site 以下の html ファイルなどをドキュメントルートへコピーします．

** _config.yml について
_config.yml には，ちょっとした設定が書いてあります．

*** baseurl
baseurl: /sig-slud で，ドキュメントルート以下の sig-slud というディレクトリに html ファイルを置く，という意味．

ドキュメントルート直下に置く場合，/ のみで良い．

*** paginate
トップページに表示されるスケジュールの数．

