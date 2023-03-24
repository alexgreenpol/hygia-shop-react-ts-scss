import { FC, useEffect, useRef } from "react";
import "./NotifyMessage.scss";

type NotifyMessageProps = {
    children: string;
    setIsShowing: (flag: boolean) => void;
};

const NotifyMessage: FC<NotifyMessageProps> = ({ children, setIsShowing }) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const addClassTimeout = setTimeout(() => {
            if (ref.current) {
                ref.current.classList.add("invisible");
            }
        }, 10);

        const showTimeout = setTimeout(() => {
            setIsShowing(false);
        }, 3000);

        return () => {
            if (ref.current) {
                ref.current.classList.remove("invisible");
            }

            clearTimeout(addClassTimeout);
            clearTimeout(showTimeout);
        };
    });

    return (
        <div ref={ref} className="notify-message">
            {children}
        </div>
    );
};

export default NotifyMessage;
