import { ButtonIcon } from "./Compositions/ButtonIcon";
import { ButtonContent } from "./Compositions/ButtonContent";
import { ButtonRoot } from "./Compositions/ButtonRoot";
import { ButtonToggleRoot } from "./Compositions/ButtonToggleRoot";

export const Button = {
  Root: ButtonRoot,
  Content: ButtonContent,
  Icon: ButtonIcon,
  ToggleRoot: ButtonToggleRoot
}
export function ButtonExample() {
  return (
    <Button.Root>
      <Button.Content> aaaaaaaaaaaa</Button.Content>
    </Button.Root>
  )
}