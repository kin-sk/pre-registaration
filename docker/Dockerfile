# Dockerdile

# Node.jsのインストール
FROM node:20-alpine AS base

# 作業ディレクトリの設定
WORKDIR /app

# 依存関係のインストール
COPY package*.json ./
# RUN npm install

# ソースコードのコピー
COPY . .

# 5. Next.jsアプリケーションのビルド
# 本番環境用のビルド実行命令
# 開発環境では不要
# RUN npm run build

# アプリケーションの公開ポートを指定
EXPOSE 3000

# コンテナ起動時の実行コマンド
# CMD ["npm", "run", "dev"]