import AdminLoginPage from "./admin/login/page";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";

export default function Home() {
  return (
    <ChakraProvider value={defaultSystem}>
      <AdminLoginPage />
    </ChakraProvider>
  );
}
