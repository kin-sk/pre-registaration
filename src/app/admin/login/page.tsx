"use client"; // フォーム入力などユーザー操作が必要なため、クライアントコンポーネントにする

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Box, VStack, Button, Input, Heading, Text } from "@chakra-ui/react"; // レイアウトコンポーネント

// Firebaseの設定ファイルをインポート
import { auth } from "@/app/firebase/firebase";
// いったん、全てをページ内で作成してみる。まだエラーが出るが、解消する予定。

export default function AdminLoginPage() {
  return <Box justifyContent="center">テストボックス</Box>;
}
