import { PropsWithClass } from "../../../util";
import Logo from "../Logo";

export default function Header({ className = "" }: PropsWithClass) {
  return (
    <div className={className}>
      <Logo className="dark:invert" />
    </div>
  );
}
