# GitHub Actionsでsample/chart/appのAstroのアプリケーションをGitHub Pagesにデプロイする

契機は、以下の通り

- mainブランチにプッシュされたとき
- 手動で実行したとき

使用するアクションは、以下の通り

- actions/checkout@v3
- actions/setup-node@v2
- actions/configure-pages@v3
- actions/upload-pages-artifact@v1
- actions/deploy-pages@v2

permissionsは、以下の通り

- コンテンツの読み取り可能
- ページの書き込み可能
- IDトークンの書き込み可能

環境変数は、以下の通り
- 作業ディレクトリ

手順
- Node.jsの環境をセットアップする
  - v18
- Astroのアプリケーションのビルドを行う
- GitHub Pagesをセットアップする
- ビルドしたAstroのアプリケーションをGitHub Pages用にアップロードする
  - actions/upload-pages-artifact
- アップロードされたアプリケーションをGitHub Pagesにデプロイする
  - actions/deploy-pages
