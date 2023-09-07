import { ActivityIndicator, View } from "react-native";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

import { AuthStack, MainStack } from "./navigations/GlobalNavigation";
import { useGlobal } from "./context/GlobalContext";
import { auth } from "./config/firebase";
import { COLORS } from "./constants";
import { getUser } from "./api";

export default function Main() {
  const [initialState, setInitialState] = useState(true);
  const { user, setUser, loading } = useGlobal();

  useEffect(() => {
    const loadUser = async () => {
      onAuthStateChanged(auth, async (authUser) => {
        if (authUser) {
          const userData = await getUser(authUser.uid);
          setUser(userData);
        } else {
          setUser(null);
        }
        setInitialState(false);
      });
    };

    loadUser();
  }, [user]);

  if (initialState || loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    );
  }

  return user ? <MainStack /> : <AuthStack />;
}
