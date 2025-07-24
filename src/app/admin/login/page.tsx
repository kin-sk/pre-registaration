'use client'; // フォーム入力などユーザー操作が必要なため、クライアントコンポーネントにする

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { 
    Box, 
    VStack,
    Button,
    Input,
    Heading,
    Dialog
} from '@chakra-ui/react'; // レイアウトコンポーネント

// Firebaseの設定ファイルをインポート
import { auth } from '@/service/firebase';
// いったん、全てをページ内で作成してみる。まだエラーが出るが、解消する予定。

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);

      toast({
        title: 'ログインしました。',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      router.push('/admin');

    } catch (error) {
      console.error('ログインエラー:', error);
      toast({
        title: 'ログインに失敗しました。',
        description: 'メールアドレスまたはパスワードが正しくありません。',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  // FormControlのようなラッパーコンポーネントはv3では必ずしもないため、VStackで代用
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      bg="bg.canvas" // v3ではテーマのトークンを使うことが推奨される
    >
      <Box
        p={8}
        borderWidth="1px"
        borderRadius="lg" // "lg" のようなトークンはテーマで定義されている
        boxShadow="lg"
        width="400px"
        bg="bg.default"
      >
        <form onSubmit={handleLogin}>
          <VStack spacing={6}>
            <Heading as="h1" size="xl">
              管理者ログイン
            </Heading>
            
            <VStack spacing={1.5} width="full" alignItems="flex-start">
              <FormLabel htmlFor="email">メールアドレス</FormLabel>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                width="full"
                required
              />
            </VStack>

            <VStack spacing={1.5} width="full" alignItems="flex-start">
              <FormLabel htmlFor="password">パスワード</FormLabel>
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
              variant="solid" // v3のButtonはvariantでスタイルを指定
              colorScheme="teal"
              width="full"
              disabled={isLoading} // disabled属性でローディング状態を表現
            >
              {isLoading ? 'ログイン中...' : 'ログイン'}
            </Button>
          </VStack>
        </form>
      </Box>
    </Box>
  );
}