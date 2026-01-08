import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer>
      <div className="glass mt-12 py-8">
        <p className="text-slate-500 text-xs text-center font-mono">
          &copy; {new Date().getFullYear()} Shakerullah. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
