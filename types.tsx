type RadixIcon = React.ElementType;
type Dispatch<T> = (val: T) => void;
type Props = {
  params: Promise<{ locale: string }>;
};