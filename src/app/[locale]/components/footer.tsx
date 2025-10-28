import { FC } from "react"

const YEAR = new Date().getFullYear();

const Footer: FC = () => {
    return (
        <small className="block mt-16 lg:mt-24 transition-all text-neutral-800 dark:text-neutral-200">
            <time>© {YEAR} Ouk Outdam</time>
        </small>
    );
};

export default Footer;