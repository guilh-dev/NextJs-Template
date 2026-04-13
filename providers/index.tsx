import { ThemeProvider } from "./ThemeProvider";

/* internal providers */
import { MenuProvider } from "@/context/MenuContext";

/* external providers */
import { TooltipProvider } from '@radix-ui/react-tooltip';

const ComposeProviders = ({ providers, children }: any) => {
  return providers.reduceRight(
    (acc: any, Provider: any) => <Provider>{acc}</Provider>,
    children
  );
};

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ComposeProviders providers={[ThemeProvider, TooltipProvider, MenuProvider]}>
      {children}
    </ComposeProviders>
  );
};