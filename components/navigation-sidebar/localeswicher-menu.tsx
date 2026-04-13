import { Select } from "radix-ui";
import { forwardRef } from 'react';
import { CheckIcon } from '@radix-ui/react-icons'
import { useLocale } from 'next-intl';
import { useParams } from 'next/navigation';
import { useRouter, usePathname } from '@/i18n/navigation';

const SelectItem = forwardRef<
  React.ComponentRef<typeof Select.Item>,
  React.ComponentPropsWithoutRef<typeof Select.Item>
>(({ children, ...props }, forwardedRef) => {
  return (
    <Select.Item
      ref={forwardedRef}
      {...props}
      className="flex cursor-pointer items-center justify-between px-3 py-2"
    >
      <Select.ItemText>{children}</Select.ItemText>

      <Select.ItemIndicator>
        <CheckIcon />
      </Select.ItemIndicator>
    </Select.Item>
  );
});

const LocaleSwitcher = forwardRef<HTMLButtonElement, { label: string, expanded?: boolean }>(
  ({ label, expanded, ...props }, ref) => {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const params = useParams();

    function onSelectChange(nextLocale: string) {
      // @ts-ignore
      router.replace({ pathname, params }, { locale: nextLocale });
    }

    return (
      <Select.Root value={locale} onValueChange={(value) => onSelectChange(value as "en" | "pt")} >
        <Select.Trigger
          ref={ref}
          {...props}
          type="button"
          className={`flex items-center gap-4 rounded-md text-sm font-medium transition
            hover:bg-slate-10/60 text-slate-12 dark:hover:bg-slate-1/80
            ${expanded ? "w-full px-4 py-2.5" : "w-10 px-2.5 py-2.5"}`}
        >
          <span className="uppercase">{locale}</span>
          
          {expanded && (
            <span className="overflow-hidden whitespace-nowrap">
              {label}
            </span>
          )}
        </Select.Trigger>

        <Select.Portal>
          <Select.Content 
            className="z-20 rounded border bg-white dark:bg-zinc-900 shadow-md p-1"
            side="right"
            sideOffset={10}
            position="popper"
          >
            <Select.Viewport>
              <Select.Group>
                <Select.Label className="px-2 py-1 text-xs text-gray-500 uppercase">
                  Langs
                </Select.Label>
                <SelectItem value="pt">PT</SelectItem>
                <SelectItem value="en">EN</SelectItem>
              </Select.Group>
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    );
  }
);

LocaleSwitcher.displayName = "LocaleSwitcher";
export default LocaleSwitcher;