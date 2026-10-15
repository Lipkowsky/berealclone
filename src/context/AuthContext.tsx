import { supabase } from "@/lib/supabase/client";
import { createContext, ReactNode, useContext, useState } from "react";

export interface User {
  id: string;
  name: string;
  email: string;
  username: string;
  profileImage?: string;
  onboardingCompleted?: boolean;
}

interface AuthContextType {
  user: User | null;
  signUp: (email: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  updateUser: (userData: Partial<User>) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// const fetchUserProfile = async (userId: string): Promise<User | null> => {
//     try {
        
//     } catch (error) {
        
//     }
// }

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const signIn = async (email: string, password: string) => {};

  const signUp = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) throw error;
    if (data.user) {
      console.log(user);
    }
  };

  const updateUser = async (userData: Partial<User>) => {
    if (!user) return;

    try {
      const updateData: any = {};
      if (userData.name !== undefined) updateData.name = userData.name;
      if (userData.username !== undefined)
        updateData.username = userData.username;
      if (userData.profileImage !== undefined)
        updateData.profile_image_url = userData.profileImage;
      if (userData.onboardingCompleted !== undefined)
        updateData.onboarding_completed = userData.onboardingCompleted;

      const { error, data } = await supabase
        .from("profiles")
        .update(updateData)
        .eq("id", user.id)
        .select()
        .single();
      if (error) throw error;

      if (data) {
        console.log(data);
        // const profile = await fetchUserProfile(data.id);
        // setUser(profile);
      }
    } catch (error) {
      console.error("Error updating user:", error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user, signUp, signIn, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("must be in the provider");
  }
  return context;
};
