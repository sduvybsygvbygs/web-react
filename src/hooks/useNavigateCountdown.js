import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";

export function useNavigateCountdown() {
    const navigate = useNavigate();
    const [secondsLeft, setSecondsLeft] = useState(0);
    const timerRef = useRef(null);

    const startCountdown = useCallback(
        (seconds, to, options = {}) => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }

            setSecondsLeft(seconds);

            timerRef.current = setInterval(() => {
                setSecondsLeft((prev) => {
                    if (prev <= 1) {
                        clearInterval(timerRef.current);
                        timerRef.current = null;
                        navigate(to, options);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        },
        [navigate]
    );

    useEffect(() => {
        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
    }, []);

    return { secondsLeft, startCountdown,};
}