"use client"; // フォーム入力などユーザー操作が必要なため、クライアントコンポーネントにする

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Box, VStack, Button, Input, Heading, Text } from "@chakra-ui/react"; // レイアウトコンポーネント

// Firebaseの設定ファイルをインポート
import { auth } from "@/service/firebase";
// いったん、全てをページ内で作成してみる。まだエラーが出るが、解消する予定。

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error" | "">("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);

      setMessage("ログインしました。");
      setMessageType("success");
      router.push("/admin");
    } catch (error) {
      console.error("ログインエラー:", error);
      setMessage("メールアドレスまたはパスワードが正しくありません。");
      setMessageType("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      bg="bg.canvas"
    >
      <Box
        p={8}
        borderWidth="1px"
        borderRadius="lg"
        boxShadow="lg"
        width="400px"
        bg="bg.default"
      >
        <form onSubmit={handleLogin}>
          <VStack gap={6}>
            <Heading as="h1" size="xl">
              管理者ログイン
            </Heading>

            {message && (
              <Box
                p={3}
                borderRadius="md"
                bg={messageType === "success" ? "green.100" : "red.100"}
                color={messageType === "success" ? "green.800" : "red.800"}
                width="full"
              >
                <Text fontSize="sm">{message}</Text>
              </Box>
            )}

            <VStack gap={1.5} width="full" alignItems="flex-start">
              <Text fontSize="sm" fontWeight="medium" color="gray.700">
                メールアドレス
              </Text>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                width="full"
                required
              />
            </VStack>

            <VStack gap={1.5} width="full" alignItems="flex-start">
              <Text fontSize="sm" fontWeight="medium" color="gray.700">
                パスワード
              </Text>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                width="full"
                required
              />
            </VStack>

            <Button
              type="submit"
              variant="solid"
              colorScheme="teal"
              width="full"
              disabled={isLoading}
            >
              {isLoading ? "ログイン中..." : "ログイン"}
            </Button>
          </VStack>
        </form>
      </Box>
    </Box>
  );
}
