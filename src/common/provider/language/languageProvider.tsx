// LanguageContext.tsx
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

// Define the context type
interface LanguageContextType {
  language: string;
  setLanguage: Dispatch<SetStateAction<string>>;
}

// Create a context
const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// Create a provider component
interface LanguageProviderProps {
  children: ReactNode;
}

const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<string>('br'); // Change the type accordingly

  const contextValue: LanguageContextType = {
    language,
    setLanguage,
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

// Create a custom hook to use the context value
const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export { LanguageProvider, useLanguage };
